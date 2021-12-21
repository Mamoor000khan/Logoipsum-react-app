import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Img from '../../assets/img/header.png';
import GetHeaderBtn from './HeaderBtn.js';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  container: {
    width:'1151px',
    height:'636px',
    margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'start',
  },

  heading:{
    width:'437px', 
    height: '231px',
    fontFamily:'DM Sans',
    color:'#19191B',
    fontSize: '80px',
    fontWeight: 100,
    lineHeight: '77px',
    textTransform: 'none',
     marginBottom:'38px',
  },

  text: {
    width:'459px', 
    height: '90px',
    fontFamily:'Mulish',
    color:'#696871',
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: '30px',
    textTransform: 'none',
  },
 }));

export default function Header() {
  const classes = useStyles();

  return (
      <header className={classes.container}>
         <div  style={{width:'459px', height:'461px',}}>
           <Typography className={classes.heading}>
                  Grow your subscription business
           </Typography>
          
          <Typography className={classes.text}>
                Outcome-centered product that reduce churm optimize pricing and 
                 grow your subscription business end-to-end.
           </Typography>
          
           <GetHeaderBtn/>

           <ArrowDownwardIcon style={{width:'60px', height:'60px', marginLeft:'55px', 
                                      marginBottom:'-40px'}}/>
        </div>
        
        <div>
          <img src={Img} alt="" style={{width:'610px', marginTop:'-50px'}}/>
        </div>
      
      
      </header>
    );
  }