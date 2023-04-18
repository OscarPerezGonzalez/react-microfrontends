import React from "react";
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
  IconButton
} from "@mui/material";
import "./_styles.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  backDrop: {
    backdropFilter: "blur(3px)",
  },
}));

const validationSchema = yup.object({
  user: yup.string().required("El Usuario es Requerido"),
  password: yup.string().required("La Contraseña es requerida"),
});

const initialValues = {
  user: "",
  password: "",
};

const BoxInputsForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false)

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

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "35%",
        right: "35%",
        bottom: 0,
        height: "486px",
        width: "414px",
        backgroundColor: "white",
        border: "2px solid #D5D5D5",
        borderRadius: "12px",
        display: "grid",
        zIndex: "auto",
      }}
    >
      <CustomIconTitle />
      <Typography
        sx={{ typography: (theme) => theme.typography.login }}
        style={{ marginLeft: "33px", marginTop: "-60px", height: "24px" }}
      >
        {" "}
        Iniciar Sesión
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{ marginLeft: "33px", marginTop: "-100px" }}
      >
        <CustomTextInput
          id={"user"}
          name={"user"}
          label={"Usuario"}
          value={formik.values.user}
          onChange={formik.handleChange}
          error={formik.touched.user && Boolean(formik.errors.user)}
          helperText={formik.touched.user && formik.errors.user}
        />
        <CustomTextInput
          id={"password"}
          name={"password"}
          type={showPassword ? "text" : "password"}
          label={"Contraseña"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{ endAdornment }}
        />
        <Box
          display={"grid"}
          justifySelf={"center"}
          justifyItems={"center"}
          marginLeft={"-33px"}
        >
          <CustomButtonA
            children={"Iniciar Sesión"}
            onClick={handleOpen}
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          />
        </Box>
      </form>
      <div style={{ position: "fixed" }}>
        <Backdrop
          sx={{ color: "#833177", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          classes={{ root: classes.backDrop }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress style={{ color: "#833177" }} />
        </Backdrop>
      </div>
    </div>
  );
};

export default BoxInputsForm;
