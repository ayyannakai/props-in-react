import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Navbar /> 
      
    </>
  )
}

export default App

// rendering props.title as home here
// we will change the props here not in the components
// cant set title as a number because its type is set to be a string in Navbar.jsx
// we have to give a prop here because its set to be required in Navbar.jsx