import React,{useState} from 'react'
import { Button, Grid, makeStyles, TextField, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import background from '../assets/background.jpg'
import mobilebackground from '../assets/mobileBackground.jpg'
import Phoneicon from '../assets/phone.svg'
import Emailicon from '../assets/email.svg'
import Airplane from '../assets/send.svg'
import ButtonArrow from './ui/ButtonArrow';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobilebackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnbutton: {
    ...theme.typography.learnbutton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  Message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendbutton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = (props) => {
  const {setValue} = props
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [message,setmessage] = useState("")
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? '5em' : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue, fontStyle: '1rem' }}
                align={matchesMD ? 'center' : undefined}
              >
                We're wating.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={Phoneicon}
                  alt="phone"
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid
                item
                variant="body1"
                style={{ color: theme.palette.common.blue, fontStyle: '1rem' }}
              >
                (647) 530-8134
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={Emailicon}
                  alt="email"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid
                item
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                rudwo8134@gmail.com
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setname(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={(event) => setphone(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                inputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                fullWidth
                value={message}
                id="message"
                onChange={(event) => setmessage(event.target.value)}
                className={classes.Message}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: '2em' }}
            >
              <Button variant="contained" className={classes.sendbutton}>
                Send Message
                <img
                  src={Airplane}
                  alt="send icon"
                  style={{ marginLeft: '1em' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? 'column' : 'row'}
        lg={8}
        xl={9}
        alignItems="center"
        justifyContent={matchesMD ? 'center' : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: '1.25em' }}
                align={matchesMD ? 'center' : undefined}
              >
                Take advantage of the 21st Century
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesMD ? 'center' : undefined}
              >
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnbutton}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact
