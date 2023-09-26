import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Calendar = () => {
  const url = 'https://dummyjson.com/products'
  const [data, setData] = useState<any>()
  const [cart, setCart] = useState<any>('')
  const getData = async () => {
    const response = await axios.get(url)
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAddtoCart = (product: any) => {
    const productIndex = cart.findIndex((item: any) => item.id === product.id)
    if (productIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }])
    } else {
      const updatedCart = [...cart]
      updatedCart[productIndex].quantity += 1
    }
  }

  return (
    <div>
      <div>product lisiti</div>
      {data &&
        data.length !== 0 &&
        data !== undefined &&
        data?.map((item: any, index: any) => {
          return (
            <div className="flex">
              <p>{item.title}</p>
              <button onClick={() => handleAddtoCart(item)}>Add to Cart</button>
            </div>
          )
        })}

      <div>
        <h3>Cart</h3>
        {cart &&
          cart.length !== 0 &&
          cart !== undefined &&
          cart?.map((item: any, index: any) => {
            return (
              <div className="flex">
                <p>{item.title}</p>
                <button>{item?.quantity}</button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Calendar
