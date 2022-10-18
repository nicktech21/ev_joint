import { CircularProgress } from '@mui/material';
import Box from 'components/common/Box';
import ErrorSkeleton from 'components/common/Skeleton';
import CustomersTable from 'components/CustomerTable/CustomersTable'
import React, { Component } from 'react'

export default class CustomersTableContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        station_id: "",
        model_id: "",
        manufacturer_id: "",
      },
      formError: {
        station_id: "",
        model_id: "",
        manufacturer_id: "",
      },
      ErrorMsg: "",
    };
    this.isLoading = false;

  }


  async componentDidMount() {
    this.isLoading = true;


    const vendor_id = this.props.profile.vendor_id;

    this.handleFilterApiData();
    await this.props.getLocationAction({ vendor_id });
    await this.props.getVehiclesMasterAction(5);
    await this.props.getManufacturerAction();

    const model_id1 = this.state.formData.manufacturer_id;
    await this.props.getManufacturerAction();
    await this.props.getVehiclesMasterAction(model_id1);
    this.isLoading = false;

  }

  handleFilterApiData = async () => {
    this.props.getCustomerTableAction({
      model_id: this.state.formData.model_id,
      station_id: this.state.formData.station_id,
      manufacturer_id: this.state.formData.manufacturer_id,


    });
  }



  handleChange = (name, value) => {
    const { formData } = this.state;
    formData[name] = value;
    this.handleFilterApiData();

    this.setState({ formData });

    const model_id1 = this.state.formData.manufacturer_id;
    this.props.getVehiclesMasterAction(model_id1);

  };



  render() {
    // console.log('profile custumersTable  this.props', this.props.customerTableData);

    return (
      <>
        {
          this.isLoading
            ?
            (<Box sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>
              <CircularProgress/>
            </Box>)
            :
            ((this.props.formData !== 0) ?
              (<>

                <CustomersTable props={this.props} formData={this.state.formData}
                  formError={this.state.formError}
                  isLoading={this.isLoading}
                  isError={this.state.ErrorMsg} onChange={this.handleChange} />



              </>) :
              (
                <ErrorSkeleton />
              ))
        }
      </>


    )
  }
}
