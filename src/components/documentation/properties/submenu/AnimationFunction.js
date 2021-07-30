import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Plays } from '../../../../play.min.js'

export default function AnimationFunction() {
  const [play, setPlay] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets: &emsp;[.yellow, .red],</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;width:&emsp;[50, 200]</span>  <br/> &emsp;animationFunction:&emsp;<select class='animation'><option value='ease-in-out'>ease-in-out</option><option value='ease-in'>ease-in</option><option value='ease-out'>ease-out</option><option value='ease-in-quad'>ease-in-quad</option><option value='ease-out-quad'>ease-out-quad</option><option value='ease-in-out-quad'>ease-in-out-quad</option><option value='ease-in-circular'>ease-in-circular</option><option value='ease-out-circular'>ease-out-circular</option><option value='ease-in-out-circular'>ease-in-out-circular</option><option value='ease-in-cubic'>ease-in-cubic</option><option value='ease-out-cubic'>ease-out-cubic</option><option value='ease-in-out-cubic'>ease-in-out-cubic</option><option value='ease-in-sine'>ease-in-sine</option><option value='ease-out-sine'>ease-out-sine</option><option value='ease-in-out-sine'>ease-in-out-sine</option><option value='ease-in-expo'>ease-in-expo</option><option value='ease-out-expo'>ease-out-expo</option><option value='ease-in-out-expo'>ease-in-out-expo</option><option value='ease-linear'>ease-linear</option></select><br/>})",
  )
  const codeBlock =
    'play({<span>&emsp;targets: &emsp;[CSS SELECTOR],</span> <br/><span>&emsp;duration:&emsp;5000,</span><br/><span>&emsp;translateX:&emsp;100%</span> <br/>&emsp;animationFunction:&emsp;ease-out <br/>})'
  const info =
    'Select the type of animation function you want and just click on PLAY NOW to view the animation. :D'
  useEffect(() => {
    let k = document.getElementsByClassName('animation')[0].value

    if (k.length > 0 && play !== '') {
      Plays({
        targets: ['.yellowAnimation', '.redAnimation'],
        width: [50, 200],
        duration: 2500,
        animationFunction: k,
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
          <Typography variant="h3">Animation Function</Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="p">
            PLAY JS gives you a collection of animation functions to choose
            from.
            <br />
            Available options includes
            <br />
            <span className="addBluish"> ease-in-out </span>,
            <span className="addBluish"> ease-in-out-elastic</span>,
            <span className="addBluish"> ease-in </span>,
            <span className="addBluish"> ease-out</span>,
            <span className="addBluish"> ease-in-quad</span>,
            <span className="addBluish"> ease-out-quad</span>,
            <span className="addBluish"> ease-in-out-quad</span>,
            <span className="addBluish"> ease-in-circular</span>,
            <span className="addBluish"> ease-out-circular</span>,
            <span className="addBluish"> ease-in-out-circular</span>,
            <span className="addBluish"> ease-in-cubic</span>,
            <span className="addBluish"> ease-out-cubic</span>,
            <span className="addBluish"> ease-in-out-cubic</span>,
            <span className="addBluish"> ease-in-sine</span>,
            <span className="addBluish"> ease-out-sine</span>,
            <span className="addBluish"> ease-in-out-sine</span>,
            <span className="addBluish"> ease-in-expo</span>,
            <span className="addBluish"> ease-out-expo</span>,
            <span className="addBluish"> ease-in-out-expo</span>,
            <span className="addBluish"> ease-linear</span>
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
        class1={'yellowAnimation'}
        class2={'redAnimation'}
      />
    </Grid>
  )
}
