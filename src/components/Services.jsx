import React from 'react'
import { Button, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ButtonArrow from './ui/ButtonArrow';
import CustomSoftwareicon from '../assets/Custom Software Icon.svg';
import mobileAppsicon from '../assets/mobileIcon.svg';
import websiteicon from '../assets/websiteIcon.svg';


const useStyles = makeStyles((theme) => ({
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
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));

const Services = (props) => {
  const {setValue,setselectedindex} = props
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Grid container direction="column">
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? "1em" : "2em"}}>
        <Typography
          align={matchesSM ? 'center' : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*---------IOS/ANDROID Block----------  */}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicecontainer}
          style={{ marginTop: matchesSM ? '1em' : '5rem' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
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
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnbutton}
              onClick={() => {
                setValue(1);
                setselectedindex(2);
              }}
            >
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
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
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
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnbutton}
              onClick={() => {
                setValue(1);
                setselectedindex(1);
              }}
            >
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
        {/*---------website Block----------  */}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicecontainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More, Discover More, Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines Built for Speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnbutton}
              onClick={() => {
                setValue(1);
                setselectedindex(3);
              }}
            >
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
              src={websiteicon}
              alt="website icon"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services
