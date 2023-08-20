import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Button, Box } from '@mui/material';
import { toast } from 'react-hot-toast';
import { Formik, Form } from 'formik';
import { MyTextField } from 'utils/MyTextField';
import { SignupSchema } from 'utils/addContactValidation';

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contactsRedux = useSelector(selectContacts);

  const addNewContact = (name, number) => {
    const isContactExist = contactsRedux.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (!isContactExist) {
      dispatch(addContact({ name, number }));
      return true;
    } else {
      toast.error(`Sorry, but this NAME has already exist!`, {
        icon: '⚠️',
      });
      return false;
    }
  };

  const submitHandler = ({ name, number }, actions) => {
    const isContactAdded = addNewContact(name, number);
    return isContactAdded ? actions.resetForm() : null;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validateOnChange={false}
      validationSchema={SignupSchema}
      onSubmit={submitHandler}
    >
      <Form>
        <Box
          sx={{
            margin: '20px auto',
            maxWidth: '500px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            border: ' 2px solid #1976d23c',
            borderRadius: '22px 22px 22px 22px',
            boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
          }}
        >
          <MyTextField label="Name" name="name" type="text" required />
          <MyTextField label="Number" name="number" type="text" required />
          <Button
            sx={{ mt: '20px', mx: 'auto', display: 'block' }}
            variant="contained"
            type="submit"
          >
            Add Contact
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default AddContactForm;