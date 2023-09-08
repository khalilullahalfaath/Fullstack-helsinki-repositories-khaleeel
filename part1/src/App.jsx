const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='George' />
      <Hello name='Juliet' />
    </div>
  )
}

// never delete this
export default App