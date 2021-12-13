import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Logo from '../../assets/img/navbarlogo.png';
import Button from './getStartedButton';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    
    width:'1120px',
    height:'60xp',
     marginBottom:'135px',
     marginTop: '37px',
    //  marginLeft: "77px",
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
       }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3} >
          <Grid item xs={12} md={3}>
              <img alt="" src={Logo} 
                 style={{width:'222px', height:'41px', margin:'auto',textAlign:'center', 
                         marginTop:'10px' }}/>
          </Grid>
       
          <Grid  item xs={12} md={1} style={{marginTop:'16px', marginLeft:'56px'}} >
              <b style={{marginTop:'17px', borderBottom:'2px solid #5454D4'}}> Home</b>
          </Grid>
         
          <Grid  item xs={12} md={1} style={{marginRight:'16px'}} >
               <p className={classes.link}> Features</p>
          </Grid>
        
          <Grid item xs={12} md={1} style={{marginRight:'17px'}}>
               <p className={classes.link}> Pricing</p>
          </Grid>
          
          <Grid  item xs={12} md={1} style={{marginRight:'90px'}}>
               <p className={classes.link}>Blog</p>
          </Grid>
       
          <Grid item xs={12} md={3}>
               <Button/>
          </Grid>
       </Grid>
    </Container>
  );
}









