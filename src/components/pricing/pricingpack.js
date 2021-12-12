import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import StartedBtn from './startedBtn';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  packItem: {
            width:'330px',
             textAlign:'centre',
            height:'441px',
            // borderRadius:'10px',
            marginLeft:'100px',
            lineHight:'45px',
            color:'#696871',
            color:'#1D293F',
            
        '&:hover':{
                backgroundColor:'#FF7143',
                color:'#fff',
                height:'380px',
                borderRadius: '15px 15px 15px 15px',
            },
         },
    
  paper: {
    height: 441,
    width: 330,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  // const [spacing, setSpacing] = React.useState(2);
   const classes = useStyles();

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={12}>
        <Grid container >
          
            <Grid  item >
              <Typography className={classes.packItem} style={{marginLeft:'700px'}}>
                     <p>starter</p>
                         <p>
                           <b style={{fontSize:'55px'}}>Free</b></p>
                         <p>1 Website</p>
                         <p>5 Gb Hosting</p>
                         <p>Limited Support</p>
                           <StartedBtn/>
              </Typography>
            </Grid>

            <Grid  item style={{textAlign:'centre'}}>
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
            </Grid>
          
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
             