import React from "react";
import { connect } from "react-redux";

const Productos = ({ productos, agregarASupermercado1, agregarASupermercado2 }) => (
  <section>
    <h2>Productos</h2>
    <div className="col-md-4 card mt-4 mb-4" syle={{ background: "#FFFB8B" }}>
      {productos.map(j => (
        <article
          className="card mt-4"
          style={{ background: "#DAFFD1" }}
          key={j.id}
        >
          <h3 className="card-header">{j.nombre}</h3>
          <h4 className="card-body"> {j.marca}</h4>
          <h5 className="card-footer">{j.cantidad} </h5>
          <h5 className="card-footer">{j.precio} </h5>
          <div className="card-footer">
            <button onClick={() => agregarASupermercado1(j)}>Agregar a supermercado 1</button>
            <button onClick={() => agregarASupermercado2(j)}>Agregar a supermercado 2</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
    productos: state.productos
})

const mapDispatchToProps = dispatch => ({
    agregarASupermercado1(producto){
        dispatch({
            type: 'AGREGAR_A_SUPERMERCADO_1', 
            producto
        })
    },
    agregarASupermercado2(producto){
        dispatch({
            type: 'AGREGAR_A_SUPERMERCADO_2', 
            producto
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Productos);