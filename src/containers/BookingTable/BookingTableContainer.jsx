import { CircularProgress } from "@mui/material";
import BookingTable from "components/Booking/BookingTable";
import Box from "components/common/Box";
import React, { Component } from "react";

export default class BookingTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        station_id: "",
        model_id: "",
        manufacturer_id: "",
        filter_date: "",
        status: "",
        from_date: "",
        to_date: "",
        fromat_date_from: "",
        fromat_date_to: "",
      },
      formError: {
        station_id: "",
        model_id: "",
        manufacturer_id: "",
        filter_date: "",
        status: "",
      },
      ErrorMsg: "",
      datePickerOpen: false,
    };
    this.isLoading = false;

  }

  handleDatePickerOpen = () => {
    this.setState({ datePickerOpen: true });
    
  };

  handleDatePickerClose = () => {
    this.setState({ datePickerOpen: false });
  };

  async componentDidMount() {
    this.isLoading = true;

    
    await this.handleFilterApiData();
    this.getCommonData();

    const model_id1 = this.state.formData.manufacturer_id;
    await this.props.getManufacturerAction();
    await this.props.getVehiclesMasterAction(model_id1);
    this.isLoading = false;

    

  }

  handleFilterApiData = async () => {
    this.isLoading = true;
   await this.props.getBookingAction({
      status: this.state.formData.status,
      model_id: this.state.formData.model_id,
      station_id: this.state.formData.station_id,
      manufacturer_id: this.state.formData.manufacturer_id,
      from_date: this.state.formData.from_date,
      to_date: this.state.formData.to_date,
    });
    this.isLoading = false;
  };

  getCommonData = () => {
    const vendor_id = this.props.profile.vendor_id;
    console.log('profile vendor_id', vendor_id);
    this.props.getVehiclesMasterAction();
    this.props.getLocationAction({vendor_id});
    this.props.getManufacturerAction();
  };

  handleChange = (name, value) => {
    const { formData } = this.state;
    if (name === "from_date") {
      formData[name] = this.formatDate(new Date(value));
      formData["fromat_date_from"] = this.formatDateMonth(new Date(value));
    } else if (name === "to_date") {
      formData[name] = this.formatDate(new Date(value));
      formData["fromat_date_to"] = this.formatDateMonth(new Date(value));
    } else {
      formData[name] = value;
    }

    this.handleFilterApiData();
    this.setState({ formData });

    const model_id1 = this.state.formData.manufacturer_id;
    this.props.getVehiclesMasterAction(model_id1);
  };

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  formatDateMonth(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    // if (month.length < 2)
    //     month = '0' + month;
    if (day.length < 2) day = "0" + day;

    month = month - 1;

    return [day, monthNames[month], year].join(" ");
  }

  render() {

    // console.log("booking table data props==", this.props.bookingTableData);
    return (
      <>
      {
        this.isLoading 
        ?
           ( <Box sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>
                <CircularProgress/>
            </Box>)
        :
        ( 
        
        <BookingTable
          props={this.props}
          formData={this.state.formData}
          formError={this.state.formError}
          isLoading={this.isLoading}
          isError={this.state.ErrorMsg}
          onChange={this.handleChange}
          datePickerOpen={this.state.datePickerOpen}
          handleDatePickerOpen={this.handleDatePickerOpen}
          handleDatePickerClose={this.handleDatePickerClose}
          from_date={this.state.formData.from_date}
          to_date={this.state.formData.to_date}
          fromat_date_from={this.state.formData.fromat_date_from}
          fromat_date_to={this.state.formData.fromat_date_to}
        />                
        )
      }
        
      </>
    );
  }
}


