import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import phonebookservice from './services/phonebook'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    if (newName === '' || newNumber === ''){
      alert("name and number cannot be empty")
      return
    }

    const existPerson = persons.find(p => p.name === newName)
    if (existPerson) {
      // update number
      const updatePerson = {...existPerson, number:newNumber}
      const id = existPerson.id
      phonebookservice
      .update(updatePerson.id, updatePerson)
      .then((newPerson) => {
        console.log(`Update person's number with ${id}`)
        setPersons(persons.map(p => p.id === id ? newPerson : p))
      })
    }else{
      phonebookservice
      .create({name: newName, number:newNumber})
      .then( createdPerson => {
        setPersons(persons.concat(createdPerson))
      })
    }
    setNewName('')
    setNewNumber('')
  }
  
  const handelNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handelNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handelFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
  }

  const removePerson = (id) => {
    phonebookservice.remove(id).then(
      (response) => {
        console.log(`Deleted post with ID ${id}`)
        setPersons(persons.filter(p => p.id !== id))
      }
    )
  }

  useEffect(() => {
    phonebookservice.getAll()
      .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filter} onFilterChange={handelFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        onSubmit={addPerson} 
        personName={newName} 
        onNameChange={handelNameChange} 
        personNumber={newNumber} 
        onNumberChange={handelNumberChange}
      />
      <h2>Numbers</h2>
      <Phonebook persons={persons} filter={filter} removeHandle={removePerson}/>
    </div>
  )
}

export default App