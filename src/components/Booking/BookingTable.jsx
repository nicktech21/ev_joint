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
import MenuItem from "components/common/MenuItem";
import Paper from "components/common/Paper";
import Avatar from "components/common/Avatar";
import Modal from "components/common/Modal";
import DatePickerModal from "components/common/DatePickerModal";
import Dialog from "components/common/DialogMD";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import EventIcon from '@mui/icons-material/Event';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from "@mui/material/OutlinedInput";

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
                <Text variant="body1" color="inherit" >
                  {v}
                </Text>

                {/* <Link href={customer} color="inherit">
                  <Text variant="small" color="#808591" >
                    {d.shareCode}
                  </Text>
                </Link> */}
              </Grid>
            </Stack>
          </Grid>
        </>
      );
    },
  },

  {
    field: "date",
    headerName: "Date",
  },
  {

    field: "slot",
    headerName: "Slot",
    valueGetter: (v, d) => {
      return (
        <>
          <Grid container spacing={0} >
            <Stack direction="row" spacing={0} >

              <Grid item xs={12}>
                <Text color="#808591">
                  {v}
                </Text>

                <Text variant="small" color="#808591">
                  Duration - {d.duration} Mins
                </Text>

              </Grid>
            </Stack>
          </Grid>
        </>
      );
    },


  },
  {
    field: "vehicle_model",
    headerName: "Vehicle Model",
  },
  {
    field: "type_of_connecters",
    headerName: "Type of connecters",
  },
  {
    field: "status",
    headerName: "Status",
  },
  // {
  //   field: "action",
  //   headerName: "Actions",
  //   valueGetter: (v, d) => {
  //     return (
  //       <>
  //         <Stack
  //           direction="row"
  //           justifyContent="center"
  //           alignItems="center"
  //           spacing={2}
  //         >
  //           <Image src="righticon.png" width={24} height={24} />

  //              <Image  src="wrongicon.png" width={24} height={24} />

  //         </Stack>
  //       </>
  //     );
  //   },
  // },
];



