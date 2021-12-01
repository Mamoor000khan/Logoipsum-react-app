import React from 'react';
import Typography from '@material-ui/core/Typography';

import content from '../../assets/img/Content Image 02 (1).png';
import classes from './features.module.css';

function Features() {
    return (
        
        <div className={classes.container}>
            <div>
                <img src={content} className={classes.img}/>
            </div>
            <div className={classes.textContainer}>
                <Typography style={{fontSize:'40px', height: '84px'}}>
                   <b> Subscription index </b>
                </Typography>
       
                <Typography style={{fontSize:'13px', height:'95px', lineHeight:'22px', color: '#696871', width: '304px'}}>
                    A daily dataset to keep you up to date on subscription market trends and what's hapenning in your vertical. 
                </Typography>
    
                <Typography style={{height: '173px', fontSize: '15px', color: '#5454D4'}}>learn more</Typography>
            </div>
        </div>

        




    )
}


export default Features;



