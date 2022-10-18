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

function AddChargingConnectors({
    addConnectorDrawerOpen,handleCloseAddConnectorDr, hendleChangeConnectorAdd,chargerType, classes,handleSubmitConnectorAdd
}) {
  return (
    <Box>
            <Drawer
              anchor="top"
              open={addConnectorDrawerOpen}
              onClose={handleCloseAddConnectorDr}
              PaperProps={{
              sx: { width: "21%", padding: "2%", margin: "10% 0 10% 70%", borderRadius: "10px", boxShadow: "0px 10px 10px 0px",  },

                
              }}
            >
              <FormControl>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      margin: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "black" }}>
                      Add Charging Connector
                    </Text>

                           
                    <HighlightOffIcon sx={{cursor: "pointer"}} onClick={() => handleCloseAddConnectorDr()} />
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
                        onChange={e=> hendleChangeConnectorAdd("charger_type_id", e.target.value)}
                        labelId="demo-simple-select-label"
                        name="charger_type_id"
                        label="Charging Connector"
                      >
                        {chargerType?.map((chargerType, i) => (
                          <MenuItem value={chargerType.id} key= {i}>
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
                        onChange={e=> hendleChangeConnectorAdd("power", e.target.value)}
                        variant="outlined"
                      />
                      
                      <TextField
                        className={classes.textField}
                        size="small"
                        id="rate"
                        name="price_per_khw"
                        label="Rate"
                        onChange={e=> hendleChangeConnectorAdd("price_per_khw", e.target.value)}
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
                    onClick={() => handleSubmitConnectorAdd()}
                  >
                    Add Connector
                  </Button>
                </Box>
              </FormControl>
            </Drawer>

    </Box>
  )
}

export default AddChargingConnectors