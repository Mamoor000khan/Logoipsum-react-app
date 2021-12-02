import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        width: '191.83px',
        height: '55px',
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
        marginLeft: '68px',
        marginTop: '30px',
        

        '&:hover': {
            backgroundColor: '#9F3919',
            boxShadow: 'black',
            color: '#fff',
        }
    }
})

function GetStartedBtn () {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.btn}>
  Get Started
</Button>
    )
}



export default GetStartedBtn;