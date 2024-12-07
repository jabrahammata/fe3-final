import React from "react";
import Card from "../Components/Card";
import { useContextGlobalStates } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextGlobalStates();

  return (
    <>
      <h1>Tus Dentistas Favoritos</h1>
      <div className="card-grid">
        { state.favs.length > 0 ? (
            state.favs.map((dentist) => {
              return (
                <Card
                  name={dentist.name}
                  username={dentist.username}
                  id={dentist.id}
                  key={dentist.id}
                />
              );
            })
          ) : ( <p style={{color:"red"}}>No hay favoritos, vuelva a Inicio para agregarlos</p>) }
      </div>
    </>
  );
};

export default Favs;
