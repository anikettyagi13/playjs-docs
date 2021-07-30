import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
import { decomposeValue } from '../../../../utils'

export default function Iteration() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;width:&emsp;200px</span>  <br/> &emsp;iteration:&emsp;<input type='text' placeholder='iteration count' class='iteration' value='1'/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/>&emsp;iteration:&emsp;true <br/>})'
  const info =
    "Write Iteration's value in the input field and click on PLAY NOW to see how to select different targets. "
  useEffect(() => {
    let k = document.getElementsByClassName('iteration')[0].value
    if (k.length > 0 && play !== '') {
      let obj = decomposeValue(k)
      let value = 0
      if (obj.strings.length > 2) {
        value = k
      } else {
        value = obj.numbers[0]
      }
      if (k === 'true') {
        value = true
      }
      Play({
        targets: ['.yellowIteration', '.redIteration'],
        width: [0, 200],
        duration: 2500,
        iteration: value,
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
          <Typography variant="h3">Iteration</Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            Iteration is the count of how many times the animation would run .
            <br />
            For a loop use the keyword true. Value could range from 1 to
            infinity, Default Value is 0.
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
        class1={'yellowIteration'}
        class2={'redIteration'}
      />
    </Grid>
  )
}
