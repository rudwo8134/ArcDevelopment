import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

import backarrow from '../assets/backArrow.svg'
import forwardarrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentanimation from '../animations/documentsAnimation/data'
import scaleanimation from '../animations/scaleAnimation/data.json'
import root from '../assets/root.svg'
import automationanimation from '../animations/automationAnimation/data.json'
import Uxanimation from '../animations/uxAnimation/data.js'
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
  itemContainer: {
    maxWidth: '40em',
  },
}));

const CustomerSoftware = (props) => {
  const { setselectedindex, setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentanimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
    const scaleOptions = {
      loop: true,
      autoplay: true,
      animationData: scaleanimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
      const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationanimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
        const UXOptions = {
          loop: true,
          autoplay: true,
          animationData: Uxanimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        };
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
              to="/services"
              onClick={() => setselectedindex(0)}
            >
              <img src={backarrow} alt="Back To Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              Custom Software Development
            </Typography>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Whether we???re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Using regular commercial software leaves you with a lot of stuff
                you don???t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.Arrowcontainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/mobileapps"
              onClick={() => setselectedindex(2)}
            >
              <img src={forwardarrow} alt="forward to ios development page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowcontainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent="space-between"
        className={classes.rowcontainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Digital Documents & data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Whether you???re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: '20em', marginBottom: '20em' }}
        className={classes.rowcontainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={root}
              alt="tree with roots extending out"
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        style={{ marginBottom: '20em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowcontainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Why waste time when you don???t have to?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item md>
            <Lottie
              options={UXOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                A good design that isn???t usable isn???t a good design.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                By prioritizing users and the real ways they interact with
                technology we???re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Calltoaction setValue={setValue} setselectedindex={setselectedindex} />
      </Grid>
    </Grid>
  );
}

export default CustomerSoftware
