import React from 'react';

import Hero from '../../assets/img/Hero 3D.png';
import GetHeaderBtn from './getheaderbtn';
import {ArrowDownward} from '@material-ui/icons';

import classes from './headertop.module.css';


function Headertop() {
    return (
        <div className={classes.header}>
            <div className={classes.text}>
            <p className={classes.heading}  >
            <b> Grow your subscription business </b>
            </p>

            <p className={classes.text}>
                Outcome-centered product that reduce churm optimize pricing and grow your subscription business end-to-end.
            </p>
            <GetHeaderBtn/>
            <ArrowDownward className={classes.arrow}/> 
            </div>
              <div>
            <img src={Hero} alt='' className={classes.img}/>
            </div>
           
          
        </div>
    )
}



export default Headertop;