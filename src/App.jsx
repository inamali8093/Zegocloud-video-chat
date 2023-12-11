import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import RoomPage from './pages/Room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/room/:roomId' element={<RoomPage />} />
    </Routes>
  )
}

export default App
