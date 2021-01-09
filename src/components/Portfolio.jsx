
import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@material-ui/core";
import project_1 from "./images/pexels.jpg"

import Navbar from './Navbar'

const Portfolio = () => {
    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>

                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project_1"
                                height="140"
                                image={project_1}
                                />

                            <CardContent>

                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>

                                <Typography variant="p" color="textSecondary" variant="body2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio, explicabo non quaerat deserunt sit architecto voluptate et ullam dolore nam impedit magni, vero labore ratione consequuntur quibusdam, voluptas laudantium?

                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Live Demo</Button>
                            </CardActions>
                            
                        </CardActionArea>


                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
