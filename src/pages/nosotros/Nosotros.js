import React from 'react'
import {Link} from 'react-router-dom'
import "normalize.css"

export default function Nosotros() {
    return (
        <div className="container mb-5"> 
            <div className="container mt-4">
                <h2 className="text-center">TESTIMONIOS</h2>
            </div>

            <hr/>

            <div className="container mb-4">
                <h5><span>4</span> COMENTARIOS</h5>
            </div>

            <div className="container p-1 position-relative">
                
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-2 text-center">
                            <img src="https://i.imgur.com/stD0Q19.jpg" className="rounded-circle" alt="..." style={{"width": "100px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title d-inline me-2 align-mposition-relativeiddle">Luisa Maria</h5>
                                <p className="card-text d-inline align-middle"><small className="text-muted">on Diciembre 12 2019 at 11:55 am</small></p>
                                <p className="card-text mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="/" className="btn btn-primary">Responder</Link>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>

                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-2 text-center">
                            <img src="https://i.imgur.com/xELPaag.jpg" className="rounded-circle" alt="..." style={{"width": "100px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title d-inline me-2 align-mposition-relativeiddle">Valentina Rivas</h5>
                                <p className="card-text d-inline align-middle"><small className="text-muted">on Diciembre 12 2019 at 11:55 am</small></p>
                                <p className="card-text mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="/" className="btn btn-primary">Responder</Link>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>

                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-2 text-center">
                            <img src="https://i.imgur.com/HjKTNkG.jpg" className="rounded-circle" alt="..." style={{"width": "100px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title d-inline me-2 align-mposition-relativeiddle">Carlos Rendón</h5>
                                <p className="card-text d-inline align-middle"><small className="text-muted">on Diciembre 12 2019 at 11:55 am</small></p>
                                <p className="card-text mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="/" className="btn btn-primary">Responder</Link>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>

                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-2 text-center">
                            <img src="https://i.imgur.com/nAcoHRf.jpg" className="rounded-circle" alt="..." style={{"width": "100px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title d-inline me-2 align-mposition-relativeiddle">Esteban Martínez</h5>
                                <p className="card-text d-inline align-middle"><small className="text-muted">on Diciembre 12 2019 at 11:55 am</small></p>
                                <p className="card-text mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="/" className="btn btn-primary">Responder</Link>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>
                
            </div>

            <div className="container py-2 mt-2">
                <div className="container mb-4 p-0">
                    <h5>Publicar</h5>
                </div>            
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe tu Comentario"></textarea>
                </div>
                <div className="container text-end p-0">
                    <Link to="/" className="btn btn-primary">Comentar</Link>
                </div>
            </div>

        </div>
    )
}
