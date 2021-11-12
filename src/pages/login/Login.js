import React from 'react'
import "normalize.css"
import {useForm} from "react-hook-form"

const Login = () => {

	/*
	const [datos, setDatos] = React.useState({
        correo: "",
        password: ""
    });

    const handleInputChange =(event) =>{ 
        console.log(datos)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        console.log(event.target.name)
        
    }

    const enviarDatos = (event) => {
        event.preventDefault(); 
        console.log(datos.correo + " " + datos.password)
    }
	
	*/

	const {register, handleSubmit, formState: {errors}} = useForm()

	const [entradas, setEntradas] = React.useState([]);

	const onSubmit = (data, e) => {

        setEntradas([...entradas,
                    data])
        e.target.reset()
        
        
    }

    console.log(entradas)

	return (
		<>
			<div className="container col-md-4 mt-5">
				<h2>Iniciar sesión</h2>
			</div>
			<div className="container col-md-4 mt-5 mb-5">
				<form onSubmit={handleSubmit(onSubmit)}>
				  <div className="mb-3">
				    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register( "correo", {required: true, minLength:5})}/> 
                {errors.correo && <span>Error</span>}
				    <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie más.</div>
				  </div>
				  <div className="mb-3">
				    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
				    <input type="password" className="form-control" id="exampleInputPassword1" {...register( "password", {required: true, minLength:5})}/>
                {errors.password && <span>Error</span>}
				  </div>
				  <button type="submit" className="btn btn-primary">Ingresar</button>
				  <button type="submit" className="btn btn-primary ms-2">Crear cuenta</button>
				</form>
			</div>
		</>
	)
}

export default Login