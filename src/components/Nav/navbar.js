import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from './getStartedButton';

import Logo from '../../assets/img/navbarlogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: '10px',
  },
  
  title: {
    flexGrow: 1,
  },

link: {
    // flexGrow: 1,
    fontSize: '1rem',
    // fontWeight: '400px',
    lineHeight: '41px',
    marginLeft: '40px',
    textTransform: 'none',
    color: '#696871',
    // margin: 'auto',
  
      '&:hover': {
        borderBottom: '2px solid #5454D4',
        color: 'black',
        lineHeight: '41px',
        textDecoration: 'none',
        fontWeight: '50%',
    }
   }
  }
 )
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <nav style={{marginBottom:'135px'}}>   
         <Toolbar style={{width:'1120px', height:'60px', padding:'12px'}}>
            
              <img alt="" src={Logo} style={{width:'200px', height:'41px', marginLeft:'34px'}}/>
            
          
            <Typography style={{width:'42px' , color:'black', borderBottom:'2px solid #5454D4', lineHeight:'41px', marginLeft: '220px', }} >
              Home
            </Typography >
            <Typography className={classes.link}>
              Features
            </Typography>
            <Typography className={classes.link} >
              Pricing
            </Typography>
            <Typography className={classes.link}>
              Blog
            </Typography>
          
              <Button/>
         </Toolbar>
       </nav>
    </div>
  );
}
    

  // <nav className={`${classes.nav} ${classes.container} ${classes.navLinks}`}>
        //     <img src={Logo} className={classes.logoImg} alt=''/>
           
        //     <a className={`${classes.link} ${classes.active}`}><b>Home</b></a>
        //     <a className={classes.link}><b>Features</b></a>
        //     <a className={classes.link}><b>Pricing</b></a>
        //     <a className={classes.link}><b>Blog</b></a>
           
        //     <GetStartedBtn />
            
        // </nav>
