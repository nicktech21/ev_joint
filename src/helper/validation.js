const validationHelper = {};

validationHelper.required = (value) => {
    let isValid = 1;
    let message = "";

    // to avoid check for boolean scenario individual check is applied
    if ([null, undefined, ""].includes(value)) {
        message = "This field is required";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.name = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && value.length < 3) {
        message = "Invalid name";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.businessType = (value) => {
    let { isValid, message } = validationHelper.required(value);


    return { isValid, message };
};

validationHelper.pan = (value) => {
    let { isValid, message } = validationHelper.required(value);

    const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if (isValid && !panRegex.test(value)) {
        message = "Invalid Pan format";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.setPassword = (value) => {
    let { isValid, message } = validationHelper.required(value);

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (isValid && !passwordRegex.test(value)) {
        
        message = "Password should be strong";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.gst = (value) => {
    let { isValid, message } = validationHelper.required(value);

    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9]{1}Z[a-zA-Z0-9]{1}$/;
    if (isValid && !gstRegex.test(value)) {
        message = "Invalid GST format";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.businessUrl = (value) => {
    let { isValid, message } = validationHelper.required(value);

    var validUrlRes = false;

    var validUrl = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
    if(validUrl == null)
    {
        validUrlRes = false;
    }
    else
    {
        validUrlRes = true;
    }

    if (isValid && validUrlRes === false) {
        message = "Invalid Business URL";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.dateOfBirth = (value) => {
    let { isValid, message } = validationHelper.required(value);

    return { isValid, message };
};

validationHelper.email = (value) => {
    let { isValid, message } = validationHelper.required(value);

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&`+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (isValid && !emailRegex.test(value)) {
        message = "Invalid Email format";
        isValid = 0;
    }

    return { isValid, message };
};


validationHelper.emailORmobile = (value) => {
    let { isValid, message } = validationHelper.required(value);

    let emailValid = 0;
    let mobileValid = 0;

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&`+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;


    if (isValid && !emailRegex.test(value)) {

        
        message = "Invalid Email/Mobile Number";
        isValid = 1;
        mobileValid = 1;


        if (isNaN(value)) {
            // message = "Invalid mobile number";
            isValid = 0;
            mobileValid = 0;
        }
        else if (value.length !== 10) {
            // message = "Invalid length of mobile number";
            isValid = 0;
            mobileValid = 0;
        }
        else
        {
            message = "";
        }


    }
    else
    {
        emailValid = 1;
    }

    return { isValid, message, mobileValid, emailValid };
};


validationHelper.password = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && value.length < 3) {
        message = "Invalid Password format";
        isValid = 0;
    }

    // const passwordRegex =
    //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    // if (!passwordRegex.test(value)) {
    //     message = "Invalid Password format";
    //     isValid = 0;
    // }

    return { isValid, message };
};

validationHelper.confirmPassword = (confirmPassword, password) => {
    let { isValid, message } = validationHelper.password(confirmPassword);

    if (isValid && confirmPassword !== password) {
        message = "Enter same passwords";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.mobile = (value) => {
    let { isValid, message } = validationHelper.required(value);

 
    if (isValid && value.length !== 10 && isNaN(value)) {
        message = "Invalid length of mobile number";
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.area = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {
        message = "Invalid area";
    }

    return { isValid, message };
};

validationHelper.minInvestment = (value, minValue) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {
        message = "Invalid investment amount";
        isValid = 0;
    }
    if (isValid && value < minValue) {
        message = `Minimum investment amount is ${minValue}`;
        isValid = 0;
    }

    return { isValid, message };
};

validationHelper.otp = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && value.length !== 4) {
        message = "Invalid OTP";
        isValid = 0;
    }

    return { isValid, message };
};


validationHelper.networkId = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {
        message = "Network Type is Required";
        isValid = 0;
       
    }

    return { isValid, message };
};


validationHelper.typeChargingStation = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {
        message = "Charging Station Type is Required";
        isValid = 0;
    }

    return { isValid, message };
};


validationHelper.stationUrl = (value) => {
    let { isValid, message } = validationHelper.required(value);

    var validUrlRes = false;

    var validUrl = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
    if(validUrl == null)
    {
        validUrlRes = false;
    }
    else
    {
        validUrlRes = true;
    }

    if (isValid && validUrlRes === false) {
        message = "Invalid Charging Station URL";
        isValid = 0;
    }

    return { isValid, message };
}


validationHelper.address = (value) => {
    let { isValid, message } = validationHelper.required(value);

  


    return { isValid, message };
}

validationHelper.pin = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {
        message = "Invalid Pin";
        isValid = 0;
    }

    return { isValid, message };
}


validationHelper.landmark = (value) => {
    let { isValid, message } = validationHelper.required(value);

   
    return { isValid, message };
}


validationHelper.city = (value) => {
    let { isValid, message } = validationHelper.required(value);

 

    return { isValid, message };
}


validationHelper.state = (value) => {
    let { isValid, message } = validationHelper.required(value);


    return { isValid, message };

}


validationHelper.country = (value) => {

    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {

        message = "Invalid Country";

        isValid = 0;

    }

    return { isValid, message };

}


validationHelper.latitude = (value) => {
    let { isValid, message } = validationHelper.required(value);

    if (isValid && isNaN(value)) {
        message = "Invalid Latitude";
        isValid = 0;
    }

    return { isValid, message };
}


validationHelper.longitude = (value) => {

    let { isValid, message } = validationHelper.required(value);
     
    if (isValid && isNaN(value)) {
        message = "Invalid Longitude";
        isValid = 0;
    }

    return { isValid, message };

}

validationHelper.street  = (value) => {
    let { isValid, message } = validationHelper.required(value);

    

    return { isValid, message };
}





export { validationHelper };
