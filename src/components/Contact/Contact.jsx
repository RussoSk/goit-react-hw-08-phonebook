
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { Button, ListItem } from './Contact.style';


const Contact = ({ contact }) => {
  
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id)).finally(() => {
    });
  };

  return (
    <ListItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" onClick={handleDeleteClick} >
        Delete
      </Button>
    </ListItem>
  );
};

export default Contact;