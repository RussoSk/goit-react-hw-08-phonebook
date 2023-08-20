import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignup } from 'redux/operations';
import { MyTextField } from 'utils/MyTextField';
import { selectAuthError } from 'redux/selectors';
import { clearErrorOnUnmount } from 'redux/authSlice';
import { validationSchema } from 'utils/validationLogin';

const SignupForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(fetchSignup(values));
  };

  useEffect(() => {
    return () => dispatch(clearErrorOnUnmount());
  }, [dispatch]);

  const isError = useSelector(selectAuthError);

  return (
    <Container>
      <Typography
        sx={{ my: '30px' }}
        variant="h4"
        align="center"
        color="#1976d2"
      >
        Register to  ContactBOOK
      </Typography>
      <Typography align="center" variant="p" display="block" mb="20px">
      Already have an account? Enter <Link to="/login">Log in here</Link>
      </Typography>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema} //  валідація
        onSubmit={handleSubmit}
      >
        <Form>
          <Box
            sx={{
              margin: '0 auto',
              maxWidth: '400px',
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
            <MyTextField
              required
              id="outlined-basic-name"
              label="Name"
              variant="outlined"
              name="name"
              type="text"
            />
            <MyTextField
              required
              id="outlined-basic-email"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
            />
            <MyTextField
              required
              id="outlined-basic-password"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
            />
            {isError && (
              <Typography color="red">
                A user with this email address is already registered. Enter a different login
              </Typography>
            )}
            <Button
              sx={{ mt: '20px', mx: 'auto', display: 'block' }}
              variant="contained"
              type="submit"
            >
              Sign up
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignupForm;
