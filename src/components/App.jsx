import {Route,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import NoRoute from '../pages/NoRoute'
import Cart from '../pages/Cart'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/*' element={<NoRoute/>}/>
      </Routes>
    </>
  )
}

export default App
