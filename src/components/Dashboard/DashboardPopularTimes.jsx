import React from 'react';
import Box from 'components/common/Box'
import Card from 'components/common/Card'
import CardContent from 'components/common/CardContent'
import Stack from 'components/common/Stack'
import Text from 'components/common/Text'

import Divider from 'components/common/Divider'


import HighchartsReact from "highcharts-react-official";

import Highcharts from "highcharts";
import { CardActions } from '@mui/material';

import { makeStyles } from "@mui/styles";


const DashboardPopularTimes = (props, handleChangeSelectAmount, MenuProps, AmountName,) => {
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
                    POPULAR TIMES
                  </Text>
                </Stack>

                <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} variant="middle" />

                <HighchartsReact
                  highcharts={Highcharts}
                  options={props.options}
                />
              </CardContent>
              <CardActions>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  marginBottom="10px"
                  marginLeft="15px"

                >
                  <Box
                    sx={{
                      color: "#707070",
                      background:
                        "rgba(25, 30, 170, 0.1) 0% 0% no-repeat padding-box",
                      borderRadius: "4px",
                      padding: "3px 7px",
                    }}
                  >

                    <Text
                      variant="span"
                      component="div"
                      gutterBottom
                      sx={{
                        letterSpacing: "0.28px",
                        color: "#191eaa",
                        opacity: "1",
                        textAlign: "center",
                        fontSize: "14px",

                      }}
                    >
                      Best time - 6.00pm
</Text>
                  </Box>


                  <Box
                    sx={{
                      color: "#707070",
                      background:
                        "rgba(25, 30, 170, 0.1) 0% 0% no-repeat padding-box",
                      borderRadius: "4px",
                      padding: "3px 7px"
                    }}
                  >

                    <Text
                      variant="span"
                      component="div"
                      gutterBottom
                      sx={{
                        letterSpacing: "0.28px",
                        color: "#191eaa",
                        opacity: "1",
                        textAlign: "center",
                        fontSize: "14px",
                      }}
                    >
                      Worst time - 6.00 am
                    </Text>
                  </Box>


                </Stack>






              </CardActions>

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


export default DashboardPopularTimes;