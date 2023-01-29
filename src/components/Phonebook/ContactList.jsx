import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'

export const ContactList = ({contacts, onDeleteItem}) => {
return (
            <ul>
        {contacts.map(({ name, number }, index) =>           
            <li key={nanoid()} className={styles.item}>
                        <span>{name}: {number}</span>
                        <button type='button' className = {styles.item_btn} onClick={()=>onDeleteItem(index)} key = {index}>Delete</button>
                    </li>
                )}
             </ul>
         )
}

