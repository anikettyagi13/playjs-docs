import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'

export default function WhenVisible() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;width:&emsp;200px</span>  <br/> &emsp;whenVisible:&emsp;<select class='whenV'><option value='true'>true</option><option value='false'>false</option></select><br/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/>&emsp;whenVisible:&emsp;true <br/>})'
  const info =
    "Select when visible's value from options in the input field and click on PLAY NOW to see how to select different targets. "
  useEffect(() => {
    let k = document.getElementsByClassName('whenV')[0].value
    if (k.length > 0 && play !== '') {
      Play({
        targets: ['.yellowWhenV', '.redWhenV'],
        width: [0, 200],
        duration: 2500,
        whenVisible: k === 'true' ? true : false,
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
          <Typography variant="h3">When Visible</Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            When Visible is the value that is responsible if the animation
            should start only <em>when visible</em> on the screen.
            <br />
            Only two options are available the keywords true and false. Default
            value is true.
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
        class1={'yellowWhenV'}
        class2={'redWhenV'}
      />
    </Grid>
  )
}
