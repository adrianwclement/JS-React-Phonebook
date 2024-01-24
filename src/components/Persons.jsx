const Persons = ({ persons, searchTerm }) => {
    const filteredPersons = persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  
    return (
      <div>
        {filteredPersons.map(person => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    )
  }
  
  const Person = ({ person }) => (
    <p>{person.name} {person.number}</p>
  )

export default Persons