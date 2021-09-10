import React from "react";

class Opciones extends React.Component {
    render() {
        return (
            <div className="opciones">
                <div className= "opcion">
                    <button className="botones" onClick={() => this.props.handlerClick("a")} >A</button>
                    <h2>{this.props.opciones.a}</h2>
                </div>
                <div className= "opcion">
                    <button className="botones" onClick={() => this.props.handlerClick("b")}>B</button>
                    <h2>{this.props.opciones.b}</h2>
                </div>
            </div>
        )
    }
}

export default Opciones;