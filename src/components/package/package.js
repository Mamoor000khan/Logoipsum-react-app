import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '../../assets/img/card.png';
import Calc from '../../assets/img/calc.png';
import Cam from '../../assets/img/cam.png';


const useStyles = makeStyles((theme) => ({
  package:{
    width:'100%',
    height:'350px',
    textAlign:'start',
    marginTop:'60px',
  },  
  
  packageContainer:{
      display:'flex',
      justifyContent:'centre',
      textAlign:'centre',
  },
  
  img:{
      width:'151px',
      height:'97px',
    },

  heading:{
      width:'500px',
      height:'53px',
      color:'#19191B',
      fontFamily:'DM Sans',
      fontWeight:700,
      fontSize:'28px',
    },

    text:{
      
      width:'500px', 
    height: '48px',
    fontFamily:'Mulish',
    color:'#696871',
    fontSize: '24px',
    fontWeight: 200,
    lineHeight: '30px',
    textTransform: 'none',
    marginBottom:'21px',

    }

}));

export default function Package() {
  const classes = useStyles();
    
      return (
        <section className={classes.package}>
          <div className={classes.packageContainer}>
            {/* CARD */}
          <Grid  >
              <img alt='' src={Card} className={classes.img}/>
            <Typography className={classes.heading}>
              Benchmarks
              
            </Typography>    
            <Typography className={classes.text}>
                See how you stack up against comporable compnies in similar stages
            </Typography>
           </Grid>
        {/* CALCULATOR */}
          <Grid >
              <img alt='' src={Calc} className={classes.img}/>
            <Typography className={classes.heading}>
               Pricing Audit
            </Typography>
            <Typography className={classes.text}>
                 Benchmark the health of your monetization and pricing strategy.
            </Typography>
           </Grid>
        {/* CAMERA */}
           <Grid >
                <img alt='' src={Cam} className={classes.img}/>
              <Typography className={classes.heading}>
                 Retention Audit
                  
              </Typography>        
              <Typography className={classes.text}>
                  Audit where revenue leakage exists and where you can increase 
                  retention.
              </Typography>
            </Grid>
            </div>
      </section>
    );
  
};