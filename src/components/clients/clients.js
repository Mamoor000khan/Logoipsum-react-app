// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';



//  import Img0 from '../../assets/svg/headerbottom-0.svg';
//  import Img1 from '../../assets/svg/headerbottom-1.svg';
//  import Img2 from '../../assets/svg/headerbottom-2.svg';
//  import Img3 from '../../assets/svg/headerbottom-3.svg';
//  import Img4 from '../../assets/svg/headerbottom-4.svg';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     // alignItems: 'center',
//     // position: 'relative',
//     //   display:'flex',
//     //   justifyContent:'space-around',
//     // // marginLeft:'36px',
//     marginTop:'50px',
//   },
// //   headerBottom: {
// //     maxWidth: '1126px',
// //     maxHeight: '943px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     position: 'relative',
    
// // },
  
// }));

// export default function Clients() {
//   const classes = useStyles();

//   return (
//     <section className={classes.headerBottom}>
//       <div  className={classes.container}>
//         <div style={{width:'118.78px',height:'27.12px'}} >
//                     <img src={Img0} alt=''/>
//         </div>
        
//         <div style={{width:'123.36px',height:'28.49px'}} >
//           <img src={Img1} alt='' />
//         </div>
        
//         <div style={{width:'100.19px',height:'47.65px'}}>
//            <img src={Img2} alt='' />
//         </div>
        
//         <div style={{width:'117.68px',height:'23.61px'}}>
//            <img src={Img3} alt=''  />
//         </div>
        
//         <div xs={12} md={1} style={{width:'126.72px',height:'29.54px'}}>
//            <img src={Img4} alt=''  />
//         </div>
//       </div>
//     </section>
//   );
// }






import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


 import Img0 from '../../assets/svg/headerbottom-0.svg';
 import Img1 from '../../assets/svg/headerbottom-1.svg';
 import Img2 from '../../assets/svg/headerbottom-2.svg';
 import Img3 from '../../assets/svg/headerbottom-3.svg';
 import Img4 from '../../assets/svg/headerbottom-4.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'1126px',
    height:'150px',
    marginTop:'75px',
    justifyContent:'space-around',
  },
  
}));

export default function Clients() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2} style={{width:'118.78px', height:'27.12px'}}>
                    <img src={Img0} alt=''/>
        </Grid>
        
        <Grid item xs={12} md={2} style={{width:'123.36', height:'28.42px',marginLeft:'29px'}}>
          <img src={Img1} alt='' />
        </Grid>
        
        <Grid item xs={12} md={2} style={{width:'100.19', height:'47.12px', marginLeft:'52px'}}>
           <img src={Img2} alt='' />
        </Grid>
        
        <Grid item xs={12} md={2} style={{width:'117.68', height:'23.12px', marginLeft:'47px'}}>
           <img src={Img3} alt='' />
        </Grid>
        
        <Grid xs={12} md={2} style={{width:'118.78px', height:'29.52px', marginLeft:'50px'}}>
           <img src={Img4} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
}