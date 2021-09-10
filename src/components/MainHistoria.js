import React from "react";
import historias from "./data.json"
import Opciones from "./Opciones";
import Historial from "./Historial";

class MainHistoria extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            historiasList: [],
            historiaActual: {},
            idHistoriaActual: 1,
            opcionElegida: "",
            opcionesElegidas: []
        };

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                historiasList: historias,
                historiaActual: historias[0]
            })
        }, 2000)
    }

    handlerClick = (opcElegida) => {

        let nroHistoria = (this.state.idHistoriaActual + 1) + opcElegida;
        let siguienteHistoria = this.state.historiasList.find((historia) => historia.id === nroHistoria)
        if (siguienteHistoria != null) {
            this.setState({
                opcionElegida: opcElegida,
                historiaActual: siguienteHistoria,
                idHistoriaActual: this.state.idHistoriaActual + 1,
                opcionesElegidas: (this.state.opcionElegida != "") ? [...this.state.opcionesElegidas, this.state.opcionElegida] : []
            })
        } else {
            alert("Finalizó la diversión")
        }
    }



    render() {
        return (
            (this.state.historiasList.length == 0) ?
                <h2 className="historia">Cargando...</h2>
                :
                <div className="layout">
                    <div >
                        <h1 className="historia">{this.state.historiaActual.historia}</h1>
                    </div>
                    <Opciones opciones={this.state.historiaActual.opciones} handlerClick={this.handlerClick} />
                    <Historial opcionElegida={this.state.opcionElegida} opcionesElegidas={this.state.opcionesElegidas} />
                </div>

        )

    }
}

export default MainHistoria;
