import React from "react";
import { connect } from "react-redux";

const Adopcion = ({ adopcion, quitarDeAdopcion }) => (
  <section>
    <h2>Adopción</h2>
    <div className="col-md-4 card mt-4 mb-4" syle={{ background: "#A7C4FF" }}>
      {adopcion.map(j => (
        <article
          className="card mt-4"
          style={{ background: "#FFFBBE" }}
          key={j.id}
        >
          <h3 className="card-header">{j.tipo}</h3>
          <h4 className="card-body">Nombre: {j.nombre}</h4>
          <h5 className="card-footer">{j.edad} años</h5>
          <div className="card-footer">
            <button onClick={() => quitarDeAdopcion(j)}>
              Quitar de la adopción
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  adopcion: state.adopcion
});

const mapDispatchToProps = dispatch => ({
  quitarDeAdopcion(animal) {
    dispatch({
      type: "QUITAR_ADOPCION",
      animal
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Adopcion);
