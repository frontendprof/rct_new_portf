
import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from "./Navbar"



const useStyles = makeStyles(theme =>({
    mainContiner:{
        background:'#233'
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:"1px solid white",
            right:"40px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom:'2px solid tan',
        position:'relative',
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"relative"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50%-5px)",
            borderStyle:"solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:'9.375rem',
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
                },
            "&:nth-of-type(2n):before":{
                display:"none"
                }
        }

    }

}));




const Resume = () => {
    const classes=useStyles();
    return (
        <div>
            <Navbar />
            <Box component="header" className={classes.mainContiner}>
                <Typography variant="h4" align="center">Working Experience</Typography>

                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h3" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Resume
