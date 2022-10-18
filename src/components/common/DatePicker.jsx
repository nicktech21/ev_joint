import React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker  } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DatePicker({
  error = "",
  value,
  onChange,
  name='',
  textFieldProps = {},
  ...restProps
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker 
        value={value}
        onChange={onChange}
        inputFormat="dd/MM/yyyy"
        {...restProps}
        renderInput={(params) => (
          <TextField
          fullWidth
          variant="outlined"
            {...params}
            {...textFieldProps}
            helperText={restProps.helperText}
            error={error}
          />
        )}
      />
    </LocalizationProvider>
  );
}
