import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NavState } from '../Contextapi';



import logooo from '../images/logo.png';

const useStyles = makeStyles(() => ({

    gridmain1:{
        background:'#330662',
        height:'10vh',
        fontWeight: 'bold',
        width: '100%',
    },
    gridmain2:{
        background:'#ab82c5',
        height:'7vh',
        width: '100%',
        paddingLeft: '5vw',
        paddingTop:'2vh',
        fontWeight: 'bold'
    },
    logo:{
        height: '10vh',
        weight: '10vw',
    },


}));



const Header = () => {
  const classes = useStyles();

  const {navvalue} = NavState();
  

  return (
    <div>
    <Grid container className={classes.gridmain1}>
        <Grid item xs={6} md={10}>
            <img src={logooo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item xs={6} md={2} style={{paddingTop:'2vh'}}>
            <Typography variant="h5" className={classes.title}>Department of civil & urban Engineering</Typography>

        </Grid>
    </Grid>
    <Grid container className={classes.gridmain2}>

        <Grid item xs={6} md={10}>

            <Typography variant="h5"sx={{ fontWeight: 'bold' }} className={classes.title}>{navvalue}</Typography>

        </Grid>
        <Grid item xs={6} md={2}>

            <Typography sx={{ fontWeight: 'bold' }} variant="h5" className={classes.title}>More Information</Typography>
        
        </Grid>

    </Grid>
    </div>
  );
}

export default Header



