import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PricingPack from './pricingpack';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
//  container: {
//     maxWidth:'1090px',
//     margin:'auto',
//     display:'flex',
//     /* flex-direction: column; */
//     alignItems:'space-between',
//     // marginTop:'160px'
//  },
//  heading: {
//     width:'383px',
//     marginLeft:'42px',
//     height:'50px',
//     marginBottom:'120px',
//     fontSize:'42px',
//     fontWeight:'500px',
//     lineHeight:'50px',
//     // position:'fixed'
//     //  marginBottom: '120px', 
//  },
 
subscribeContainer: {
  width:'2658px',
  height:'695px',
  // padding:'58.5px 70px','
  display:'flex',
  justifyContent:'space-between',
  // alignItems:'center',
  position:'absolute',
  // bottom:'452px',
  left:'30%',
  // transform: translateX(-50%);
},

textContainer: {
  width:'523px',
  height:'140px',
  color:'#19191B',
  textAlign:'start',
  fontFamily:'Dm sans',
  fontWeight:700,
  fontSize:'42px',
  backgroundColor:'#F7F7FB',
},
switch:{
  width:'346px',
  height:'65px',
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
  }
 )
);
  
function Pricing () {
   const classes = useStyles();
    return (
     
        <div className={classes.subscribeContainer} > 
          <Typography className={classes.textContainer}>Get the right plan for future product.</Typography>
         
      <div className={classes.switch}>   
        
          <Button className={classes.btn} style={{ borderRadius: '10px 0px 0px 10px', 
                            }} >
              Yearly
          </Button>
       
          <Button className={classes.btn} style={{ borderRadius: '0px 10px 10px 0px', }}>
            monthly
          </Button>
        
        {/* <div>
            <PricingPack/>
            
      </div> */}
      </div> 
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



