
import React from 'react';
import {makeStyles,withStyles} from "@material-ui/core/styles"
import { TextField,Typography,Box,Grid,Button} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
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

const useStyles=makeStyles({
    form:{
        top:"50%",
        left:"50%",
        position:"absolute",
        transform:"translate(-50%,-50%)"
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    }
})


const Contacts = () => {

    const classes =useStyles();


    return (
        <Box component="div" style={{ background:"#233",height:"100vh" }}>
            <Navbar />
            <Grid container justify="center">

                <Box component="form" className={classes.form}>
                    <Typography 
                        variant="h5"
                        style={{ color:"tomato",textAlign:"center",textTransform:"uppercase" }}
                    >
                        Hire or Contact me
                    </Typography>
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
                    <br />

                    <Button 
                        className={classes.button}
                        variant="outlined" fullWidth={true} endIcon={<SendIcon />}
                    >Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
