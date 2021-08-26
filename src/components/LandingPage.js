import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import ButtonArrow from './ui/ButtonArrow'
import { useTheme } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimatebutton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttoncontainer: {
    marginTop: '1em',
  },
  learnbuttonhero: {
    borderColor: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
    color: theme.palette.common.blue,
  },
  Maincontainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sx')]: {
      marginTop: '2em',
    },
  },
  herotextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.Maincontainer}>
      <Grid item>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid sm item className={classes.herotextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the MidWest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttoncontainer}
            >
              <Grid item>
                <Button className={classes.estimatebutton} variant="contained">
                  Free estimated
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnbuttonhero}>
                  <span style={{marginRight:10}}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage
