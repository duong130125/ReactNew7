import React, { useState } from 'react';

export default function B10() {
  const [check, setCheck] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheck([...check, value]);
    } else {
      setCheck(check.filter(item => item !== value));
    }
  };

  return (
    <>
    <p>Sở thích: {JSON.stringify(check)}</p>
      <input
        type="checkbox"
        value="Đi chơi"
        checked={check.includes('Đi chơi')}
        onChange={handleCheckboxChange}
      />
      Đi chơi
      <br />     
      <input
        type="checkbox"
        value="Code"
        checked={check.includes('Code')}
        onChange={handleCheckboxChange}
      />
      Code
      <br />
      <input
        type="checkbox"
        value="Bơi lội"
        checked={check.includes('Bơi lội')}
        onChange={handleCheckboxChange}
      />
      Bơi lội
      <br />
      <input
        type="checkbox"
        value="Đá Bóng"
        checked={check.includes('Đá Bóng')}
        onChange={handleCheckboxChange}
      />
      Đá Bóng
    </>
  );
}