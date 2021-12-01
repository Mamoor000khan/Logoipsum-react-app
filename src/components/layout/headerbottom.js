import React from 'react';

import Group from '../../assets/SVG/Group.svg';
import Group1 from '../../assets/SVG/Group (1).svg';
import Group2 from '../../assets/SVG/Group (2).svg';
import Group3 from '../../assets/SVG/Group (3).svg';
import Group4 from '../../assets/SVG/Group (4).svg';

import classes from './headerbottom.module.css'

function Headerbottom () {
    return (
        <div className={classes.headerBottomItem}>
           
            <img src={Group}/>
            <img src={Group1}/>
            <img src={Group2}/>
            <img src={Group3}/>
            <img src={Group4}/>
           
            </div>
    )
}


export default Headerbottom;