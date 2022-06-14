import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from './../../../images/doctor.png'
import { Button, Typography } from '@mui/material';
import bg from './../../../images/appointment-bg.png'

const appointmentBgStyle = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken',
    marginTop: 100
}

const AppoientmentBanner = () => {
    return (
        <Box style={appointmentBgStyle} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-115px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        textAlign:'left'
                    }}>
                    <Box>
                        <Typography variant="h6" sx={{mb:2}} style={{ color: "#5CE7ED" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white", fontWeight: 300 }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{my:2}} style={{ color: 'white', fontSize: 14, fontWeight: 300}}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore incidunt enim aperiam libero commodi, similique fugit explicabo perferendis saepe a at dolorum maiores amet neque ab, voluptatum necessitatibus atque dolore?
                        </Typography>
                        <Button variant="contained" style={{backgroundColor:"#5CE7ED"}}>Learn More</Button>
                    </Box>
                   
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoientmentBanner;