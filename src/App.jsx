import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Braces from './Components/Braces/Braces'
import Header from './Components/Header/Header'
import useAuth from './Hooks/useAuth'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'

function App() {
  const {user,authIsReady} = useAuth()
  return (
    <div className="App">
      {authIsReady && <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Braces><Home/></Braces>}/>
        <Route path="/login" element={<Braces><Login/></Braces>}/>
        <Route path="/signup" element={<Braces><Signup/></Braces>}/>
      </Routes>
      </BrowserRouter>}
    </div>
  )
}

export default App
