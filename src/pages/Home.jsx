import React from 'react';
import { Container, Typography, Box, Button, List } from '@mui/material';
import { ListButton, ListItemSt, ListText, Title } from './home.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  return (
    <>
      {!isLoggedIn ? (
        <Container>
          <Box
            sx={{
              margin: '20px auto',
              maxWidth: '600px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              border: ' 2px solid #1976d23c',
              borderRadius: '22px 22px 22px 22px',
              boxShadow: ' 10px 10px 24px -7px rgba(0,0,0,0.75)',
            }}
          >
            <Title variant="h3" align="center" color={'#1976d2'}>
              Welcome to ContactBOOK!
            </Title>
            <Box
            sx={{
              margin: '20px auto',
              maxWidth: '600px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              border: ' 1px solid #1976d23c',
              borderRadius: '22px 22px 22px 22px',
              
            }}
          >
            <Title variant="h4" align="center" color={'#1976d2'}>
            Choose one of the options below
            </Title>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <List
                sx={{
                  padding: 0,
                  margin: { xs: '0 auto' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <ListItemSt>
                  <ListText
                    component="p"
                    color={'#1976d2'}
                    textAlign={'justify'}
                  >
                    If you are visiting ContactBOOK for the first time, you need to register here {' '}
                    <Link to="/registration">
                      <ListButton variant="contained" component="span">
                        Sign UP
                      </ListButton>
                    </Link>
                  </ListText>
                </ListItemSt>
                <ListItemSt>
                  <ListText
                    component="p"
                    color={'#1976d2'}
                    textAlign={'justify'}
                  >
                    If you are registered, click here {' '}
                    <Link to="/login">
                      <ListButton variant="contained" component="span">
                        Login
                      </ListButton>
                    </Link>
                  </ListText>
                </ListItemSt>
              </List>
            </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box
            sx={{
              margin: '20px auto',
              maxWidth: '700px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              border: ' 2px solid #1976d23c',
              borderRadius: '22px 22px 22px 22px',
              boxShadow: ' 10px 10px 24px -7px rgba(0,0,0,0.75)',
            }}
          >
            <Typography component="p" color={'#1976d2'} textAlign={'justify'}>
              <b>{user}</b> you have already logged in. Let`s check your
              contacts!
            </Typography>
            <Link to="/contacts">
              <Button variant="contained" component="span">
                Go to Contacts
              </Button>
            </Link>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Home;