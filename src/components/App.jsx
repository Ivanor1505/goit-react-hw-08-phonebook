import { AddContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, TitleList } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getError, getLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { Spinner } from './spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoding = useSelector(getLoading);
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Phonebook</Title>
      <AddContactForm />
      <TitleList>Contacts</TitleList>
      <Filter />
      {isLoding && !isError && <Spinner />}
      <ContactList />
    </div>
  );
};
