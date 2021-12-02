import React from 'react';

import Logo from '../../assets/img/Logo Color.png';
import GetStartedBtn from './getstartedbtn';
import classes from './navbar.module.css';


function Navbar () {
   
    return (
        <nav className={`${classes.nav} ${classes.container} ${classes.navLinks}`}>
            <img src={Logo} className={classes.logoImg} alt=''/>
           
            <a className={`${classes.link} ${classes.active}`}><b>Home</b></a>
            <a className={classes.link}><b>Features</b></a>
            <a className={classes.link}><b>Pricing</b></a>
            <a className={classes.link}><b>Blog</b></a>
           
            <GetStartedBtn />
            
        </nav>
    )
}


export default Navbar;