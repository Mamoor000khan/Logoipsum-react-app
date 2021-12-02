import React from 'react';
import Typography from '@material-ui/core/Typography';

import Icon1 from '../../assets/img/Icon 001.png';
import Icon2 from '../../assets/img/Icon 002.png';
import Icon3 from '../../assets/img/Icon 003.png';

import classes from './packageplans.module.css';

function PackagePlans () {
    return (
        <div className={classes.headerBottomItem}>
            <div className={classes.headerBottom}>
            <img src={Icon1} className={classes.avatar}/>
            
                 <Typography style={{fontSize: '20px', marginbottom: '19px', marginleft: '57px', margintop: '-13px',}} ><b>Benchmarks</b></Typography>
                 <Typography  style={{fontSize:'14px', height:'72px', lineHeight:'22px', color: '#696871', width: '305px', marginleft: '-73px', margintop: '19px'}}>See how you stack up against comporable compnies in similar stages</Typography>
            
            </div>
             
           

            <div className={classes.headerBottom}>
            <img src={Icon2} className={classes.avatar}/>
            <div>
                 <Typography style={{fontSize: '20px', marginbottom: '15px', marginleft: '60px', margintop: '-13px',}} ><b>Pricing Audit</b></Typography>
                 <Typography  style={{fontSize:'16px', height:'72px', lineHeight:'22px', color: '#696871', width: '304px', marginleft: '-73px', margintop: '19px'}}>Benchmark the health of your monetization and pricing strategy.</Typography>
             </div>
            </div>
            
            <div className={classes.headerBottom}>
            <img src={Icon3} className={classes.avatar}/>
            <div>
                 <Typography style={{fontSize: '20px', marginbottom: '15px', marginleft: '38px', margintop: '-13px',}} ><b>Retention Audit</b></Typography>
                 <Typography  style={{fontSize:'14px', height:'72px', lineHeight:'22px', color: '#696871', width: '304px', marginleft: '-73px', margintop: '19px'}}>Audit where revenue leakage exists and where you can increase retention.</Typography>
             </div>
            </div>
            
        </div>
    )
        }



export default PackagePlans;