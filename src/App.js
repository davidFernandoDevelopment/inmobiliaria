import React from "react";
import { MuiThemeProvider } from "@material-ui/core";

import theme from "./themes/theme";
import ListaInmuebles from "./components/vistas/ListaInmuebles";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ListaInmuebles />
    </MuiThemeProvider>
  );
}

export default App;
