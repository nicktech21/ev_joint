import React from 'react';
import Box from 'components/common/Box'
import Card from 'components/common/Card'
import CardContent from 'components/common/CardContent'
import Stack from 'components/common/Stack'
import Text from 'components/common/Text'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Divider from 'components/common/Divider'

import HighchartsReact from "highcharts-react-official";

import Highcharts from "highcharts";

import { makeStyles } from "@mui/styles";


const DashboardPowerConsumed = (props, handleChangeSelectAmount, MenuProps, AmountName,) => {
    const classes = useStyles();

 

        return (
            <>
               <Card>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Text className={classes.graphheading}>
                    POWER CONSUMED
                  </Text>

                  <Box>
                    <Stack direction="row" spacing={2}>
                      <ArrowUpwardIcon sx={{ fontSize: "21px" }} />
                      <Text className={classes.percentage} sx={{ marginLeft: "5px !important" }}> 25%</Text>
                      <Text className={classes.dateheading}>Since November 2019</Text>
                    </Stack>
                  </Box>
                </Stack>

                <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} variant="middle" />


                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ marginBottom: "1.6rem" }}
                >
                  <Box>
                    <Stack direction="row" spacing={2}>

                      <Text className={classes.totalheading}>Total Power Consumed :</Text>
                      <Text className={classes.valueheading}>2200.21 kW</Text>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={2}>

                      <Text className={classes.totalheading}>Avg Power Consumed Per Customer:</Text>
                      <Text className={classes.valueheading}>220.21 kW</Text>
                    </Stack>
                  </Box>
                </Stack>

                <HighchartsReact
                  highcharts={Highcharts}
                  options={props.options}
                  sx={{ marginBottom: "1rem" }}
                />
              </CardContent>
            </Card>  
            </>
        );
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


export default DashboardPowerConsumed;
