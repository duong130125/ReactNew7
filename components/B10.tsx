import React, { useState } from 'react'

export default function B10() {
    const [check,setCheck] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.value)
        const isCheck = e.target.checked
        if (isChecked) {
        
            setSelectedHobbies([...check, hobby]);
          } else {

            setSelectedHobbies(check.filter((item) => item !== hobby));
          }
    }
  return (
    <>
    <h3>Sở thích: [{check}]</h3>
    <input type="checkbox" 
    value="Đi Chơi"
    onChange={handleChange}
    />Đi Chơi
    <br />
    <input type="checkbox" 
    value="Code"
    onChange={handleChange}
    />Code
    <br />
    <input type="checkbox" 
    value="Bội lội"
    onChange={handleChange}
    />Bơi lội
    <br />
    <input type="checkbox" 
    value="Đá Bóng"
    onChange={handleChange}
    />Đá Bóng
    </>
  )
}
