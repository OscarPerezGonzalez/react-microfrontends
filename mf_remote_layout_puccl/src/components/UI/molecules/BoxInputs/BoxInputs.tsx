import React from "react";
import CustomIconTitle from "../../atoms/IconTitle/IconTitle";
import CustomTextInput from "../../atoms/Input/CustomTextInput";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import CustomButtonA from "../../atoms/Button/CustomButtonA";
import { Box, Grid } from "@mui/material";

const BoxInputs = () => {
  return (
    <div style={{ position: 'absolute', top: '20%', left: '10%', right: '10%', bottom: 0 , height: '35%', backgroundColor: 'white', border: '2px solid #D5D5D5', borderRadius: '12px'}} >
      <CustomIconTitle />
      <Box display="flex" >
        <CustomTextInput label={"Nombre"} />
        <CustomTextInput label={"Apellido Paterno"} />
        <CustomTextInput label={"Apellido Materno"} />
      </Box>
      <Box display="flex">
        <CustomTextInput label={"Correo Electrónico"} />
        <CustomTextInput label={"Teléfono Celular"} />
        <CustomTextInput label={"RFC"} />
      </Box>
      <Box display="flex">
        <CustomTextInput label={"Número de tarjeta"} />
        <CustomTextInput label={"Número de Cuenta"} />
        <CustomButtonA style={{paddingRight: "30px"}} children={'Buscar'}/>
      </Box>
    </div>
  );
};

export default BoxInputs;
