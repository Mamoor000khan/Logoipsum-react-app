import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        width: '191.83px',
        height: '55px',
        color: '#fff',
        background: '#5454D4',
        fontSize: '12px',
        // fontWeight: '211x',
        lineHeight: '25px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        transition: 'all .3s',
        backfaceVisibility: 'hidden',
        boxShadow: 'none',
        // position: 'fixed',
        marginLeft: '55px',
        marginTop: '47px',
        

        '&:hover': {
            backgroundColor: '#FF7143',
            boxShadow: 'black'
        }
    }
})

function GetHeaderBtn () {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.btn}>
  Get Started
</Button>
    )
}


export default GetHeaderBtn;