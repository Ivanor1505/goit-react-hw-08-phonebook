import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button, CotactItem } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <CotactItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button
        onClick={e => dispatch(deleteContact(e.target.id))}
        id={contact.id}
      >
        Delete
      </Button>
    </CotactItem>
  );
};
