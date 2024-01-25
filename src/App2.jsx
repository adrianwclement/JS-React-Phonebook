import { useState, useEffect } from 'react'
import contactService from './services/contacts'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
    })
  }, [])

  const addInfo = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const isDuplicate = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    isDuplicate
    ? alert(`${newName} is already added to phonebook`)
    : contactService
      .create(nameObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
      })

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleFilter={handleFilter} />
      
      <h2>Add a new</h2>
      <PersonForm 
        addInfo={addInfo} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />

      <h2>Numbers</h2>
      <div>
      <Persons persons={persons} searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default App