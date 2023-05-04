import React, { useState } from "react";
import CustomIconTitle from "../../atoms/IconTitle/IconTitle";
import CustomTextInput from "../../atoms/Input/CustomTextInput";
import CustomButtonA from "../../atoms/Button/CustomButtonA";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Typography,
  Box,
  Backdrop,
  CircularProgress,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar
} from "@mui/material";
import "./_styles.css";
import { makeStyles } from "@mui/styles";
import { useLoginContext } from "../../../../providers/AuthProvider";

const useStyles = makeStyles(() => ({
  backDrop: {
    backdropFilter: "blur(3px)",
  },
}));

const validationSchema = yup.object({
  usuario: yup.string().required("El Usuario es Requerido"),
  contraseña: yup.string().required("La Contraseña es requerida"),
});

const initialValues = {
  usuario: "",
  contraseña: "",
};

const BoxInputsForm = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false)

  const { errors, handleLogin, handleUserLogin, userLogin, isLoading, setErrors} = useLoginContext();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
    },
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
      aria-label="toggle password visibility"
      onClick={() => setShowPassword(!showPassword)}
      onMouseDown={handleMouseDownPassword}
      edge="end"
      >
        {showPassword ? <VisibilityOff/> : <Visibility/>}
      </IconButton>
    </InputAdornment>
)


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    
    const updated = {error: false}
    //@ts-ignore
    setErrors({...errors,...updated})
  }

  return (
		<div
			style={{
				position: 'absolute',
				top: '30%',
				left: '35%',
				right: '35%',
				bottom: 0,
				height: '486px',
				width: '414px',
				backgroundColor: 'white',
				border: '2px solid #D5D5D5',
				borderRadius: '12px',
				display: 'grid',
				zIndex: 'auto',
			}}
		>
			<CustomIconTitle />
			<Typography
				//@ts-ignore
				sx={{ typography: theme => theme.typography.login }}
				style={{ marginLeft: '33px', marginTop: '-60px', height: '24px' }}
			>
				{' '}
				Iniciar Sesión
			</Typography>
			<form onSubmit={handleLogin} style={{ marginLeft: '33px', marginTop: '-100px' }}>
				<CustomTextInput
					id={'usuario'}
					name={'usuario'}
					label={'Usuario*'}
					value={(userLogin.usuario = formik.values.usuario)}
					onChange={e => {
						handleUserLogin(e)
						formik.handleChange(e)
					}}
					error={formik.touched.usuario && Boolean(formik.errors.usuario)}
					helperText={formik.touched.usuario && formik.errors.usuario}
				/>
				<CustomTextInput
					id={'contraseña'}
					name={'contraseña'}
					type={showPassword ? 'text' : 'password'}
					label={'Contraseña*'}
					value={(userLogin.contraseña = formik.values.contraseña)}
					onChange={e => {
						handleUserLogin(e)
						formik.handleChange(e)
					}}
					error={formik.touched.contraseña && Boolean(formik.errors.contraseña)}
					helperText={formik.touched.contraseña && formik.errors.contraseña}
					InputProps={{ endAdornment }}
				/>
				<Box display={'grid'} justifySelf={'center'} justifyItems={'center'} marginLeft={'-33px'}>
					<CustomButtonA children={'Iniciar Sesión'} type='submit' disabled={!formik.isValid || !formik.dirty} />
				</Box>
			</form>
			<div style={{ position: 'fixed' }}>
				<Backdrop
					sx={{
						color: '#833177',
						zIndex: theme => theme.zIndex.drawer + 1,
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
	)
};

export default BoxInputsForm;
