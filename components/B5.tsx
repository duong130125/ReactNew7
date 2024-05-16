import React, { useState } from 'react'

export default function B5() {
    const [check,setCheck] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.value)
    }
  return (
    <>
    <br />
    <input onChange={handleChange} type="text" />
    <p>{check}</p>
    </>
  )
}
