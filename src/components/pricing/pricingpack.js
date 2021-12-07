import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GetStartedBtn from './getStartedButton';

const useStyles = makeStyles((theme) => ({
  packContainer:{
        display:'flex',
        justifyContent:'spaceBetween',
        textAlign:'centre',
    },
  packItem: {
        width:'330px',
        textAlign:'centre',
        height:'441px',
        // borderRadius:'10px',
        marginLeft:'90px',
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
    }
   )
  );

function PricingPack() {
  const classes = useStyles();
    return(
      <div className={classes.packContainer}>
        <div className={classes.packItem}>
          {/* STARTER PACK */}
          <p>starter</p>
          <p>
            <b style={{fontSize:'55px'}}>Free</b></p>
          <p>1 Website</p>
          <p>5 Gb Hosting</p>
          <p>Limited Support</p>
            <GetStartedBtn/>
         </div>
        
        {/* PREMIUM PACK */}
        <div className={classes.packItem}>
          <p>Premium</p>
          <p>
            <b style={{fontSize:'45px'}}>$29/month</b></p>
          <p>10 Website</p>
          <p>15 Gb Hosting</p>
          <p>premium Support</p>
              <GetStartedBtn/>
        </div>
           
           {/* ENTERPRICE */}
        <div className={classes.packItem}>
           <p>enterprice</p>
           <p>
             <b style={{fontSize:'45px'}}>$49/month</b></p>
           <p>unlimited Website</p>
           <p>50 Gb Hosting</p>
           <p>premium Support</p>
            <GetStartedBtn/>
            </div>
             
       </div>
    )
  };

  export default PricingPack;
             