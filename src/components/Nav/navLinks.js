import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        link: {
            color:'#696871',
            marginRight: theme.spacing(5),
            lineHeight: '18.96px',
            '&:hover': {
                textDecoration: 'none',
                borderBottom: '2px solid #5454D4',
                fontWeight: 'bold',
                color: '#19191B'
            }
        },
        navLinks: {
            marginRight: '208px',
        },
        
    }
})


export default function NavLinks() {
    const classes = useStyles();

    return (
        <div className={classes.navLinks}>
            <Link className={classes.link} href="#" style={{fontWeight: 'bold',
                   marginTop:'17px', borderBottom:'2px solid #5454D4',color: '#19191B',}}>Home</Link>
            <Link  className={classes.link} href="#">Features</Link>
            <Link  className={classes.link} href="#">Pricing</Link>
            <Link  className={classes.link} href="#">Blog</Link>
            
        </div>
    )
}