import React from 'react';

import { Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/img/package.png';

const useStyles = makeStyles((theme) => ({
    metrix:{
    //   marginTop:'46px',
    //   marginBottom:'20px',
    },
    container: {
      width:'1251px',
      height:'500px',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      margin:'auto',
  },
  textContainer: {
    width:'556px',
    height:'100px',
    textAlign:'start',
    // marginLeft:'168px',
  },
  heading: {
    width:'556px',
    height:'57px',
    fontFamily:'DM Sans',
    fontWeight:700,
    fontSize: '40px',
    lineHeight: '50px',
    marginBottom:'20px',
  },
  text: {
    width:'459px', 
    height: '90px',
    fontFamily:'Mulish',
    color:'#696871',
    fontSize: '19px',
    fontWeight: 200,
    lineHeight: '30px',
    textTransform: 'none',
    marginBottom:'21px',
  },
  
  link:{
    width:'89px',
    height:'22px',
    fontFamily:'DM Sans',
    color: '#5454D4',
    fontSize: '15px'
  }
  }))

export default function Metrix() {
    const classes = useStyles();
  return (
    <section className={classes.matrix}>
     <div className={classes.container}>
    <div className={classes.textContainer} >
      <Typography className={classes.heading}>
      In-depth metrics
      </Typography>
     
     <Typography className={classes.text}>
     Acuurate real time reporting on your finger-print.
     Getting data has never been easier.
      </Typography>
     
      <Link className={classes.link}>Learn more</Link>

         </div>

         
      <div>
     <img src={Img} alt="" style={{width:'348.5',height:'473px', }}/>
   </div>
</div>
 </section>
  )
};
