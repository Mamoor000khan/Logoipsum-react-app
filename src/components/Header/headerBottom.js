import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Img0 from '../../assets/svg/headerbottom-0.svg';
import Img1 from '../../assets/svg/headerbottom-1.svg';
import Img2 from '../../assets/svg/headerbottom-2.svg';
import Img3 from '../../assets/svg/headerbottom-3.svg';
import Img4 from '../../assets/svg/headerbottom-4.svg';

const useStyles = makeStyles((theme) => ({
  root: {
     justifyContent:'space-around',
     marginLeft:'117px'
  },
  paper: {
    // padding: theme.spacing(1),
     textAlign: 'center',

    // color: theme.palette.text.secondary,
  },
}));

export default function HeaderBottom(props) {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2} >
           <img src={Img0} alt='' />
        </Grid>
        <Grid item xs={2}>
        <img src={Img1} alt='' style={{marginLeft:'16px'}}/>        
        </Grid>
        <Grid item xs={2}>
        <img src={Img2} alt='' style={{marginLeft:'46px'}}/>
        </Grid>
        <Grid item xs={2}>
        <img src={Img3} alt='' style={{marginLeft:'80px'}}/>
        </Grid>
        <Grid item xs={2}>
        <img src={Img4} alt='' style={{marginLeft:'126px'}}/>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={25} spacing={3}>
          <FormRow />
        </Grid>
      
      </Grid>
    </div>
  );
}










// import React from 'react';

// import Group from '../../assets/SVG/Group.svg';
// import Group1 from '../../assets/SVG/Group (1).svg';
// import Group2 from '../../assets/SVG/Group (2).svg';
// import Group3 from '../../assets/SVG/Group (3).svg';
// import Group4 from '../../assets/SVG/Group (4).svg';

// import classes from './headerbottom.module.css'

// function Headerbottom () {
//     return (
//         <div className={classes.headerBottomItem}>
           
//             <img src={Group}/>
//             <img src={Group1}/>
//             <img src={Group2}/>
//             <img src={Group3}/>
//             <img src={Group4}/>
           
//             </div>
//     )
// }


// export default Headerbottom;