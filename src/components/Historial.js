import React from "react";

class Historial extends React.Component {
    render() {
        return (
            <div className= "recordatorio">
                <h3>Selección anterior: {this.props.opcionElegida.toUpperCase()}</h3>
                <h3>Historial de opciones elegidas: </h3>
                    <ul>
                        {this.props.opcionesElegidas.map((opcion)=> <li>{opcion.toUpperCase()}</li>)}
                    </ul>
            </div>
        )
    }
}

export default Historial;