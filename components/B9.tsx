import React, {useState} from 'react'

export default function B9() {
    const [gender, setGender] = useState<string>(""); 
    
    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }
  return (
    <>
    <h3>Giới tính: {gender}</h3>
    <input
        type="radio"
        name="gender"
        value= "Nam"
        onChange={handleGenderChange}
    />Nam
    <br />
    <input
        type="radio"
        name="gender"
        value="Nữ"
        onChange={handleGenderChange}
    />Nữ
    <br />
    <input
        type="radio"
        name="gender"
        value="Khác"
        onChange={handleGenderChange}
    />Khác
    </>
  )
}
