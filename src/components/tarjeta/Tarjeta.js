import {useState, useRef} from 'react'
import "normalize.css"
import "./tarjeta.css"

const Tarjeta = (props) => {


	const imgRef = useRef(null);
	const nombreRef = useRef(null);
	const descripcionRef = useRef(null);
	const precioRef = useRef(null);


	const [valorCantidad, setValorCantidad] = useState(1)
	const [id, setId] = useState(props.id)

	const sumar = () => setValorCantidad(valorCantidad + 1)
	const restar = () => setValorCantidad(valorCantidad - 1)

	const agregar = (e) => {
		setId(parseInt(e.target.id))
		let _url = imgRef.current.src	
		let _precio = precioRef.current.textContent.substring(1)
		let producto = {
			id: id,
			nombre: nombreRef.current.textContent,
			descripcion: descripcionRef.current.textContent,
			precio: _precio,
			url: _url.substring(22),
			cantidad: valorCantidad
		}
		props.agregar(producto)
	}

	return (
		<div className="contenedorTarjetaProductos">
			<div className="imagen">
				<img ref={imgRef} src={props.img} alt="imagen"/>
			</div>				
			<div className="contenedorInfo" >
				<h3 ref={nombreRef}>{props.nombre}</h3>
				<p ref={descripcionRef}>{props.descripcion}</p>
				<h4 ref={precioRef}>${props.precio}</h4>
			</div>
			<div className="contenedorCantidad">
				<p>Cantidad</p>
				<div className="contador mb-2">
					<button className="btn btn-secondary border w-25 px-0" onClick = {restar}>-</button>				
					<input className="fs-5 w-25 text-center px-0" type="text" value={valorCantidad} readOnly></input>						
					<button className="btn btn-secondary border w-25 px-0" onClick = {sumar}>+</button>
				</div>
				<button className="btn btn-danger btn-sm" onClick = {agregar} id={props.id}>Agregar al carrito</button>
			</div>
		</div>
	)
}

export default Tarjeta