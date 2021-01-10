
import React from 'react';
import {makeStyles,withStyles} from "@material-ui/core/styles"
import { TextField,Typography,Box,Grid,Button} from "@material-ui/core"
// import SendIcon from "@material-ui/icons/SendIcon"
import Navbar from "./Navbar"




const InputField=withStyles({
    root:{
        "& label.Mui-focused":{
            color:"tomato"
        },
        "& label":{
            color:"tan"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldset":{
                borderColor:"tan"
            }
        }
    }
})(TextField);


const Contacts = () => {
    return (
        <Box component="div">
            <Grid container justify="center">
                <Box component="form">
                    <Typography>Hire or Contact me</Typography>
                    <InputField fullWidth={true} 
                        label="Name" 
                        variant="outlined" 
                        margin="dense" 
                        size="medium"
                        inputProps={{ style:{color:"white"} }}

                    />
                    <br />
                    <InputField 
                        fullWidth={true} 
                        label="Email" 
                        variant="outlined" 
                        margin="dense" size="medium" 
                        inputProps={{ style:{color:"white"} }}
                    />
                    <InputField 
                        fullWidth={true} 
                        label="Company name" 
                        variant="outlined" 
                        margin="dense" 
                        size="medium" 
                        inputProps={{ style:{color:"white"} }}
                    />
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
