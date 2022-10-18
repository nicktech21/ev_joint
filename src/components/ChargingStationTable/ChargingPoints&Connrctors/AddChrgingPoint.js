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


function AddChrgingPoint({
  addDrawer, handleAddChPointClose, classes, handleChangeChPointAdd, inputFields, removeFieldsConnector, handleChangeConnector, chargerTypes, handleAddConnector, handleSubmitAddChPoint
}) {
  return (
    <Box>
      <Drawer
        anchor="right"
        open={addDrawer}
        onClose={handleAddChPointClose}
        PaperProps={{
          sx: { width: "28%", minWidth: "400px", padding: "2%" },
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
                Add Charging Point
              </Text>

              <HighlightOffIcon sx={{ cursor: "pointer" }} onClick={handleAddChPointClose} />
            </Box>
            <Box
              sx={{
                border: "1px solid #EAEAEA",
                borderRadius: "10px",
                margin: "12px",
                padding: "10px",
                boxShadow: "0px 0px 10px 0px #E0E0E0",

              }}
            >
              <FormControl fullWidth size="small">
                <TextField
                  size="small"
                  className={classes.textField}
                  id="cPointName"
                  name="name"
                  label="charging Point name"
                  onChange={e =>
                    handleChangeChPointAdd("name", e.target.value)
                  }
                  variant="outlined"
                />

                <TextField
                  size="small"
                  className={classes.textField}
                  id="cPointId"
                  name="cp_id"
                  label="Charging Point ID"
                  onChange={e =>
                    handleChangeChPointAdd("cp_id", e.target.value)
                  }
                  variant="outlined"
                />
              </FormControl>

              <Box className="App">
                {inputFields.map((input, index) => {
                  return (
                    <div key={index}>
                      {index === inputFields.length - 1 ? (
                        index === 0 ? (
                          ""
                        ) : (
                          <Text
                            sx={{ textAlign: "right", marginTop: "2rem" }}
                          >
                            <HighlightOffIcon
                              sx={{ color: "orange", cursor: "pointer"   }}
                              onClick={() => removeFieldsConnector(index)}
                            />
                          </Text>
                        )
                      ) : (
                        ""
                      )}

                      <Text>Charging Connector {index + 1}</Text>

                      <FormControl fullWidth size="small">
                        <InputLabel
                          sx={{
                            margin: "10px 10px",
                            padding: "0px",
                            fontSize: "16px",
                          }}
                          id={index}
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
                          label="Charging Connector"
                          value={input.charger_type_id}
                          onChange={(event) =>
                            handleChangeConnector(index, event)
                          }
                        >
                          {chargerTypes?.map((chargerTypes) => (
                            <MenuItem value={chargerTypes.id}
                              key={chargerTypes.id}
                            >
                              {chargerTypes.name}
                            </MenuItem>
                          ))}
                        </Select>

                        <TextField
                          className={classes.textField}
                          size="small"
                          id="capacity"
                          name="power"
                          label="Power"
                          onChange={(event) =>
                            handleChangeConnector(index, event)
                          }
                          variant="outlined"
                          value={input.power}
                        />
                        <TextField
                          className={classes.textField}
                          size="small"
                          id="rate"
                          name="price_per_khw"
                          label="Rate"
                          variant="outlined"
                          onChange={(event) =>
                            handleChangeConnector(index, event)
                          }
                          value={input.price_per_kwh}
                        />
                      </FormControl>
                    </div>
                  );
                })}
                <Text
                  sx={{
                    cursor: "pointer",
                    color: "#19AA69",
                    fontSize: "14px",
                    margin: "10px 50px",
                  }}
                  onClick={() => handleAddConnector()}
                >
                  +Add charging Connector
                </Text>
              </Box>
            </Box>
            <Box sx={{ margin: "auto" }}></Box>
            <Button
              sx={{ margin: "20px 10px 20px 10px" }}
              className={classes.viewButtonLabel2}
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => handleSubmitAddChPoint()}
            >
              Submit
            </Button>
          </Box>
        </FormControl>
      </Drawer>

    </Box>
  )
}

export default AddChrgingPoint