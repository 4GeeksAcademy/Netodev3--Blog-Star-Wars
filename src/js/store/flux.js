const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      addToFavorites: (item) => {
        // --> Agregamos a favoritos
        const store = getStore(); // Obtenemos el estado actual de la aplicación.
        const favorites = [...store.favorites, item]; // Creamos una nueva lista de favoritos con el operador de propagación (...) para copiar todos los elementos que ya había en la lista y añadimos el "item", que es el nuevo elemento que queremos añadir.
        setStore({ favorites: favorites }); // Seteamos la lista de favoritos con la que acabamos de crear.
        // Creamos una lista nueva para evitar modificar el estado original del store de favoritos.
      },

      removeFromFavorites: (index) => {
        // -> Eliminamos de favoritos
        const store = getStore(); // Obtenemos el estado actual de la aplicación.
        const updatedFavorites = store.favorites.filter(
          (item, i) => i !== index
          // Creamos una nueva lista de favoritos que excluye el elemento en la posición especificada por "index". El método filter() recorre todos los elementos de "store.favorites" y solo incluye aquellos cuyo índice "i" no coincide con "index". A demás, nos crea una nueva lista, no modifica la anterior.
        );
        setStore({ favorites: updatedFavorites }); // Seteamos la lista de favoritos con los elementos que ha filtrado anteriormente que no coincidan con el índice del parámetro, es decir, elimina el elemento que tenga dicho índice.
      },
    },
  };
};

export default getState;