const BookingTable = ({
  props,
  onChange,
  formData,
  isLoading,
  formError,
  isError,
  datePickerOpen,
  handleDatePickerOpen,
  handleDatePickerClose,
  from_date,
  to_date,
  fromat_date_from,
  fromat_date_to
}) => {
  var data = props.bookingTableData;
  console.log("Booking table data formError", data);
  const classes = useStyles();
  var vehModels = props.vehicleMasterData;
  var locationDatas = props.locationData;
  var manufacturerDatas = props.manufacturerData;



  //////  search bar code
 
  const [inputText, setInputText] = useState("");
  let inputSearchHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.toLowerCase();
    setInputText(lowerCase);
    console.log("serching for =", e);
  };
  ///
  const filteredData = data?.filter((el) => {

    if (inputText === '') {
      return el;
    }
 
    else {
      console.log("dgdgd", el.clientName);
      return el.clientName?.toLowerCase().includes(inputText);
    }
  })

  ///////////


  return (
    <Box className={classes.center} sx={{ marginTop: "1.6rem" }}>
      <Card>
        <CardContent>
          <Text
            variant="h5"
            color="#707070"
            sx={{ fontSize: "24px", marginBottom: "40px" }}
          >
            BOOKINGS
          </Text>
          <Stack
            direction={{ sm: 'column', xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="space-between"
            sx={{
              marginBottom: "20px", height: "3.5rem"
            }}
          >
            <Stack direction={{ sm: 'column', xs: 'column', md: 'row' }} spacing={2}>
              <Box sx={{ maxWidth: 125, minWidth: 125 }}>
                <FormControl fullWidth size="small">
                  <InputLabel sx={{ fontSize: "14px" }} id="location-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="location-label"
                    label="Location"
                    className={classes.table_location}
                    value={formData.station_id}
                    // error={formError.station_id}
                    onChange={e => onChange("station_id", e.target.value)}

                  >
                    <MenuItem selected value=""  >
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

              <Box sx={{ minWidth: 128 }}>
                <FormControl fullWidth size="small">
                  <InputLabel sx={{ fontSize: "14px" }} id="manufacturer-label">
                    Manufacturer
                  </InputLabel>
                  <Select
                    labelId="manufacturer-label"
                    label="Manufacturer"

                    // sx={{ width: "50px", }}
                    sx={{ height: "42px" }}

                    value={formData.manufacturer_id}
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
              <Box sx={{ minWidth: 125 }}>
                <FormControl fullWidth size="small">
                  <InputLabel sx={{ fontSize: "14px" }} id="model-label">
                    Model
                  </InputLabel>
                  <Select
                    labelId="model-label"
                    label="Model"

                    // sx={{ width: "177px" }}
                    sx={{ height: "42px" }}

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

              <Box sx={{ maxWidth: 125, minWidth: 135 }}>
                <FormControl fullWidth size="small">
                  <InputLabel sx={{ fontSize: "14px" }} id="daterange-label">
                    Date Range
                  </InputLabel>
                  <OutlinedInput

                    label="Date Range"
                    className={classes.table_date}
                    sx={{ fontSize: "18px", }}
                    id="outlined-adornment-amount"

                    value={fromat_date_from && fromat_date_to ? `${fromat_date_from} - ${fromat_date_to}` : ""}
                    onClick={handleDatePickerOpen}
                    endAdornment={<InputAdornment position='end'><EventIcon /></InputAdornment>}

                  />
                </FormControl>
              </Box>

              <Dialog
                open={datePickerOpen}
                onClose={handleDatePickerClose}
                title="Select a date range"
                children={<DatePickerModal from_date={from_date} to_date={to_date} handleChange={onChange} />}
              />


              <Box sx={{ minWidth: 115 }}>

                <FormControl fullWidth size="small">
                  <InputLabel sx={{ fontSize: "14px" }} id="demo-simple-select-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"

                    // sx={{
                    //   width: "177px",


                    // }}
                    sx={{ height: "42px", }}
                    value={formData.status}
                    // error={formError.status}
                    onChange={e => onChange("status", e.target.value)}
                  >
                    <MenuItem value="All">All</MenuItem>
                    {/* <MenuItem value="PENDING">Pending</MenuItem> */}
                    <MenuItem value="REJECTED">Rejected</MenuItem>
                    <MenuItem value="BOOKED">Accepted</MenuItem>
                    {/* <MenuItem value="COMPLETED">Completed</MenuItem> */}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
            <Grid>
              <Box
                sx={{

                  minWidth: 150,
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

                    // width: "177px",
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
                    onChange={e => inputSearchHandler(e.target.value)}
                    inputProps={{ "aria-label": "search" }}
                  />
                </Paper>
              </Box>
            </Grid>
          </Stack>

          <Box className={classes.table} >
            <CTable
              columns={columns}
              data={filteredData}
              isLoading={isLoading}
              // data={data}
              pagination={true}
              localPagination={true}
              page={0}
              rowsPerPage={5}
            ></CTable>
          </Box>

        </CardContent>
      </Card>
      <Modal ></Modal>
      {/* <Dialog
        open={open}
        onClose={handleClose} title ="Do you wish to reject this booking ?"  children={<RejectBookingModal />} /> */}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  viewButtonLabel: { textTransform: "none" },
  pageHeading: {
    fontSize: "14px",
    fontFamily: "Nunito Sans",
    // fontWeight: "bold",
    textTransform: "none",
    color: "#707070",
    opacity: 1,

  },


  table: {
    ['@media (max-width:768px)']: {


      marginTop: "99%"

    }
  },

  table_location: {
    ['@media (max-width:768px)']: {
      width: "235%"
    }
  },

  table_date: {
    ['@media (max-width:768px)']: {
      width: "218%",
      //  maxWidth: "auto"
    }
  },

}));
export default BookingTable;
