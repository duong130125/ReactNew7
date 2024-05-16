import React, { useState } from 'react'

export default function B3() {
    const [color,setColor] = useState<boolean>(true)
    const handleClick = () => {
        setColor(!color)
    }
  return (
    <>
    <p style={{color: color ? 'black' : 'red'}}>Tiêu đề văn bản</p>
    <button onClick={handleClick}>Thay đổi màu</button>
    </>
  )
}
