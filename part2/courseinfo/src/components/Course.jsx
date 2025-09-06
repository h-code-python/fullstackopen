const Course = ({course}) => {
  
  const Header = ({name}) => <h1>{name}</h1>

  const Parts = ({ parts }) => {
    return (
      parts.map(part =>
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
        )
    )
  }

  const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises)
    const sum = exercises.reduce((total, currentValue) => total + currentValue, 0);
    
    return(
      <b>total of {sum} exercises</b>
    )
  }

  //main return for the course info
  return (
    <div>
      <Header name={course.name} />
      <ul>
        <Parts parts={course.parts} />
      </ul>
      <Total parts={course.parts}/>
    </div>

  )
}

export default Course
