import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobalStates } from "../Components/utils/global.context";

const Detail = () => {
  const params = useParams();
  const { state, dispatch } = useContextGlobalStates();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      const data = await response.json();
      dispatch({ type: "GET_DENTIST", payload: data });
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Detalle Dentista {params.id}</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.dentist.name}</td>
            <td>{state.dentist.email}</td>
            <td>{state.dentist.phone}</td>
            <td>{state.dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;