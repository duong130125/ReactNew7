import React, { useState } from 'react'

export default function B7() {
    const [text,setText] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value.length)
    }

  return (
    <>
    <textarea  id="" onChange={handleChange}>

    </textarea>
    <p>Số ký tự: {text}</p>
    </>
  )
}
