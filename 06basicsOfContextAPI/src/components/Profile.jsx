import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)  // user come from the UserContextProvider.jsx file adn for access the darta we willl use the useContext() Hook

    if (!user) return <div> Please Login </div>

    return <div> Welcome {user.userName} </div>
}

export default Profile
