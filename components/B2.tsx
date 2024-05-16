import React, { useState } from 'react'
interface Cart {
    id:number
    name:string
    price:number
    quantity:number
}

export default function B2() {
    const [cart,setCart] = useState<Cart>({
            id: 1,
            name: "Coca cola",
            price: 1000,
            quantity:10
    })
  return (
    <>
    <h2>Thông tin sản phẩm</h2>
    <p>Id: {cart.id}</p>
    <p>Name: {cart.name}</p>
    <p>Price: {cart.price} $</p>
    <p>Quanity: {cart.quantity}</p>
    </>
  )
}
