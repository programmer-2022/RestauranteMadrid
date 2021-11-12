import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function TableRow({item, id, nombre, cantidad, precio}) {
    return (
        <tr>
            <td>{item}</td>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{cantidad}</td>
            <td>${precio}</td>
            <td>${cantidad * precio}</td>
            <td>
                <div className="text-center">
                    <button className="btn btn-dark me-2"><FontAwesomeIcon icon={faEdit} /></button> 
                    <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>   
                </div>
            </td>
        </tr>  
    )
}
