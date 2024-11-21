const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props)  => {
  return (
    <div>
      {props.content.map(ele => <p>{ele.part} {ele.exercise}</p>)} 
    </div>
  )
}

const Total = (props) => {
  var num = 0
  for (const ele of props.content){
    num = num + ele.exercise
  }
  return (
    <p>Number of exercises {num}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14},
  ]

  return (
    <div>
    <Header course={course} />
    <Content content={content} />
    <Total content={content} />
  </div>
  )
}

export default App
