import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import StartedBtn from './startedBtn';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root:{
     width:'1024px',
     height:'2000px',
  },
  container:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
  },
packItem: {
            width:'330px',
            height:'405px',
            
      '&:hover':{
                backgroundColor:'#FF7143',
                color:'#fff',
                // height:'380px',
                borderRadius: '15px 15px 15px 15px',
                transition:'all .3s',
            },
         },
   heading:{
     width:'118px',
     height:'28px',
     color:'#696871',
     fontFamily:'DM Sans',
     fontWeight:200,
    fontSize:'16px',
    marginTop:'48px',
    marginLeft:'116px',
    // position:'absolute',
  
   },   
             
  bold: {
    width:'125px',
    height:'56px',
    fontFamily:'DM Sans',
    fontWeight:700,
    color:'#1D293F',
    fontSize:'38px', 
    marginLeft:'100px',
    // marginLeft:'47px'
  },
  text:{
    width:'118px',
    height:'150px',
     color:'#696871',
     fontFamily:'Mulish',
     fontWeight:200,
     fontSize:'16px',
     marginLeft:'104px',
     lineHeight:'30PX',
  },     
}));

export default function SpacingGrid() {
 const classes = useStyles();

 return (
    <section className={classes.root}>
        <Grid className={classes.container}>
           <Grid className={classes.packItem} >
                  <Typography className={classes.heading}>starter</Typography>
                  <Typography className={classes.bold}>Free</Typography>
                  <Typography className={classes.text}><p>1 Website</p>
                  <p style={{marginLeft:'-9px'}}>5 Gb Hosting</p>
                  <p style={{marginLeft:'-16px'}}>Limited Support</p></Typography>
                    <StartedBtn style={{marginTop:'7px'}}/>
              </Grid>

              <Grid className={classes.packItem} >
                  <Typography className={classes.heading}>Premium</Typography>
                  <Typography className={classes.bold} style={{marginLeft:'64px'}}>$29
                  <span style={{fontSize:'25px'}}>/month</span>
                  </Typography>
                  <Typography className={classes.text}><p>10 Website</p>
                  <p style={{marginLeft:'-9px'}}>15 Gb Hosting</p>
                  <p style={{marginLeft:'-16px'}}>Premium Support</p></Typography>
                    <StartedBtn />
              </Grid>

              <Grid className={classes.packItem} >
                  <Typography className={classes.heading}>Enterprice</Typography>
                  <Typography className={classes.bold} style={{marginLeft:'78px'}}>$49
                  <span style={{fontSize:'25px'}}>/month</span>
                  </Typography>
                  <Typography className={classes.text} style={{fontSize:'14px'}}><p>Unlimited Website</p>
                  <p style={{marginLeft:'11px'}}>50 Gb Hosting</p>
                  <p style={{marginLeft:'3px'}}>Premium Support</p></Typography>
                    <StartedBtn style={{marginLeft:'46px'}}/>
              </Grid>    
          </Grid>
      </section>
      
    
  );
}


            