import React, { useState } from "react";
import CTable from "components/common/Table";
import Box from "components/common/Box";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Grid from "components/common/Grid";
import IconButton from "components/common/IconButton";
import Stack from "components/common/Stack";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";
import Avatar from "components/common/Avatar";
import MenuItem from "components/common/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Link from 'components/common/Link';
import { withRouter } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import Paper from "components/common/Paper";
import { color } from "@mui/system";



const CustomersTable = ({ props, onChange,
  formData,
  isLoading,
  formError,
  isError }) => {
  const classes = useStyles();
  // console.log("formError for =", formError);

  var Data = props.customerTableData;

  var vehModels = props.vehicleMasterData;

  var locationDatas = props.locationData;
  var manufacturerDatas = props.manufacturerData;



  const columns = [
    {
      field: "clientName",
      headerName: "Name of customer",
      valueGetter: (v, d) => {
        const customer = {
          pathname: `/customer/details/` + d.customerId,
          customerId: d.customerId,
        };
        return (
          <>
            <Grid container spacing={0}>
              <Stack direction="row" spacing={0}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    marginRight: "0.5rem",
                  }}
                  src={d.clientImage}
                  variant="body1"
                  title="F"
                ></Avatar>

                <Grid item xs={12}>
                  {/* <Text variant="body1" color="#202020">
                    {v}{d.shareCode}
                  </Text> */}
                  <Link
                    href={customer}
                    color="inherit"
                    underline="hover"
                  // sx={{textDecoration: "none"}}
                  >
                    <Text >
                      {v}
                    </Text>
                  </Link>
                </Grid>
              </Stack>
            </Grid>
          </>
        );
      },
    },
    { field: "type_of_customers", headerName: "Type of customer" },
    // {
    //   field: "vehicle_model",
    //   headerName: "Vehicle model",
    // },


    {
      field: "power_consumed",
      headerName: "Power consumed",
    },
    {
      field: "time_spent",
      headerName: "Time spent",
    },
    {
      field: "amount_paid",
      headerName: "Amount Paid",
    },
  ];


  //////  search bar code

  const [inputText, setInputText] = useState("");
  let inputSearchHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.toLowerCase();
    setInputText(lowerCase);
    console.log("serching for =", e);
  };
  ///
  const custumerName = Data?.map((p) => (p.clientName));
  const filteredData = Data.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return (el.clientName?.toLowerCase().includes(inputText))
    }
  })
  ///////////


  return (
    <Box className={classes.center} sx={{ marginTop: "1.6rem" }}>
      <Card>
        <CardContent>
          <Text
            className={classes.pageHeading}
            sx={{
              fontSize: "24px",
              // fontWeight: "bold",
              textTransform: "none",
              marginBottom: "2.5rem",
              // fontFamily: "Nunito Sans"
            }}
          >
            CUSTOMERS
          </Text>

          <Stack
            direction={{ sm: 'column', xs: 'column', md: 'row' }}
            spacing={2}
            // className={classes.customer}
            justifyContent="space-between"
            sx={{
              marginBottom: "11px",
            }}
          >
            <Stack direction={{ sm: 'column', xs: 'column', md: 'row' }} spacing={2}>
              <Box sx={{ minWidth: 120, }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="location-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="location-label"
                    label="Location"
                    className={classes.customer}
                    sx={{ width: "177px", height: "42px", }}
                    value={formData.station_id}
                    // helperText={formError.station_id}
                    // error={formError.station_id}
                    onChange={e => onChange("station_id", e.target.value)}

                  >
                    <MenuItem selected value="">
                      All
                    </MenuItem>
                    {locationDatas.map((locs) => (
                      <MenuItem key={locs.id} value={locs.id}>
                        {locs.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>


              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="manufacturer-label">
                    Manufacturer
                  </InputLabel>
                  <Select
                    labelId="manufacturer-label"
                    label="Manufacturer"

                    className={classes.customer}
                    sx={{ width: "177px", height: "42px" }}
                    value={formData.manufacturer_id}
                    // helperText={formError.manufacturer_id}
                    // error={formError.manufacturer_id}
                    onChange={e => onChange("manufacturer_id", e.target.value)}
                  >

                    <MenuItem value=''>All</MenuItem>
                    {manufacturerDatas.map((manufacturers) => (
                      <MenuItem key={manufacturers.id} value={manufacturers.id}>
                        {manufacturers.name}
                      </MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </Box>


              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="model-label">
                    Model
                  </InputLabel>
                  <Select
                    labelId="model-label"
                    label="Model"
                    className={classes.customer}
                    sx={{ width: "177px", height: "42px" }}
                    value={formData.model_id}
                    // error={formError.model_id}
                    onChange={e => onChange("model_id", e.target.value)}
                  >

                    <MenuItem value=''>All</MenuItem>
                    {vehModels.map((modls) => (
                      <MenuItem key={modls.id} value={modls.id}>
                        {modls.name}
                      </MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </Box>


            </Stack>
            <Grid>
              <Box
                sx={{
                  // width:120,
                  // float: "right",
                  textAlign: "right",
                  alignContent: "flex-end",
                  // border: "1px solid #e0e0e0",
                  borderRadius: "5px !important"
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2.5px 0",
                    display: "flex",
                    alignItems: "center",
                    width: "300px",
                    height: "35px",

                  }}
                >
                  <IconButton
                    type="submit"
                    sx={{ p: "8px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    onChange={e => inputSearchHandler(e.target.value)}
                  />
                </Paper>
              </Box>
            </Grid>

          </Stack>

          <CTable
            columns={columns}
            data={filteredData}
            isLoading={isLoading}
            // data={Data}
            pagination={true}
            localPagination={true}
            page={0}
            rowsPerPage={5}
          ></CTable>
        </CardContent>
      </Card>


    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  viewButtonLabel: { textTransform: "none" },
  pageHeading: {
    fontSize: "24px",
    // fontFamily: "Nunito Sans",
    // fontWeight: "bold",
    textTransform: "none",
    color: "#707070",
    opacity: 1,
  },

  customer: {

    ['@media (max-width:768px)']: {
      width: "100%"
    }

  }



}));


export default withRouter(CustomersTable);
