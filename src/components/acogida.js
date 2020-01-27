import React from "react";
import { connect } from "react-redux";

const Acogida = ({ acogida, quitarDeAcogida }) => (
  <section>
    <h2>Acogida</h2>
    <div className="col-md-4 card mt-4 mb-4" syle={{ background: "#C8FFBE" }}>
      {acogida.map(j => (
        <article
          className="card mt-4"
          style={{ background: "#FEDCA3" }}
          key={j.id}
        >
          <h3 className="card-header">{j.tipo}</h3>
          <h4 className="card-body">Nombre: {j.nombre}</h4>
          <h5 className="card-footer">{j.edad} años</h5>
          <div className="card-footer">
            <button onClick={() => quitarDeAcogida(j)}>Quitar de acogida</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
    acogida: state.casaAcogida
})

const mapDispatchToProps = dispatch => ({
    quitarDeAcogida(animal){
        dispatch({
            type: 'QUITAR_ACOGIDA', 
            animal
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Acogida);