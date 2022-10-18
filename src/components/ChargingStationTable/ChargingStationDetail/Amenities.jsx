import Text from "components/common/Text";
import Box from "components/common/Box";
import { makeStyles } from "@mui/styles";


const AMENITIES = ({props}) => {
 
  const classes = useStyles();
 

    const arr = props?.map((props) => {return (
      <>
           <Box 
           className={classes.amenities}
           
            sx={{
              width: "213px",
              border: "1px solid #EBEBEB",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "row",
              marginRight: "10px",
  
              padding: "20px 15px 15px 15px",
            }}
           
          >
            <img src={props.Image} width="50px" height="40px" alt=""/>
            <Box sx={{ padding: "10px" }}>
           
              <Text
                variant="h"
                component="div"
                className={classes.station_amenities}
                gutterBottom
                sx={{
                  font: "normal normal normal 16px/24px Nunito Sans",
  
                  color: "#707070",
                }}
              >
                {props.name}
              </Text>
            </Box>
          </Box>
        
      </>
    );
      
    })
  
    return(
      <>
      {arr}
      </>
    )
    
  };

  const useStyles = makeStyles((theme) => ({
 
    amenities:{

      ['@media (max-width:768px)']: { 
       
          marginTop: "15px",
          padding:"20px 35px 15px 29px" ,
          justifyContent: "space-around"
      }
       }
  
    
  }));

  export default AMENITIES;