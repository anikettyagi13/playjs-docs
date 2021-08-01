/* eslint-disable no-useless-escape */
import { Divider, Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'

export default function TargetArrays() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[<input type='text' placeholder='comma seprated strings' class='targetArray' value='.yellow, .red'/>],</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR 1 , CSS SELECTOR 2],</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;translateX:&emsp;250</span> <br/>})'
  const info =
    "Write the classname in the input field (multiple allowed) and click on PLAY NOW to see how to select different targets. Classes-: '.yellow' & '.red' "
  useEffect(() => {
    // const re = new RegExp(/"+'/g)
    let k = document.getElementsByClassName('targetArray')[0].value
    k = k.replace('yellow', 'yellowArray')
    k = k.replace('red', 'redArray')

    if (k.length > 0 && play !== '') {
      Play({
        targets: k.split(','),
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
          <Typography variant="h3">ARRAYS</Typography>
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            Arrays are used as a collection of strings of CSS SELECTORS to
            mention targets.
            <br />
            FOR EG.-['<span className="addBluish">.class</span>', '
            <span className="addBluish">#id</span>', '
            <span className="addBluish">div .class #id</span>']
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
