import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

import backarrow from '../assets/backArrow.svg'
import forwardarrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerse from '../assets/ecommerce.svg'
import Calltoaction from './ui/Calltoaction'

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  Arrowcontainer: {
    marginTop: '0.5em',
  },
  rowcontainer: {
    paddingRight: '5em',
    paddingLeft: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '1.5em',
      paddingLeft: '1.5em',
    },
  },
  paragraphcontainer:{
    maxWidth: "30em"
  }
}));

const Website = (props) => {
  const { setselectedindex, setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? 'center' : undefined}
        className={classes.rowcontainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.Arrowcontainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/mobileapps"
              onClick={() => setselectedindex(2)}
            >
              <img src={backarrow} alt="Back To IOS/Android Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              Website Development
            </Typography>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.Arrowcontainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/services"
              onClick={() => setselectedindex(0)}
            >
              <img src={forwardarrow} alt="forward to service page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowcontainer}
        alignItems="center"
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="h4"
                gutterBottom
              >
                Analytics
              </Typography>
              <Grid item>
                <img
                  src={analytics}
                  style={{ marginLeft: '-2.75em' }}
                  alt="graph with magnifiying glass revealing 1's and 0's"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphcontainer}>
          <Typography variant="body1" align={matchesSM ? 'center' : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowcontainer}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerse
              </Typography>
              <Grid item>
                <img
                  src={ecommerse}
                  style={{ marginLeft: '-2.75em' }}
                  alt="world outline made of dollar signs"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphcontainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            It’s no secret that people like to shop online.
          </Typography>{' '}
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowcontainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="h4"
                gutterBottom
              >
                Outreach
              </Typography>
              <Grid item>
                <img
                  src={outreach}
                  style={{ marginLeft: '-2.75em' }}
                  alt="megaphone"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphcontainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowcontainer}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Enginer <br />
                Optimization
              </Typography>
              <Grid item>
                <img src={seo} style={{ marginLeft: '-2.75em' }} alt="seo" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphcontainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            It’s no secret that people like to shop online.
          </Typography>{' '}
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Calltoaction setValue={setValue} />
      </Grid>
    </Grid>
  );
}

export default Website
