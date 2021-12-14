import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';

import Logo from '../../assets/img/navbarlogo.png';
import Button from './getStartedButton';

const useStyles = makeStyles((theme) => ({
  root: {
    
         width:'1120px',
         height:'60xp',
          marginBottom:'135px',
           marginTop: '12px',
           marginLeft: "668px",
          textAlign:'centre',
      },
  link: {
            // flexGrow: 1,
            fontSize: '17px',
            textTransform: 'none',
            color: '#696871',
            margin: 'auto',
            // marginLeft:'-54px',
            marginTop:'17px',
            
       '&:hover': {
                borderBottom: '2px solid #5454D4',
                color: 'black',
                lineHeight: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
                
            }
           },
           navLinks: {
            marginTop: '19px',
        },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={1} >
        <Grid item xs={4} md={4}> 
           <img alt="" src={Logo} 
                style={{width:'222px', height:'41px', margin:'auto',textAlign:'center', 
                          marginTop:'10px' }}/>
        </Grid>
        
        <Grid item xs={4} md={4}>
          <div className={classes.navLinks}>
             <Link href="#" className={classes.link} style={{fontWeight: 'bold',
                   marginTop:'17px', borderBottom:'2px solid #5454D4',color: 'black',}}
                   >Home
             </Link>
            
            <Link href="#" className={classes.link} style={{marginLeft:'40px'}}
                   >Feature
            </Link>
            
            <Link href="#" className={classes.link} style={{marginLeft:'40px'}}
                   >Pricing
            </Link>
            
            <Link href="#" className={classes.link} style={{marginLeft:'40px'}}
                   >Blog
            </Link>
          </div>
        </Grid>
        
        <Grid item xs={4} md={4}>
            <Button/>
        </Grid>
      </Grid>
    </Container>
  );
}













