import React from "react";
import { useMemo } from "react";
import CardStyles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
import Star from "@mui/icons-material/StarPurple500Sharp";
import { useContextGlobalStates } from "./utils/global.context";
import Swal from "sweetalert2";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobalStates();

  const isFav = useMemo(() => {
    return state.favs.find((fav) => fav.id === id);
  }, [state.favs, id]);

  const starStyle = useMemo(() => {
    return {
      color: isFav ? 'yellow' : 'transparent',
      stroke: 'black',
      strokeWidth: '1.2px'
    };
  }, [isFav]);

  const handleFav = useMemo(() => {
    return () => {
      if (isFav) {
        dispatch({ 
          type: "REMOVE_FAV", 
          payload: { name, username, id } 
        });
        Swal.fire({
        title: "¡Exitoso!",
        text: "¡Dentista eliminado de favoritos!",
        icon: "success",
        confirmButtonText: "OK",
      });
      } else {
        dispatch({ 
          type: "ADD_FAV", 
          payload: { name, username, id } 
        });
        Swal.fire({
        title: "¡Exitoso!",
        text: "¡Dentista añadido a favoritos!",
        icon: "success",
        confirmButtonText: "OK",
      });
      }
    };
  }, [isFav, name, username, id, dispatch]);

  const cardContainerStyle = useMemo(() => {
    return `${CardStyles.card} ${state.theme}`;
  }, [state.theme]);

  return (
    <div className={CardStyles.cardsContainer}>
      <div className={cardContainerStyle}>
        <Link to={`detail/${id}`}>
          <img src="/images/doctor.jpg" alt="Dentist profile picture" />
          <h2>{name}</h2>
          <p>{username}</p>
        </Link>
        <button onClick={handleFav} className={CardStyles.favButton}>
          <Star style={starStyle} className={CardStyles.starIcon} />
        </button>
      </div>
    </div>
  );
};

export default Card;
