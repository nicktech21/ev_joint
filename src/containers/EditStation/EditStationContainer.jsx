import React from "react";
import EditStation from "components/ChargingStationTable/EditStationForm";

import addStationApis from "stores/AddStationStore/addStationApi";
import { commonApis } from "stores/common/commonApis";
import format from "date-fns/format";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { validationHelper } from "helper/validation";
import ConfirmDeleteAmenityModel from "components/ChargingStationTable/ConfirmDeleteAmanityModel";


export default class EditStationContainer extends React.Component {




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
        station_id: "",
        attachment_ids: [],
        amenities: " ",
        amenities_id: [],
        attachments: [],

      },
      ConfirmDeleteAmenityModel: false,
      ConfirmDeleteAttachmentModel: false,

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
        attachment_ids: [],
        amenities: " ",
        amenities_id: [],
        attachments: [],

      },
      isLoading: false,
      DeleteAmenity_id: "",
      Deleteattachment_id: "",
      DeleteAmenity_StationId: "",
      setOpen: false,
      files: [],
      snackbar: false,
      snackbarUpdateAmenity: false,
      ErrorMsg: "",
      snackbarError: false,
      snackbarDeleteAmenity: false,
      snackbarDeleteAttachment: false,
      amenities: "",
      addAmenities: ""
    };
  }


  componentDidMount() {
    this.props.getAmenitiesAction();
    this.props.getNetworkAction();

    console.log(this.props);
    // const station_id = this.props.basicDetailData.stationId;
    // console.log("station_id", station_id);

    const id = this.props.match.params.id;
    console.log("station_id", id);

    if (!id) {
      this.props.history.goBack();
    }
    this.props.getBasicDetailAction({ id });
    this.state.formData.station_id = id;
    console.log("station_id", this.state.formData.station_id, id);

    setTimeout(() => {
      this.setState({
        // amenities: this.props.basicDetailData.amenities,
        // addAmenities: [...this.props.amenitiesData],
        formData: {
          amenities_id: this.props.basicDetailData.amenities_id,
          amenities: this.props.basicDetailData.amenities,
          name: this.props.basicDetailData.chargingStationName,
          email: this.props.basicDetailData.contactEmail,
          mobile: this.props.basicDetailData.contactNumber,
          type: this.props.basicDetailData.type,
          open_time: this.props.basicDetailData.openTime,
          close_time: this.props.basicDetailData.closeTime,
          network_id: this.props.basicDetailData.network_id,
          station_url: this.props.basicDetailData.stationUrl,
          landmark: this.props.basicDetailData.landmark,
          address: this.props.basicDetailData.address,
          address2: this.props.basicDetailData.address2,
          pin: this.props.basicDetailData.pin,
          street: this.props.basicDetailData.street,
          city: this.props.basicDetailData.city,
          state: this.props.basicDetailData.state,
          country: this.props.basicDetailData.country,
          latitude: this.props.basicDetailData.latitude,
          longitude: this.props.basicDetailData.longitude,
          station_id: this.props.basicDetailData.stationId,
          attachments: this.props.basicDetailData.attachments,


        }
      });

      console.log("edit station state Data", this.state.formData, "-=-=-=-station_id", this.state.formData.station_id);
    }, 500, console.error("error in edit station state Data"));

  }


  /////////amenity  Chip 
  DeleteAmenityChip = (id, StationId) => {
    console.info('You clicked the delete icon.');
    this.setState({ ConfirmDeleteAmenityModel: true });
    this.setState({ DeleteAmenity_id: id });
    this.setState({ DeleteAmenity_StationId: StationId });
    console.log("delete amanity id", id, "station_id", StationId);

  };
  handleCloseDeleteAmanityConfirm = () => {
    this.setState({ ConfirmDeleteAmenityModel: false });
  }

  handleDeleteAmenityClick = async () => {

    console.log("amenity update chenging ....", this.state.DeleteAmenity_id, this.state.formData.station_id);
    try {
      const res = await addStationApis.RemoveAmenities_Api({
        station_id: this.state.DeleteAmenity_StationId,
        amenity_id: this.state.DeleteAmenity_id
      });

      if (res.status === 1) {
        this.setState({ snackbarDeleteAmenity: true, isLoading: true });
        this.setState({ ConfirmDeleteAmenityModel: false });
        setTimeout(() => {
          this.setState({
            amenities: this.props.basicDetailData.amenities,
            addAmenities: [...this.props.amenitiesData],
            isLoading: false,
           
          });


        }, 500)
      }
    } catch (e) {
      console.log(e);
    } finally {

    }
    
    this.setState(this.state.formData.amenities_id);
  }


  onChengeUpdateAmenity = async (id, StationId) => {
    console.log("menity update chenging ....", id,StationId);
    try {
      const res = await addStationApis.AddAmenities_Api({
        station_id: StationId,
        amenity_id: id
      });

      if (res.status === 1) {
        this.setState({ snackbarUpdateAmenity: true });
        this.setState({ isLoading: true });
        this.state.formData.amenities_id = id;
        setTimeout(() => {
          this.setState({
            isLoading: false,
            
          });


        }, 500)
      }
    } catch (e) {
      console.log(e);
    } finally {

    }

  }

  handleInputChange = (name, value) => {
    console.log("props data", this.props);

    // const amenities = this.props.basicDetailData.amenities;

    const { formData } = this.state;
    if (name === "mobile" && isNaN(value)) {
      return;
    }

    if (name === "amenities") {
      formData[name] = value;
      this.setState({ formData });
    }

    if (name === "open_time" || name === "close_time") {
      let date = new Date(value);
      value = format(date, "HH:mm");

    }

    formData[name] = value;
    // formData.amenities = amenities;
    // formData.amenities_id = [...amenities.id];

    this.setState({ formData });
    console.log("station_id formData", formData.station_id);


  };





  /// ////delete Deleteattachment


  handleDeleteAttachment = (id) => {
    console.log("handleDeleteAttachment", id);

    this.setState({ ConfirmDeleteAttachmentModel: true, Deleteattachment_id: id })
  }
  handleCloseDeleteAttachmentConfirm = () => {
    this.setState({ ConfirmDeleteAttachmentModel: false });
  }
  handleDeleteAttachmentClick = async () => {
    console.log("handleDeleteAttachmentClick update chenging ....", this.state.Deleteattachment_id,);
    try {
      const res = await commonApis.deleteAttachment(
        this.state.Deleteattachment_id
      );

      if (res.status === 1) {
        this.setState({ snackbarDeleteAttachment: true, ConfirmDeleteAttachmentModel: false, isLoading: true });
        setTimeout(() => {
          this.setState({ isLoading: false });

        }, 500)
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleDeleteImage = (file) => {
    console.log("id", file);
    const id = file;
    const { formData } = this.state;
    const { attachment_ids } = formData;
    const index = attachment_ids.indexOf(id);
    if (index > -1) {
      attachment_ids.splice(index, 1);
    }
    formData["attachment_ids"] = attachment_ids;
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

  handleFormSubmit = async (StationId) => {
    if (!this.handleValidation()) {
      console.log("invalid");
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });

    }, 500)
    const { formData } = this.state;
    console.log("update clicked", formData)

    try {
      const res = await addStationApis.EditStation({
        id: StationId,
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        network_id: formData.network_id,
        type: formData.type,
        // open_time: format(parseISO(formData.open_time),"HH:mm"),
        // close_time: format(parseISO(formData.close_time),"HH:mm"),
        station_url: formData.station_url,
        landmark: formData.landmark,
        address: formData.address,
        address2: formData.address2,
        pin: formData.pin,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        latitude: `${formData.latitude}`,
        longitude: `${formData.longitude}`,
        attachments: formData.attachments

      }, console.error("error in update "));
      
      if (res.status === 1) {
        console.log("updated data", formData)
        
        this.props.history.push("/charging");
      }

      else {
        this.setState({ ErrorMsg: res.message });
        this.setState({ snackbarError: true });
        console.log("update error")

      }
    } catch (e) {

      console.log("error in catch", e);
      if (e.response) {
        this.setState({ ErrorMsg: e.response.data.message });
        this.setState({ snackbarError: true });
      }
    }
  };




  handleImageChange = async (files) => {
    if (files.length > 0) {
      try {
        const res = await commonApis.uploadAttachment({
          file: files[files.length - 1],
          type: "IMAGE",
          attachment_of: "Station",
          station_id:this.state.formData.station_id,
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
  };


  //// 
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     setTimeout(() => {
  //       // this.setState({DeleteAmenity_id, Deleteattachment_id,
  //       // });

  //       console.log("edit station state Data", this.state.formData, "-=-=-=-station_id", this.state.formData.station_id);
  //     }, 500, console.error("error in edit station state Data"));

  //   }
  // }




  render() {
    

    return (
      <>
        <EditStation
          props={this.props}
          DeleteAmenityChip={this.DeleteAmenityChip}
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          onImageChange={this.handleImageChange}
          onDeleteImage={this.handleDeleteImage}
          formData={this.state.formData}
          formError={this.state.formError}
          isLoading={this.state.isLoading}
          editData={this.props.basicDetailData}
          onChengeUpdateAmenity={this.onChengeUpdateAmenity}
          handleDeleteAttachment={this.handleDeleteAttachment}
          amenities={this.state.amenities}
          addAmenities={this.state.addAmenities}
        />
        <Snackbar
          open={this.state.snackbar}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbar: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Charging Station Updated Successfully</Alert>
        </Snackbar>
        <Snackbar
          open={this.state.snackbarUpdateAmenity}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarUpdateAmenity: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Amenities Added Successfully</Alert>
        </Snackbar>

        <Snackbar
          open={this.state.snackbarDeleteAmenity}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarDeleteAmenity: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">Amenities Deleted Successfully</Alert>
        </Snackbar>

        <Snackbar
          open={this.state.snackbarDeleteAttachment}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarDeleteAttachment: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">Attachment Deleted Successfully</Alert>
        </Snackbar>


        <Snackbar
          open={this.state.snackbarError}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarError: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">{this.state.ErrorMsg}</Alert>
        </Snackbar>

        <ConfirmDeleteAmenityModel
          open={this.state.ConfirmDeleteAmenityModel}
          handleClose={this.handleCloseDeleteAmanityConfirm}
          handleDelete={this.handleDeleteAmenityClick}
          deleteMdg={"Are you sure ? You want to Delete this Amenity "}
        />
        <ConfirmDeleteAmenityModel
          open={this.state.ConfirmDeleteAttachmentModel}
          handleClose={this.handleCloseDeleteAttachmentConfirm}
          handleDelete={this.handleDeleteAttachmentClick}
          deleteMdg={"Are you sure ? You want to Delete this Attachment "}
        />
      </>
    );
  }
}