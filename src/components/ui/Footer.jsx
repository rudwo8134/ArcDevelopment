import React from 'react'
import { Grid, Hidden, makeStyles } from '@material-ui/core'
import footeradorment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adroment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  Maincontainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75em',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  griditem: {
    margin: '3em',
  },
  icon: {
    height: '2.5em',
    width: '2.5em',
     [theme.breakpoints.down('md')]:{
      height: "4em",
      width: "4em"
    },
    [theme.breakpoints.down('xs')]:{
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialcontainer:{
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down('xs')]:{
      right:"0.6em"
    }
  }
}));

const Footer = (props) => {
  const {setValue,setselectedindex} = props
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          justifyContent="center"
          container
          className={classes.Maincontainer}
        >
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(0)}
                component={Link}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setselectedindex(0);
                }}
                component={Link}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setselectedindex(1);
                }}
              >
                Custom Software Developement
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setselectedindex(2);
                }}
              >
                Mobile App Developmnet
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setselectedindex(3);
                }}
                component={Link}
                to="/websites"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Vison
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="footerleftsideimage"
        src={footeradorment}
        className={classes.adroment}
      />
      <Grid container justifyContent="flex-end" spacing={2} className={classes.socialcontainer}>
        <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img src={facebook} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img src={twitter} alt="twitter" className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img src={instagram} alt="instagram" className={classes.icon}/>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer
