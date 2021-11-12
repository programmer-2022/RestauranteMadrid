import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import LogoutButton from '../authorization/logout'

export default function Profile() {
    
    const [bandera, setBandera] = React.useState(false)

    const {user, isAuthenticated, isLoading} = useAuth0()

    if(isLoading) {
        return <div>Loading...</div>
    }



    const cambiarBandera = () =>{
        setBandera(!bandera)
        console.log(bandera)
    }
    
    return (
        isAuthenticated && (
            <li className="nav-item fs-5">
                <div className="d-inline-block me-3 align-middle">
                    <img className="rounded-circle" style={{width: '50px'}} src={user.picture} alt={user.name} onClick={cambiarBandera}/>
                </div>
                {
                    (bandera) ? <div className="d-inline-block align-middle me-3">
                                    <h6 style={{color: '#9B9D9E'}}>{user.name}</h6>
                                    <h6 style={{color: '#9B9D9E'}}>{user.email}</h6>
                                </div>
                : ""
                }
                <div className="d-inline-block align-middle">
                    <LogoutButton/>
                </div>
            </li>
        )
    )
}
