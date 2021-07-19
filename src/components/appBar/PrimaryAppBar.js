import React from 'react'
import clsx from 'clsx'
import { makeStyles, alpha } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import RightSide from './RightSide'
const drawerWidth = 300
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fff',
    border: 0,
  },
  appBarShift: {
    zIndex: 2,
    transition: theme.transitions.create(['margin', 'width', 'zIndex'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.55),
    },
    // marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    transition: theme.transitions.create(['margin', 'width', 'position'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    display: 'flex',
    left: '50%',
    transform: 'translate(-100%, 0)',
    justifySelf: 'center',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.2, 1, 1.2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}))

export default function PrimaryAppBar({ open, handleDrawerOpen }) {
  const classes = useStyles()
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      elevation={1}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <ChevronRightIcon />
        </IconButton>
        {/* <Grid item> */}
        <div
          // className={classes.search}
          className={open ? classes.search : classes.search}
        >
          <div className={classes.searchIcon}>
            <SearchIcon color="secondary" />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        {/* </Grid> */}
        <div className={classes.grow}></div>
        <RightSide />
      </Toolbar>
    </AppBar>
  )
}
