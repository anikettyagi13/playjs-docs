import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Plays } from '../../../../play.min.js'

export default function SVGMORPHING() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    'play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;width:&emsp;[50, 200]</span>   <br/><span>&emsp;direction:&emsp;alternate<span><br/><span>&emsp;iteration:&emsp;2<span><br/> &emsp;d:&emsp;M0 0L260 121.558L0 240L77 121.558L0 0Z<br/>})',
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/>&emsp;d:&emsp;"path value"<br/> &emsp;whenVisible:&emsp;false <br/>})'
  const info = 'Click on PLAY NOW to view the animation. :D'
  useEffect(() => {
    if (play !== '') {
      Plays({
        targets: '.yellowSVG',
        duration: 2500,
        whenVisible: false,
        d: 'M0 0L260 121.558L0 240L77 121.558L0 0Z',
        direction: 'alternate',
        iteration: 2,
        late: 0,
      })
    }
  }, [play])
  return (
    <Grid
      container
      item
      xs={12}
      style={{ marginBotton: '20px', marginTop: '15px' }}
    >
      <Grid item xs={12}>
        <Divider
          orientation="vertical"
          style={{ width: '100%', height: '1px' }}
        />
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        style={{ marginBottom: '15px', marginTop: '15px' }}
      >
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h3">SVG Morphing</Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            SVG MORPHING is used to change the shape of the svg.
            <br />
            ALWAYS set whenVisible to false.
            <br />
            pass the string on the parameter d.
          </Typography>
        </Grid>
        <Grid className="code info">
          <Code codeBlock={codeBlock}></Code>
        </Grid>
      </Grid>
      <CodePlayGround
        code={code}
        setPlay={setPlay}
        play={play}
        info={info}
        class1={'yellowSVG'}
        class2={'redAnimation'}
        useSVG={true}
      />
    </Grid>
  )
}
