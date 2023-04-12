import React from "react";
import CustomIconTitle from "../../atoms/IconTitle/IconTitle";
import CustomTextInput from "../../atoms/Input/CustomTextInput";
import CustomButtonA from "../../atoms/Button/CustomButtonA";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from "@mui/material";
import './_styles.css'

const validationSchema = yup.object({
  correo: yup
    .string()
    .email("Introduce un correo Válido")
    .required("El correo es requerido"),
  nombre: yup.string().required("El Nombre es Requerido"),
  apellidop: yup.string().required("El Apellido Paterno es Requerido"),
  apellidom: yup.string().notRequired(),
  telefono:  yup.string()
            .matches(/^[0-9]+$/, "Deben de ser solo digitos")
            .min(10,"Deben ser 10 números")
            .max(10,"Deben ser 10 números")
            .required("El telefono es requerido"),
});

const initialValues = {
  nombre: '',
  correo: '',
  apellidop: '',
  apellidom: '',
  telefono: ''
};

const BoxInputsCreate = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "15%",
        right: "15%",
        bottom: 0,
        height: "45%",
        backgroundColor: "white",
        border: "2px solid #D5D5D5",
        borderRadius: "12px",
      }}
    >
      <CustomIconTitle />
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex">
          <CustomTextInput 
          id={"nombre"}
          name={"nombre"}
          label={"Nombre"}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}/>
          <CustomTextInput 
          id={"apellidop"}
          name={"apellidop"}
          label={"Apellido Paterno"}
          value={formik.values.apellidop}
          onChange={formik.handleChange}
          error={formik.touched.apellidop && Boolean(formik.errors.apellidop)}
          helperText={formik.touched.apellidop && formik.errors.apellidop}/>
          <CustomTextInput 
          id={"apellidom"}
          name={"apellidom"}
          label={"Apellido Materno"}
          value={formik.values.apellidom}
          onChange={formik.handleChange}
          error={formik.touched.apellidom && Boolean(formik.errors.apellidom)}
          helperText={formik.touched.apellidom && formik.errors.apellidom}/>
        </Box>
        <Box display="flex">
          <CustomTextInput 
          id={"correo"}
          name={"correo"}
          label={"Correo Electrónico"}
          value={formik.values.correo}
          onChange={formik.handleChange}
          error={formik.touched.correo && Boolean(formik.errors.correo)}
          helperText={formik.touched.correo && formik.errors.correo} />
          <CustomTextInput 
          id={"telefono"}
          name={"telefono"}
          label={"Teléfono Celular"}
          value={formik.values.telefono}
          onChange={formik.handleChange}
          error={formik.touched.telefono && Boolean(formik.errors.telefono)}
          helperText={formik.touched.telefono && formik.errors.telefono} />
          <CustomButtonA style={{ paddingRight: "30px" }} children={"Crear Cliente"} type='submit'/>
        </Box>
      </form>
    </div>
  );
};

export default BoxInputsCreate;
