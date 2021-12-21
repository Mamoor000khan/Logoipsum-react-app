import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '../../assets/img/card.png';
import Calc from '../../assets/img/calc.png';
import Cam from '../../assets/img/cam.png';

import Typography from '@material-ui/core/Typography';
import Classes from './Package.module.css';

const useStyles = makeStyles((theme) => ({
  img:{
     width:'151px',
     height:'97px',
      },
  heading:{
      width:'138px',
      height:'36px',
      color:'#19191B',
      fontFamily:'DM Sans',
      fontWeight:800,
      fontSize:'22px',
      lineHeight:'36px',
      marginLeft:'74px',
      marginBottom:'16px',
           },
  text:{
      width:'307px', 
      height: '48px',
      fontFamily:'Mulish',
      color:'#696871',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '24px',
      textTransform: 'none',
        //marginBottom:'21px',
        //  textAlign:'centre',
      },
}));

export default function Package() {
  const classes = useStyles();
return (
    <section className={Classes.package}>
      <Grid className={Classes.Container}>
        <Grid item xs={4} style={{textAlign:'ceter'}}>
        {/* CARD   */}
          <img alt='' src={Card} className={classes.img}/>
             <Typography className={classes.heading} style={{marginLeft:'166px'}}>
                Benchmarks
             </Typography>    
             
             <Typography className={classes.text} style={{marginLeft:'90px'}}>
                See how you stack up against comporable compnies in similar stages
             </Typography>
        </Grid>
        {/* CALCULATOR */}
        <Grid item xs={4} style={{textAlign:'ceter'}}>
           <img alt='' src={Calc} className={classes.img}/>
             <Typography className={classes.heading} style={{width:'140px', marginLeft:'172px'}}>
                Pricing Audit
             </Typography>
             
             <Typography className={classes.text} style={{marginLeft:'84px'}}>
                  Benchmark the health of your monetization and pricing strategy.
             </Typography>
        </Grid>
        {/* CAMERA */}
        <Grid item xs={4} style={{textAlign:'ceter'}}>
            <img alt='' src={Cam} className={classes.img}/>
               <Typography className={classes.heading} style={{width:'172px',marginLeft:'149px'}}>
                  Retention Audit
               </Typography>        
               
               <Typography className={classes.text} style={{marginLeft:'84px'}}>
                   Audit where revenue leakage exists and where you can increase 
                   retention.
               </Typography>
        </Grid>
      </Grid>
    </section>
  );
};





























