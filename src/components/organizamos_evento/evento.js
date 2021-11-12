import React from 'react'
import '../organizamos_evento/evento.css'

export default function Evento() {
    return (
        <section className="middle" style={{"backgroundImage" : "url(assets/foto3@2x.png)"}}>
            <div className="titleMiddle">
                <h2>Organizamos tu evento</h2>
            </div> 
            <div className="contMiddle">
                <div className="box1Middle boxMiddle">
                    <img src="assets/icono1@2x.png" alt="" className="imagenBoxMiddle imgBxMddle" />
                    <h3>Fiestas temáticas</h3>
                    <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut.</p>
                    <i className="icofont-plus-circle"></i>
                </div>
                <div className="box2Middle boxMiddle">
                    <img src="assets/icono2@2x.png" alt="" className="imagenBoxMiddle imgBxMddle" />
                    <h3>Matrimonios</h3>
                    <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut.</p>
                    <i className="icofont-plus-circle"></i>
                </div>

                <div className="box3Middle boxMiddle">
                    <img src="assets/icono3@2x.png" alt="" className="imagenBoxMiddle imgBxMddleEspecial" />
                    <h3>Cenas empresariales</h3>
                    <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut.</p>
                    <i className="icofont-plus-circle"></i>
                </div>

                <div className="box4Middle boxMiddle">
                    <img src="assets/icono4@2x.png" alt="" className="imagenBoxMiddle" />
                    <h3>Cumpleaños</h3>
                    <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut.</p>
                    <i className="icofont-plus-circle"></i>
                </div>
            </div>
        </section>
    )
}