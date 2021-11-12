import React, {useEffect, useState} from 'react'
import TableRow from './tableRow'

export default function Carrito() {

    const [row, setRow] = useState(() => {
		const saved = localStorage.getItem("carrito");
		const initialValue = JSON.parse(saved);
		return initialValue || {};
	});

    const readLocalStorage = () => {
        const data = localStorage.getItem("carrito")
        if(data) {
            const productos = JSON.parse(data)
            setRow(productos)
        }
    }

    useEffect(() => {
        readLocalStorage()
    }, [])

    return (
        <> 
            <div className="text-center mt-5">
                <h3>Carrito de compras</h3>
            </div>

            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Total</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (row !== null)
                                ? (Object.values(row).map((item, idx) => {
                                    return <TableRow key={item.id} item={idx + 1} id={item.id} nombre={item.nombre} cantidad={item.cantidad} precio={item.precio} />
                                })
                                ) : (<tr><td>Carrito vacio</td></tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

            <div className="container mt-5 mb-5">
                <button className="btn btn-success">Finalizar compra</button>
            </div>
        </>       
    )
}