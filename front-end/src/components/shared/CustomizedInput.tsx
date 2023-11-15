import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  lable: string;
};
export const CustomizedInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.lable}
      type={props.type}
      InputProps={{ style: { width: "400px", borderRadius:10, fontSize:20, color:"white" } }}
    ></TextField>
  );
};
