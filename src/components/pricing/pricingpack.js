import React from 'react';

import classes from './pricingpack.module.css';
import GetStartedBtn from './Getstartedbutton';


function PricingPack() {
    return(
        <div className={classes.packPlanContainer} >
        <div className={classes.packItem}>
                 <p className={classes.listItemText}>starter</p>
                 <p className={classes.label}><b>Free</b></p>
                 <p className={classes.listItemText}>1 Website</p>
                 <p className={classes.listItemText}>5 Gb Hosting</p>
                 <p className={classes.listItemText}>Limited Support</p>
                 <GetStartedBtn/>
              </div>
             

             <div className={classes.packItem}>
                 <p className={classes.listItemText}>starter</p>
                 <p className={classes.label}><b>Free</b></p>
                 <p className={classes.listItemText}>1 Website</p>
                 <p className={classes.listItemText}>5 Gb Hosting</p>
                 <p className={classes.listItemText}>Limited Support</p>
             </div>
             <div>
                 <button></button>
             </div>

             <div className={classes.packItem}>
                 <p className={classes.label}>starter</p>
                 <p className={classes.label}><b>Free</b></p>
                 <p className={classes.label}>1 Website</p>
                 <p className={classes.label}>5 Gb Hosting</p>
                 <p className={classes.label}>Limited Support</p>
             </div>
             <div>
                 <button></button>
             </div>
        </div>
    )
}





export default PricingPack;