import React from 'react'
import { Avatar, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import history from '../assets/history.svg'
import founder from '../assets/founder2.png'
import puppy from '../assets/puppy.svg'
import yearbook from '../assets/yearbook.svg'
import { useMediaQuery } from '@material-ui/core';
import Calltoaction from './ui/Calltoaction';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5em',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatarcontent:{
    width: "25em",
    height: "25em",
   [theme.breakpoints.down("sm")]:{
     height: "20em",
     width: "20em",
     maxHeight:300,
     maxWidth:300
   }
  }
}));

const Aboutus = (props) => {
  const classes =useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ?"1em":'2em' }}>
        <Typography align={matchesMD ? 'center' : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          align="center"
          variant="h4"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent="space-around"
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                paragraph
                variant="body1"
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                paragraph
                variant="body1"
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                paragraph
                variant="body1"
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                paragraph
                variant="body1"
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container lg justifyContent="center">
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            ></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Eric. Shin, Founer
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Smart Front-End Developer
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="founder"
            src={founder}
            className={classes.avatarcontent}
          ></Avatar>
        </Grid>
        <Hidden lgUp>
          <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
            <Typography variant="body1" align="center" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Hidden>
        <Grid item container justifyContent={matchesMD ? 'center' : undefined}>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="img"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              ></img>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my sopomore year book
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img
                src={puppy}
                alt="puppy"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              ></img>
            </Grid>
            <Grid item>
              <Typography variant="caption">my cute puppy</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Calltoaction
          setValue={props.setValue}
        />
      </Grid>
    </Grid>
  );
}

export default Aboutus
