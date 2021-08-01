import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { NavigationReference } from './Navigation/NavigationRefrence'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default function AccordionTable(props) {
  const rows = props.rows
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(
    rows[0] ? rows[0].title : false,
  )

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      {rows.map((row) => {
        return (
          <Accordion
            expanded={expanded === row.title}
            onChange={handleChange(row.title)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{row.title}</Typography>
              <Typography className={classes.secondaryHeading}>
                {row.shortSummary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item xs={12}>
                <Typography>{row.summary}</Typography>
                <br />
                <Typography variant="subtitle1">{row.units}</Typography>
                <br />
                <Typography>
                  <Link
                    style={{ color: '#0EDA3B' }}
                    to={NavigationReference.Animations['How To Use']}
                  >
                    Click Here To See How To Use
                  </Link>
                </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
