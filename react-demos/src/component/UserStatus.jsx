import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
    return (
    <div>
        {loggedIn && isAdmin && 'Welcome Admin!'}
        {loggedIn && !isAdmin && 'Welcome User'}
    </div>
    )
}

export default UserStatus