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
                  <Grid ><Paper><p style={{marginTop:'44px'}}>starter</p></Paper></Grid>
                  <Grid><Paper><b style={{fontSize:'38px'}}><p>Free</p></b></Paper></Grid>
                   <Grid>   <Paper>   <p>1 Website</p></Paper></Grid>
                   <Grid><Paper>  <p>5 Gb Hosting</p></Paper></Grid>
                   <Grid> <Paper><p>Limited Support</p></Paper></Grid>
                   <Grid> <Paper> <StartedBtn/></Paper></Grid>
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




            {/* <Grid  item style={{textAlign:'centre'}}>
             <Typography className={classes.packItem}>
             <p>Premium</p>
           <p>
             <b style={{fontSize:'45px'}}>$29/month</b></p>
           <p>10 Website</p>
           <p>15 Gb Hosting</p>
           <p>premium Support</p>
               <StartedBtn/>
             </Typography>
            </Grid>

            <Grid  item>
            <Typography className={classes.packItem}>
            <p>enterprice</p>
            <p>
              <b style={{fontSize:'45px'}}>$49/month</b></p>
            <p>unlimited Website</p>
            <p>50 Gb Hosting</p>
            <p>premium Support</p>
             <StartedBtn/>
            </Typography>
            </Grid> */}
          
        </Grid>
      </Grid>
      
    </Grid>
  );
}































// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import StartedBtn from './startedBtn';

// const useStyles = makeStyles((theme) => ({
//   packContainer:{
//         display:'flex',
//         justifyContent:'spaceBetween',
//         width:'1202px',
//         height:'550px'
//         // textAlign:'centre',
//     },
//   packItem: {
//         width:'330px',
//          textAlign:'centre',
//         height:'441px',
//         // borderRadius:'10px',
//         marginLeft:'90px',
//         lineHight:'45px',
//         color:'#696871',
//         color:'#1D293F',
        
//     '&:hover':{
//             backgroundColor:'#FF7143',
//             color:'#fff',
//             height:'380px',
//             borderRadius: '15px 15px 15px 15px',
//         },
//      },
//     }));

// function PricingPack() {
//   const classes = useStyles();
//     return(
//       <div className={classes.packContainer}>
//         <div className={classes.packItem}>
          
//           {/* STARTER PACK */}
//           <p>starter</p>
//           <p>
//             <b style={{fontSize:'55px'}}>Free</b></p>
//           <p>1 Website</p>
//           <p>5 Gb Hosting</p>
//           <p>Limited Support</p>
//             <StartedBtn/>
//          </div>
        
//         {/* PREMIUM PACK */}
//         <div className={classes.packItem}>
//           <p>Premium</p>
//           <p>
//             <b style={{fontSize:'45px'}}>$29/month</b></p>
//           <p>10 Website</p>
//           <p>15 Gb Hosting</p>
//           <p>premium Support</p>
//               <StartedBtn/>
//         </div>
           
//            {/* ENTERPRICE */}
//         <div className={classes.packItem}>
//            <p>enterprice</p>
//            <p>
//              <b style={{fontSize:'45px'}}>$49/month</b></p>
//            <p>unlimited Website</p>
//            <p>50 Gb Hosting</p>
//            <p>premium Support</p>
//             <StartedBtn/>
//             </div>
             
//        </div>
//     )
//   };

//   export default PricingPack;
             