/* eslint-disable no-loop-func */
import React, { createRef, useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import logo from '../../images/logo.png'
import clsx from 'clsx'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { SideBarNavigationAssociated } from '../../Navigation/SideBarNavigationAssociated'
import { Link } from 'react-router-dom'
import { NavigationReference } from '../../Navigation/NavigationRefrence'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
    zIndex: 2,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 2,
    backgroundColor: '#fff',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '62px',
    padding: theme.spacing(0, 1),
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    position: 'fixed',
    height: '100vh',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.2)',
      outline: '1px solid slategrey',
    },
  },
  drawerClose: {
    '@media (max-width:780px)': {
      // eslint-disable-line no-useless-computed-key
      display: 'none',
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: '60px',
    },
  },
  ListItem: {
    height: '50px',
    width: '280px',
  },
  onlyHeight: {
    height: '30px',
    width: '250px',
    margin: 0,
    padding: 0,
    top: '-10px',
    left: '30px',
  },
  typoSmall: {
    fontSize: '14px',
  },
  typoBig: {
    fontSize: '16px',
  },
  checkIfToBeShown: {
    '@media(min-width:1000px)': {
      display: 'none',
    },
  },
}))
const AccordionDetails = withStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)
const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)
const AccordionSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  content: {
    '&$expanded': {
      // margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

export default function SideBar({ handleDrawerClose, open }) {
  const classes = useStyles()
  const theme = useTheme()
  const location = window.location.href.split('-')[1].split('/')[3]
  const [opened, setOpened] = useState(location)
  const [linkTo, setLinkTo] = useState(NavigationReference[opened])
  const linkRef = createRef()
  useEffect(() => {
    linkRef.current.click()
  }, [linkTo])

  function SetLinkAndOpened(open, e) {
    let k = 0
    for (var i in NavigationReference) {
      if (open === i) {
        setOpened(open)
        setLinkTo(NavigationReference[open].index)
        k = 1
        break
      }
    }
    if (k !== 1) {
      e.stopPropagation()
      console.log(open)
      setLinkTo(NavigationReference[opened][open])
    }
  }
  function ALink(navi, i, isChild) {
    return (
      <ListItem
        button
        className={isChild ? classes.onlyHeight : classes.ListItem}
        onClick={(e) => {
          SetLinkAndOpened(i, e)
        }}
      >
        <ListItemIcon>{navi.icon}</ListItemIcon>
        <Typography className={isChild ? classes.typoSmall : classes.typoBig}>
          {i}
        </Typography>
      </ListItem>
    )
  }
  function Navigate(Navigation, isChild = false) {
    const nav = []
    for (let i in Navigation) {
      nav.push(
        <div key={i}>
          {Navigation[i].children ? (
            <ListItem
              // button
              style={{
                left: '-20px',
                width: '320px',
                margin: 0,
                fontSize: '18px',
              }}
            >
              <Accordion
                square
                expanded={opened === i}
                elevation={0}
                onClick={() => {
                  SetLinkAndOpened(i)
                }}
              >
                <AccordionSummary>
                  <ListItemIcon>{Navigation[i].icon}</ListItemIcon>
                  <Typography className={classes.typoBig}>{i}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'grid', paddingBottom: 0 }}>
                  {Navigate(Navigation[i].children, true).map((navi) => {
                    return navi
                  })}
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ) : (
            ALink(Navigation[i], i, isChild)
          )}
        </div>,
      )
    }
    return nav
  }
  const nav = Navigate(SideBarNavigationAssociated)
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      // variant="permanent"
      anchor="left"
      open={open}
    >
      <div className={classes.drawerHeader}>
        <Link to={NavigationReference.home} style={{ margin: 'auto' }}>
          <img
            src={logo}
            style={{ width: '120px', height: '25px' }}
            alt="PlayJs"
          ></img>
        </Link>

        <IconButton
          onClick={handleDrawerClose}
          className={classes.checkIfToBeShown}
        >
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon className={classes.checkIfToBeShown} />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {nav.map((navi) => {
          return navi
        })}
      </List>
      <Link to={linkTo} style={{ display: 'none' }} ref={linkRef} />
    </Drawer>
  )
}
