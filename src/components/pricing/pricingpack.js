import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import StartedBtn from './startedBtn';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'1211px',
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
        <Grid container style={{display:'flex', justifyContent:'space-around'}}>
          
            
              <Grid className={classes.packItem} >
                  <Grid ><p style={{marginTop:'44px'}}>starter</p></Grid>
                  <Grid><b style={{fontSize:'38px'}}><p>Free</p></b></Grid>
                   <Grid>     <p>1 Website</p></Grid>
                   <Grid>  <p>5 Gb Hosting</p></Grid>
                   <Grid> <p>Limited Support</p></Grid>
                   <Grid>  <StartedBtn/></Grid>
              </Grid>
              
                             
            
              <Grid className={classes.packItem} >
                  <Grid ><p style={{marginTop:'44px'}}>starter</p></Grid>
                  <Grid><b style={{fontSize:'38px'}}><p>Free</p></b></Grid>
                   <Grid><p>1 Website</p></Grid>
                   <Grid><p>5 Gb Hosting</p></Grid>
                   <Grid><p>Limited Support</p></Grid>
                   <Grid><StartedBtn/></Grid>
              </Grid>
             

            <Grid><Paper>
              <Typography className={classes.packItem} >
                  <Grid ><Paper><p>starter</p></Paper></Grid>
                  <Grid><Paper><b style={{fontSize:'38px'}}><p>Free</p></b></Paper></Grid>
                   <Grid>   <Paper>   <p>1 Website</p></Paper></Grid>
                   <Grid><Paper>  <p>5 Gb Hosting</p></Paper></Grid>
                   <Grid> <Paper><p>Limited Support</p></Paper></Grid>
                   <Grid> <Paper> <StartedBtn/></Paper></Grid>
              </Typography>
              </Paper>
            </Grid>

            </Grid>
      </Grid>
      
    </Grid>
  );
}


            