import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "components/common/Box";
import Text from "components/common/Text";
import Button from "components/common/Button";
import Drawer from "components/common/Drawer";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

function EditChargingPoint({
    EditChargingPointDrawer,
    handleCloseEditChPoint,
    propsIdData,
    classes,
    EditCh_PointIndex,
    handleChangeChPointEdit,
    handleSubmitEditChPoint
}) {
    return (
        <Box>
            <Drawer
                anchor="top"
                open={EditChargingPointDrawer}
                onClose={handleCloseEditChPoint}
                PaperProps={{
                    sx: { width: "21%", padding: "2%", margin: "10% 0 10% 70%", borderRadius: "10px", boxShadow: "0px 10px 10px 0px" },
                }}
            >
                <Box
                    sx={{
                        margin: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Text sx={{ fontWeight: "bold", color: "black" }}>
                        Edit Charging Point
                    </Text>

                    <HighlightOffIcon sx={{cursor: "pointer"}} onClick={handleCloseEditChPoint} />
                </Box>

                <Box>
                    <FormControl fullWidth size="small">
                        <TextField
                            size="small"
                            className={classes.textField}
                            id="cPointName"
                            name="name"
                            label="charging Point name"
                            defaultValue={propsIdData[EditCh_PointIndex]?.name}
                            //  value={propsIdData[0].name}
                            onChange={e =>
                                handleChangeChPointEdit("name", e.target.value)
                            }
                            variant="outlined"
                        />

                        <TextField
                            size="small"
                            className={classes.textField}
                            id="cPointId"
                            defaultValue={propsIdData[EditCh_PointIndex]?.cp_id}
                            name="cp_id"
                            label="Charging Point ID"
                            onChange={e =>handleChangeChPointEdit("cp_id", e.target.value)
                            }
                            variant="outlined"
                        />

                    </FormControl>

                </Box>


                <Button onClick={() => handleSubmitEditChPoint()}>Update</Button>
            </Drawer>

        </Box>
    )
}

export default EditChargingPoint