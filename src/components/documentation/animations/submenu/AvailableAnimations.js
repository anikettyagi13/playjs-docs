import { Divider, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { NavigationReference } from '../../../../Navigation/NavigationRefrence'
import { Link } from 'react-router-dom'
import AccordionTable from '../../../../TableUtils'

export default function AvailableAnimations() {
  const rows = [
    {
      title: 'width',
      shortSummary: 'Change Width of Target',
      summary: 'Used to change Width of the target in a cool amazing way.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are px and %.  Use only one type of unit in one animation.',
    },
    {
      title: 'height',
      shortSummary: 'Change Height of Target',
      summary: 'Used to change Height of the target in a stunning pattern.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are px and %.  Use only one type of unit in one animation',
    },
    {
      title: 'translateX',
      shortSummary: 'Move target along X-axis',
      summary:
        'translateX is used to repositions an element horizontally on the 2D plane, along the X-axis',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are px and %.  Use only one type of unit in one animation',
    },
    {
      title: 'translateY',
      shortSummary: 'Move target along Y-axis',
      summary:
        'translateY is used to repositions an element horizontally on the 2D plane, along the Y-axis',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are px and %.  Use only one type of unit in one animation',
    },
    {
      title: 'translateZ',
      shortSummary: 'Move target along Z-axis',
      summary:
        'translateZ is used to repositions an element horizontally on the 3D plane, along the Z-axis',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are px and %.  Use only one type of unit in one animation',
    },
    {
      title: 'rotateX',
      shortSummary: 'Rotate target along X-axis',
      summary:
        'rotateX is a transformation that rotates an element around the horizontal axis without deforming it.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are deg. Use only one type of unit in one animation.',
    },
    {
      title: 'rotateY',
      shortSummary: 'Rotate target along Y-axis',
      summary:
        'rotateY is a transformation that rotates an element around the verticle axis without deforming it.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are deg. Use only one type of unit in one animation.',
    },
    {
      title: 'rotateZ',
      shortSummary: 'Rotate target along Z-axis',
      summary:
        'rotateZ is a transformation that rotates an element around the z-axis without deforming it.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are deg. Use only one type of unit in one animation.',
    },
    {
      title: 'scaleX',
      shortSummary: 'increases or decreases the width of an target',
      summary:
        'scaleX is a  transformation that resizes an element along the x-axis (horizontally).',
      units: 'We could use Numbers or Array of Numbers.',
    },
    {
      title: 'scaleY',
      shortSummary: 'increases or decreases the height of an target',
      summary:
        'scaleX is a  transformation that resizes an element along the y-axis (vertically).',
      units: 'We could use Numbers or Array of Numbers.',
    },
    {
      title: 'skewX',
      shortSummary: 'skews an element along the X-axis',
      summary:
        'skewX defines a transformation that skews an element in the horizontal direction on the 2D plane.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are deg. Use only one type of unit in one animation.',
    },
    {
      title: 'skewY',
      shortSummary: 'skews an element along the Y-axis',
      summary:
        'skewY defines a transformation that skews an element in the vertical direction on the 2D plane.',
      units:
        'We could use Numbers/Strings or Array of Numbers/Strings. Units acceptable are deg. Use only one type of unit in one animation.',
    },
    {
      title: 'opacity',
      shortSummary: 'sets the opacity level for an target.',
      summary:
        'The opacity-level describes the transparency-level, where 1 is not transparent at all, 0.5 is 50% see-through, and 0 is completely transparent.',
      units: 'We could use Numbers or Array of Numbers.',
    },
    {
      title: 'backgroundColor',
      shortSummary: 'sets the background color of an target.',
      summary:
        'The background of an element is the total size of the element, including padding and border (but not the margin) and set background color.',
      units:
        'We could use String or Array of Strings. We always use the rgb format for background color. eg-: rgb(255,255,255)',
    },
    {
      title: 'borderRadius',
      shortSummary: "the radius of the target's corners.",
      summary: 'This property allows you to add rounded corners to targets! ',
      units:
        'We could use Number/String or Array of Numbers/Strings. Units acceptable are px and %.  Use only one type of unit in one animation. use like-: borderRadius:[0, 20]',
    },
  ]
  return (
    <Grid container item xs={12} style={{ overflowX: 'hidden' }}>
      <Grid
        container
        spacing={3}
        item
        xs={12}
        justifyContent="center"
        // style={{ textAlign: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="h1">Available Animations</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            {' '}
            We give a wide range of Animations for you to select from and use
            what that suits best to you.
            <br />
            <br />
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              To see the How to Use these animations{' '}
              <Link
                to={NavigationReference.Animations['How To Use']}
                style={{ color: '#0EDA3B' }}
              >
                CLICK HERE
              </Link>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <br />

        <Divider
          orientation="vertical"
          style={{ width: '100%', height: '1px' }}
        />
        <br />
      </Grid>
      <Grid item xs={12}>
        <AccordionTable rows={rows} />
      </Grid>
    </Grid>
  )
}
