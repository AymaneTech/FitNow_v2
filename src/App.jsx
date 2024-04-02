import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import Home from './Components/Home'
import "./index.css"

function App() {
  return (
    <main className='bg-[#16161a] h-[100vh]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
