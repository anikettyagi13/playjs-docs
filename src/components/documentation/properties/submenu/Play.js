import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Plays } from '../../../../play.min.js'

export default function Play() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    'play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;width:&emsp;[50, 200]</span>  <br/> &emsp;play:&emsp;()=>{<br/>&emsp;&emsp; return t>1000 && t<2000 <br/> &emsp;}<br/>})',
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/>&emsp;play:&emsp;false <br/>})'
  const info =
    'Function is written for you. You just have to click on PLAY NOW. :D'
  useEffect(() => {
    if (play !== '') {
      Plays({
        targets: ['.yellowPlay', '.redPlay'],
        width: [50, 200],
        duration: 2500,
        play: (t) => {
          return (t > 1000 && t < 2000) || t > 2200
        },
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
          <Typography variant="h3">Play</Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            Play is used to pause/play the animation when required.
            <br />
            Play needs true or false to play and pause respectively.
            <br />
            When using functions in play, you are provided with the current time
            of the animation as a parameter, you could do some calculations
            based upon that time provided to calculate when the animations
            should pause and when to play.
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
        class1={'yellowPlay'}
        class2={'redPlay'}
      />
    </Grid>
  )
}
