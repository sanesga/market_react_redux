import React from "react";
import { connect } from "react-redux";

const Animales = ({ animales, agregarAdopcion, agregarAcogida }) => (
  <section>
    <h2>Animales</h2>
    <div className="col-md-4 card mt-4 mb-4" syle={{ background: "#FFFB8B" }}>
      {animales.map(j => (
        <article
          className="card mt-4"
          style={{ background: "#DAFFD1" }}
          key={j.id}
        >
          <h3 className="card-header">{j.tipo}</h3>
          <h4 className="card-body">Nombre: {j.nombre}</h4>
          <h5 className="card-footer">{j.edad} años</h5>
          <div className="card-footer">
            <button onClick={() => agregarAdopcion(j)}>Adopción</button>
            <button onClick={() => agregarAcogida(j)}>Casa de acogida</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
    animales: state.animales
})

const mapDispatchToProps = dispatch => ({
    agregarAdopcion(animal){
        dispatch({
            type: 'AGREGAR_ADOPCION', 
            animal
        })
    },
    agregarAcogida(animal){
        dispatch({
            type: 'AGREGAR_ACOGIDA', 
            animal
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Animales);