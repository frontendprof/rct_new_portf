
import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from "./Navbar"



const useStyle = makeStyles(theme =>({
    mainContiner:{
        background:'#233'
    },

    timeLine:{
        position:'relative',
        padding: '1rem',
        margin:'0 auto',
        '&:before':{
            content: "''",
            position:'absolute',
            height:'100%',
            border:'1px solid tan',
            right:'40px',
            top:0
        },

        '&:after':{
            content:"''",
            display:'table',
            clear:'both'
        },

        [theme.breakpoints.up('md')]: {
            padding:'2rem',
            '&:before':{
                left:'calc(50% -1px)',
                right:'auto'
          }    

        }

    }

}))




const Resume = () => {
    return (
        <div>
            <Navbar />
            <Box component="header">
                <Typography variant="h4" align="center">Working Experience</Typography>

                <Box component="div">
                    <Typography variant="h3">
                        2019
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Resume
