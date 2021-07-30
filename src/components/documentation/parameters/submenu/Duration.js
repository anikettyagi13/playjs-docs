import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
export default function Duration() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;<input type='text' placeholder='duration in millisecond' class='duration' value='1000'/>,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/><span>&emsp;scaleY:&emsp;[0.9,1.2]</span> <br/><span>&emsp;scaleX:&emsp;[0.9,1.5]</span> <br/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/><span><span>&emsp;scaleY:&emsp;[0.9,1.2]</span> <br/><span>&emsp;scaleX:&emsp;[0.9,1.5]</span> <br/>})'
  const info =
    'Type duration in the input field and click on PLAY NOW to see how to select different targets. '
  useEffect(() => {
    let k = document.getElementsByClassName('duration')[0].value
    if (k.length > 0 && play !== '') {
      Play({
        targets: ['.yellowArray', '.redArray'],
        translateX: '250px',
        scaleY: [0.9, 1.2],
        scaleX: [0.9, 1.5],
        duration: k,
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
          <Typography variant="h3">Duration</Typography>
        </Grid>
        <br />
        <br />

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            Duration is the time during which the animation continues.
            <br />
            Value passed in the duration parameter is always assumed in
            milliseconds. Default Value is 1000
            <br />
            FOR EG.-<span className="addBluish">1000</span> is calculated as 1
            second.
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
        class1={'yellowArray'}
        class2={'redArray'}
      />
    </Grid>
  )
}
