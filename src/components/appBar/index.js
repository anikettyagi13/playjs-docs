import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import PrimaryAppBar from './PrimaryAppBar'
import SideBar from './SideBar'
import Documentation from '../documentation/Documentation'
import clsx from 'clsx'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#fff',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    '@media(min-width:1000px)': {
      marginLeft: '300px',
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}))

export default function Layout() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(
    window.screen.width > 780 ? true : false,
  )
  if (!window.location.href.split('-')[1].split('/')[2]) {
    window.location.href += '/Targets'
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Container maxWidth={false} disableGutters={true}>
      <div className={classes.root}>
        <CssBaseline />
        <PrimaryAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideBar handleDrawerClose={handleDrawerClose} open={open} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Documentation />
        </main>
      </div>
    </Container>
  )
}
