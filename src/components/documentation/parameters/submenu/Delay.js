import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
import { decomposeValue } from '../../../../utils'

export default function Delay() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/><span>&emsp;scaleY:&emsp;[0.9,1.2]</span> <br/><span>&emsp;scaleX:&emsp;[0.9,1.5]</span> <br/> &emsp;delay:&emsp;<input type='text' placeholder='duration in millisecond' class='delay' value='1000'/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/><span><span>&emsp;scaleY:&emsp;[0.9,1.2]</span> <br/><span>&emsp;scaleX:&emsp;[0.9,1.5]</span> <br/> &emsp;delay:&emsp;400 <br/>})'
  const info =
    'Type delay in the input field and click on PLAY NOW to see how to select different targets. '
  useEffect(() => {
    let k = document.getElementsByClassName('delay')[0].value

    if (k.length > 0 && play !== '') {
      let obj = decomposeValue(k)
      let value = 0
      if (obj.strings.length > 2) {
        value = k
      } else {
        value = obj.numbers[0]
      }
      Play({
        targets: ['.yellowDelay', '.redDelay'],
        translateX: '250px',
        scaleY: [0.9, 1.2],
        scaleX: [0.9, 1.5],
        duration: 2500,
        delay: value,
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
          <Typography variant="h3">Delay</Typography>
        </Grid>
        <br />
        <br />

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            Delay is the time the animation waits before starting.
            <br />
            Value passed in the delay parameter is always assumed in
            milliseconds. Default value is 0.
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
        class1={'yellowDelay'}
        class2={'redDelay'}
      />
    </Grid>
  )
}
