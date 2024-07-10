import ContactList from '../ContactList/ContactList';
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState('');

  const addContact = (newContact) => { 
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

    const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}