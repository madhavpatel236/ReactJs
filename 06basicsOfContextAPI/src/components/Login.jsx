import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)  // setUSer come from the UserContextProvider.jsx file adn for access the darta we willl use the useContext() Hook

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName})
    }

    return (
        <div>
            <input
                type='text'
                placeholder='userName'
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
            />
                {" "}
            <input
                type='text'
                placeholder='Password'
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
            onClick={handleSubmit}
            className='bg-black text-white p-0.8 m-1'
            > Submit</button>
        </div>
    )
}

export default Login
