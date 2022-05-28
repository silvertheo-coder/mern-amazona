import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
  // useParams is a react-router-dom hook and gets back the param from the url
  // in this case the '/product/:slug'
  const params = useParams()
  const { slug } = params

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}

export default ProductScreen
