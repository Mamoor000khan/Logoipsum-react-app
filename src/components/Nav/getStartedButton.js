import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        width: '211px',
        height: '60px',
        color: '#fff',
        background: '#FF7143',
        fontSize: '15px',
        // fontWeight: '211x',
        lineHeight: '25px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        transition: 'all .3s',
        backfaceVisibility: 'hidden',
        boxShadow: 'none',
        // position: 'fixed',
        marginLeft: '156px',
        

        '&:hover': {
            backgroundColor: '#5454D4',
            boxShadow: 'black'
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