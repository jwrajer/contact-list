import { useEffect, useState } from 'react'
import ContactRow from './ContactRow';

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async() => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        console.log(err)
      }
    }

    fetchContacts();
  }, [])

  return ( 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
           contacts.map(contact => {
             return <ContactRow key={contact.id} contact= {contact} setSelectedContactId={setSelectedContactId}/>

           })
         }
      </tbody>
    </table>
); 
}

export default ContactList