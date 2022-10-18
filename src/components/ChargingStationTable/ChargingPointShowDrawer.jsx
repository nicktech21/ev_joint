import React from "react";
import Box from "components/common/Box";
import Text from "components/common/Text";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Stack from "components/common/Stack";
import Paper from "components/common/Paper";
import EditIcon from '@mui/icons-material/Edit';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function ChargingPointShowDrawer({ props, handleDeleteConnector, handleAddChPoint, handleOpenAddConnectorDr, handleOnclickEditConnectorOpen, handleOpenEditChPoint }) {
  console.log(props);
  const arrr = props.map((prop, i) => {

  
    return (
      <Paper key={i}>

 
        <Box
          sx={{
            width: "auto",
            height: "auto",
            border: "1px solid #E0E0E0",
            boxShadow: "0px 0px 10px 0px #E0E0E0",
            marginBottom: "5%",
            borderRadius: "5px",
            padding: "5%",
          }}
          key={i}
        >
          <Stack spacing={2} direction="row">
            <Text
              sx={{
                fontSize: "14px",
                color: "#1E1E1E",
                Opacity: "100%",
                left: "30rem",
                width: "20rem",
                height: "3rem",
              }}
              variant="h3"
            >
              Name : {prop.name}


            </Text>

            <Text
              sx={{
                fontSize: "14px",
                color: "#1E1E1E",
                Opacity: "100%",
                left: "30rem",
                width: "20rem",
                height: "3rem",
              }}
              variant="h3"
            >

              Id :
              {prop.cp_id}

            </Text>
            <EditIcon sx={{cursor: "pointer"}} onClick={() => handleOpenEditChPoint(prop.id, i)} />

          </Stack>

          {prop.connecters?.map((prop1, j) => {

            return (
              <>

                <Box sx={{ width: "auto", height: "auto", boxShadow: "0px 0px 0px 0.5px #E0E0E0", border: "1px solid #E0E0E0", margin: "2%", borderRadius: "5px", padding: "5%", }} key={j}>

                  <Stack spacing={2} direction="row" sx={{ marginBottom: "2%" }} justifyContent="space-between" key={j} >
                    <img src={prop1.thumbnail} style={{ width: "60px", height: "60px" }} alt="img" />

                    <Text
                      sx={{
                        fontSize: "16px",
                        color: "#1E1E1E",
                        Opacity: "100%",
                        left: "30rem",
                        width: "18rem",
                        height: "2rem",
                      }}
                    >
                      {prop1.name}
                   </Text>

                    <EditOutlinedIcon sx={{cursor: "pointer"}} onClick={(e) => handleOnclickEditConnectorOpen(prop.id,prop1.id,j,prop1.name,prop1.capacity,prop1.rate)} />

                    <DeleteOutlineIcon
                      sx={{
                        color: "red",
                        marginLeft: "140px",
                        top: "99px",
                        left: "1366px",
                        width: "24px",
                        height: "24px",cursor: "pointer"
                      }}
                      onClick={() => handleDeleteConnector(prop1.id)}

                    />

                  </Stack>

                  <Stack spacing={2} direction="row">

                    <Text
                      sx={{
                        fontSize: "14px",
                        color: "#8F8F8F",
                        Opacity: "100%",
                        left: "30rem",
                        width: "7rem",
                        height: "1rem",
                      }}
                    >

                      Capacity
                    </Text>
                    <Text
                      sx={{
                        fontSize: "16px",
                        color: "#1E1E1E",
                        Opacity: "100%",
                        left: "30rem",
                        width: "5rem",
                        height: "2rem",
                      }}
                    >
                      {prop1.capacity}
                    </Text>
                    <Text
                      sx={{
                        fontSize: "14px",
                        color: "#8F8F8F",
                        Opacity: "100%",
                        left: "30rem",
                        width: "3rem",
                        height: "1rem",
                      }}
                    >

                      Rate
                    </Text>
                    <Text
                      sx={{
                        fontSize: "16px",
                        color: "#1E1E1E",
                        Opacity: "100%",
                        left: "30rem",
                        width: "8rem",
                        height: "2rem",
                      }}
                    >
                      ₹ {prop1.rate} per Kw
                    </Text>

                  </Stack>

                </Box>


              </>);

          })
          }


          <Text
            sx={{
              cursor: "pointer",
              color: "#19AA69",
              marginLeft: "1rem",
            }}
            onClick={() => handleOpenAddConnectorDr(prop.id)}
          >
            +Add charging Connector
          </Text>
        </Box>
      </Paper>
    )
  }
  );
  return (
    <>
      {arrr}
      <Text
        sx={{
          cursor: "pointer",
          color: "#19AA69",
          margin: "2rem 0rem 3rem 2rem",
          height: '3rem',
        }}
        onClick={() => handleAddChPoint()}
      >
        +Add charging Point
      </Text>
    </>
  );
}
export default ChargingPointShowDrawer;