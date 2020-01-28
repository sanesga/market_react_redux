import { createStore } from "redux";

const estadoInicial = {
  productos: [
    {
      id: 1,
      nombre: "Leche",
      marca: "Puleva",
      cantidad: "100ml",
      precio: "1,50€"
    },
    {
      id: 2,
      nombre: "Limón",
      marca: "Ninguna",
      cantidad: "20gr",
      precio: "0,60€"
    },
    {
      id: 3,
      nombre: "Chocolate",
      marca: "Nestle",
      cantidad: "75gr",
      precio: "2,00€"
    },
    {
      id: 4,
      nombre: "Suavizante",
      marca: "Flor",
      cantidad: "1000ml",
      precio: "1,20€"
    }
  ],
  supermercado1: [],
  supermercado2: [],
  carrito:[]
};

const reducerSupermercado = (state = estadoInicial, action) => {
  if (action.type === "AGREGAR_A_SUPERMERCADO_1") {
    return {
      ...state,
      supermercado1: state.supermercado1.concat(action.producto),
      productos: state.productos.filter(j => j.id !== action.producto.id)
    };
  }

  if (action.type === "AGREGAR_A_SUPERMERCADO_2") {
    return {
      ...state,
      supermercado2: state.supermercado2.concat(action.producto),
      productos: state.productos.filter(j => j.id !== action.producto.id)
    };
  }

  if (action.type === "QUITAR_DE_SUPERMERCADO_1") {
    return {
      ...state,
      supermercado1: state.supermercado1.filter(j => j.id !== action.producto.id),
      productos: state.productos.concat(action.producto)
     
    };
  }

  if (action.type === "QUITAR_DE_SUPERMERCADO_2") {
    return {
      ...state,
      supermercado2: state.supermercado2.filter(j => j.id !== action.producto.id),
      productos: state.productos.concat(action.producto)
    };
  }

  if (action.type === "AGREGAR_A_CARRITO_DESDE_SUPERMERCADO_1") {
    return {
      ...state,
      carrito: state.carrito.concat(action.producto),
      supermercado1: state.supermercado1.filter(j => j.id !== action.producto.id)
    };
  }

  if (action.type === "AGREGAR_A_CARRITO_DESDE_SUPERMERCADO_2") {
    return {
      ...state,
      carrito: state.carrito.concat(action.producto),
      supermercado2: state.supermercado2.filter(j => j.id !== action.producto.id)
    };
  }

  if (action.type === "QUITAR_DE_CARRITO") {
    return {
      ...state,
      productos: state.productos.concat(action.producto),
      carrito: state.carrito.filter(j => j.id !== action.producto.id)
    };
  }

  return state;

}
export default createStore(reducerSupermercado);
