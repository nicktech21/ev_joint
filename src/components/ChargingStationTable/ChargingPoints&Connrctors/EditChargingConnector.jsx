import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "components/common/Box";
import Text from "components/common/Text";
import Button from "components/common/Button";
import Drawer from "components/common/Drawer";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "components/common/MenuItem";


function EditChargingConnector({
  chargingConnectorEditData,
  EditConnectorDrawerOpen,
  handleChangeConnectorEdit,
  handleCloseEditCtr,
  chargerType,
  classes,
  handleSubmitEditConnector
}) {


  
  return (
    <Box>
    
    <Drawer
              anchor="top"
              open={EditConnectorDrawerOpen}
              onClose={handleCloseEditCtr}
              PaperProps={{
                sx: { width: "21%", padding: "2%", margin: "10% 0 10% 70%", borderRadius: "10px", boxShadow: "0px 10px 10px 0px" }
              }}
            >
              <FormControl className={classes.EditChargingConnectorDrower}>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      margin: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "black" }}>
                      Edit Charging Connector
                    </Text>

                    <HighlightOffIcon sx={{cursor: "pointer"}} onClick={() => handleCloseEditCtr()} />
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #EAEAEA",
                      borderRadius: "10px",
                      margin: "12px",
                      padding: "10px",
                    }}
                  >
                    <FormControl fullWidth size="small">


                      <InputLabel
                        sx={{
                          margin: "10px 10px",
                          padding: "0px",
                          fontSize: "16px",
                        }}
                        name="chargingConnector"
                      >
                        Charging Connector
                      </InputLabel>
                      <Select
                        sx={{
                          margin: "10px 10px",
                          padding: "0px",
                          height: "40px",
                          border: "0px solid gray",
                          borderRadius: "5px",
                        }}
                        labelId="demo-simple-select-label"
                        name="charger_type_id"
                        value={chargingConnectorEditData? chargingConnectorEditData.charger_type_id : ""}
                        defaultValue={chargingConnectorEditData ? chargingConnectorEditData.charger_type_id : "name" }                        
                        onChange={e =>handleChangeConnectorEdit("charger_type_id", e.target.value)}
                        label="Charging Connector"
                      >
                        {chargerType?.map((chargerType,i) => (
                          <MenuItem key= {i} value={chargerType.id}>
                            {chargerType.name}
                          </MenuItem>
                        ))}
                      </Select>


                      <TextField
                        className={classes.textField}
                        size="small"
                        id="capacity"
                        name="power"
                        label="Power"
                        defaultValue={chargingConnectorEditData ? chargingConnectorEditData.power : "Power" }
                        onChange={e =>handleChangeConnectorEdit("power", e.target.value)}
   
                        variant="outlined"
                      />
                      <TextField
                        className={classes.textField}
                        size="small"
                        id="rate"
                        name="price_per_khw"
                        label="Rate"
                        onChange={e =>handleChangeConnectorEdit("price_per_khw", e.target.value)}
                        defaultValue={chargingConnectorEditData ? chargingConnectorEditData.price_per_khw : "rate" }
                        variant="outlined"
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ margin: "10px 10px" }}></Box>
                  <Button
                    className={classes.viewButtonLabel2}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={()=>handleSubmitEditConnector()}
                  >
                    Update
                  </Button>
                </Box>
              </FormControl>
            </Drawer>
    
    </Box>
  )
}

export default EditChargingConnector