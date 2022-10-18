import React from "react";
import { profileApis } from "stores/Profile/ProfileApi";
import Myprofile from "components/MyProfile";
import { commonApis } from "stores/common/commonApis";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { validationHelper } from "helper/validation";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {

        vendor_id:props.profile.vendor_id,
        name: props.profile.name,
        email: props.profile.email,
        contact: props.profile.mobile,
        date_of_birth: props.profile.date_of_birth,
        pan: props.profile.pan,
        business_type: props.profile.business_type,
        business_url: props.profile.business_url,
        business_email: props.profile.business_email,
        business_mobile: props.profile.business_mobile,
        gst_no: props.profile.gst_no,
        area: props.profile.area,
        thumbnail: props.profile.thumbnail,
      },
      formError: {
        name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        pan: "",
        business_type: "",
        business_url: "",
        business_email: "",
        business_mobile: "",
        gst_no: "",
      },

      file: null,
      snackbarImage: false,
      snackbarImageError: false,
      snackbarPofileupdate: false,
      editProfileDisable: true,
      profilePicDisableEdit:true
    };
  }

  handleInputChange = (name, value) => {
    if (name === "business_mobile" && isNaN(value)) {
      return;
    }
    const { formData } = this.state;
    formData[name] = value;
    this.setState({ formData });
  };

  handleFormSubmit = async () => {
    if (!this.handleValidation()) {
      return;
    }

    this.setState({ isLoading: true });
    const { formData } = this.state;
  
    try {
      const res = await profileApis.profileUpdateApi({
        name: formData.name,
        date_of_birth: formData.date_of_birth,
        pan: formData.pan,
        gst_no: formData.gst_no,
        area: formData.area,
        business_type: formData.business_type,
        business_url: formData.business_url,
        business_mobile: formData.business_mobile,
        business_email: formData.business_email,
      });

      if (res.status === 1) {
        this.setState({ snackbarPofileupdate: true });
        this.props.updateAuthDataAction(this.state.formData);
      } else {
       
      }
    } catch (error) {
     
      this.setState({ isLoading: false });
    }
  };

  handleImageChange = async (event) => {
    const file = event.target.files[0];
    let filevalid = false;

    if (file["type"].split("/")[0] === "image") {
      filevalid = true;
    } else {
      filevalid = false;
    }

    if (filevalid === true) {
      if (file != null) {
        try {
          const res = await commonApis.uploadAttachment({
            file: file,
            type: "IMAGE",
          });

          if (res.status === 1) {
            const { formData } = this.state;
            formData.thumbnail = res.result.attachmentUrl;
            this.setState({ formData });
            this.setState({ snackbarImage: true });
            this.props.updateAuthDataAction(this.state.formData);
          }
        } catch (e) {
          console.log(e);
        } finally {
        }
      }
    } else {
      this.setState({ snackbarImageError: true });
    }
  };
  
  enableFieldsEdit = () => {
    this.setState({editProfileDisable: false});
  }
  enableProfilePicEdit=()=>{
    this.setState({profilePicDisableEdit: false});

  }
  editFieldCancle=()=>{
    this.setState({editProfileDisable: true});

  }

  handleValidation = () => {
    const { formError, formData } = this.state;

    const nameValidation = validationHelper.name(formData.name);
    formError.name = nameValidation.message;

    const businessEmailValidation = validationHelper.email(
      formData.business_email
    );
    formError.business_email = businessEmailValidation.message;

    const businessMobileValidation = validationHelper.mobile(
      formData.business_mobile
    );
    formError.business_mobile = businessMobileValidation.message;

    const panValidation = validationHelper.pan(formData.pan);
    formError.pan = panValidation.message;

    const gstValidation = validationHelper.gst(formData.gst_no);
    formError.gst_no = gstValidation.message;

    const businessTypeValidation = validationHelper.businessType(
      formData.business_type
    );
    formError.business_type = businessTypeValidation.message;

    const businessUrlValidation = validationHelper.businessUrl(
      formData.business_url
    );
    formError.business_url = businessUrlValidation.message;

    const areaValidation = validationHelper.area(formData.area);
    formError.area = areaValidation.message;

    const dateofbirthValidation = validationHelper.dateOfBirth(
      formData.date_of_birth
    );
    formError.date_of_birth = dateofbirthValidation.message;

    this.setState({ formError });
    return (
      nameValidation.isValid &&
      businessEmailValidation.isValid &&
      businessMobileValidation.isValid &&
      businessUrlValidation.isValid &&
      panValidation.isValid &&
      gstValidation.isValid &&
      businessTypeValidation.isValid &&
      areaValidation.isValid &&
      dateofbirthValidation.isValid
    );
  };

  render() {
    return (
      <>
        <Myprofile
          
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          props={this.props.profile}
          formData={this.state.formData}
          formError={this.state.formError}
          isLoading={this.state.isLoading}
          isError={this.state.ErrorMsg}
          changeImage={this.handleImageChange}
          onImageChange={this.handleImageChange}
          disable={this.state.editProfileDisable}
          enableFieldsEdit={this.enableFieldsEdit}
          profilePic={this.state.profilePicDisableEdit}
          enableProfilePicEdit={this.enableProfilePicEdit}
          editFieldCancle={this.editFieldCancle}
        />

        <Snackbar
          open={this.state.snackbarImage}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarImage: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Profile Picture Updated Successfully</Alert>
        </Snackbar>

        <Snackbar
          open={this.state.snackbarPofileupdate}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarPofileupdate: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="success">Profile Updated Successfully</Alert>
        </Snackbar>

        <Snackbar
          open={this.state.snackbarImageError}
          autoHideDuration={3000}
          onClose={() => this.setState({ snackbarImageError: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">Please Upload Valid Image</Alert>
        </Snackbar>
      </>
    );
  }
}

export default ProfileContainer;
