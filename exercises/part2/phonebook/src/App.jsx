import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    if (newName === '' || newNumber === ''){
      return
    }

    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }else{
      const personObj = persons.concat({name: newName, number:newNumber, id:persons.length+1})
      setPersons(personObj)
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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
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
      <Phonebook persons={persons} filter={filter}/>
    </div>
  )
}

export default App