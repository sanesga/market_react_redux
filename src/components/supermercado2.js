import React from "react";
import { connect } from "react-redux";

const Supermercado2 = ({ supermercado2, quitarDeSupermercado2, agregarACarrito }) => (
  <section>
    <h2>Supermercado 2</h2>
    <div className="col-md-4 card mt-4 mb-4" syle={{ background: "#A7C4FF" }}>
      {supermercado2.map(j => (
        <article
          className="card mt-4"
          style={{ background: "#FFB288" }}
          key={j.id}
        >
          <h3 className="card-header">{j.nombre}</h3>
          <h4 className="card-body">{j.marca}</h4>
          <h5 className="card-footer">{j.cantidad} </h5>
          <h5 className="card-footer">{j.precio} </h5>
          <div className="card-footer">
            <button onClick={() => quitarDeSupermercado2(j)}>
              Quitar de supermercado 2
            </button>
            <button onClick={() => agregarACarrito(j)}>
              Agregar a Carrito
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  supermercado2: state.supermercado2
});

const mapDispatchToProps = dispatch => ({
  quitarDeSupermercado2(producto) {
    dispatch({
      type: "QUITAR_DE_SUPERMERCADO_2",
      producto
    });
  },
  agregarACarrito(producto) {
    dispatch({
      type: "AGREGAR_A_CARRITO_DESDE_SUPERMERCADO_2",
      producto
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Supermercado2);
