import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PricingPack from './PricingPack';

const useStyles = makeStyles((theme) => ({
  root: {
    // width:'1111px',
    // height:'695px',
    display:'flex',
    justifyContent:'center',
  },
 
  pricing:{
    width:'1111px',
    height:'695px',
  },
   
  subscribeContainer: {
    width:'1318px',
    height:'140px',
    //  display:'flex',
    //  justifyContent:'space-between',
     backgroundColor:'#F7F7FB',
     marginBottom:'60px',
     marginLeft:'-92px',
    },

  
  textContainer: {
    width:'523px',
    height:'140px',
    color:'#19191B',
    textAlign:'start',
    fontFamily:'Dm sans',
    fontWeight:700,
    fontSize:'57px',
    lineHeight:'66px',
    backgroundColor:'#F7F7FB',
  },
  switch:{
    width:'346px',
    height:'65px',
    marginTop:'70px',
    marginLeft:'327px',
  },

  detail:{
    width:'1111px',
    height:'500px',
  },

  btn: {
    width:'160px',
    height:'55px',
    color:'#19191B',
    fontFamily:'DM Sans',
    fontWeight:700,
  
    '&:hover':{
         backgroundColor:'#5454D4',
         color:'#ffff',
         transition:'.3s',
      },
     },
  }));

export default function CenteredGrid() {
  const classes = useStyles();

return (
  <section className={classes.root}>
    <div className={classes.pricing}>
      <Grid container spacing={3} className={classes.subscribeContainer} >
        <Grid item xs={6}>
           <Typography className={classes.textContainer}>
              Get the right plan for future product.
           </Typography>
        </Grid>
        
        <Grid item xs={6}>
         <div className={classes.switch}>   
           <Button className={classes.btn} style={{ borderRadius: '10px 0px 0px 10px',}} 
             >Yearly
           </Button>
               
           <Button className={classes.btn} style={{ borderRadius: '0px 10px 10px 0px',}}
             >monthly
           </Button>
         </div>
        </Grid>
      </Grid>
          
        <PricingPack/>
    </div>
  </section>
);
};
// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import PricingPack from './PricingPack';
// import { Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({

// pricing:{
 
// },
 
// subscribeContainer: {
//   width:'1111px',
//   height:'140px',
//    display:'flex',
//    justifyContent:'space-between',
//    backgroundColor:'#F7F7FB',
//    marginBottom:'60px',
//   },

// textContainer: {
//   width:'523px',
//   height:'140px',
//   color:'#19191B',
//   textAlign:'start',
//   fontFamily:'Dm sans',
//   fontWeight:700,
//   fontSize:'57px',
//   lineHeight:'66px',
//   backgroundColor:'#F7F7FB',
// },
// switch:{
//   width:'346px',
//   height:'65px',
// },
// btn: {
//   width:'160px',
//   height:'55px',
//   color:'#19191B',
//   fontFamily:'DM Sans',
//   fontWeight:700,

//   '&:hover':{
//        backgroundColor:'#5454D4',
//        color:'#ffff',
//        transition:'.3s',
//     },
//    },
//   }
//  )
// );
  
// function Pricing () {
//    const classes = useStyles();
//     return (
//       <section className={classes.pricing}>
//         <div className={classes.subscribeContainer} > 
//           <Typography className={classes.textContainer}>Get the right plan for future product.</Typography>
         
//       <div className={classes.switch}>   
        
//           <Button className={classes.btn} style={{ borderRadius: '10px 0px 0px 10px', 
//                             }} >
//               Yearly
//           </Button>
       
//           <Button className={classes.btn} style={{ borderRadius: '0px 10px 10px 0px', }}>
//             monthly
//           </Button>
        
     
//       </div> 
//       </div>
//       <div>
//             <PricingPack/>
            
//       </div>
//       </section>    
//     );
//   };
     
//   export default Pricing;

