import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function LogoutButton() {
    
    const {logout} = useAuth0()
    
    return (
        <button className="btn btn-danger" onClick={() => logout({returnTo: window.location.origin})}> <FontAwesomeIcon icon={faSignInAlt} /></button>
    )
}