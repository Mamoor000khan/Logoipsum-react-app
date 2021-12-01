import React from 'react';

import classes from './pricingpack.module.css';



function PricingPack() {
    return(
        <div className={classes.packPlanContainer} >
        <div className={classes.packItem}>
                 <p className={classes.listItemText}>starter</p>
                 <p className={classes.label}>Free</p>
                 <p className={classes.listItemText}>1 Website</p>
                 <p className={classes.listItemText}>5 Gb Hosting</p>
                 <p className={classes.listItemText}>Limited Support</p>
             </div>
             <div>
                 <button></button>
             </div>

             <div className={classes.packItem}>
                 <p className={classes.listItemText}>starter</p>
                 <p className={classes.label}>Free</p>
                 <p className={classes.listItemText}>1 Website</p>
                 <p className={classes.listItemText}>5 Gb Hosting</p>
                 <p className={classes.listItemText}>Limited Support</p>
             </div>
             <div>
                 <button></button>
             </div>

             <div className={classes.packItem}>
                 <p className={classes.listItemText}>starter</p>
                 <p className={classes.label}>Free</p>
                 <p className={classes.listItemText}>1 Website</p>
                 <p className={classes.listItemText}>5 Gb Hosting</p>
                 <p className={classes.listItemText}>Limited Support</p>
             </div>
             <div>
                 <button></button>
             </div>
        </div>
    )
}





export default PricingPack;