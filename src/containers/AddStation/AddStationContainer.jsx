import React from "react";

// import { Redirect, Switch } from "react-router-dom";

import AddStation from "components/ChargingStationTable/AddStationForm";

import addStationApis from "stores/AddStationStore/addStationApi";
import { commonApis } from "stores/common/commonApis";
import format from "date-fns/format";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { validationHelper } from "helper/validation";

export default class AddStationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        mobile: "",
        type: "",
        open_time: new Date(),
        close_time: new Date(),
        network_id: "",
        station_url: "",
        landmark: "",
        address: "",
        address2: "",
        pin: "",
        street: "",
        city: "",
        state: "",
        country: "India",
        latitude: "",
        longitude: "",
        attachment_ids: [],
        amenities: [],
      },
      formError: {
        name: "",
        date_of_birth: "",
        email: "",
        mobile: "",
        network_id: "",
        type: "",
        open_time: "",
        close_time: "",
        station_url: "",
        landmark: "",
        address: "",
        address2: "",
        pin: "",
        street: "",
        city: "",
        state: "",
        country: "",
        latitude: "",
        longitude: "",
        images: [],
      },
      isLoading: false,
      setOpen: false,
      files: [],
      snackbar: false,
      ErrorMsg: "",
      snackbarError: false,
    };
  }

  componentDidMount() {
    this.props.getAmenitiesAction();
    this.props.getNetworkAction();
  }

  handleInputChange = (name, value) => {
    const { formData } = this.state;
    if (name === "mobile" && isNaN(value)) {
      return;
    }

    if (name === "amenities") {
      formData[name] = value;
      this.setState({ formData });
    }

    // if(name === "open_time" || name === "close_time"){
    //   let date = new Date(value);
    //   value = format(date, "HH:mm");

    // }

    formData[name] = value;
    this.setState({ formData });
  };

  handleClickOpen = () => {
    this.setState({ setOpen: true });
  };

  handleClose = (value) => {
    this.setState({ setOpen: false });
  };

  handleValidation = () => {
    const { formError, formData } = this.state;

    const nameValidation = validationHelper.name(formData.name);
    formError.name = nameValidation.message;

    const emailValidation = validationHelper.email(formData.email);
    formError.email = emailValidation.message;

    const mobileValidation = validationHelper.mobile(formData.mobile);
    formError.mobile = mobileValidation.message;

    const networkIdValidation = validationHelper.networkId(formData.network_id);
    formError.network_id = networkIdValidation.message;

    const typeValidation = validationHelper.typeChargingStation(formData.type);
    formError.type = typeValidation.message;

    const stationUrlValidation = validationHelper.stationUrl(
      formData.station_url
    );
    formError.station_url = stationUrlValidation.message;

    const addressValidation = validationHelper.address(formData.address);
    formError.address = addressValidation.message;

    const landmarkValidation = validationHelper.landmark(formData.landmark);
    formError.landmark = landmarkValidation.message;

    const pinValidation = validationHelper.pin(formData.pin);
    formError.pin = pinValidation.message;

    const streetValidation = validationHelper.street(formData.street);
    formError.street = streetValidation.message;

    const cityValidation = validationHelper.city(formData.city);
    formError.city = cityValidation.message;

    const latitudeValidation = validationHelper.latitude(formData.latitude);
    formError.latitude = latitudeValidation.message;

    const longitudeValidation = validationHelper.longitude(formData.longitude);
    formError.longitude = longitudeValidation.message;

    this.setState({ formError });

    return (
      nameValidation.isValid &&
      emailValidation.isValid &&
      mobileValidation.isValid &&
      networkIdValidation.isValid &&
      stationUrlValidation.isValid &&
      addressValidation.isValid &&
      landmarkValidation.isValid &&
      pinValidation.isValid &&
      streetValidation.isValid &&
      cityValidation.isValid &&
      latitudeValidation.isValid &&
      longitudeValidation.isValid
    );
  };

  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }

    this.setState({ isLoading: true });
    const { formData } = this.state;

    try {
      const res = await addStationApis.addStation({
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        network_id: formData.network_id,
        type: formData.type,
        open_time: format(formData.open_time, "HH:mm"),
        close_time: format(formData.close_time, "HH:mm"),
        station_url: formData.station_url,
        landmark: formData.landmark,
        address: formData.address,
        address2: formData.address2,
        pin: formData.pin,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        latitude: formData.latitude,
        longitude: formData.longitude,
        attachment_ids: formData.attachment_ids,
        amenities: formData.amenities,
      });

      if (res.status === 1) {
        this.setState({ snackbar: true , });
        this.props.history.push("/charging");
      } else {
        this.setState({ ErrorMsg: res.message });
        this.setState({ snackbarError: true });
      }
    } catch (e) {
      if (e.response) {
        this.setState({ ErrorMsg: e.response.data.message });
        this.setState({ snackbarError: true });
      }
    }
  };

  handleImageChange = async (files) => {
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        try {
          const res = await commonApis.uploadAttachment({
            file: files[i],
            type: "IMAGE",
            attachment_of: "Station",
          });

          if (res.status === 1) {
            const { formData } = this.state;
            formData.attachment_ids.push(res.result.id);
            this.setState({ formData });
          }
        } catch (e) {
          console.log(e);
        } finally {
        }
      }
    }
  };

  render() {
    return (
      <>
        <AddStation
          props={this.props}
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          onImageChange={this.handleImageChange}
          formData={this.state.formData}
          formError={this.state.formError}
          isLoading={this.state.isLoading}
        />

        <Snackbar
          open={this.state.snackbar}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbar: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Charging Station Added Successfully</Alert>
        </Snackbar>

        <Snackbar
          open={this.state.snackbarError}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarError: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">{this.state.ErrorMsg}</Alert>
        </Snackbar>
      </>
    );
  }
}