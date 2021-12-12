import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '../../assets/img/card.png';
import Calc from '../../assets/img/calc.png';
import Cam from '../../assets/img/cam.png';


const useStyles = makeStyles((theme) => ({
  img: {
    width: '151px',
    marginLeft:'30px',
       },
      }
     )
    );

export default function PackgagePlans() {
  const classes = useStyles();
    function FormRow() {
      return (
        <React.Fragment >
            {/* CARD */}
          <Grid item xs={4} style={{marginTop:'125px'}} >
              <img alt='' src={Card} className={classes.img}/>
            <Typography>
              <b style={{marginLeft:'30px',fontSize:'25px'}}  
                 >Benchmarks
              </b>
            </Typography>    
            <Typography style={{width:'288px', fontSize:'15px', marginLeft:'-17px',  
                               color:'#696871', marginTop:'13px', lineHeight:'26px'}}>
                See how you stack up against comporable compnies in similar stages
            </Typography>
           </Grid>
        {/* CALCULATOR */}
          <Grid item xs={4} style={{marginTop:'125px'}}>
              <img alt='' src={Calc} className={classes.img}/>
            <Typography>
               <b style={{marginLeft:'32px',fontSize:'25px'}}  
                  >Pricing Audit
               </b>
            </Typography>
            <Typography style={{width:'307px', fontSize:'15px', marginLeft:'-17px',  
                               color:'#696871', marginTop:'13px', lineHeight:'26px'}}>
                 Benchmark the health of your monetization and pricing strategy.
            </Typography>
           </Grid>
        {/* CAMERA */}
           <Grid item xs={4} style={{marginTop:'125px'}}>
                <img alt='' src={Cam} className={classes.img}/>
              <Typography>
                 <b style={{marginLeft:'3px',fontSize:'25px'}}  
                   >Retention Audit
                  </b>
              </Typography>        
              <Typography style={{width:'288px', fontSize:'15px', marginLeft:'-31px',  
                               color:'#696871', marginTop:'13px', lineHeight:'26px'}}>
                  Audit where revenue leakage exists and where you can increase 
                  retention.
              </Typography>
            </Grid>
      </React.Fragment>
    );
  };

  return(
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={18} spacing={10}>
          <FormRow />
      </Grid>
        </Grid>
    </div>
  );
};