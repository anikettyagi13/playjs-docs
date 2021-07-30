import { Button, Grid } from '@material-ui/core'
import React from 'react'
import PlayGround from './PlayGround'
import Code from './Code'
import Info from './Info'

export default function CodePlayGround({
  code,
  setPlay,
  play,
  info,
  class1,
  class2,
  useSVG,
}) {
  return (
    <Grid container xs={12}>
      <Grid container item xs={12} spacing={2} justifyContent="center">
        <Grid container item xs={12} md={6}>
          <Info info={info} />
        </Grid>
        <Grid container item xs={12} md={6} justifyContent="flex-end">
          <Grid item xs={12} md={3}>
            <Button
              color="primary"
              fullWidth
              variant="outlined"
              onClick={() => setPlay(play + 'a')}
            >
              PLAY NOW
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item md={6} xs={12}>
          <Grid
            container
            item
            className="playground"
            style={{ marginTop: '30px' }}
          >
            <PlayGround class1={class1} class2={class2} useSVG={useSVG} />
          </Grid>
        </Grid>
        <Grid container item md={6} xs={12}>
          <Grid item container className="code">
            <Code codeBlock={code} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
