import React, { useState, useEffect } from 'react'
import { AppBar, Button, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import { SwipeableDrawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    ...theme.typography.estimate,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawericoncontainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawericon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  draweritem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: '0.7',
  },
  drawerestimate: {
    backgroundColor: theme.palette.common.orange,
  },
  draweritemselected: {
    '&.MuiListItemText-root': {
      opacity: '1',
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));



const Header = (props) => {
  const { value, setValue, selectedindex, setselectedindex } = props;
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down(
    "md"
  ))
  const classes = useStyles()
  const [openDrawer, setopenDrawer] = useState(false)
 
  const [anchorEl,setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)


  const Clickhandler = (e, newValue) =>{
    setValue(newValue);
  }

  const handleclick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  
  const handleclose =(e)=>{
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOption = [
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      selectedindex: 0,
    },
    {
      name: 'Custom Software Developement',
      link: '/customsoftware',
      activeIndex: 1,
      selectedindex: 1,
    },
    {
      name: 'IOS/Android Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedindex: 2,
    },
    {
      name: '  Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedindex: 3,
    },
  ];

  const handleMenuItemClick = (e,i)=>{
    setAnchorEl(null)
    setOpenMenu(false)
    setselectedindex(i)

  }

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Serives',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      airahaspopup: anchorEl ? 'true' : undefined,
      onMouseover: (e) => handleclick(e),
    },
    { name: 'Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ];

  useEffect(()=>{
    [...menuOption, ...routes].forEach(route=>{
      switch(window.location.pathname){
        case `${route.link}`:
          if(value !== route.activeIndex){
            setValue(route.activeIndex)
            if(route.selectedindex && route.selectedindex !== selectedindex){
              setselectedindex(route.selectedindex)
            }
          }
          break;
          default:
            break;
        }
      })

    
  },[selectedindex,routes,value,menuOption])

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={Clickhandler}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route,index)=>{
          return (
            <Tab
            key={`${route}${index}`}
              className={classes.tab}
              component={Link}
              to={route.link}
              label={route.name}
              aria-owns={route.ariaOwns}
              aria-haspopup={route.airahaspopup}
              onMouseOver={route.onMouseover}
            />
          );
        })}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleclose}
        MenuListProps={{ onMouseLeave: handleclose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{zIndex:1302}}
      >
        {menuOption.map((option, i) => {
          return (
            <MenuItem
              key={`${option}${i}`}
              component={Link}
              to={option.link}
              classes={{ root: classes.menuItem }}
              onClick={(e) => {
                handleMenuItemClick(e, i);
                setValue(1);
                handleclose();
              }}
              selected={i === selectedindex && value === 1}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        onOpen={() => setopenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((route)=>{
            return (
              <ListItem
                key={`${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                to={route.link}
                selected={value === route.activeIndex}
                onClick={() => {
                  setopenDrawer(false);
                  setValue(route.activeIndex);
                }}
                classes={{selected: classes.draweritemselected}}
              >
                <ListItemText
                  className={classes.draweritem}
                  disableTypography
                >
                  {route.name}
                </ListItemText>
              </ListItem>
            );
          })}
          <ListItem
            onClick={() => {
              setopenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{root: classes.drawerestimate, selected:classes.draweritemselected}}
          >
            <ListItemText
              className={classes.draweritem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawericoncontainer}
        onClick={() => setopenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawericon}></MenuIcon>
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters={true}>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} alt="Company logo" className={classes.logo} />
            </Button>
            {matches ? drawer :  tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header
