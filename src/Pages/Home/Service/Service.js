import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'


const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height:'80px', margin:'0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                   
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;