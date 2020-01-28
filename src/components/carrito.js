import React from "react";
import { connect } from "react-redux";

const Carrito = ({ carrito, quitarDeCarrito}) => (
  <section>
    <h2>Carrito</h2>
    <div className="col-md-4 card mt-4 mb-4" syle={{ background: "#A7C4FF" }}>
      {carrito.map(j => (
        <article
          className="card mt-4"
          style={{ background: "#12A1E3" }}
          key={j.id}
        >
          <h3 className="card-header">{j.nombre}</h3>
          <h4 className="card-body">{j.marca}</h4>
          <h5 className="card-footer">{j.cantidad} </h5>
          <h5 className="card-footer">{j.precio} </h5>
          <div className="card-footer">
            <button onClick={() => quitarDeCarrito(j)}>
              Quitar de carrito
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  carrito: state.carrito
});

const mapDispatchToProps = dispatch => ({
  quitarDeCarrito(producto) {
    dispatch({
      type: "QUITAR_DE_CARRITO",
      producto
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);
