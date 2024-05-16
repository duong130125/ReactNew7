import React, { useState } from 'react'

export default function B1() {
    const [name, setName] = useState<string>("Nguyễn Đình Dương")
  return (
    <>
    <h1>Họ và tên: {name}</h1>
    </>
  )
}
