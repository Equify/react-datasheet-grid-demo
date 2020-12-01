import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const Code = ({ code, showText = 'Show code', hideText = 'Hide code', language="javascript", defaultShow = false }) => {
  const [ show, setShow ] = useState(defaultShow)

  if (!show) {
    return (
      <button className='btn' onClick={() => setShow(true)}>
        {showText}
      </button>
    )
  }

  return (
    <>
      <button className='btn' onClick={() => setShow(false)}>
        {hideText}
      </button>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </>
  )
}
