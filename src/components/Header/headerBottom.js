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
    marginTop:'300px',
    justifyContent:'space-around',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HeaderBottom() {
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





