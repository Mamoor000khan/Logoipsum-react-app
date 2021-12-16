import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/img/navbarlogo.png';
import Button from './getStartedButton';
import NavLinks from './navLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    
         width:'1220px',
         height:'60xp',
         display: 'flex',
         margin: 'auto',
         alignItems:'center',
         justifyContent:'center',
         marginBottom:'135px',
        },
  
  link: {
          fontSize: '17px',
          textTransform: 'none',
          color: '#696871',
          margin: 'auto',
          marginTop:'17px',
            
       '&:hover': {
                borderBottom: '2px solid #5454D4',
                color: 'black',
                lineHeight: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
                
            },
        },
  navLinks: {
            marginTop: '19px',
        },

  logo: {
          width:'221px', 
          height:'39.22px', 
          margin:'auto',
          marginRight:'189px',
          justifyContent: 'center',
        },
        
      }));

export default function Navbar() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <div > 
           <img alt="" src={Logo} className={classes.logo}/>
      </div>
        
          <NavLinks/>
        
               <Button/>
      
    </nav>
  );
}













