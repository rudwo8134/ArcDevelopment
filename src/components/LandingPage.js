import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data';
import { Button, Card, CardContent, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import { useTheme } from '@material-ui/styles';
import CustomSoftwareicon from '../assets/Custom Software Icon.svg'
import mobileAppsicon from '../assets/mobileIcon.svg'
import websiteicon from '../assets/websiteIcon.svg'
import revolutionbackfround from '../assets/repeatingBackground.svg'
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
    ...theme.typography.learnbutton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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
  specialtext: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  learnbutton: {
    ...theme.typography.learnbutton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  servicecontainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionbackground: {
    backgroundImage: `url(${revolutionbackfround})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutioncard:{
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius:15,
    padding: "10em",
    [theme.breakpoints.down("sm")]:{
      padding: "8em 0",
      borderRadius:0,
      width: "100%"
    }
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
        {' '}
        {/*------ Hero Block-------- */}
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
                  <span style={{ marginRight: 10 }}>Learn More</span>
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
      <Grid item>
        {' '}
        {/*---------Service Block----------  */}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : undefined}
          className={classes.servicecontainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy, Save Times, Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solution, from investigation to{' '}
              <span className={classes.specialtext}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnbutton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={CustomSoftwareicon}
              alt="custom software icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*---------IOS/ANDROID Block----------  */}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicecontainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile flatform.
            </Typography>
            <Button variant="outlined" className={classes.learnbutton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              src={mobileAppsicon}
              alt="moblie phone icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*---------website Block----------  */}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : undefined}
          className={classes.servicecontainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More, Discover More, Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines Built for Speed.
            </Typography>
            <Button variant="outlined" className={classes.learnbutton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={websiteicon}
              alt="website icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid style={{height: "100em", marginTop:"12em"}} container justifyContent="center" alignItems="center">
          <Card className={classes.revolutioncard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insight couple with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button variant="outlined" className={classes.learnbutton}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionbackground}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
