import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GetHeaderBtn from './getHeaderBtn.js';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Img from '../../assets/img/header.png';

export default function HeaderTop() {
  return (
    <React.Fragment>
      <Container style={{width:'1151px', height:'636px', marginLeft:'65px'}}>
      
             <Typography style={{width:'462px', height: '231px'}} >
                 <b style={{fontSize:'78px', lineHeight:'77px'}}>Grow your subscription business</b>
             </Typography>

             <Typography style={{width:'459px', height: '90px'}}>
                 <p style={{fontSize:'20px', marginTop:'30px', color:'#696871'}}>Outcome-centered product that reduce churm optimize pricing and grow your subscription business end-to-end.</p>
             </Typography>

          <GetHeaderBtn  />
                 
              <div style={{marginLeft:'257px', marginTop:'-49px'}}>
                 <ArrowDownwardIcon style={{fontSize:'40px'}}/>
              </div>
            
            <div style={{width:'385', height:'636px', marginLeft: '517px', marginTop: '-504px'}}>
                <img src={Img} alt="" style={{width:'610px'}}/>
            </div>  
      </Container>
    </React.Fragment>
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