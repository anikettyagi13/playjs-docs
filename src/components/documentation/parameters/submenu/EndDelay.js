import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
import { decomposeValue } from '../../../../utils'

export default function EndDelay() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/>&emsp;backgroundColor:&emsp; 'rgb(0,0,0)'<br/> &emsp;endDelay:&emsp;<input type='text' placeholder='end delay in millisecond' class='enddelay' value='1000'/><br /> &emsp;<span>iteration:&emsp;2<span> <br/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/> &emsp;endDelay:&emsp;1000<br /> &emsp;<span>iteration:&emsp;2<span> <br/>})'
  const info =
    "Write endDelay's value in the input field and click on PLAY NOW to see how to select different targets. "
  useEffect(() => {
    let k = document.getElementsByClassName('enddelay')[0].value

    if (k.length > 0 && play !== '') {
      let obj = decomposeValue(k)
      let value = 0
      if (obj.strings.length > 2) {
        value = k
      } else {
        value = obj.numbers[0]
      }
      Play({
        targets: ['.yellowEDelay', '.redEDelay'],
        translateX: '250px',
        scaleY: [0.9, 1.2],
        scaleX: [0.9, 1.5],
        duration: 2500,
        endDelay: value,
        backgroundColor: 'rgb(0,0,0)',
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
          <Typography variant="h3">End Delay</Typography>
        </Grid>
        <br />
        <br />

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            End Delay is the time the animation waits after ending before
            resuming again.
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
        class1={'yellowEDelay'}
        class2={'redEDelay'}
      />
    </Grid>
  )
}
