import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Img from '../../assets/img/package.png';
 import PackagePlans from './packageplans';


export default function Package() {
  return (
    <React.Fragment>
      <Container style={{width:'1151px', height:'636px', marginTop:'100px', 
                         }}>
            
            <div>
               <Typography style={{width:'556px', height:'57px', marginBottom:'38px'}}>
                  <b style={{fontSize:'50px'}}>In-depth metrics </b>
               </Typography>

               <Typography style={{width:'459px', height:'60px', marginBottom:'18px'}}>
                  <p style={{width:'340px', color:'#696871', lineHeight:'28px'}}
                    >Accurate real time reporting at your fingerprint. 
                    Getting data has naver been easier </p>
               </Typography>
           
               <Typography style={{height: '173px', fontSize: '15px', color: '#5454D4'}}
                    >learn more
               </Typography>
            </div>

            <div style={{width:'346px', height:'474px',  marginLeft:'613px', marginTop:'-535px'}}>
                <img src={Img} alt="" style={{width:'348px'}}/>
            </div>
            <PackagePlans />
       </Container>
       
    </React.Fragment>
  )
};
















// import React from 'react';
// import Typography from '@material-ui/core/Typography';

// import content from '../../assets/img/Content Image (1).png';
// import classes from './package.module.css';
// import PackagePlans from './packageplans';

// function Package () {
//     return (
//          <div className={classes.container}>
//              <div className={classes.textContainer}>
//                 <Typography style={{fontSize:'40px', height: '84px',     margintop: '139px',
//     marginbottom: '-248px',}}>
//                   <b> In-depth metrics </b>
//                 </Typography>
 
//                 <Typography style={{fontSize:'14px', height:'72px', lineHeight:'22px', color: '#696871', width: '304px'}}>
//                    Accurate real time reporting at your fingerprint. Getting data has naver been easier 
//                 </Typography>

//                 <Typography style={{height: '173px', fontSize: '15px', color: '#5454D4'}}>learn more</Typography>
//               </div>
//                   <div>
//                     <img src={content} className={classes.img}/>
//                   </div>
//               <div>
//                   <PackagePlans/>
//                   </div>
//           </div>
//          )
//        }




//        export default Package;