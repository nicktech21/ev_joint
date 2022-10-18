import React, { useEffect, useState } from 'react'
import CTable from "components/common/Table";
import Box from "components/common/Box";
import { makeStyles } from "@mui/styles";
import Text from "components/common/Text";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";

const columns = [
    {
        field: "name",
        headerName: "Name ",

    },

    {
        field: "mobile",
        headerName: "Mobile",
    },
    {

        field: "email",
        headerName: "Email",


    },
    {
        field: "pan",
        headerName: "Pan",
    },
    {
        field: "gst_no",
        headerName: "GST No.",
    },
    {
        field: "last_login_at",
        headerName: "Last Login",
    },
];


function Vendor({ props }) {
    const classes = useStyles();
    const data = props.vendorsdata;
    const [Loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])


    return (

        <Box className={classes.center} sx={{ marginTop: "1.6rem" }}>
            <Card>
                <CardContent>
                    <Text
                        variant="h5"
                        color="#707070"
                        sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "40px" }}
                    >
                        Vendors
                    </Text>

                    <CTable
                        columns={columns}
                        data={data}
                        isLoading={Loading}
                        pagination={true}
                        localPagination={true}
                        page={0}
                        rowsPerPage={5}
                    > </CTable>
                </CardContent>
            </Card>

        </Box>



    )
}
const useStyles = makeStyles((theme) => ({
    viewButtonLabel: { textTransform: "none" },
    pageHeading: {
        fontSize: "24px",
        fontFamily: "Nunito Sans",
        fontWeight: "bold",
        textTransform: "none",
        color: "#707070",
        opacity: 1,
    },
}));
export default Vendor;