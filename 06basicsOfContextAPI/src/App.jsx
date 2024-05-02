import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
