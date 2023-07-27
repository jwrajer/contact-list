import { useState } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import './App.css'

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log(selectedContactId);

  return (
    <>
      {
      selectedContactId ? 
      (<SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />) 
      : (<ContactList setSelectedContactId={setSelectedContactId} />)
      }
    </>
  )
}

export default App
