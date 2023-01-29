import { useState, useEffect } from "react";
import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'
import styles from './Phonebook/Phonebook.module.css'


export function App(){
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [])
  const [filter, setFilter] = useState('')


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function hendleSubmit (name, number) {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts.`)
    }
    setContacts([...contacts, {name, number}])
  }
  

  function onDelete(index) {
    setContacts(contacts.filter((arr, idx) => idx !== index))
  }

     function hendleFilter (value) {
        setFilter(value)
        
    }


  function hendleFind() {
    const normalizedFilter = filter.toLowerCase();
    return (contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ))
    
  }

    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm hendleSubmit={hendleSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={filter} hendleFilter={hendleFilter}/>
        <ContactList contacts={hendleFind()} onDeleteItem = {onDelete}/>
      </div>
    )
  }