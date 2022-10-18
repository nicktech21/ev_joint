import React, { Component } from 'react'
import HelpSupport from "containers/HelpSupport/HelpSupport/HelpSupportContainer";
// import Faq from "containers/HelpSupport/Faq/FaqContainer";
import Box from "components/common/Box";
import QueryBox from "components/HelpSupport/QueryBox";
import Grid from "components/common/Grid";
import { CircularProgress } from '@mui/material';



export default class HelpAndSupportContainer extends Component {
  constructor(props) {
    super(props);

    this.isLoading = false;

    
  }
  componentDidMount (){
    this.isLoading = true;

     this.props.getHelpSupportAction();
     this.props.getFaqAction()
    this.isLoading = false;
   
  }

  render() {


    return (
      <>
        {
          this.isLoading
            ?
            (<Box sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>

              <CircularProgress/>

            </Box>)
            :

            (<Box sx={{
              padding: "20px",
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
              marginTop: "1.6rem"
            }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                  <HelpSupport props={this.props.helpSupport} />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <QueryBox />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {/* <Faq props={this.props.faq} /> */}
                </Grid>
              </Grid>
            </Box>)
        }


      </>
    )
  }
}

