import { createStore } from "redux";

const estadoInicial = {
  animales: [
    {
      id: 1,
      tipo: "Perro",
      nombre: "Rudy",
      edad: 3
    },
    {
      id: 2,
      tipo: "Gato",
      nombre: "Mina",
      edad: 3
    },
    {
      id: 3,
      tipo: "Poni",
      nombre: "Ricardo",
      edad: 1
    },
    {
      id: 4,
      tipo: "Perro",
      nombre: "Leo",
      edad: 5
    }
  ],
  adopcion: [],
  casaAcogida: []
};

const reducerProtectora = (state = estadoInicial, action) => {
  if (action.type === "AGREGAR_ADOPCION") {
    return {
      ...state,
      adopcion: state.adopcion.concat(action.animal),
      animales: state.animales.filter(j => j.id !== action.animal.id)
    };
  }

  if (action.type === "AGREGAR_ACOGIDA") {
    return {
      ...state,
      casaAcogida: state.casaAcogida.concat(action.animal),
      animales: state.animales.filter(j => j.id !== action.animal.id)
    };
  }

  if (action.type === "QUITAR_ADOPCION") {
    return {
      ...state,
      adopcion: state.adopcion.filter(j => j.id !== action.animal.id),
      animales: state.animales.concat(action.animal)
     
    };
  }

  if (action.type === "QUITAR_ACOGIDA") {
    return {
      ...state,
      casaAcogida: state.casaAcogida.filter(j => j.id !== action.animal.id),
      animales: state.animales.concat(action.animal)
    };
  }
  return state;

}
export default createStore(reducerProtectora);
