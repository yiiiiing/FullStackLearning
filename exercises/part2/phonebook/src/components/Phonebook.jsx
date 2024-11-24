const Phonebook = ({persons, filter}) => {
    let showedPersons = persons
    if (filter !== ''){
      // check if name contains filter
      showedPersons = persons.filter((p) => {return p.name.toLowerCase().includes(filter.toLowerCase())})
    }
    const personsComp = showedPersons.map((p)=>{return <p key={p.id}>{p.name} {p.number}</p>})
    return personsComp
  }

  export default Phonebook