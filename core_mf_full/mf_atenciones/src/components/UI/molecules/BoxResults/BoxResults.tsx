import React from "react"
import CustomTable from "../../atoms/Table/CustomTable"
import TextCreateComponent from "../../atoms/TextCreate/TextCreate"
import { useAtencionesContext } from "../../../../providers/AtencionesProvider";


const BoxResultComponent = () => {
  const {data} = useAtencionesContext()
  return (
    <>
      {data.length ? (
        <CustomTable />
      ) : (
        <div
          style={{
            backgroundColor: "white",
            border: "2px solid #D5D5D5",
            borderRadius: "12px",
            height: "70%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <TextCreateComponent/>
        </div>
      )}
    </>
  );
}; 

export default BoxResultComponent
