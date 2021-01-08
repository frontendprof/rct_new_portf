
import React from 'react'
import { Typography,Box,Avatar,Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typed from 'react-typed';
import avatar from "./images/linuxm.png"


const useStyles=makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(2)
    },
    title:{
        color:"tomato"

    },
    subtitle:{
        color:"tan"
        
    },
    typedContainer:{
        width:"100vw",
        zIndex:1,
        textAlign:"center",
        position:"absolute",
        transform:"translate(-50%,-50%)",
        top:"50%",
        left:"50%",
        opacity:"1"

    }
}))


const Header = () => {
    const classes=useStyles();


    return (
        <Box className={classes.typedContainer}>
            <Grid justify="center" container>

                <Avatar src={avatar} alt="avatar" className={classes.avatar}/>
            </Grid>



            <Typography variant="h4" className={classes.title}>
                <Typed
                    strings={['AbdulMalik Sharif '] }
                    typeSpeed={20}
                />
            </Typography>
            <br />
            <Typography variant="h5" className={classes.subtitle}>
                <Typed
                    strings={['Frontend developer ...', 'future backend developer ...', 'and cyber security enthusiast ...']}
                    typeSpeed={60}
                />
            </Typography>

            
        </Box>
    )
}

export default Header;