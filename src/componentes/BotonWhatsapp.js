import React from "react";
const BotonWhatsapp=()=>{
    return(
        <div className="container-boton">
            <a href="https://wa.me/+573015781920?text=Quisiera%20saber%20mas%20una%20pregunta%20" target="_blank">
                <img className="boton" src={require('../imagenes/icono.png')}/>
            </a>
        </div>
    )
}
export default BotonWhatsapp;
