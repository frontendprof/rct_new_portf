
import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core"
import {Facebook, Twitter, Instagram} from "@material-ui/icons";


const useStyles=makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250
        },
        "& .MuiSvgIcon-root":{
            fill:"tan",
            "&:hover":{
                fill:'tomato',
                fontSize:"1.8rem"
            }
        }
    }
})

const Footer = () => {

    const classes=useStyles()

    return (
        <BottomNavigation width="auto" style={{ background:"#222" }}>

            <BottomNavigationAction
                className={classes.root}
                style={{ padding:0 }}
                icon={<Facebook />}
            />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding:0 }}
                icon={<Twitter />}
            />

            <BottomNavigationAction
                className={classes.root}
                style={{ padding:0 }}
                icon={<Instagram />}
            />



            
        </BottomNavigation>
    )
}

export default Footer
