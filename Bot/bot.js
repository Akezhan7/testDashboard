const { Telegraf } = require('telegraf');
const axios = require('axios');
const TOKEN = '6943132421:AAEUg3jeaE4lOUjWj34MmGMJcaBLqPfFtTc';
const bot = new Telegraf(TOKEN);

const PAGE_SIZE = 5; 
const MAX_MESSAGE_LENGTH = 4096; 

let employeesData = []; 
let currentPage = 0; 

const web_link = 'https://site1.as-web.kz/';

bot.start((ctx) => {
  ctx.reply('Добро пожаловать!!!', {
    reply_markup: {
      keyboard: [
        [{ text: 'Главная' }],
        [{ text: 'Сотрудники' }],
        [{ text: 'Профиль' }],
        [{ text: "web app", web_app: { url: web_link } }]
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.on('text', async (ctx) => {
  const text = ctx.message.text;

  if (text === 'Главная') {
    try {
      const response = await axios.get('http://localhost:3001/api/dashboard');
      sendLongMessage(ctx, `Dashboard data:\n\n${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      ctx.reply('Failed to fetch dashboard data.');
    }
  } else if (text === 'Сотрудники') {
    try {
      const response = await axios.get('http://localhost:3001/api/employees');
      employeesData = response.data;
      currentPage = 0; 
      sendPage(ctx, 0); 
    } catch (error) {
      ctx.reply('Failed to fetch employees data.');
    }
  } else if (text === 'Профиль') {
    try {
      const response = await axios.get('http://localhost:3001/api/profile');
      sendLongMessage(ctx, `Profile data:\n\n${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      ctx.reply('Failed to fetch profile data.');
    }
  }
});

const sendLongMessage = (ctx, text) => {
  while (text.length > MAX_MESSAGE_LENGTH) {
    ctx.reply(text.substring(0, MAX_MESSAGE_LENGTH));
    text = text.substring(MAX_MESSAGE_LENGTH);
  }
  ctx.reply(text);
};

const sendPage = (ctx, page) => {
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageData = employeesData.slice(start, end);

  let message = pageData.map(user => `${user.name} (${user.email})`).join('\n');

  let inlineKeyboard = [];

  if (page > 0) {
    inlineKeyboard.push([{ text: 'Previous', callback_data: `employees_${page - 1}` }]);
  }
  if (end < employeesData.length) {
    inlineKeyboard.push([{ text: 'Next', callback_data: `employees_${page + 1}` }]);
  }

  ctx.reply(message, {
    reply_markup: {
      inline_keyboard: inlineKeyboard
    },
  });
};

bot.action(/employees_(\d+)/, async (ctx) => {
  const page = parseInt(ctx.match[1]);
  currentPage = page;
  ctx.deleteMessage();
  sendPage(ctx, page);
});

bot.launch();
