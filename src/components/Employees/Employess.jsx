import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Сотрудники
      </Typography>
      <Grid container spacing={2}>
        {employees.map(employee => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={employee.id}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ marginRight: 2 }}>
                  <AccountBoxIcon />
                </Avatar>
                <div>
                  <Typography variant="h6">{employee.name}</Typography>
                  <Typography variant="body2">{employee.email}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Employees;
