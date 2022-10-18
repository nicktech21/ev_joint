import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";
import Text from "components/common/Text";
import Link from "@mui/material/Link";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import StationDetail from "components/ChargingStationTable/StationDetail";
import ConfirmDeleteConnectorModel from "components/ChargingStationTable/ConfirmDeleteConnectorModel";
import ConfirmStatusConnectorModel from "components/ChargingStationTable/ConfirmStatusConnectorModel";
import ConfirmChargingPointModel from "components/ChargingStationTable/ConfirmChargingPointModel";

export default class StationDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteSuccess: false,
      enableSuccess: false,
      enableDisable: "",
      deleteConfirmConnectorDaialog: false,
      statusConfirmConnectorDaialog:false,
      chargingPointConfirmConnectorDaialog:false,
      ConnectorStatusId: "",
      ConnectorStatus: "",
      PointStatusId:"",
      PointStatus:"",
      isLoading : false,

    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // this.props.chargingPointEnableDisableAction({ id: 1, status: 0 });

    if (!id) {
      this.props.history.goBack();
    }
    this.props.getBasicDetailAction({ id });
    setTimeout(() => {
      this.setState({ isLoading: false });
      
    },500)
  }

  componentDidUpdate() {
//     if (this.state.deleteSuccess === true) {
//       setTimeout(() => {
//         this.props.getBasicDetailAction({ id: this.props.match.params.id });
//         this.setState({ deleteSuccess: false });
//       }, 500);

//  }
      // if (prevState.params_id !== this.state.params_id){
      //   this.props.getBasicDetailAction(this.state.params_id)
      // }
   

    if (this.state.enableSuccess === true) {
      // this.props.getChargingStationsAction(this.props.profile.vendor_id);

      this.props.getBasicDetailAction({ id: this.props.match.params.id });
      this.setState({ enableSuccess: false, isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
        
      },500)
    }
  }
  handleStatusConfirmConnectorClick = (id,status) => {

    console.log(id);
    
    this.setState({ statusConfirmConnectorDaialog: true,ConnectorStatus:status,ConnectorStatusId:id});

  };
 
  handleConnectorStatusModelClose = () =>{
    this.setState({ statusConfirmConnectorDaialog: false,ConnectorStatus:"",ConnectorStatusId:" "});
  }

  handleChargingPointConfirmClick = (id,status) => {

    // console.log(id);
    
    this.setState({ chargingPointConfirmConnectorDaialog: true, PointStatus:status, PointStatusId:id});
  };


  handleConnectorChargingPointModelClose =() =>{
    this.setState({ chargingPointConfirmConnectorDaialog: false, PointStatus:"" ,PointStatusId:""});
  }


  handleDeleteConfirmConnectorClick = (id) => {

    this.setState({ deleteConfirmConnectorDaialog: true, deleteConnectorId: id });

  };

  handleDeleteConnectorClick = () => {


    let id = this.state.deleteConnectorId;


    if (id !== undefined) {

      this.props.chargingPointDeleteAction({ id });
      this.setState({ deleteConfirmConnectorDaialog: false, deleteConnectorId: "" });
      this.setState({ deleteSuccess: true,  isLoading: true });
      this.setState({ viewDrawer: false });
      setTimeout(() => {
        this.setState({ isLoading: false });
        
      },500)

    }

  };

  handleCloseDeleteConnectorConfirm = () => {
    this.setState({ deleteConfirmConnectorDaialog: false });
  }
  


  // handleDeleteConnectorClick  = (id) => {
  //   this.props.chargingPointDeleteAction({ id });

  //   setTimeout(() => {
  //     this.setState({ deleteSuccess: true });
  //   }, 1000);
  // };

  handleEnableClickConnecter = () => {
   

    const status = this.state.ConnectorStatus;
    const id  = this.state.ConnectorStatusId;
    
    console.log(id,status);

 
   
    if (status === 1) {
      this.props.chargingEnableDisableAction({ id, status: 0 });
    } else {
      this.props.chargingEnableDisableAction({ id, status: 1 });
    }
    this.setState({ enableSuccess: true,  isLoading: true });
    this.setState ({statusConfirmConnectorDaialog: false});
    setTimeout(() => {
      this.setState({ isLoading: false });
      
    },500)
  };



  handleEnableClickChargingPoint = () => {
   
    const status = this.state.PointStatus;
    const id  = this.state.PointStatusId;
  
    if (status === 1) {
      this.props.chargingPointEnableDisableAction({ id, status: 0 });
    } else {
      this.props.chargingPointEnableDisableAction({ id, status: 1 });
    }
    this.setState({ enableSuccess: true, isLoading: true  });
    this.setState ({ chargingPointConfirmConnectorDaialog: false});
    setTimeout(() => {
      this.setState({ isLoading: false });
      
    },500)
  };




  render() { 
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
      
    // },500)
    const history =this.props.history;
    const props = {
      basicDetail: this.props.basicDetailData,
    };

    return (
      <>

    


        <Breadcrumbs
          sx={{ fontSize: "14px", marginBottom: "20px", marginTop: "10px" }}
        >
           <Text  onClick={() => history.goBack()} sx={{cursor: "pointer"}} > Charging Station </Text>  

          {/* <Link underline="hover" color="inherit" href="/charging">
            Charging Station
        </Link> */}

          <Text
            sx={{
              fontSize: "14px",
            }}
            color="text.primary"
          >
            Station Details
          </Text>
        </Breadcrumbs>

        <StationDetail
          props={props}
          isLoading= {this.state.isLoading}
          onDeleteClick={this.handleDeleteConfirmConnectorClick }
          onEnableClick={this.handleEnableClickChargingPoint}
          handleStatusConfirmConnectorClick={this.handleStatusConfirmConnectorClick}
          handleChargingPointConfirmClick={this.handleChargingPointConfirmClick}
          handleConnectorChargingPointModelClose={this.handleConnectorChargingPointModelClose}
         
        />

        <Snackbar
          open={this.state.deleteSuccess}
          autoHideDuration={3000}
          onClose={() => this.setState({ deleteSuccess: false })}
          message="Charging Station Deleted Successfully"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">
            Charging Connecter Deleted Successfully
          </Alert>
        </Snackbar>
        <Snackbar
          open={this.state.enableSuccess}
          autoHideDuration={3000}
          onClose={() => this.setState({ enableSuccess: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}

          
        >
          <Alert severity="warning">
            Charging Connecter Status Changed Successfully
          </Alert>
        </Snackbar>

        <ConfirmDeleteConnectorModel
          open={this.state.deleteConfirmConnectorDaialog}
          handleClose={this.handleCloseDeleteConnectorConfirm}
          handleDelete={this.handleDeleteConnectorClick}
        />

       <ConfirmStatusConnectorModel
       open={this.state.statusConfirmConnectorDaialog}
       handleEnable={this.handleEnableClickConnecter}
       handleclose={this.handleConnectorStatusModelClose}
       ConnectorStatus={this.state.ConnectorStatus}
       />

       <ConfirmChargingPointModel
        open={this.state.chargingPointConfirmConnectorDaialog}
        handleEnablepoint={this.handleEnableClickChargingPoint}
        handleclosepoint={this. handleConnectorChargingPointModelClose }
        PointStatus={this.state.PointStatus}

       />



      </>
    );

  }

}

