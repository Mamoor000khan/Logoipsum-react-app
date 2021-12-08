import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PricingPack from './pricingPack';

const useStyles = makeStyles((theme) => ({
 container: {
    maxWidth:'1090px',
    margin:'auto',
    display:'flex',
    /* flex-direction: column; */
    alignItems:'space-between',
    marginTop:'160px'
 },
 heading: {
    width:'383px',
    marginLeft:'10px',
    height:'50px',
    marginBottom:'160px',
    fontSize:'42px',
    fontWeight:'500px',
    lineHeight:'50px'
    /* margin-bottom: 500px; */
 },
 btn: {
    '&:hover':{
         backgroundColor:'#5454D4',
        //  width:'200px',
        //  height:'50px'
      },
     },
  }
 )
);
  
function Pricing () {
   const classes = useStyles();
    return (
      <div>
        <div className={classes.container} > 
          <p className={classes.heading}><b>Get the right plan for future product.</b></p>
         
      <div style={{ marginLeft:'415px', marginTop:'83px', }}>   
        <Grid>
          <Button className={classes.btn} style={{ borderRadius: '10px 0px 0px 10px', marginRight: '80px'  }} >
            Yearly
          </Button>
       
          <Button className={classes.btn} style={{ borderRadius: '0px 10px 10px 0px', }}>
            monthly
          </Button>
        </Grid>
      </div>
           
            </div>
            <PricingPack/>
            </div>
    );
  };
     
 export default Pricing;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';

// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '1111px',
   
//     marginTop: '200px'
//   },
//   btn: {
//     '&:hover':{
//       backgroundColor:'#5454D4',
     
//     },
//   },
  
// }));

// export default function Pricing() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={1}>
     
//         <Grid >
//           <Typography>Get the right plan for future product.</Typography>
//         </Grid>
        
//         <Grid className={classes.btn} style={{ borderRadius: '15px 0px 0px 15px', marginLeft:'636px'}}>
//         <Button  >
//         Yearly
//       </Button>
          
//         </Grid>
//         <Grid  className={classes.btn} style={{ borderRadius: '0px 15px 15px 0px', marginLeft:'36px'}}>
//         <Button  >
//         monthly
//       </Button>
//         </Grid>
        
//       </Grid>
//     </div>
//   );
// }



