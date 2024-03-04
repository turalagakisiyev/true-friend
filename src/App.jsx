import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Link } from 'react-scroll'
import Upper from './Components/Upper/Upper'
import Boxes from './Components/Boxes/Boxes'
import BlackCat from './Components/BlackCat/BlackCat'
import Bear from './Components/Bear/Bear'
import WhiteDog from './Components/WhiteDog/WhiteDog'
import BlackDog from './Components/BlackDog/BlackDog'
import BlackBar from './Components/BlackBar/BlackBar'
import Form from './Components/Form/Form'

function App() {
  return (

    <>
      <Navbar />
      <Upper />
      <Boxes />
      <BlackCat />
      <Bear />
      <WhiteDog />
      <BlackDog />
      <BlackBar />
      <Form />
    </>
  )
}

export default App
