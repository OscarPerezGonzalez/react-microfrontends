import { createTheme } from "@mui/material/styles";
import '../../src/index.css'

export const pucclTheme = createTheme({
    palette: {
        primary: {
            main: '#833177',
        },
        secondary: {
          main: '#F5F5F5',
          contrastText: '#fff',
        },
        footer: {
            main: '#EEEEEE'
        }
    },
    typography: {
        header_number : {
            fontSize: 14,
            fontWeight: 'bold',
        },
        header_text : {
            fontFamily: 'CustomFont',
            fontSize: 26,
            fontWeight: 'bold',
            letterSpacing: '-0.05em',
        },
        name:{
            fontSize: 14,
            fontWeight: '500',
            textTransform:"capitalize"
        },
        main_text:{
            fontSize: 12,
            fontWeight: '500',
        },
        footer:{
            fontSize: 12,
            fontWeight: '400',
        },
        footer_notas:{
            fontSize: 14,
            fontWeight: '400',  
        },
        menu_title:{
            fontSize: 16,
            fontWeight: '500'
        },
        list:{
            fontSize: 14,
            fontWeight: '500'
        }
    },
});