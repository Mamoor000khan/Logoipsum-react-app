import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Img from '../../assets/img/feature.png';



export default function Package() {
  return (
    <React.Fragment>
      <Container style={{width:'1151px', height:'636px', marginTop:'100px'}}>
            <div style={{width:'348px', height:'473px'}}>
                <img src={Img} alt="" style={{width:'348px'}}/>
            </div>
           
           <div style={{width:'556px', height:'229px',marginLeft:'520px'}}>
          <Typography style={{ marginTop:'-355px'}} >
                <b style={{fontSize:'50px'}}>Subscription index </b>
          </Typography>

          <Typography >
                <p style={{width:'375px', color:'#696871', lineHeight:'29px'}}>A daily dataset to keep you up to date on subscription market trends and what's hapenning in your vertical.</p>
          </Typography>
           
          <Typography style={{height: '173px', fontSize: '15px', color: '#5454D4'}}>learn more</Typography>

           </div>
      </Container>
    </React.Fragment>
  )
};

































