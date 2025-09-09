import { useState } from 'react'

const Header = ({name}) => <h2>{name}</h2>

const ShowNumbers = ({ names, filter }) => {
  return (
    names
      .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map(person => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))
  )
}

const FilterNumbers = ({ filterName, handleFilterChange }) => {
  return(
    <form>
      <div>
        filter shown with: 
              <input 
              value={filterName} 
              onChange={handleFilterChange} />
      </div>
    </form>
  )
}


const AddPerson = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
    <form onSubmit={addPerson}>
        <div>
          name: <input 
                value={newName} 
                onChange={handleNameChange} />
        </div>
        <div>
          number: <input 
                value={newNumber} 
                onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        {/* <div>debug: {newName}{console.log(persons)}</div> */}
      </form>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')



  const addPerson = (event) => {
    event.preventDefault()
    const exists = persons.find(p => p.name === newName);
    if (exists) return(
      alert(`${newName} is already added to phonebook`)
    )

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }

  return (
    <div>
      <Header name="Phonebook" />
      <FilterNumbers 
        filterName={filterName} 
        handleFilterChange={handleFilterChange} 
      />
      <Header name="add numbers" />
      <AddPerson 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ShowNumbers names={persons} filter={filterName}/>
    </div>
  )
}

export default App
