import React from "react";
import Box from "components/common/Box";
import { CircularProgress } from "@mui/material";
import Grid from "components/common/Grid";
import Button from "components/common/Button";
import DownloadIcon from "@mui/icons-material/Download";
import DashboardRevenueContainer from "./DashboardRevenue";
import DashboardCustomerContainer from "./DashboardCustomer/DashboardCustomerContainer";
import DashboardTimeConsumedContainer from "./DashboardTimeConsumed";
import DashboardPopularTimesContainer from "./DashboardPopularTimes";
import DashboardPowerConsumedContainer from "./DashboardPowerConsumed";
import DashboardOverview from "components/Dashboard/DashboardOverview";



class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        location_id: "",
        manufacturer_id: "1", 
        vehicle_id: "",
        from_date: "",
        to_date: "",
        status: "",
        model_id: "",
        fromat_date_to: "",
        station_id: "",
        fromat_date_from: "",

      },
      formError: {},
     
      ErrorMsg: "",
      manufacturer_id: "1",
      datePickerOpen: false,
      status: "",
      model_id: "",
      fromat_date_to: "",
      fromat_date_from: "",
      station_id: ""
    };
    this.isLoading = false;
  }

  handleDatePickerOpen = () => {
    this.setState({ datePickerOpen: true });

  };

  handleDatePickerClose = () => {
    this.setState({ datePickerOpen: false });
  };

  // vendor_id

  async componentDidMount() {
  
    this.isLoading = true ;
    const vendor_id = this.props.profile.vendor_id;
    await this.props.getLocationAction({ vendor_id });
    const model_id1 = this.state.formData.manufacturer_id;
    await this.props.getManufacturerAction();
    await this.props.getVehiclesMasterAction(model_id1);
    this.isLoading = false
   

  }
  

  handleFilterApiData = async () => {
    this.componentDidMount({
      status: this.state.formData.status,
      model_id: this.state.formData.model_id,
      station_id: this.state.formData.station_id,
      manufacturer_id: this.state.formData.manufacturer_id,
      from_date: this.state.formData.from_date,
      to_date: this.state.formData.to_date,
    });
  };

  getCommonData = () => {
    this.props.getVehiclesMasterAction();
    this.props.getLocationAction();
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

    this.setState({ formData });
    this.handleFilterApiData();
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


    return (
      <>

        {
          this.state.isLoading ?
           ( <Box sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>
                <CircularProgress/>
            </Box>)
            :
            (<Box sx={{ marginTop: "1rem" }}>
              <Grid container spacing={2}>

                <DashboardOverview
                  state={this.state}
                  data={this.props}
                  onchange={this.handleChange}
                  onclick={this.handleDatePickerOpen}
                  open={this.state.datePickerOpen}
                  onClose={this.handleDatePickerClose}
                  handleChange={this.handleChange}


                />

              </Grid>



              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginTop: "15px" }}>
                  <DashboardRevenueContainer />
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <DashboardCustomerContainer />
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <DashboardTimeConsumedContainer />
                </Grid>


                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <DashboardPowerConsumedContainer />
                </Grid>


                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <DashboardPopularTimesContainer />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{ marginBottom: "30px" }}
                >
                  <Box mt={3} sx={{ justifyContent: "right", display: "flex" }}>
                    <Button
                      sx={{
                        fontSize: "12px",
                        opacity: "100%",
                        backgroundColor: "#19aa69",
                        color: "white",
                        width: "200px !important",
                        border: "none",
                        height: "50px",
                      }}
                      type="button"
                      
                    >
                      <DownloadIcon /> Download Report
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>)
        }

      </>
    );
  }
}

export default DashboardContainer;
