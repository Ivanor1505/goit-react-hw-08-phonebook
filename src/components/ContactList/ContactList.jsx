import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/phonebook/selectors';
import { getFilter } from 'redux/phonebook/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getAllContacts);

  // console.log('Всі контакти:', contacts);

  const filterByName = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {filterByName().map(filtredContact => {
        return <Contact key={filtredContact.id} contact={filtredContact} />;
      })}
    </List>
  );
};
