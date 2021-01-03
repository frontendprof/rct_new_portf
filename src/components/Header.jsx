
import React from 'react'
import { Typography,Box,Avatar,Grid } from '@material-ui/core'
import Typed from 'react-typed';
import avatar from "./images/linuxm.png"


const Header = () => {
    return (
        <Box>

            <Typography variant="h4">
                <Typed
                    strings={['AbdulMalik Sharif ...']}
                    typeSpeed={20}
                />
            </Typography>
            <br />
            <Typography variant="h5">
                <Typed
                    strings={['Frontend developer', 'backend developer to be', 'and cyber security enthusiast']}
                    typeSpeed={60}
                />
            </Typography>

            <Avatar src={avatar} alt="avatar"/>
            
        </Box>
    )
}

export default Header;