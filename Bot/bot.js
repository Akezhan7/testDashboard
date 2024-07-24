const { Telegraf } = require("telegraf");
const TOKEN = "6943132421:AAEUg3jeaE4lOUjWj34MmGMJcaBLqPfFtTc";
const bot = new Telegraf(TOKEN);

const web_link = "https://site1.as-web.kz/";

bot.start((ctx) =>
  ctx.reply("Добро пожаловать!", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();