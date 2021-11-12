import React from 'react'
import '../recomendados/recomendados.css'

export default function Recomendados() {
    return (
        <section className="recomendados">
            <h3>Los recomendados del chef</h3> 
            <div className="recomendadosContent">
                <div className="recContIzq">
                    <div className="contRecContIzq">
                </div>
                <div className="contRecContIzq"></div>
                <div className="contRecContIzq"></div>
                <div className="contRecContIzq"></div>
            </div>
            <div className="recContDer">
                <img src="assets/menu@2x.png" alt="" className="menuRecomendados" />
                <div className="btnMenu">
                    <p>Consultar menú</p>
                </div>
            </div>
            </div>
        </section>
    )
}