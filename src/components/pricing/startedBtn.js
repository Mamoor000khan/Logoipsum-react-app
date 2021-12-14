import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        width: '211.83px',
        height: '45px',
        color: '#5454D4',
        background: 'transparent',
        fontSize: '12px',
        // fontWeight: '211x',
        lineHeight: '25px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        transition: 'all .3s',
        backfaceVisibility: 'hidden',
        boxShadow: 'none',
        // position: 'fixed',
        marginLeft: '-13px',
        marginTop: '3px',
        

        '&:hover': {
            backgroundColor: '#9F3919',
            boxShadow: 'black',
            color: '#fff',
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