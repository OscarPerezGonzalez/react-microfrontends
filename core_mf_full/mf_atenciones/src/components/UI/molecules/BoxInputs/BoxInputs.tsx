import React, { useState } from "react";
import CustomIconTitle from "../../atoms/IconTitle/IconTitle";
import CustomTextInput from "../../atoms/Input/CustomTextInput";
import CustomButtonA from "../../atoms/Button/CustomButtonA";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Alert, Backdrop, Box, CircularProgress, Snackbar } from "@mui/material";
import './_styles.css'
import { useAtencionesContext } from "../../../../providers/AtencionesProvider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  backDrop: {
    backdropFilter: "blur(3px)",
  },
}));

const validationSchema = yup.object({
  correoElectronico: yup
    .string()
    .email("Introduce un correo Válido")
    .required("El correo es requerido"),
  nombre: yup.string().required("El Nombre es Requerido"),
  apellidoPaterno: yup.string().required("El Apellido Paterno es Requerido"),
  apellidoMaterno: yup.string().notRequired(),
  numeroCelular: yup.string().matches(/^[0-9]+$/, "Deben de ser solo digitos").min(10,"Deben ser 10 números").max(10,"Deben ser 10 números"),
  rfc: yup.string(),
  no_tarjeta: yup.string(),
  no_cuenta: yup.string(),
});

const initialValues = {
  nombre: '',
  correoElectronico: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  numeroCelular: '',
  rfc: '',
  no_tarjeta: '',
  no_cuenta:''
};

const BoxInputsForm = () => {
  const classes = useStyles();
  const [evento, setEvento] = useState({})

  const {errors, handleClientInfo, handleClientSearch, client, setErrors, isLoading} = useAtencionesContext();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    const updated = {error: false}
    //@ts-ignore
    setErrors({...errors,...updated})
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      handleClientSearch(evento)
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "12.5%",
        right: "12.5%",
        bottom: 0,
        height: "65%",
        backgroundColor: "white",
        border: "2px solid #D5D5D5",
        borderRadius: "12px",
      }}
    >
      <CustomIconTitle />
      <form onSubmit={e => {
        formik.handleSubmit(e)
         setEvento(e)}}>
        <Box display="flex">
          <CustomTextInput 
          id={"nombre"}
          name={"nombre"}
          label={"Nombre(s)"}
          value={(client.nombre = formik.values.nombre)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)}}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}/>
          <CustomTextInput 
          id={"apellidoPaterno"}
          name={"apellidoPaterno"}
          label={"Apellido Paterno"}
          value={(client.apellidoPaterno = formik.values.apellidoPaterno)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.apellidoPaterno && Boolean(formik.errors.apellidoPaterno)}
          helperText={formik.touched.apellidoPaterno && formik.errors.apellidoPaterno}/>
          <CustomTextInput 
          id={"apellidoMaterno"}
          name={"apellidoMaterno"}
          label={"Apellido Materno"}
          value={(client.apellidoMaterno = formik.values.apellidoMaterno)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.apellidoMaterno && Boolean(formik.errors.apellidoMaterno)}
          helperText={formik.touched.apellidoMaterno && formik.errors.apellidoMaterno}/>
        </Box>
        <Box display="flex">
          <CustomTextInput 
          id={"correoElectronico"}
          name={"correoElectronico"}
          label={"Correo Electrónico"}
          value={(client.correoElectronico = formik.values.correoElectronico)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.correoElectronico && Boolean(formik.errors.correoElectronico)}
          helperText={formik.touched.correoElectronico && formik.errors.correoElectronico} />
          <CustomTextInput 
          id={"numeroCelular"}
          name={"numeroCelular"}
          label={"Teléfono Celular"}
          value={(client.numeroCelular = formik.values.numeroCelular)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.numeroCelular && Boolean(formik.errors.numeroCelular)}
          helperText={formik.touched.numeroCelular && formik.errors.numeroCelular} />
          <CustomTextInput 
          id={"rfc"}
          name={"rfc"}
          label={"RFC"}
          value={(client.rfc = formik.values.rfc)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.rfc && Boolean(formik.errors.rfc)}
          helperText={formik.touched.rfc && formik.errors.rfc} />
        </Box>
        <Box display="flex">
          <CustomTextInput 
          id={"no_tarjeta"}
          name={"no_tarjeta"}
          label={"Número de tarjeta"}
          value={(client.no_tarjeta = formik.values.no_tarjeta)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.no_tarjeta && Boolean(formik.errors.no_tarjeta)}
          helperText={formik.touched.no_tarjeta && formik.errors.no_tarjeta} />
          <CustomTextInput 
          id={"no_cuenta"}
          name={"no_cuenta"}
          label={"Número de Cuenta"}
          value={(client.no_cuenta = formik.values.no_cuenta)}
          onChange={e => {
            handleClientInfo(e)
            formik.handleChange(e)
          }}
          error={formik.touched.no_cuenta && Boolean(formik.errors.no_cuenta)}
          helperText={formik.touched.no_cuenta && formik.errors.no_cuenta}/>
          <CustomButtonA style={{ paddingRight: "30px" }} children={"Buscar"} type={'submit'}/>
        </Box>
      </form>
      <div style={{ position: 'fixed' }}>
				<Backdrop
					sx={{
						color: '#833177',
						zIndex: theme => theme.zIndex.drawer + 99999,
					}}
					classes={{ root: classes.backDrop }}
					open={isLoading}
				>
					<CircularProgress style={{ color: '#833177' }} />
				</Backdrop>
			</div> 
      <Snackbar open={errors.error} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} sx={{position: 'fixed',left: 0,top: '80%'}} severity='error'>{errors.errorMsg}</Alert>
      </Snackbar>
    </div>
  );
};

export default BoxInputsForm;
