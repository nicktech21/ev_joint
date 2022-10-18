import React from "react";

import Box from "components/common/Box";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Grid from "components/common/Grid";
import Stack from "components/common/Stack";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";
import Button from "components/common/Button";
import MenuItem from "components/common/MenuItem";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";

import Select from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DropzoneArea } from "react-mui-dropzone";
import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useHistory } from "react-router-dom";

const AddStationForm = ({
  props,
  onSubmit,
  onChange,
  formData,
  onImageChange,
  formManage,
  isLoading,
  formError,
}) => {
  let history = useHistory();
  const classes = useStyles();
  var amenities = props.amenitiesData;
  var network = props.networkData;

// console.log( "amenities" ,props.amenitiesData);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  let amenitiesList = [];
  
  const iconData = [];
  iconData.src = "../Group 20449/Group 20158.svg";

  
  return (
    <Box className={classes.center}>
      <Card>
        <CardContent>
          <Text
            variant="h5"
            color="#202020"
            sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "40px" }}
          >
            <ArrowBackIcon
              sx={{ fontSize: "24px", fontWeight: "bold", marginRight: "10px" }}
              onClick={() => history.goBack()}
            />
            Add Station
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
              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Text variant="body1" className={classes.formHeading}>
                  BASIC DETAILS
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={10}>
                <Box className={classes.form_container}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Full name"
                    value={formData.name}
                    onChange={e => onChange("name", e.target.value)}
                    helperText={formError.name}
                    error={formError.name}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email id"
                        onChange={e => onChange("email", e.target.value)}
                        value={formData.email}
                        helperText={formError.email}
                        error={formError.email}
                        variant="outlined"
                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Contact Number"
                        onChange={e => onChange("mobile", e.target.value)}
                        variant="outlined"
                        style={{ marginTop: "1.25rem" }}
                        value={formData.mobile}
                        error={formError.mobile}
                        helperText={formError.mobile}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </Grid>
                  </Grid>

                  <Box style={{ marginTop: "1.25rem" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select type of network
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select type of network"
                        value={formData.network_id}
                        
                        onChange={e => onChange("network_id", e.target.value)}
                      >
                        {network?.map((network) => (
                          <MenuItem value={network.id}>
                            {network.name}
                          </MenuItem>
                        ))} 
                        
                      </Select>
                    </FormControl>
                  </Box>

                  <FormControl
                    sx={{
                      top: "1.25rem",
                      marginBottom: "2.25rem",
                      width: "100% !important",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ marginBottom: "10px" }}
                    >
                      Type of Charging Station
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      value={formData.type}
                     
                      onChange={e => onChange("type", e.target.value)}
                    >
                      <FormControlLabel
                        sx={{
                          ".MuiFormControlLabel-label": {
                            position: "relative",
                            margin: "auto",
                          },
                        }}
                        style={{
                          marginLeft: "0",
                          marginRight: "10%",
                          padding: "10px 0px",
                          width: "45%",
                          border: "1px solid #e0e0e0",
                        }}
                        className={classes.form_option}
                        value="public"
                        control={
                          <Radio
                            sx={{
                              "&.Mui-checked": {
                                color: "#6c757d",
                              },
                            }}
                          />
                        }
                        label="public"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        sx={{
                          ".MuiFormControlLabel-label": {
                            position: "relative",
                            margin: "auto",
                          },
                        }}
                        style={{
                          marginLeft: "0",
                          padding: "10px 0px",
                          width: "45%",
                          border: "1px solid #e0e0e0",
                        }}
                        className={classes.form_option}
                        value="private"
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
                        label="Private"
                      />
                    </RadioGroup>
                  </FormControl>

                  <LocalizationProvider
                    style={{ marginTop: "1.25rem" }}
                    dateAdapter={AdapterDateFns}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ marginBottom: "10px", marginTop: "1.25rem" }}
                    >
                      Working Hours
                    </FormLabel>

                    <Grid
                      style={{ marginTop: "1.25rem" }}
                      container
                      columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                    >
                      <Grid item xs={5}>
                        <TimePicker
                          label="Open Time"
                          onChange={e => onChange("open_time", e)}
                          value={formData.open_time}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <FormLabel
                          id="demo-row-radio-buttons-group-label"
                          sx={{ margin: "1rem" }}
                        >
                          to
                        </FormLabel>
                      </Grid>
                      <Grid item xs={5}>
                        <TimePicker
                          label="Close Time"
                          value={formData.close_time}
                          onChange={e => onChange("close_time", e)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Grid>
                    </Grid>
                  </LocalizationProvider>

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Charging station URL"
                    variant="outlined"
                    onChange={e => onChange("station_url", e.target.value)}
                    value={formData.station_url}
                    helperText={formError.station_url}
                    error={formError.station_url}
                    style={{ marginTop: "1.25rem" }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Text variant="body1" className={classes.formHeading}>
                  AMENITIES
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Select Amenity
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="amenity"
                        multiple
                        value={formData.amenities}
                        // helperText={formError.amenities}
                        input={<OutlinedInput label="Select Amenity" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        onChange={e => onChange("amenities", e.target.value)}
                      >
                        {amenities.map((amenity, index) => (
                          <MenuItem key={index} value={amenity.id}>
                            <Checkbox
                              checked={
                                formData.amenities.indexOf(amenity.id) >- 1
                              }
                            />
                            <ListItemText primary={amenity.name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Text variant="body1" className={classes.formHeading}>
                  ADDRESS DETAILS
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Address 1"
                    sx={{
                      backgroundColor: "#ffffff",
                    }}
                    onChange={e => onChange("address", e.target.value)}
                    value={formData.address}
                    error={formError.address}
                    helperText={formError.address}
                    multiline
                    rows={4}
                    fullWidth
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Address 2"
                    sx={{
                      backgroundColor: "#ffffff",
                    }}
                    onChange={e => onChange("address2", e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    style={{ marginTop: "1.25rem" }}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                  />

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Landmark"
                        variant="outlined"
                        onChange={e => onChange("landmark", e.target.value)}
                        value={formData.landmark}
                        helperText={formError.landmark}
                        error={formError.landmark}

                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Pin code"
                        variant="outlined"
                        onChange={e => onChange("pin", e.target.value)}
                        value={formData.pin}
                        error={formError.pin}
                        helperText={formError.pin}
                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Street"
                        variant="outlined"
                        onChange={e => onChange("street", e.target.value)}
                        value={formData.street}
                        error={formError.street}
                        helperText={formError.street}

                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="City"
                        onChange={e => onChange("city", e.target.value)}
                        value={formData.city}
                        error={formError.city}
                        helperText={formError.city}

                        variant="outlined"
                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Box style={{ marginTop: "1.25rem" }}>
                        <FormControl fullWidth>
                          <RegionDropdown
                            country={formData.country}
                            value={formData.state}
                            style={{
                              backgroundColor: "rgb(255, 255, 255)",
                              height: "55px",
                              fontSize: "1.125rem",
                              padding: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                              borderRadius: "4px",
                              cursor: "pointer",
                              border: "1px solid rgba(0, 0, 0, 0.3)",
                            }}
                            onChange={e => onChange("state", e)}
                            
                          
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Box style={{ marginTop: "1.25rem" }}>
                        <FormControl fullWidth>
                          <CountryDropdown
                            value={formData.country}
                            style={{
                              backgroundColor: "rgb(255, 255, 255)",
                              height: "55px",
                              fontSize: "1.125rem",
                              padding: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                              borderRadius: "4px",
                              cursor: "pointer",
                              border: "1px solid rgba(0, 0, 0, 0.3)",
                            }}
                            onChange={e => onChange("country", e)}
                           
                          
                          />
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Longitude"
                        variant="outlined"
                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        onChange={e => onChange("longitude", e.target.value)}
                        value={formData.longitude}
                        error={formError.longitude}
                        helperText={formError.longitude}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Latitude"
                        variant="outlined"
                        style={{ marginTop: "1.25rem" }}
                        InputLabelProps={{ style: { fontSize: 16 } }}
                        onChange={e => onChange("latitude", e.target.value)}
                        value={formData.latitude}
                        error={formError.latitude}
                        helperText={formError.latitude}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Text variant="body1" className={classes.formHeading}>
                  PHOTOS OF CHARGING STATION
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}>
                  <DropzoneArea
                    sx={{ color: "#E9E9E9" }}
                    dropzoneText="Drag and drop or Browse"
                    dropzoneClass={classes.dropzone}
                    Icon={() => (
                      <CloudUploadIcon
                        sx={{ color: "#E9E9E9", fontSize: "6.5rem" }}
                      />
                    )}
                    acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                    onChange={(file) => onImageChange(file)}
                    // onDelete={(file) => onImageDelete(file)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box className={classes.form_container}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  viewButtonLabel: { textTransform: "none" },
  pageHeading: {
    fontSize: "24px",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    textTransform: "none",
    color: "#707070",
    opacity: 1,
  },

  dropzone: {
    border: "1px dashed #E9E9E9",
  },
  formHeading: {
    fontSize: "16px",
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    color: "#1E1E1E",
    marginTop: "1.6rem",
  },

  form_container: {
    padding: "1.25rem",
    width: "50%",
    marginLeft: "5%",
    ["@media (max-width:768px)"]: {
      padding: "1rem",
      width: "90%",
      margin: "auto",
    },
  },
}));
export default AddStationForm;