import { Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CodePlayGround from '../../../Code&PlayGround'
import { play as Play } from '../../../../play.min.js'
import Code from '../../../Code&PlayGround/Code'

export default function TargetStrings() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;'<input type='text' placeholder='write here' value='.red' class='targetString'/>',</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/>})",
  )
  const codeBlock =
    "play({<span>&emsp;targets: &emsp;'CSS SELECTOR HERE',</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/>})"
  const info =
    "Write the classname in the input field and click on PLAY NOW to see the how to select different targets. Classes-: '.yellow' & '.red' "
  useEffect(() => {
    if (
      document.getElementsByClassName('targetString')[0].value.length > 1 &&
      play !== ''
    ) {
      console.log(
        document.querySelectorAll(
          document.getElementsByClassName('targetString')[0].value,
        ),
      )
      Play({
        targets: document.getElementsByClassName('targetString')[0].value,
        translateX: 250,
      })
    }
  }, [play])
  return (
    <Grid container item xs={12} spacing={3}>
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
        spacing={3}
        style={{ marginBottom: '15px' }}
      >
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h3">STRINGS</Typography>
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            STRINGS are used as CSS SELECTORS to mention targets.
            <br />
            FOR EG.- CLASSES (<span className="addBluish">.class</span>), ID (
            <span className="addBluish">#id</span>), SELECTORS (
            <span className="addBluish">div .class #id</span>)
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
        class1={'yellow'}
        class2={'red'}
      />
    </Grid>
  )
}
