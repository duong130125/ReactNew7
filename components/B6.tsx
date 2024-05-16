import React, { useState } from 'react'

export default function B6() {
    const [number,setNumber] = useState<number>(0)

    const handleClick = () => {
        setNumber(number+1)
    }
  return (
    <>
    <p>Bạn đã click {number} lần</p>
    <button onClick={handleClick}>Click</button>
    </>
  )
}
