import { useState } from 'react'

const Phonebook = ({persons}) => {
  const personsComp = persons.map((p, i)=>{return <p key={i}>{p.name}</p>})
  return personsComp
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'},
    { name: 'Ada Lovelace'}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const personObj = {name: newName}
    
    setPersons(persons.concat(personObj))
    setNewName('')
  }
  
  const handelNameChange = (event) =>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name:
        <input value={newName} onChange={handelNameChange} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <Phonebook persons={persons}/>
    </div>
  )
}

export default App