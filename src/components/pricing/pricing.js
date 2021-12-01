import React from 'react';


import classes from './pricing.module.css';

import Button from '@material-ui/core/Button';
import PricingPack from './pricingpack';




 function Pricing () {
        return (
          <div>
            <div className={classes.container} > 
           <p className={classes.heading}><b>Get the right plan for future product.</b></p>
         
         <div className={classes.btn}>   
   
     
     <Button >Yearly</Button>
        <Button>Monthly</Button>
        
     
   
       </div>
           
            </div>
            <PricingPack/>
            </div>
        )
    }
     

  //   .btn{
  //     font-size: 20px;
  //     margin-left: 410px;
  //     margin-top: 41px;
  // }
  // .btn :hover{
  //     background-color: #5454D4;
  //     border-radius: 15px 0px 0px 15px;
  // }
    




 export default Pricing;






/* <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    ></Box> */