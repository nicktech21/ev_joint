import React from "react";
import MBreadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = (props) => {
    return <MBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} {...props} />
}

export default React.memo(Breadcrumbs);