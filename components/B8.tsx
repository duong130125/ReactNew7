import React, { useState } from 'react'

export default function B8() {
  const [address,setAddress] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress(e.target.value)
  }
  return (
    <>
    <p>Thành phố: {address}</p>
    <select onChange={handleChange}>
      <option selected>-- Chọn thành phố --</option>
      <option value="Nghệ An">Nghệ An</option>
      <option value="Hà Nội">Hà Nội</option>
      <option value="Đà Nẵng">Đà Nẵng</option>
      <option value="TP. HCM">TP. HCM</option>
      <option value="Lào Cai">Lào Cai</option>
    </select>
    </>
  )
}
