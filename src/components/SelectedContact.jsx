import { useState, useEffect} from 'react'
import SingleContactRow from './SingleContactRow'

const SelectedContact = ({ selectedContactId, setSelectedContactId}) => {
  const [contact, setContact] = useState([])

  useEffect(() => {
    const fetchSingleContact = async() => {
      const response = await fetch (`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
      const data = await response.json();
      setContact(data)
    }
    
    fetchSingleContact();
  },[])

  return (
    <>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
      <table>
        <thead>
          <tr>
            <th colSpan="5">Contact Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Username</td>
            <td>Website</td>
          </tr>
          <SingleContactRow contact= {contact}/>
        </tbody>
      </table>
    </>
  )
}

export default SelectedContact