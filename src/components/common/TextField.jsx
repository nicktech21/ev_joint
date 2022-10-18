import React from "react";
import MTextField from "@mui/material/TextField";
import { makeStyles, createStyles } from "@mui/styles";

const TextField = ({ InputProps = {}, FormHelperTextProps = {}, InputLabelProps = {}, SelectProps = {}, error = false, ...restProps }) => {
    const classes = useStyles();
    const defaultProps = {
        variant: "outlined",
        fullwidth: "true",
        classes: {
            root: restProps.select ? classes.rootForSelect : classes.root,
        },
        InputProps: {
            disableunderline: "true",
            classes: {
                root: classes.inputRoot,
                input: classes.inputInput,
            }
        },
        FormHelperTextProps: {},
        InputLabelProps: {
            classes: {
                root: classes.labelRoot,
                shrink: classes.labelShrink,
                focused: classes.labelFocused,
            }
        },
        SelectProps: {
            classes: {
                root: classes.selectRoot,
                select: classes.selectSelect,
            },
        },
    }
    
    const mergedProps = {
        ...defaultProps,
        InputProps: {
            ...defaultProps.InputProps,
            ...InputProps,
        },
        FormHelperTextProps: {
            ...defaultProps.FormHelperTextProps,
            ...FormHelperTextProps,
        },
        InputLabelProps: {
            ...defaultProps.InputLabelProps,
            ...InputLabelProps,
        },
        SelectProps: {
            ...defaultProps.SelectProps,
            ...SelectProps,
        },
        ...restProps
    }
    

    return <MTextField error={error ? true : false} {...mergedProps} />
}

const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: `100%`,
    },
    rootForSelect: {
        width: `100%`,
    },

    inputRoot: {
        backgroundColor: `transparent !important`,
        border: `1px solid #E0E7FF`,
        paddingRight: `${theme.spacing(3)} !important`,
        borderRadius: `5px !important`,
    },
    inputInput: {
        paddingLeft: `${theme.spacing(3)} !important`,
        fontSize: `${theme.typography.body1.fontSize} !important`,
        color: '#2E384D',
        fontWeight: '500 !important',
    },

    labelRoot: {
        transform: `translate(${theme.spacing(3)}, ${theme.spacing(1.75)}) scale(1) !important`,
        fontSize: `${theme.typography.body1.fontSize} !important`,
        color: '#808591',
    },
    labelShrink: {
        transform: `translate(${theme.spacing(3)}, ${theme.spacing(0.5)}) scale(0.75) !important`,
    },
    labelFocused: {
        color: '#808591 !important',
    },

    selectRoot: {
        width: `100% !important`
    },
    selectSelect: {
        fontSize: `${theme.typography.body1.fontSize} !important`,
        color: '#2E384D',
        fontWeight: '500 !important',
    }
}))

export default React.memo(TextField);