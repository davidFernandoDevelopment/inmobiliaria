import React from "react";
import Button from "@material-ui/core/Button";

const ListaInmuebles = () => {
  return (
    <>
      <h1>Lista de inmuebles</h1>
      <Button variant="outlined" color="primary">
        Color primario
      </Button>
      <Button variant="contained" color="secondary">
        Color secundario
      </Button>
    </>
  );
};

export default ListaInmuebles;
