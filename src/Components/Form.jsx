import React, { useState } from "react";
import styles from '../Styles/Form.module.css'
import { useContextGlobalStates } from "../Components/utils/global.context";

const Form = () => {
  const { state } = useContextGlobalStates();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (name.length <= 5 || !validateEmail(email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    setSuccessMessage(
      `Gracias ${name}, te contactaremos cuanto antes vía mail`
    );
    console.log({ name, email });
  };

  return (
    <div className={`${styles.formContainer} ${state.theme}`}>
      <form className={styles.styledForm} onSubmit={handleSubmit}>
        <input
          className={`${styles.input} ${state.theme}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre completo"
          required
        />
        <input
          className={`${styles.input} ${state.theme}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        <button className={styles.submitButton} type="submit">
          Enviar
        </button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
    </div>
  );
};
export default Form;
