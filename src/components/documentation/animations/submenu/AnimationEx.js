import { Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { NavigationReference } from '../../../../Navigation/NavigationRefrence'
import CodePlayGround from '../../../Code&PlayGround'
import Code from '../../../Code&PlayGround/Code'
import { play as Play } from '../../../../play.min.js'
import { decomposeValue } from '../../../../utils'
import { Link } from 'react-router-dom'

export default function AnimationEx() {
  const [play, setPlay] = useState('')
  const [play2, setPlay2] = useState('')
  const [code] = useState(
    "play({<span>&emsp;targets:['.red','.yellow'] &emsp;,</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;width:&emsp;'<input type='text' placeholder='write here' value='200px' class='widthString'/>'</span> <br/>})",
  )
  const codeBlock =
    "play({<span>&emsp;targets: &emsp;'CSS SELECTOR HERE',</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;width:&emsp;250</span> <br/>})"
  const info =
    'In this example we are using Width to show the animations. Write the final width of the blocks. Initial width of the blocks is 50px so 200% would be 100px. For eg. 100, 100px, 100%'
  const [code2] = useState(
    "play({<span>&emsp;targets:['.red','.yellow'] &emsp;,</span> <br/><span>&emsp;duration:&emsp;2500,</span><br/><span>&emsp;width:&emsp;[<input type='text' placeholder='write here' value='100%, 400% ' class='widthArray'/>]</span> <br/>})",
  )
  const codeBlock2 =
    "play({<span>&emsp;targets: &emsp;'CSS SELECTOR HERE',</span> <br/><span>&emsp;duration:&emsp;1000,</span><br/><span>&emsp;width:&emsp;[250, 500]</span> <br/>})"
  const info2 =
    'In this example we are using Width to show the animations. Write the final width of the blocks. Initial width of the blocks is 50px so 200% would be 100px. For eg. [100,200], [100px,200px], [100%,200%]'

  useEffect(() => {
    if (
      document.getElementsByClassName('widthString')[0].value.length > 1 &&
      play !== ''
    ) {
      const obj = decomposeValue(
        document.getElementsByClassName('widthString')[0].value,
      )
      console.log(obj)
      Play({
        targets: ['.red', '.yellow'],
        late: 0,
        duration: 2500,
        width:
          obj.strings[1] === ''
            ? obj.numbers[0]
            : document.getElementsByClassName('widthString')[0].value,
      })
    }
  }, [play])
  useEffect(() => {
    console.log(document.getElementsByClassName('widthArray'))
    let k = document.getElementsByClassName('widthArray')[0].value
    if (k.length > 1 && play2 !== '') {
      Play({
        targets: ['.redArray', '.yellowArray'],
        duration: 2500,
        late: 0,
        width: k.split(','),
      })
    }
  }, [play2])
  function smoothScrollTo(target) {
    document.querySelector(target).scrollIntoView({
      behaviour: 'smooth',
    })
  }
  return (
    <Grid container xs={12}>
      <Grid
        container
        spacing={3}
        item
        xs={12}
        justifyContent="center"
        // style={{ textAlign: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="h1">ANIMATIONS</Typography>
        </Grid>
        {/* <Divider /> */}
        <Grid item xs={12}>
          <Typography variant="h3">
            {' '}
            We give a wide range of Animations for you to select from and use
            what that suits best to you.
            <br /> To see the list of animations available{' '}
            <Link
              to={NavigationReference.Animations['Available Animations']}
              style={{ color: '#0EDA3B' }}
            >
              CLICK HERE
            </Link>
          </Typography>
        </Grid>
        {/* <br /> */}
      </Grid>

      <Grid container xs={12} item id="Width" style={{ marginBottom: '20px' }}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <br />

            <Divider
              orientation="vertical"
              style={{ width: '100%', height: '1px' }}
            />
            <br />
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            spacing={3}
            style={{ marginBottom: '15px' }}
          >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="h3">HOW TO USE - Strings/Numbers</Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="p">
                Animations are used to change a particular property of the{' '}
                <Link
                  style={{ color: '#0EDA3B' }}
                  to={NavigationReference['Targets'].index}
                >
                  Target
                </Link>
                <br />
                NUMBERS OR STRINGS. Strings could have units as px and %. Our
                team is working on other units as well. Default Number is
                considered as px in most cases FOR EG.- 100, 200, 500px, 300px,
                50%, 20% .
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
          <Grid
            container
            item
            justifyContent="center"
            spacing={3}
            style={{ marginBottom: '15px' }}
            id="WidthArray"
          >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h3">HOW TO USE - Arrays</Typography>
              </Grid>
              <Typography variant="p">
                <br />
                Array of Numbers or Strings. 1st value is beginning state of the
                target and 2nd is the end state of the Target. Keep in mind use
                Strings could have units as px and % . Our team is working on
                other units as well. FOR EG.- [100, 200], [500px, 300px], [50%,
                20%] .
              </Typography>
            </Grid>
            <Grid className="code info">
              <Code codeBlock={codeBlock2}></Code>
            </Grid>
          </Grid>
          <CodePlayGround
            code={code2}
            setPlay={setPlay2}
            play={play2}
            info={info2}
            class1={'yellowArray'}
            class2={'redArray'}
          />

          {/* <Link></Link> */}
        </Grid>
      </Grid>
      <Grid container xs={12} item id="Arrays">
        {/* <TargetArrays /> */}
      </Grid>
      <br />
      <br />
      <Grid container item justifyContent="flex-end">
        <Grid item justifyContent="flex-end">
          <Typography variant="h6">NEXT</Typography>
          <Typography variant="h6">
            <Link
              to={NavigationReference.Animations['Available Animations']}
              style={{ color: '#0EDA3B', textAlign: 'right', width: '100%' }}
            >
              Available Animations&rarr;
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
