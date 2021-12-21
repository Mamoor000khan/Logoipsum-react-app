import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        width: '235px',
        height: '48px',
        color: '#5454D4',
        marginLeft:'48px',
        background: 'transparent',
        fontSize: '14px',
        // fontWeight: '211x',
        lineHeight: '25px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        transition: 'all .3s',
        backfaceVisibility: 'hidden',
        boxShadow: 'none',
        marginTop: '37px',
        

        '&:hover': {
            backgroundColor: '#9F3919',
            boxShadow: 'black',
            color: '#fff',
            transition:'all .3s',
       
        }
    }
})

function StartedBtn () {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.btn}>
  Get Started
</Button>
    )
}



export default StartedBtn;