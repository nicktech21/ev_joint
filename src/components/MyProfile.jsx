import React from "react";
import { useRef } from "react";
import Box from "../components/common/Box";
import { makeStyles } from "@mui/styles";
import Text from "../components/common/Text";
import Grid from "components/common/Grid";
import Stack from "../components/common/Stack";
import Card from "../components/common/Card";
import CardContent from "../components/common/CardContent";
import FormControl from "@mui/material/FormControl";
import Modal from "../components/common/Modal";
import TextField from "@mui/material/TextField";
import Button from "../components/common/Button";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "components/common/MenuItem";
import Select from "@mui/material/Select";
import DatePicker from "../components/common/DatePicker";
import Image from "../components/common/Image";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Input from '@mui/material/Input';




const Myprofile = ({

  onSubmit,
  onChange,
  formData,
  formError,
  onImageChange,
  //
  disable,
  enableFieldsEdit,
  profilePic,
  enableProfilePicEdit,
  editFieldCancle,

}) => {

  const classes = useStyles();
  const imageRef = useRef(null);
  let history = useHistory();


  return (
    <Box className={classes.center} sx={{ marginTop: "2rem" }}>
      <Card>
        <CardContent>
          <Text
            variant="h5"
            color="#202020"
            sx={{display:"flex", justifyContent:"space-between"}}
          >
          <Box
            sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "40px" }}
          >
            <ArrowBackIcon
              sx={{ fontSize: "24px", fontWeight: "bold", marginRight: "10px" }}
              onClick={() => history.goBack()}
            />
            My Profile
            </Box>
          <Button onClick={() => enableFieldsEdit()} variant="outlined"><EditIcon/></Button>
          </Text>
        
          <Stack
            direction="row"
            columnspacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
            justifyContent="space-between"
            sx={{
              marginBottom: "1.25rem",
            }}
          >
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}>
              <Grid item xs={2}></Grid>

              <Grid item xs={10}>
                <Box className={classes.profileImageContainer}>


                  <InputLabel
                    disabled={disable}
                    htmlFor="profileImage"> {formData.thumbnail ? (
                      <Image
                        className={classes.profileImage}
                        src={formData.thumbnail}
                      />


                    ) : (
                      <Image
                        className={classes.profileImage}
                        src="profileimg.png"
                      />
                    )}</InputLabel>


                <Box>

                  <Input ref={imageRef}
                    disabled={profilePic}
                    type="file" label="Profile Image" id="profileImage" onChange={(event) => onImageChange(event)}
                    style={{ display: "none" }} />
                  <Avatar className={classes.IconContainer}>
                    <EditIcon onClick={() =>enableProfilePicEdit()} />
                  </Avatar>
                </Box>
                </Box>

              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Text variant="body1" className={classes.formSubHeading}>
                  
                </Text>
                <Text variant="body1" className={classes.formHeading}>
                  PERSONAL DETAILS
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Full name"
                    disabled={disable}
                    variant="outlined"
                    error={formError.name}
                    helperText={formError.name}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    value={formData.name}
                    onChange={e => onChange("name", e.target.value)}
                  />

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        className={classes.form_space}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        value={formData.email}
                        disabled={true}
                        onChange={e => onChange("email", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Contact Number"
                        variant="outlined"
                        className={classes.form_space}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        value={formData.contact}
                        disabled={true}
                        onChange={e => onChange("mobile", e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    className={classes.form_space}
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid style={{ marginBottom: "1rem" }} item xs={12} sm={12} md={6} lg={6}>



                      <DatePicker
                        label="Date of birth"
                        disabled={disable}
                        // error={formError.date_of_birth}
                        helperText={formError.date_of_birth}
                        value={formData.date_of_birth}
                        onChange={e => onChange("date_of_birth", e)}
                        renderInput={(params) => <TextField {...params}
                          value={formData.date_of_birth} />}
                      />

                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        disabled={disable}
                        label="Pan"
                        variant="outlined"
                        error={formError.pan}
                        helperText={formError.pan}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        onChange={e => onChange("pan", e.target.value)}
                        value={formData.pan}
                      />
                    </Grid>
                  </Grid>

                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={2}>

              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel
                        id="businessType"
                        name="businessType"
                        disabled={disable}

                        value={formData.business_type}
                      >
                        Type of business
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="businessType"
                        disabled={disable}
                        label=" Type of business "
                        onChange={e => onChange("business_type", e.target.value)}
                        // helperText={formError.business_type}
                        // error={formError.business_type}
                        value={formData.business_type}
                      >
                        <MenuItem value={1}>Business Type 1</MenuItem>
                        <MenuItem value={2}>Business Type 2</MenuItem>
                        <MenuItem value={3}>Business Type 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <TextField
                    fullWidth
                    disabled={disable}
                    id="outlined-basic"
                    label="Business Website URL"
                    variant="outlined"
                    error={formError.business_url}
                    helperText={formError.business_url}
                    className={classes.form_space}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    onChange={e => onChange("business_url", e.target.value)}
                    value={formData.business_url}
                  />

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        disabled={disable}
                        id="outlined-basic"
                        label="Business email id"
                        variant="outlined"
                        error={formError.business_email}
                        helperText={formError.business_email}
                        className={classes.form_space}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        onChange={e => onChange("business_email", e.target.value)}
                        value={formData.business_email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Business contact number"
                        disabled={disable}
                        variant="outlined"
                        error={formError.business_mobile}
                        helperText={formError.business_mobile}
                        className={classes.form_space}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        onChange={e => onChange("business_mobile", e.target.value)}
                        value={formData.business_mobile}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="GST NO"
                    variant="outlined"
                    disabled={disable}
                    error={formError.gst_no}
                    helperText={formError.gst_no}
                    className={classes.form_space}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    onChange={e => onChange("gst", e.target.value)}
                    value={formData.gst_no}
                  />


                  <TextField
                    fullWidth
                    id="outlined-basic"
                    disabled={disable}
                    label="Area"
                    variant="outlined"
                    error={formError.area}
                    helperText={formError.area}
                    className={classes.form_space}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    onChange={e => onChange("area", e.target.value)}
                    value={formData.area}
                  />


                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}
                 sx={{display:"flex", justifyContent:"space-between" }}
                 >
                  <Button 
                  // sx={{
                  //   padding:"1rem"
                  // }}
                  
                  variant="outlined" color="primary" 
                  onClick={()=>editFieldCancle()}
                  className={classes.cancel_button}
                  >

                    Cancel
                  </Button>
                  <Button
                  
                    // style={{ marginLeft: "12rem" 
                    // }}
                    variant="contained"
                    color="primary"
                    disabled={disable}
                    onClick={() => onSubmit()}
                    className={classes.update_button}
                  >

                    Update Profile
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
      <Modal></Modal>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  viewButtonLabel: { textTransform: "none" },

  form_space: {
    marginTop: "1.25rem",
    "@media (max-width:768px)": {
      marginTop: "1.5rem",
    },
  },

  pageHeading: {
    fontSize: "24px",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    textTransform: "none",
    color: "#707070",
    opacity: 1,
  },

  form_option: {
    padding: "17px 38px",
    border: "1px solid #e6e6e6",
  },

  formHeading: {
    fontSize: "1rem",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    color: "#1E1E1E",
  },

  formSubHeading: {
    fontSize: "0.75rem",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    color: "#E9E9E9",
    marginTop: "1.6rem",
  },

  form_container: {
    padding: "1.25rem",
    width: "65%",
    marginLeft: "2%",
    // display:"flex", justifyContent:"space-between",
    "@media (max-width:768px)": {
      padding: "0.5rem",
      width: "98%",
      margin: "auto",
      
    },
  },

  profileImageContainer: {
    alignContent: "center",
    justifyContent: "center",
    width: "55%",

    marginLeft: "5%",
    "@media (max-width:768px)": {width:"55%"},
  },

  profileImage: {
    width: "29.5%",
    height: "8rem",
    borderRadius:"50%",
    "@media (max-width:768px)": {
      width: "100%",
      height: "9rem",
    },
  },
  IconContainer: {
    padding: "0.75rem",
    borderRadius: "50%",
    backgroundColor: "#19AA69",
    color: "white",
    height: "0.75rem",
    width: "0.75rem",
    position: "relative",
    left: "55%",
    bottom: "1.5rem",
  },

  EditIcon: {
    margin: "1rem",


  },
  cancel_button:{
    "@media (max-width:768px)": {
      padding:"1.5rem",
      height: "0rem",
      fontSize:"14px"
    },
  },

  update_button:{
    "@media (max-width:768px)": {
      padding:"1.5rem",
      height: "0rem",
      fontSize:"14px",
      
    },
  }

  
}));
export default Myprofile;
