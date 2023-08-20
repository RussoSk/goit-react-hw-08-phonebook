import React from 'react';

import AddContactForm from 'components/AddContactForm/AddContactForm';
import Contact from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import {Container } from '@mui/material';
import { DivSt } from './Contacts.styled';


const Contacts = () => {
  return (
    <Container
 
    >
      <AddContactForm />
      <Filter />

      <DivSt>
        <Contact />
      </DivSt>

      <Toaster />
    </Container>
  );
};

export default Contacts;