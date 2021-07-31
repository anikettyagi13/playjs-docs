import React, { useEffect, useState } from 'react'
import { formatCode } from '../../utils'

export default function Code({ codeBlock, dontFormat }) {
  console.log(codeBlock)
  let [code, setCode] = useState(codeBlock)
  const [reloadCode, setReloadCode] = useState(true)
  useEffect(() => {
    setReloadCode(true)
  }, [])
  useEffect(() => {
    if (!dontFormat) {
      if (code !== '') formatCode(code, setCode)
      setReloadCode(false)
    } else {
      setCode(codeBlock)
      console.log(codeBlock)
      setReloadCode(false)
    }
  }, [code && reloadCode])

  return (
    <p
      className="codeText exceptBlue"
      dangerouslySetInnerHTML={{ __html: code }}
      style={{
        display: 'grid',
        justifySelf: 'center',
        alignSelf: 'center',
        margin: 'auto',
      }}
    ></p>
  )
}
