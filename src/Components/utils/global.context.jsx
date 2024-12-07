import { createContext, useContext, useEffect, useReducer, useMemo } from "react";

let lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
export const initialState = { theme: "", data: [], dentist: {}, favs: lsFavs };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
    case "GET_DENTIST":
      return { ...state, dentist: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] }
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      return { ...state, favs: filteredFavs }
    default:
      throw new Error("Acción no existente");
  }
};

const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchDentists = useMemo(() => {
    return async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({ type: "GET_DENTISTS", payload: data });
    };
  }, []);

  useEffect(() => {
    fetchDentists();
  }, [fetchDentists]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobalStates = () => useContext(ContextGlobal);
