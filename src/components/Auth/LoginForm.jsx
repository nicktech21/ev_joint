import * as React from "react";
import Link from "components/common/Link";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";
import IconButton from "components/common/IconButton";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from 'components/common/Alert';

export default function      LoginForm({
	forgotPwdUrl,
	onSubmit,
	onChange,
	onEnterSubmit,
	isLoading = false,
	formError,
	formData,
  isError,
}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className={classes.login_container}>
      <Text
        sx={{
          fontSize: "21px",
          fontWeight: "bold",
        }}
        className={classes.welcome_text}
      >
        Welcome Back!
      </Text>
      <Box>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          label="Email"
          value={formData.email}
          onChange={e => onChange("email", e)}
          helperText={formError.email}
          error={formError.email}
          sx={{ width: "36ch", marginTop: "20px" }}
          InputLabelProps={{ style: { fontSize: 16 } }}
        />
      </Box>

      <FormControl sx={{ width: "36ch", marginTop: "20px" }} variant="outlined">
        <InputLabel sx={{ fontSize: 16 }} htmlFor="outlined-adornment-password">
          Password
        </InputLabel>
        <OutlinedInput
          fullWidth
          type={values.showPassword ? "text" : "password"}
          value={formData.password}
          onChange={e => onChange("password", e)}
          onKeyUp={(e) => onEnterSubmit(e)}
          // helperText={formError.password}
					 

          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      {isError !== '' ?   
      <Box>
      <Alert severity="error">{isError}</Alert>
      </Box>
      : '' }

      <Box>
        <Link
          underline="none"
          sx={{
            color: "#535D79",
          }}
          className={classes.login_via_otp}
          to="/send-otp"
        >
          Login via otp
        </Link>
        <Link
          underline="none"
          sx={{
            color: "#535D79",
          }}
          className={classes.forgot_password}
          to="/forgot-password"
        >
          Forgot Password?
        </Link>
      </Box>

      

      <Box mt={3}>
        <Button
          sx={{ fontSize: "16px" }}
          className={classes.LoginButton}
          onClick={onSubmit}
          
         >
        
          Log In
        </Button>
      </Box>
      <Box mt={1.8}>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: "regular",
          }}
        >
          New to evjoints?
          <Link
            underline="none"
            className={classes.register_button}
            to="/Registration"
          >
            Register
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  login_container: {
    position: "relative",
    top: "35%",
  },
  welcome_text: {
    fontFamily: "Nunito Sans",
  },
  forgot_password: {
    float: "right",
    font: "normal normal bold 14px/19px Nunito Sans",
    letterSpacing: "0px",
    color: "#535d79",
    opacity: 1,
    marginTop: "10px !important",
    marginBottom: "20px !important",
    textDecoration: "none",
  },
  login_via_otp: {
    float: "left",
    font: "normal normal bold 14px/19px Nunito Sans",
    letterSpacing: "0px",
    color: "#535d79",
    opacity: 1,
    marginTop: "10px !important",
    marginBottom: "20px !important",
    textDecoration: "none",
  },
  LoginButton: {
    opacity: "100%",
    backgroundColor: "#19aa69",
    color: "white",
    width: "100% !important",
    border: "none",
    height: "50px",
    marginTop: "20px",
  },
  register_button: {
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
