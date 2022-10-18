import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import ChargingStationTable from "components/ChargingStationTable/ChargingStationTable";
import { chargingStationApi } from "stores/ChargingStationStore/chargingStationApi";
// import ConfirmDeleteModel from "components/ChargingStationTable/ConfirmDeleteModel";
import ConfirmDeleteStationModel from "components/ChargingStationTable/ConfirmDeleteStationModel";
import ConfirmDeleteConnectorModel from "components/ChargingStationTable/ConfirmDeleteConnectorModel";
import Box from "components/common/Box";
import { CircularProgress } from "@mui/material";
// import TypeofConnectors from "components/ChargingStationTable/ChargingStationDetail/TypeofConnectors";
// import ConfirmDisableConnectorModel from "components/ChargingStationTable/ConfirmStatusConnectorModel";

class ChargingStationTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        station_id: "",
        cp_id: "",
        connectors: [
          {
            charger_type_id: "",
            price_per_khw: "",
            power: "",
          }
        ],
      },
      connectorAdd: {
        charge_point_id: "",
        charger_type_id: "",
        power: "",
        price_per_khw: "",
      },
      chargingPointEdit: {
        id: "",
        name: "",
        station_id: "",
        cp_id: "",
      },
      ////
      chargingConnectorEdit: {
        id: "",
        name: "",
        charge_point_id: "",
        charger_type_id: "",
        power: "",
        price_per_khw: "",
      },




      formError: {
        name: "",
        station_id: "",
        cp_id: "",
        connectors: [],
      },
      // isLoading: false,
      setOpen: false,
      deleteSuccess: false,
      viewDrawer: false,
      addDrawer: false,
      addConnectorDrawer: false,
      EditConnectorDrawer: false,
      EditChargingPointDrawer: false,
      charging_point_Success: false,
      charging_point_Edit_Success: false,

      //deleteConfirmDaialog: false,
      deleteConfirmStationDaialog: false,
      deleteConfirmConnectorDaialog: false,
      // disableConfirmConnectorDaialog: false,
      charging_Connector_Success: false,
      charging_Connector_Edit_Success: false,
      // handleCloseDeleteStationConfirm:true,

      deleteconfirm: false,
      EditConnectorID: "",
      EditCh_PointIndex: "",
      deleteStationId: "",
      deleteConnectorId: "",
      // disableConnectorId: "",

      EditCh_ConnectorIndex: "",

    };
    this.isLoading2= false;
  }



  handleChangeChPointAdd = (name, value) => {

    const { formData } = this.state;
    formData[name] = value;
    this.setState({ formData });

  };



  // on Chenge Connector Add
  hendleChangeConnectorAdd = (name, value) => {

    const { connectorAdd } = this.state;

    connectorAdd[name] = value;
    this.setState({ connectorAdd });


  }


  handleChangeConnector = (index, event) => {
    let data = [...this.state.formData.connectors];
    data[index][event.target.name] = event.target.value;
    this.setState({ formData: { ...this.state.formData, connectors: data } });
  };

  addFieldsConnector = () => {
    let newFields = { charger_type_id: "", power: "", price_per_khw: "" };
    let data = [...this.state.formData.connectors];
    data.push(newFields);
    this.setState({ formData: { ...this.state.formData, connectors: data } });
  }

  removeFieldsConnector = (index) => {
    let data = [...this.state.formData.connectors];
    data.splice(index, 1);
    this.setState({ formData: { ...this.state.formData, connectors: data } });
  }





  handleClickOpen = () => {
    this.setState({ setOpen: true });
  };

  handleClose = (value) => {
    this.setState({ setOpen: false });
  };







  ///////// ch point
  handleSubmitAddChPoint = async () => {
    this.isLoading2= true;
    // this.setState({ isLoading: true });
    const { formData } = this.state;
    try {
      const res = await chargingStationApi.Add_ChargingPointApi({
        name: formData.name,
        station_id: formData.station_id,
        cp_id: formData.cp_id,
        connectors: formData.connectors,
      });



      if (res.status === 1) {
        this.setState({ charging_point_Success: true, });
        this.isLoading2= false;
        this.setState({        
          setOpen: true,
          addDrawer: false,
          charging_point_Success: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  ///ch connector
  handleSubmitConnector = async () => {
    this.isLoading2= true;
    // this.setState({ isLoading: true });
    const { connectorAdd } = this.state;

    try {
      const res = await chargingStationApi.Add_ChargingConnectorApi({
        charger_type_id: connectorAdd.charger_type_id,
        power: connectorAdd.power,
        price_per_khw: connectorAdd.price_per_khw,
        charge_point_id: connectorAdd.charge_point_id,
      });



      if (res.status === 1) {

        this.isLoading2= false;
        this.setState({
          // isLoading: false,
          setOpen: true,
          addConnectorDrawer: false,
          charging_Connector_Success: true,
          viewDrawer: false,

        });
      }
    } catch (error) {
      console.log(error);
      alert(" Error to add Charging Connector");

    }
  };

  async componentDidMount() {
    this.isLoading2= true ;

    await this.props.getChargingStationsAction(this.props.profile.vendor_id);
    await  this.props.getAmenitiesAction();
    await this.props.getChargingPointAction();
    await this.props.chargerTypeAction();
    this.isLoading2= false;
  }

  componentDidUpdate() {

    if (this.state.deleteSuccess === true) {
      setTimeout(() => {
        this.props.getChargingStationsAction(this.props.profile.vendor_id);
        this.setState({ deleteSuccess: false });
      }, 500);
    }
  }


  handleDeleteConfirmStationClick = (id) => {

    this.setState({ deleteConfirmStationDaialog: true, deleteStationId: id });

  };

  handleDeleteStationClick = () => {


    let id = this.state.deleteStationId;

    if (id !== undefined) {

      this.props.deleteChargingStationAction({ id });
      this.setState({ deleteConfirmStationDaialog: false, deleteStationId: "" });
      this.setState({ deleteSuccess: true });

    }

  };


  handleDeleteConfirmConnectorClick = (id) => {

    this.setState({ deleteConfirmConnectorDaialog: true, deleteConnectorId: id });

  };

  handleDeleteConnectorClick = () => {


    let id = this.state.deleteConnectorId;

    if (id !== undefined) {

      this.props.deleteChargingConnectorAction({ id });
      this.setState({ deleteConfirmConnectorDaialog: false, deleteConnectorId: "" });
      this.setState({ deleteSuccess: true });
      this.setState({ viewDrawer: false });

    }

  };


  handleAddChPoint = (id) => {
    this.setState({ addDrawer: true });
    if (id !== undefined) {
      const { formData } = this.state;
      formData.station_id = id;
      this.setState({ formData });
    }

  }
  handleAddChPointClose = () => {
    this.setState({ addDrawer: false });
  }


  handleShowChPoint = (id) => {
    this.props.getChargingPointAction(id);
    this.setState({ viewDrawer: true });
    const { formData } = this.state;
    formData.station_id = id;
    this.setState({ formData });
  };

  handleShowChPointClose = () => {
    this.setState({ viewDrawer: false });
  };

  handleOpenAddConnectorDr = (id) => {
    this.setState({ addConnectorDrawer: true });
    const { connectorAdd } = this.state;
    connectorAdd.charge_point_id = id;
    this.setState({ connectorAdd });
  }


  //Edit Ch Point
  handleOpenEditChPoint = (id, index) => {
    this.setState({ EditChargingPointDrawer: true });
    const { chargingPointEdit } = this.state;
    chargingPointEdit.id = id;

    this.setState({ chargingPointEdit, EditCh_PointIndex: index });
    // console.log(index);
  }

  handleSubmitEditChPoint = async () => {

    const { chargingPointEdit } = this.state;
    this.isLoading2= true;

    try {
      const res = await chargingStationApi.Edit_ChargingPointApi({
        name: chargingPointEdit.name,
        station_id: chargingPointEdit.station_id,
        cp_id: chargingPointEdit.cp_id,
        id: chargingPointEdit.id,

      });



      if (res.status === 1) {
        this.setState({ charging_point_Edit_Success: true, EditChargingPointDrawer: false, viewDrawer: false });
        this.isLoading2= false;
        this.setState({
         
          setOpen: true,
          addDrawer: false,

        });
      }
    } catch (error) {
      console.log(error);
    }

  }

  handleChangeChPointEdit = (name, value) => {

    const { chargingPointEdit } = this.state;
    chargingPointEdit[name] = value;
    this.setState({ chargingPointEdit });

  }



  handleCloseAddConnectorDr = () => {
    this.setState({ addConnectorDrawer: false });
  }

  //Edit connector

  handleOnclickEditConnectorOpen = (charge_point_id, connecter_id, index, name, capacity, rate) => {
    console.log("edit connector call", capacity);
    this.setState({ EditConnectorDrawer: true });
    const { chargingConnectorEdit } = this.state;
    chargingConnectorEdit.id = connecter_id;
    chargingConnectorEdit.charge_point_id = charge_point_id;
    chargingConnectorEdit.power = capacity;
    chargingConnectorEdit.name = name;
    chargingConnectorEdit.price_per_khw = rate;
    this.setState({ chargingConnectorEdit, EditCh_ConnectorIndex: index });
    console.log("data", "name:", name, this.state.chargingConnectorEdit);



  }

  handleSubmitEditConnector = async () => {


    const { chargingConnectorEdit } = this.state;
    console.log(chargingConnectorEdit);

    try {
      this.isLoading2= true;

      const res = await chargingStationApi.Edit_ChargingConnecApi({
        charger_type_id: chargingConnectorEdit.charger_type_id,
        charge_point_id: chargingConnectorEdit.charge_point_id,
        price_per_khw: chargingConnectorEdit.price_per_khw,
        power: chargingConnectorEdit.power,
        id: chargingConnectorEdit.id,
      });

      if (res.status === 1) {
        this.setState({ charging_Connector_Edit_Success: true, EditConnectorDrawer: false, viewDrawer: false });
        this.isLoading2= false;
        this.setState({
          
          setOpen: true,
          addDrawer: false,

        });
      }
    } catch (error) {
      console.log(error);
      alert("Error data not updated");
    }

  }

  handleChangeConnectorEdit = (name, value) => {
    const { chargingConnectorEdit } = this.state;
    chargingConnectorEdit[name] = value;
    this.setState({ chargingConnectorEdit });
  };




  handleCloseEditConnector = () => {
    this.setState({ EditConnectorDrawer: false });

  }

  //Edit Ch Point
  handleCloseEditChPoint = () => {
    this.setState({ EditChargingPointDrawer: false });
  }

  handleCloseDeleteStationConfirm = () => {
    this.setState({ deleteConfirmStationDaialog: false });

  }

  handleCloseDeleteConnectorConfirm = () => {
    this.setState({ deleteConfirmConnectorDaialog: false });
  }


  render() {
    
    return (
      <>
        {
          this.isLoading2
            ?
            (<Box sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>
                <CircularProgress/>
            </Box>)
            :
            (<>
              <ChargingStationTable
                data={this.props.chargingStationData}
                chargingPoint={this.props.getChargingPointData}
                handleChangeChPointAdd={this.handleChangeChPointAdd}
                handleChangeConnector={this.handleChangeConnector}
                handleAddConnector={this.addFieldsConnector}
                onDeleteClick={this.handleDeleteConfirmStationClick}
                handleSubmitAddChPoint={this.handleSubmitAddChPoint}
                handleAddChPoint={this.handleAddChPoint}
                handleAddChPointClose={this.handleAddChPointClose}
                handleShowChPoint={this.handleShowChPoint}
                handleShowChPointClose={this.handleShowChPointClose}
                handleOpenAddConnectorDr={this.handleOpenAddConnectorDr}
                handleCloseAddConnectorDr={this.handleCloseAddConnectorDr}
                viewDrawer={this.state.viewDrawer}
                addDrawer={this.state.addDrawer}
                handleDeleteConnector={this.handleDeleteConfirmConnectorClick}
                chargerTypes={this.props.chargerTypes}
                inputFields={this.state.formData.connectors}
                removeFieldsConnector={this.removeFieldsConnector}
                // ch connector
                addConnectorDrawer={this.state.addConnectorDrawer}
                EditConnectorDrawer={this.state.EditConnectorDrawer}
                handleCloseEditConnector={this.handleCloseEditConnector}
                handleOnclickEditConnectorOpen={this.handleOnclickEditConnectorOpen}
                handleSubmitConnector={this.handleSubmitConnector}
                hendleChangeConnectorAdd={this.hendleChangeConnectorAdd}
                handleSubmitEditConnector={this.handleSubmitEditConnector}
                handleChangeConnectorEdit={this.handleChangeConnectorEdit}
                EditCh_PointIndex={this.state.EditCh_PointIndex}
                EditCh_ConnectorIndex={this.state.EditCh_ConnectorIndex}
                handleChangeChPointEdit={this.handleChangeChPointEdit}
                chargingConnectorEdit={this.state.chargingConnectorEdit}
                handleSubmitEditChPoint={this.handleSubmitEditChPoint}
                EditChargingPointDrawer={this.state.EditChargingPointDrawer}
                handleCloseEditChPoint={this.handleCloseEditChPoint}
                handleOpenEditChPoint={this.handleOpenEditChPoint}
                isLoading = {this.isLoading2}
              />

              <Snackbar
                open={this.state.deleteSuccess}
                autoHideDuration={3000}
                onClose={() => this.setState({ deleteSuccess: false })}
                message="Charging Connector Deleted Successfully"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity="error">Charging Station Deleted Successfully</Alert>
              </Snackbar>
              <Snackbar
                open={this.state.charging_point_Success}
                autoHideDuration={3000}
                onClose={() => this.setState({ charging_point_Success: false })}
                message="Charging Station Deleted Successfully"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity="success">Charging Point Added  Successfully</Alert>
              </Snackbar>
              {/* edit ch point success */}
              <Snackbar
                open={this.state.charging_point_Edit_Success}
                autoHideDuration={3000}
                onClose={() => this.setState({ charging_point_Edit_Success: false })}
                message="Charging Station Deleted Successfully"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity="success">Charging Point updated  Successfully</Alert>
              </Snackbar>


              <Snackbar
                open={this.state.charging_Connector_Success}
                autoHideDuration={3000}
                onClose={() => this.setState({ charging_Connector_Success: false })}
                message="Charging Station Deleted Successfully"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity="success">Charging Connector Added  Successfully</Alert>
              </Snackbar>

              {/* edit ch connector success */}
              <Snackbar
                open={this.state.charging_Connector_Edit_Success}
                autoHideDuration={3000}
                onClose={() => this.setState({ charging_Connector_Edit_Success: false })}
                message="Charging Station Deleted Successfully"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity="success">Charging Connector updated  Successfully</Alert>
              </Snackbar>

              <ConfirmDeleteStationModel
                open={this.state.deleteConfirmStationDaialog}
                handleClose={this.handleCloseDeleteStationConfirm}
                handleDelete={this.handleDeleteStationClick}
              />

              <ConfirmDeleteConnectorModel
                open={this.state.deleteConfirmConnectorDaialog}
                handleClose={this.handleCloseDeleteConnectorConfirm}
                handleDelete={this.handleDeleteConnectorClick}
              />



              {/* {this.props.chargingStationData.length == 0 ?
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>

                  <h1>Data Not Found </h1>
                </Box>
                : ""} */}

            </>
            )}




      </>
    );
  }
}

export default ChargingStationTableContainer;