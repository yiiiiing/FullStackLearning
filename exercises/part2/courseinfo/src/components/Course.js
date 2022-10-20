
const Header = (props) => {
  // may have issues when use 'properties' that component receive
  // so logging in console is a good way to debug
  //console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}
const Part = ({name, number}) => {
  return(
    <p>{name} {number}</p>
  )
}

const Content = ({data}) => {

  let items = data.map(ele => <Part key={ele.id} name={ele.name} number={ele.exercises}/>)
  
  return(
    <>{items}</>
  )
}

const Total = ({data}) => {
  const total_number = data.reduce((total, part) => { return total + part.exercises}, 0)
  return(
    <p style={{fontWeight: 'bold'}}>
      total of {total_number} exercises
    </p>
  )
}

const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content data={course.parts} />
        <Total data={course.parts} />
      </div>
    )
  }

export default Course;
