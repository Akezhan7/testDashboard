import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
  const profileData = {
    name: 'Акежан',
    email: '+77054089839',
    bio: 'Опытный веб-разработчик с 3-летним опытом в сфере создания веб-сайтов и веб-приложений. Увлекаюсь новыми технологиями и постоянно учусь новому.',
    avatar: ''
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Профиль
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar sx={{ width: 64, height: 64 }}>
                {profileData.avatar ? (
                  <img src={profileData.avatar} alt="Avatar" style={{ width: '100%', height: '100%' }} />
                ) : (
                  <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
                )}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5">{profileData.name}</Typography>
              <Typography variant="body1">{profileData.email}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">{profileData.bio}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
