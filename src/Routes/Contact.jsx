import React from "react";
import Form from "../Components/Form";
import { useContextGlobalStates } from "../Components/utils/global.context";
import { Typography, Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Contact = () => {
  const { state } = useContextGlobalStates();

  const theme = createTheme({
    palette: {
      mode: state.theme === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            ¿Quieres saber más?
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Envíanos tus preguntas y te contactaremos
          </Typography>
          <Form />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;