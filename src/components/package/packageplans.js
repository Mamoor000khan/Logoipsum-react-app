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
              <b style={{marginLeft:'14px',fontSize:'25px'}}  
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
               <b style={{marginLeft:'11px',fontSize:'25px'}}  
                  >Pricing Audit
               </b>
            </Typography>
            <Typography style={{width:'288px', fontSize:'14px', marginLeft:'-17px',  
                               color:'#696871', marginTop:'13px', lineHeight:'26px'}}>
                 Benchmark the health of your monetization and pricing strategy.
            </Typography>
           </Grid>
        {/* CAMERA */}
           <Grid item xs={4} style={{marginTop:'125px'}}>
                <img alt='' src={Cam} className={classes.img}/>
              <Typography>
                 <b style={{marginLeft:'-10px',fontSize:'25px'}}  
                   >Retention Audit
                  </b>
              </Typography>        
              <Typography style={{width:'288px', fontSize:'15px', marginLeft:'-17px',  
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



// import React from 'react';
// import Typography from '@material-ui/core/Typography';

// import Icon1 from '../../assets/img/Icon 001.png';
// import Icon2 from '../../assets/img/Icon 002.png';
// import Icon3 from '../../assets/img/Icon 003.png';

// import classes from './packageplans.module.css';

// function PackagePlans () {
//     return (
//         <div className={classes.headerBottomItem}>
//             <div className={classes.headerBottom}>
//             <img src={Icon1} className={classes.avatar}/>
            
//                  <Typography style={{fontSize: '20px', marginbottom: '19px', marginleft: '57px', margintop: '-13px'}} ><b>Benchmarks</b></Typography>
//                  <Typography  style={{fontSize:'14px', height:'72px', lineHeight:'22px', color: '#696871', width: '305px', marginleft: '-73px', margintop: '19px'}}>See how you stack up against comporable compnies in similar stages</Typography>
            
//             </div>
             
           

//             <div className={classes.headerBottom}>
//             <img src={Icon2} className={classes.avatar}/>
//             <div>
//                  <Typography style={{fontSize: '20px', marginbottom: '15px', marginleft: '60px', margintop: '-13px'}} ><b>Pricing Audit</b></Typography>
//                  <Typography  style={{fontSize:'16px', height:'72px', lineHeight:'22px', color: '#696871', width: '304px', marginleft: '-73px', margintop: '19px'}}>Benchmark the health of your monetization and pricing strategy.</Typography>
//              </div>
//             </div>
            
//             <div className={classes.headerBottom}>
//             <img src={Icon3} className={classes.avatar}/>
//             <div>
//                  <Typography style={{fontSize: '20px', marginbottom: '15px', marginleft: '38px', margintop: '-13px'}} ><b>Retention Audit</b></Typography>
//                  <Typography  style={{fontSize:'14px', height:'72px', lineHeight:'22px', color: '#696871', width: '304px', marginleft: '-73px', margintop: '19px'}}>Audit where revenue leakage exists and where you can increase retention.</Typography>
//              </div>
//             </div>
            
//         </div>
//     )
//         }



// export default PackagePlans;