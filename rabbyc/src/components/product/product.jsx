import React from 'react'

const Product = ({img, name, link}) => {
  return (
    <a href={link}>
      <img src={img} alt='img'/>
      <p>{name}</p>
    </a>
  )
}

export default Product
