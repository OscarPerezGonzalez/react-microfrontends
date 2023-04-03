import PropTypes from "prop-types";

import { pucclTheme } from "../theme/theme";
import { ThemeProvider } from "@mui/material";


const StyleProvider = ({ children }) => {
  return <ThemeProvider theme={pucclTheme}>{children}</ThemeProvider>;
};

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyleProvider;
