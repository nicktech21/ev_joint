import React from "react";
import CTable from "components/common/Table";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "components/common/Box";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import IconButton from "components/common/IconButton";
import Stack from "components/common/Stack";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";
import Button from "components/common/Button";
import Image from "components/common/Image";
import Link from "components/common/Link";
import Drawer from "components/common/Drawer";
import ChargingPointShowDrawer from "./ChargingPointShowDrawer";
import AddChrgingPoint from "./ChargingPoints&Connrctors/AddChrgingPoint";
import AddChargingConnectors from "./ChargingPoints&Connrctors/AddChargingConnectors";
import EditChargingConnector from "./ChargingPoints&Connrctors/EditChargingConnector";
import EditChargingPoint from "./ChargingPoints&Connrctors/EditChargingPoint";
import { fontFamily } from "@mui/system";

const ChargingStationTable = ({
  data,
  handleChangeConnector,
  isLoading,
//
  handleSubmitConnector,
  handleSubmitEditConnector,
  hendleChangeConnectorAdd,
//
  handleSubmitAddChPoint,
  handleSubmitEditChPoint,

  handleAddConnector,
  handleChangeChPointAdd,
  onDeleteClick,
  handleAddChPoint,
  handleAddChPointClose,
  handleShowChPoint,
  handleShowChPointClose,
  handleOpenAddConnectorDr,
  handleCloseAddConnectorDr,
  viewDrawer,
  addDrawer,
  addConnectorDrawer,
  chargingPoint,
  handleDeleteConnector,
  chargerTypes,
  inputFields,
  removeFieldsConnector,
  // edit connector :

  EditConnectorDrawer,
  EditCh_PointIndex,
  handleOnclickEditConnectorOpen,
  handleCloseEditConnector,
  chargingConnectorEdit,
  // edit Charging Point
  handleChangeChPointEdit,
  EditChargingPointDrawer,
  handleCloseEditChPoint,
  handleOpenEditChPoint,
  handleChangeConnectorEdit
}) => {

  // var propsIdData = [...chargingPoint];
  var propsIdData = [chargingPoint];
 
  var Data = data;

  const classes = useStyles();
  const columns = [
    {
      field:"name_of_charging_station",
      headerName: "Name of charging station",
    },
    {
      field: "name_of_network",
      headerName: "Name of network",
    },
    {
      field: "type_of_charging_station",
      headerName: "Type of charging station",
    },
    {
      field: "charging_points",
      headerName: "Charging points",
      valueGetter: (v, d) => {
        return (
          <>
            {d.charging_points === 0 ? (
              <Text
                sx={{ cursor: "pointer", color: "#19AA69" }}
                onClick={() => handleAddChPoint(d.stationId)}
              >
                +Add charging Point
              </Text>
            ) : (
              <Text
                sx={{ cursor: "pointer", color: "#19AA69" }}
                onClick={() => handleShowChPoint(d.stationId)}
              >
                {d.charging_points}
              </Text>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      valueGetter: (v, d) => {
        const StationDetail = {
          pathname: `/station/details/` + d.stationId,
          stationId: d.stationId,
          
        };
        const StationEdit = {
          pathname: `/edit/station/` + d.stationId,
          stationId: d.stationId,
        };
        return (
          <>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
             
              spacing={0}
              sx={{
                flexDirection: { xs: "column", md: "row", lg: "row" },
              }}
            >
              <IconButton
                aria-label="show"
                sx={{
                  color: "green",
                  cursor: "pointer"
                }}
              >
                <Link href={StationDetail}>
                  <Image src="show.svg" />
                </Link>
              </IconButton>

              <IconButton
                aria-label="edit"
                sx={{
                  color: "green",
                }}
              >
                <Link href={StationEdit}>
                  <Image sx={{cursor: "pointer"}} src="edit-icon.svg" />
                </Link>
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => onDeleteClick(d.stationId)}
                sx={{
                  color: "green",
                }}
              >
                <Image src="delete-icon.svg" />
              </IconButton>
            </Stack>
          </>
        );
      },
    },
  ];

  
  return (
    <Box className={classes.center }  sx={{margin:"25px 0 0 0 ",  }}>
      <Card>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "40px",
            }}
          >
            <Text
              className={classes.pageHeading}
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                textTransform: "none",
              }}
            >
              CHARGING STATION
            </Text>

            {/* 
            Add Charging Point 
      */}

            <AddChrgingPoint
              addDrawer={addDrawer}
              handleAddChPointClose={handleAddChPointClose}
              handleChangeChPointAdd={handleChangeChPointAdd}
              classes={classes}
              inputFields={inputFields}
              removeFieldsConnector={removeFieldsConnector}
              handleChangeConnector={handleChangeConnector}
              chargerTypes={chargerTypes}
              handleAddConnector={handleAddConnector}
              handleSubmitAddChPoint={handleSubmitAddChPoint}
            />


            {/*
Add Charging Connector
 */}


          <AddChargingConnectors
            addConnectorDrawerOpen={addConnectorDrawer}
            handleCloseAddConnectorDr={handleCloseAddConnectorDr}
            hendleChangeConnectorAdd={hendleChangeConnectorAdd}
            chargerType={chargerTypes}
            classes={classes}
            handleSubmitConnectorAdd={handleSubmitConnector}

          />
          


{/*          ~edit connector~                 */}

            <EditChargingConnector
              EditConnectorDrawerOpen={EditConnectorDrawer}
              chargingConnectorEditData={chargingConnectorEdit}
              handleCloseEditCtr={handleCloseEditConnector}            
          
              chargerType={chargerTypes}
              classes={classes}
              handleChangeConnectorEdit={handleChangeConnectorEdit}
              handleSubmitEditConnector={handleSubmitEditConnector}

            />

            {/* ***** */}

{/*          ~edit Charging Point~             */}
            
            <EditChargingPoint
              EditChargingPointDrawer={EditChargingPointDrawer}
              handleCloseEditChPoint={handleCloseEditChPoint}
              propsIdData={propsIdData}
              classes={classes}
              EditCh_PointIndex={EditCh_PointIndex}
              handleChangeChPointEdit={handleChangeChPointEdit}
              handleSubmitEditChPoint={handleSubmitEditChPoint}
            />
          





 {/*             show charging point            */}

            <Drawer
              anchor="right"
              open={viewDrawer}
              onClose={handleShowChPointClose}
              PaperProps={{
                sx: { width: "30%",minWidth:"400px", padding:'2%' },
              }}
            >
              <Box sx={{  display: "flex", justifyContent: "space-between" }}>
                <Text
                  sx={{
                    margin: "20px 20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Add Charging Points
                </Text>

                <HighlightOffIcon
                  onClick={() => handleShowChPointClose()}
                  sx={{ margin: "20px 20px", cursor: "pointer" }}
                />
              </Box>
              <ChargingPointShowDrawer
                props={chargingPoint}
                handleDeleteConnector={handleDeleteConnector}
                handleAddChPoint={handleAddChPoint}
                handleOpenAddConnectorDr={handleOpenAddConnectorDr}
                handleOnclickEditConnectorOpen={handleOnclickEditConnectorOpen}
                handleOpenEditChPoint={handleOpenEditChPoint}
              />
            </Drawer>
            <Button
              className={classes.viewButtonLabel}
              variant="contained"
              color="primary"
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/add/station"
                color="inherit"
              >
                + Add station
              </Link>
            </Button>
          </Stack>

          <CTable
            columns={columns}
            isLoading={isLoading}
            data={Data}
            pagination={true}
            localPagination={true}
            page={0}
            rowsPerPage={5}
          ></CTable>
          {/* { data.length == 0 ? 
                    <Box sx={{  marginTop: "50px", textAlign:"center" }}>
            
                      <h4>Data Not Found </h4> 
                      <p>!!   ...404 error </p>
                    </Box>
                    : "" } */}
        </CardContent>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  viewButtonLabel: { 
    textTransform: "none",
    
['@media (max-width:768px)']: { 
     fontSize:"14px",
   
     }
  },
  viewButtonLabel2: {
    textTransform: "none",
    margin: "10px 10px",
    width: "90%",
    
  },
  pageHeading: {
    fontSize: "24px",
    fontfamily: 'Nunito Sans',
    fontWeight: "500",
    textTransform: "none",
    color: "#707070",
    opacity: 1,

    ['@media (max-width:768px)']: { 
      fontSize:"18px"
     }
  },

  textField: {
    margin: "10px 10px",
    padding: "0px",
    height: "40px",
  },

  paper: {
    width: 250,
  },
  
  EditChargingConnectorDrower : {
   
    
    ['@media (max-width:768px)']: { 
     
      

    }
  }
}));


export default ChargingStationTable;