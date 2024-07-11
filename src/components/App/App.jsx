
import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem('contacts');
    return localContacts ? JSON.parse(localContacts) : initialContacts;
  });
  
  const [search, setSearch] = useState('');

  const addContact = (newContact) => { 
    setContacts((prevContacts) => {
      const result = [...prevContacts, newContact];
     localStorage.setItem('contacts', JSON.stringify(result));
      return result;
    })
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
       const result = prevContacts.filter(({ id }) => id !== contactId);
      localStorage.setItem("contacts", JSON.stringify(result));
      return result;
    })
  }

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