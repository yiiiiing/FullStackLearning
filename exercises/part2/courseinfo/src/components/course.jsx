const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p style={{fontWeight: 'bold'}}>Total of {sum} exercises</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  const partsComp = parts.map((part) => {return <Part key={part.id} part={part} />})
  return (
    <>
      {partsComp}
    </>
  )
}

const Course = ({course}) => {
  const {name, id, parts} = course
  const total = parts.reduce((total, part) => {return total + part.exercises}, 0)

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={total} />
    </div>
  )
}

export default Course