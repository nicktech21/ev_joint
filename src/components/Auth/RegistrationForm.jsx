import * as React from "react";
import Link from "components/common/Link";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import MenuItem from "components/common/MenuItem";
import Button from "components/common/Button";
import DatePicker from "components/common/DatePicker";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from 'components/common/Alert';



const RegisterForm = ({
	onSubmit,
	onChange,
	formData,
	formError,
  isError,
}) => {
  const classes = useStyles();
  const today = new Date();

    
  
  return (
    <Box className={classes.login_container_reg}>
          <Text
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
            className={classes.welcome_text}
          >
            <ArrowBackIcon  sx={{ fontSize: "24px", fontWeight: "bold", marginRight: "10px" }} />
            Create new account
          </Text>

          <TextField
            fullWidth
            id="outlined-basic"
            label="Full name"
            value={formData.name}
					  onChange={e => onChange("name", e.target.value)}
					  helperText={formError.name}
					  error={formError.name}
            variant="outlined"
            style={{ marginTop: "20px" }}
            size="small"
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Email id"
            value={formData.email}
					onChange={e => onChange("email", e.target.value)}
					helperText={formError.email}
					error={formError.email}
            variant="outlined"
            style={{ marginTop: "20px"

                        
          }}
          size="small"
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <Box style={{ marginTop: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}   >
              <DatePicker
                label="Date of birth"
                value={formData.date_of_birth}
                onChange={e => onChange("date_of_birth", e)}
                maxDate={today}
            sx={{height:"1.5rem"}}
                 
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <TextField
            fullWidth
            id="outlined-basic"
            label="Contact number"
            value={formData.mobile}
					onChange={e => onChange("mobile", e.target.value)}
					helperText={formError.mobile}
					error={formError.mobile}
            variant="outlined"
            style={{ marginTop: "20px" }}
            size="small"
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="PAN"
            value={formData.pan}
					onChange={e => onChange("pan", e.target.value)}
					helperText={formError.pan}
					error={formError.pan}
            variant="outlined"
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="GST number"
            value={formData.gst_no}
            onChange={e => onChange("gst_no", e.target.value)}
            helperText={formError.gst_no}
            error={formError.gst_no}
            variant="outlined"
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Area available in sq. ft."
            value={formData.area}
            onChange={e => onChange("area", e.target.value)}
            helperText={formError.area}
            error={formError.area}
            variant="outlined"
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <FormControl sx={{ top: "20px", width: "100% !important" }}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ marginBottom: "10px" }}
            >
              Have a business attached to area
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                sx={{
                  // some styles
                  ".MuiFormControlLabel-label": {
                    position: "relative",
                    right: "35%",
                  },
                }}
                style={{
                  marginLeft: "0",
                  marginRight: "10%",
                  padding: "10px 0px",
                  width: "45%",
                  height: "1.5rem",
                  borderRadius:"5px" 
                }}
                className={classes.form_option}
                value="yes"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#6c757d",
                      },
                    }}
                  />
                }
                label="Yes"
                labelPlacement="start"
              />
              <FormControlLabel
                sx={{
                  
                  ".MuiFormControlLabel-label": {
                    position: "relative",
                    right: "35%",
                  },
                }}
                style={{ marginLeft: "0", padding: "10px 0px", width: "45%", height:"1.5rem",borderRadius:"5px" }}
                className={classes.form_option}
                value="no"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#6c757d",
                      },
                    }}
                  />
                }
                labelPlacement="start"
                label="No"
              />
            </RadioGroup>
          </FormControl>

          <Box sx={{ minWidth: 120, marginTop: "40px" }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label"
              
              
              >
                Business type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Business type"
                size="small"
                value={formData.business_type}
                // helperText={formError.business_type}
                error={formError.business_type}
                onChange={e => onChange("business_type", e.target.value)}
                InputLabelProps={{ style: { fontSize: 12 } }}
                
              >
                <MenuItem value="Business type 1">Business type 1</MenuItem>
                <MenuItem value="Business type 2">Business type 2</MenuItem>
                <MenuItem value="Business type 3">Business type 3</MenuItem>
              </Select>
            </FormControl>

            
          </Box>

          <TextField
            fullWidth
            id="outlined-basic"
            label="Business website URL"
            size="small"
            value={formData.business_url}
            onChange={e => onChange("business_url", e.target.value)}
            helperText={formError.business_url}
            error={formError.business_url}
            variant="outlined"
            style={{ marginTop: "20px" }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Business email id"
            size="small"
            value={formData.business_email}
            onChange={e => onChange("business_email", e.target.value)}
            helperText={formError.business_email}
            error={formError.business_email}
            variant="outlined"
            style={{ marginTop: "20px" }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Business contact number"
            size="small"
            value={formData.business_mobile}
            onChange={e => onChange("business_mobile", e.target.value)}
            helperText={formError.business_mobile}
            error={formError.business_mobile}
            variant="outlined"
            style={{ marginTop: "20px" }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <Box mt={3}>
          <Button
          sx={{ fontSize: "16px" }}
          className={classes.LoginButton}
          type="submit"
          onClick={onSubmit}
        >
          Register
        </Button>
          </Box>

          {isError !== '' ?   
      <Box>
      <Alert severity="error">{isError}</Alert>
      </Box>
      : '' }

          
          <Box mt={1.8}>
            <Text
              sx={{
                fontSize: "14px",
                fontWeight: "regular",
              }}
            >
              Already have an account?
              <Link
                ml={1}
                underline="none"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
                className={classes.register_button}
                to="/"
              >
                Log In
              </Link>
            </Text>
          </Box>
        </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  login_container_reg: {
    position: "relative",
    top: "50px",
    marginBottom: "100px",
  },
welcome_text: {
  fontFamily: "Nunito Sans",
},
form_option : {
    padding: "12px 28px",
    border: "1px solid #e6e6e6",
  },
  LoginButton : {
    opacity: "100%",
    backgroundColor: "#19aa69",
    color: "#ffffff",
    width: "100% !important",
    border: "none",
    height: "50px",
    marginTop: "20px",
  },
  register_button : {
    textAlign: "right",
    font: "normal normal bold 14px/19px Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0px",
    color: "#19aa69",
    textDecoration: "none",
    marginTop: "8px",
    marginLeft: "10px",
  },
  
}));
export default RegisterForm;