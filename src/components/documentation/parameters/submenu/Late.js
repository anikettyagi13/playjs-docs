import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
import { decomposeValue } from '../../../../utils'

export default function Late() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/> &emsp;late:&emsp;<input type='text' placeholder='late in millisecond' class='late' value='400'/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;250</span>  <br/> &emsp;late:&emsp;400 <br/>})'
  const info =
    "Write the late's value in the input field and click on PLAY NOW to see how to select different targets. "
  useEffect(() => {
    let k = document.getElementsByClassName('late')[0].value

    if (k.length > 0 && play !== '') {
      let obj = decomposeValue(k)
      let value = 0
      if (obj.strings.length > 2) {
        value = k
      } else {
        value = obj.numbers[0]
      }
      Play({
        targets: ['.yellowLate', '.redLate'],
        translateX: 250,
        duration: 2500,
        late: value,
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
          <Typography variant="h3">Late</Typography>
        </Grid>
        <br />
        <br />

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            When you want the same target to animate after some time has passed.
            <br />
            Value passed in the delay parameter is always assumed in
            milliseconds. Default value is 400.
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
        class1={'yellowLate'}
        class2={'redLate'}
      />
    </Grid>
  )
}
