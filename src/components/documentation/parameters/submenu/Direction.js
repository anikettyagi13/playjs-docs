import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
import { decomposeValue } from '../../../../utils'

export default function Direction() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/>&emsp;iteration:&emsp; 2<br/> &emsp;direction:&emsp;<select class='direction'><option value='normal'>normal</option><option value='alternate'>alternate</option></select><br /> })",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/> &emsp;direction:&emsp;normal<br /> })'
  const info =
    "Write endDelay's value in the input field and click on PLAY NOW to see how to select different targets. "
  useEffect(() => {
    let k = document.getElementsByClassName('direction')[0].value
    console.log(k, typeof k)
    if (k.length > 0 && play !== '') {
      Play({
        targets: ['.yellowDirection', '.redDirection'],
        translateX: '250px',
        duration: 2500,
        late: 0,
        direction: k,
        iteration: 2,
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
          <Typography variant="h3">Direction</Typography>
        </Grid>
        <br />
        <br />

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            Direction is the way the animation proceeds
            <br />
            Only Two options with directions are available.
            <br />
            AVAILABLE OPTIONS <span className="addBluish">normal</span>{' '}
            <span className="addBluish">alternate</span>
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
        class1={'yellowDirection'}
        class2={'redDirection'}
      />
    </Grid>
  )
}
