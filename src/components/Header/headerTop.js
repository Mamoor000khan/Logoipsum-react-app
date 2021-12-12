import React,{useState} from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import GetHeaderBtn from './getHeaderBtn.js';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Img from '../../assets/img/header.png';
import { Container } from '@material-ui/core';


export default function HeaderTop() {
  
  // Arrow down Function
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollEnd = () =>{
    window.scrollTo({top: document.body.offsetHeight, behavior: 'smooth', });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <Container style={{width:'1151px', height:'363px'}}>
      <Grid>
         <Typography style={{width:'462px', height: '231px'}} >
                 <b style={{fontSize:'78px', lineHeight:'77px'}}>Grow your subscription business</b>
         </Typography>
          
         <Typography style={{width:'459px', height: '90px'}}>
                 <p style={{fontSize:'20px', marginTop:'30px', color:'#696871'}}>Outcome-centered product that reduce churm optimize pricing and grow your subscription business end-to-end.</p>
          </Typography>
            
        <Grid>
          <GetHeaderBtn/>
        </Grid>
        
        <Grid>   
            <div style={{marginLeft:'257px', marginTop:'-49px'}}>
            <ArrowDownwardIcon onClick={scrollEnd} style={{fontSize:'40px', 
                                    display: showScroll ? 'flex' : 'none'}}/> 
            </div>
         </Grid>
        
         <Grid>
            <div style={{width:'617', height:'636px', marginLeft: '530px', 
                         marginTop: '-504px'}}>
                <img src={Img} alt="" style={{width:'610px'}}/>
            </div>  
            </Grid>
      </Grid>
    </Container>
  );
};



// import React from 'react';

// import Hero from '../../assets/img/Hero 3D.png';
// import GetHeaderBtn from './getheaderbtn';
// import {ArrowDownward} from '@material-ui/icons';

// import classes from './headertop.module.css';


// function Headertop() {
//     return (
//         <div className={classes.header}>
//             <div className={classes.text}>
//             <p className={classes.heading}  >
//             <b> Grow your subscription business </b>
//             </p>

//             <p className={classes.text}>
//                 Outcome-centered product that reduce churm optimize pricing and grow your subscription business end-to-end.
//             </p>
//             <GetHeaderBtn/>
//             <ArrowDownward className={classes.arrow}/> 
//             </div>
//               <div>
//             <img src={Hero} alt='' className={classes.img}/>
//             </div>
           
          
//         </div>
//     )
// }



// export default Headertop;