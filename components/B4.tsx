import React, { useState } from 'react'

export default function B4() {
    const [check,setCheck] = useState<boolean>(true)
    const handleClick = () => {
        setCheck(!check)
    }
  return (
    <>
    <br />
    <button onClick={handleClick}>{check ? 'Hiện' : 'Ẩn'}</button>
    {check ? null : <p>Hello, Xin chào</p>}
    </>
  )
}
