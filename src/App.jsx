import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import "./index.css"
function App() {
  return (
    <main className='bg-[#16161a]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>here</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
