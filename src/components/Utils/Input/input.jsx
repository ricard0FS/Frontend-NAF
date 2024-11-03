import React from "react";
import TextField from "@mui/material/TextField";
import { Box, MenuItem } from "@mui/material";

const Input = ({
  label,
  placeholder,
  select = false,
  options,
  defaultValue,
  name,
  value,
  onChange,
}) => {
  return (
    <Box
      sx={{
        marginBottom: "16px", // Adiciona margem inferior para espaçamento
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black", // Cor da borda
          },
          "&:hover fieldset": {
            borderColor: "black", // Cor da borda ao passar o mouse
          },
          "&.Mui-focused fieldset": {
            borderColor: "black", // Cor da borda quando o input estiver focado
          },
        },
        "& .MuiInputLabel-root": {
          color: "black",
        },
        "& .Mui-focused .MuiInputLabel-root": {
          color: "black",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black",
        },
      }}
    >
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        select={select}
        defaultValue={defaultValue}
        name={name}
        value={value}
        onChange={onChange}
      >
        {select && options
          ? options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          : null}
      </TextField>
    </Box>
  );
};

export default Input;
