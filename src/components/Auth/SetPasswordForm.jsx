import React from "react";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Box from "components/common/Box";
import Button from "components/common/Button";
import IconButton from "components/common/IconButton";
import AccountVerificationModal from "./AccountVerificationModal";
import Dialog from "components/common/DialogXS";
import PasswordStrengthBar from 'react-password-strength-bar';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Alert from 'components/common/Alert';




const SetPasswordForm = ({
  isLoading,
  showErrorMessage,
  isCPasswordDirty,
  password,
  confirm_password,
  showPassword,
  confirmshowPassword,
  passwordChecker,
  handleClickShowPassword,
  handleMouseDownPassword,
  passwordCheckerConfirm,
  handleClickShowPasswordConfirm,
  onSubmit,
  formError,
  isError,
  isOpenDialog,
  onDialogClose,

}) => {
  const classes = useStyles();

  const iconData = [];
  iconData.src = 'Group 20449/Group 20158.svg';

  return (
    <Box className={classes.login_container_fp}>
      <Text
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
        className={classes.welcome_text}>Set Your Password</Text>

      <FormControl
        sx={{ width: "100%", marginTop: "20px" }}
        variant="outlined"
      >
        <InputLabel
          sx={{ fontSize: 16 }}
          htmlFor="outlined-adornment-password">
          Enter new password
        </InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password"

          type={showPassword ? "text" : "password"}
          value={password}
          onChange={e => passwordChecker(e.target.value)}
          // helperText={formError.password}

          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Enter new password"
        />
      </FormControl>

      <PasswordStrengthBar minLength={4} password={password} scoreWords={false} shortScoreWord={false} />




      <FormControl
        sx={{ width: "100%", marginTop: "20px" }}
        variant="outlined"
      >
        <InputLabel
          sx={{ fontSize: 16 }}
          htmlFor="outlined-adornment-password-confirm">
          Confirm new password
        </InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password-confirm"

          type={confirmshowPassword ? "text" : "password"}
          value={confirm_password}
          onChange={e => passwordCheckerConfirm(e.target.value)}
          
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordConfirm}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {!confirmshowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm new password"
        />
      </FormControl>
      {showErrorMessage && isCPasswordDirty ? <Text
        sx={{
          fontSize: "12px",
          fontWeight: "regular",
          color: "#E85959",
          marginTop: "10px"
        }}
      >
        <InfoOutlinedIcon sx={{
          fontSize: "12px",
        }} /> Password doesn't match </Text> : ''}




      <Dialog
        open={isOpenDialog}
        onClose={onDialogClose} title="Account under verification" disableCloseIcon icon={iconData} children={<AccountVerificationModal />} />



      <Box mt={3}>
        <Button
          sx={{ fontSize: "16px" }}
          className={classes.LoginButton} type="submit" onClick={onSubmit}>
          SUBMIT
        </Button>
      </Box>
      {isError !== '' ?
        <Box>
          <Alert severity="error">{isError}</Alert>
        </Box>
        : ''}






    </Box>

  );
}



const useStyles = makeStyles((theme) => ({
  login_container_fp: {
    position: "relative",
    top: "70%",
    width: "100%",
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
export default SetPasswordForm;