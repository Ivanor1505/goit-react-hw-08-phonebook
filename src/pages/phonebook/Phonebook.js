import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/operations';

// import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { AddContactForm } from 'components/Form/Form';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AddContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
