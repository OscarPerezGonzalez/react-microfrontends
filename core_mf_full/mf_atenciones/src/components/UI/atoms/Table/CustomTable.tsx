import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  TablePagination,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { makeStyles, DefaultTheme } from "@mui/styles";
import "./_styles.css";
import CustomButtonB from "../Button/CustomButtonB";
import { useAtencionesContext } from "../../../../providers/AtencionesProvider";

const DEFAULT_ROWS_PER_PAGE = 3;

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

interface MyTheme extends DefaultTheme {
  direction: string
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme : MyTheme ={
    direction: ''
  } 
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const useStyles = makeStyles({
  cell: {
    fontSize: "14px",
    fontWeight: "400",
    padding: "0.74rem 1rem 0.73rem 1rem !important",
  },
  header: {
    fontSize: "14px",
    fontWeight: "540",
    padding: "0.5rem 1rem 0.5rem 1rem !important",
    position: "sticky",
    top: "0",
    zIndex: "1",
    backgroundColor: "white",
  },
});

const CustomTable = () => {
  const classes = useStyles();

  const {data} = useAtencionesContext()
  console.log(data)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", height: "105%" }}>
      <TableContainer component={Paper} style={{ height: "80%" }}>
        <Table>
          <TableHead style={{ fontWeight: "bolder" }}>
            <TableRow>
              <TableCell className={classes.header}>Nombre(s)</TableCell>
              <TableCell className={classes.header}>Apellido Paterno</TableCell>
              <TableCell className={classes.header}>Apellido Materno</TableCell>
              <TableCell className={classes.header}>
                Correo electrónico
              </TableCell>
              <TableCell className={classes.header}>Teléfono Celular</TableCell>
              <TableCell className={classes.header}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((item) => (
              <TableRow key={item.id_cliente}>
                <TableCell className={classes.cell}>{item.primerNombre +" "} {(item.segundo_nombre == null) ? "" : item.segundoNombre}</TableCell>
                <TableCell className={classes.cell}>{item.apellidoPaterno}</TableCell>
                <TableCell className={classes.cell}>{item.apellidoMaterno}</TableCell>
                <TableCell className={classes.cell}>{item.correoElectronico}</TableCell>
                {/* <TableCell className={classes.cell}>{item.telefonos.filter((item) => )}</TableCell> */}
                <TableCell>
                  <CustomButtonB children={"Iniciar Atención"} />
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 44.65 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 9, 12, { label: "Todos", value: -1 }]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        labelRowsPerPage="Filas por página"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
        sx={{ alignSelf: "flex-end", borderBottom: "0" }}
      />
    </Box>
  );
};

export default CustomTable;
