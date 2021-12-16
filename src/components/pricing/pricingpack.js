import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import StartedBtn from './startedBtn';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // width:'1211px',
  },

  packItem: {
            width:'330px',
            display: 'grid',
            justifyContent:'center',
            height:'441px',
            // borderRadius:'10px',
            // marginLeft:'100px',
            fontSize:'13px',
            // lineHight:'45px',
            color:'#696871',
            color:'#1D293F',
            
        '&:hover':{
                backgroundColor:'#FF7143',
                color:'#fff',
                // height:'380px',
                borderRadius: '15px 15px 15px 15px',
            },
         },
    
  paper: {
    height: 441,
    width: 330,
  },
  
}));

export default function SpacingGrid() {
 
   const classes = useStyles();

 

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={12}>
        <Grid container style={{display:'flex', justifyContent:'center'}}>
          
            
              <Grid className={classes.packItem} >
                  <Typography style={{marginTop:'44px', marginLeft:'60px'}}>starter</Typography>
                  <Typography><b style={{fontSize:'38px', marginLeft:'47px'}}>Free</b></Typography>
                  <Typography style={{marginLeft:'44px'}}>1 Website</Typography>
                  <Typography style={{marginLeft:'37px'}}>5 Gb Hosting</Typography>
                  <Typography style={{marginLeft:'28px'}}>Limited Support</Typography>
                    <StartedBtn />
              </Grid>
              
                             
            
              <Grid className={classes.packItem} >
                  <Typography style={{marginTop:'44px', marginLeft:'51px'}}>Premium</Typography>
                  <Typography>$29/<p>month</p></Typography>
                  <Typography style={{marginLeft:'44px'}}>10 Website</Typography>
                  <Typography style={{marginLeft:'37px'}}>15 Gb Hosting</Typography>
                  <Typography style={{marginLeft:'28px'}}>Premium Support</Typography>
                    <StartedBtn />
              </Grid>
             

              <Grid className={classes.packItem} >
                  <Typography style={{marginTop:'44px', marginLeft:'46px'}}>Enterprice</Typography>
                  <Typography><b style={{fontSize:'38px'}}>$49/month</b></Typography>
                  <Typography style={{marginLeft:'25px'}}>Unlimited Website</Typography>
                  <Typography style={{marginLeft:'37px'}}>50 Gb Hosting</Typography>
                  <Typography style={{marginLeft:'28px'}}>Premium Support</Typography>
                    <StartedBtn/>
              </Grid>

            </Grid>
      </Grid>
      
    </Grid>
  );
}


            