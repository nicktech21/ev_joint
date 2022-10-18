import Box from 'components/common/Box'
import Card from 'components/common/Card'
import CardContent from 'components/common/CardContent'
import Stack from 'components/common/Stack'
import Text from 'components/common/Text'
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react'
import Divider from 'components/common/Divider'
import Grid from 'components/common/Grid'
import Select from "@mui/material/Select";
import MenuItem from "components/common/MenuItem";
import HighchartsReact from "highcharts-react-official";
import FormControl from "@mui/material/FormControl";
import Highcharts from "highcharts";
import ListItemText from 'components/common/ListItemText'
import  InputLabel  from "@mui/material/InputLabel";
import { makeStyles } from "@mui/styles";



const DashboardRevenue = (props, handleChangeSelectAmount, MenuProps, AmountName,) => {
    const classes = useStyles();


    const select_option_amount = [
        "Amount recieved",
        "Pending amount",
        // 'Carlos Abbott',
        // 'Miriam Wagner',
        // 'Bradley Wilkerson',
        // 'Virginia Andrews',
        // 'Kelly Snyder',
    ];
  
    return (

        <Card >
            <CardContent>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Text className={classes.graphheading} >
                        Revenue
                    </Text>

                    <Box>
                        <Stack direction="row" spacing={2}>
                            <ArrowUpwardIcon sx={{ fontSize: "20px", marginTop: "-1px" }} />
                            <Text className={classes.percentage} sx={{ marginLeft: "5px !important" }}> 25%</Text>
                            <Text className={classes.dateheading}>Since November 2019</Text>
                        </Stack>
                    </Box>
                </Stack>

                <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} variant="middle" />

                <Grid container spacing={2}>
                    <Grid item md={3}>

                        <Box>
                            <Stack direction="row" spacing={2}>

                                <Text className={classes.totalheading}>Total Revenue :</Text>
                                <Text className={classes.valueheading}>₹ 700K</Text>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={7}>

                        <Box>
                            <Stack direction="row" spacing={2}>

                                <Text className={classes.totalheading}>Avg Revenue Per Customer:</Text>
                                <Text className={classes.valueheading}>₹ 7K</Text>
                            </Stack>
                        </Box>




                    </Grid>
                    <Grid item md={2}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >

                            <Box >

                                <FormControl>

                                    <InputLabel sx={{top:"-5px" , fontSize:"14px"}} id="demo-simple-select-label"  >Amount recieved</InputLabel>

                                    <Select
                                        sx={{ fontSize: "14px",  width:"11rem" }}
                                        className={classes.customSelect}
                                        labelId="demo-simple-select-label"
                                         label="Amount recieved" 
                                        id="demo-simple-select-label"
                                        value={AmountName}
                                        onChange={()=>handleChangeSelectAmount()}
                                        input={<OutlinedInput id="demo-simple-select-label"  label="Amount recieved"/>}
                                        MenuProps={MenuProps}
                                    >
                                        {select_option_amount.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </Box>

                        </Stack>



                    </Grid>

                </Grid>


                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <Box className={classes.HighchartsFirst}>
                            <HighchartsReact sx={{ width: "100%" }} highcharts={Highcharts} options={props.options} />
                        </Box>
                    </Grid>
                </Grid>

            </CardContent>

        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    HighchartsFirst: {
        "& .highcharts-container": {
            width: "100% !important",
        },
        "& .highcharts-root": {
            width: "100% !important",
        }
    },
    customSelect: {
        height: "40px !important",
        margin: 0,
        "& .MuiListItemText-primary": { fontSize: "14px !important" },

    },
    breadcrumbs: {
        fontSize: "14px",
        marginBottom: "20px",
        marginTop: "10px",
    },

    graphheading: {
        fontSize: "15px",
        color: "#545454",
        letterSpacing: "0.09px",
        textTransform: "uppercase",
        font: "Nunito Sans",
        fontWeight: "bold",

    },
    LoginButton: {
        opacity: "100%",
        backgroundColor: "#19aa69",
        color: "white",
        width: "300px !important",
        border: "none",
        height: "50px",
        marginTop: "20px",
    },

    percentage: {
        fontSize: "14px",
        letterSpacing: "0px",
        color: "#545454",
        fontWeight: "600",
    },


    dateheading: {
        fontSize: "14px",
        color: "#B4B4BE",
        font: "Nunito Sans",
    },



    totalheading: {
        fontSize: "14px",
        color: "#7E84A3",
        fontWeight: "600",
        font: "Nunito Sans",
    },


    valueheading: {
        fontSize: "16px",
        letterSpacing: "0.1px",
        color: "#545454",
        fontWeight: "600",
        font: "Nunito Sans",
    },



}));

export default DashboardRevenue