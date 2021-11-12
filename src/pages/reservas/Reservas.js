import {useEffect, useState, useRef} from 'react'
import "normalize.css"
import "./reservas.css"
import Swal from 'sweetalert2'
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com'
import {useAuth0} from '@auth0/auth0-react'

const Reservas = () => {
	
	const form = useRef();
	const [data, setData] = useState([])
	const {register, handleSubmit, formState: {errors}} = useForm()
	const {isAuthenticated, loginWithRedirect} = useAuth0()

	const sendEmail = () => {
		//e.preventDefault();
	
		emailjs.sendForm('service_dzw0goj', 'template_cbw4r9b', form.current, 'user_x8z2mxojwDrBNMGJyIrnV')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	const getDataSelect = async () => {
		try {
			const url = 'data/reservas.json'
			const res = await fetch(url)
			const _data = await res.json()
			if(res.ok) setData(_data)	
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		getDataSelect()
	},[])
	
	const onHandleSubmit = (body, e) => {
		if(body !== null) {
			if (isAuthenticated) {
				Swal.fire({
				title: body.nombre,
				text: "¿Está seguro de hacer la reservación?",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Reservar',
				cancelButtonText: 'Cancelar'
			  }).then((result) => {
				if (result.isConfirmed) {
				  Swal.fire(
					'Gracias por tu solicitud',
					'Hemos recibido tu solicitud exitosamente, te haremos llegar un correo de confirmación',
					'success'
				  )
				  sendEmail()
				}
			  })
			}            
		}
	}

	return (
		<>
			{
				(isAuthenticated) ?  (
			<>
			<div className="contenedor-titulo">
        		<div className="div-titulo"><h1>Reservas</h1></div>
    		</div> 

		    <div className="container-fluid">
		        <div className="container">              
		            <div className="row contenedor-parrafos">
		                <div className="col div-izq">
		                    <p className="paragraph mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti.</p>
		                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti.</p>
		                </div>
		                <div className="col">
		                    <form ref={form} onSubmit={handleSubmit(onHandleSubmit)}>		                        	                        
		                        <div className="mb-4">
		                            <input 
										type="text" 
										className="form-control" 
										placeholder="Nombre completo" 
										autoComplete="off" 
										{...register("nombre", {required: true})}
									/>
									{errors.nombre && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4">
		                            <input 
										type="text" 
										className="form-control" 
										placeholder="Número de contacto" 
										autoComplete="off"
										{...register("telefono", {required: true})}
									/>
									{errors.telefono && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4">
		                            <input 
										type="email" 
										className="form-control" 
										placeholder="Correo Electrónico" 
										autoComplete="off" 
										{...register("correo", {required: true})}
									/>
									{errors.correo && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4">
		                            <label htmlFor="cantidad">Cantidad de personas</label>
		                            <input 
										type="number" 
										className="form-control" 
										placeholder="Cantidad de personas" 
										autoComplete="off"
										min="1"
										max="99"
										{...register("cantidad", {required: true})}
									/>
		                        </div>

		                        <div className="mb-4">
		                            <label htmlFor="fecha">Fecha de la reserva</label>
		                            <input 
										type="date" 
										className="form-control" 
										placeholder="Cantidad de personas" 
										{...register("fecha", {required: true})}
									/>
									{errors.fecha && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="mb-4 my-select">
									<select 
										className="form-select" 
										aria-label="Default select example"
										{...register("servicios", {required: true})}>
		                                {
											(data.length !== 0)
											? (data.map((item) => { return <option key={item.id} value={item.id}>{item.name}</option>}))
											: (<option value="0">-No existen items-</option>)
										}
		                            </select>
		                            <span className="custom-arrow"></span>
									{errors.servicios && <span>Campo obligatorio</span>}
		                        </div>

		                        <div className="mb-4">
		                            <textarea 
										className="form-control my-textarea" 
										rows="4" 
										placeholder="Su Mensaje" 
										{...register("mensaje", {required: true})}>
									</textarea>
									{errors.mensaje && <span className="text-danger">(*) <small>Campo obligatorio</small></span>}
		                        </div>

		                        <div className="form-check mb-3">
		                            <input 
										className="form-check-input" 
										type="checkbox" 
										id="flexCheckDefault" 
										{...register("terminos", {required: true})}
									/>
									<label className="form-check-label fst-italic mb-2" htmlFor="flexCheckDefault">
		                            Acepto términos y condiciones
		                            </label>
									{errors.terminos && <span className="text-danger ms-2">(*) <small>Campo obligatorio</small></span>}
		                        </div>
		                        <div className="mb-3 text-center">
		                            <button type="submit" className="btn boton mb-3">Enviar Solicitud</button>
		                        </div>
		                    </form>
		                </div>
		            </div>   
		        </div>
		    </div>
		    </>
		    ) : (loginWithRedirect())
			
		}          
		</>
	)
}

export default Reservas