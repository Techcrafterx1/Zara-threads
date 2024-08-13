import React from 'react'
import './products.css'
import { Product } from '../../components'
import {img1, img2} from './index'
import { useState } from 'react'

const Products = () => {

    const productList = [
        {
            name:'Bag1',
            price: 100,
            image: {img1},
        },
        {
            name:'Bag2',
            price: 200,
            image: {img2},
        },
        {
            name:'Bag2',
            price: 200,
            image: {img2},
        },
        {
            name:'Bag2',
            price: 200,
            image: {img2},
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState('Bags')

    // let width = parseInt(document.querySelector('.products_container').computedStyleMap())

    const handleCategoryClick = (category) => {
      setSelectedCategory(category)

      if (category === 'Bags') {
          document.querySelector('#lgBox').style.transform = 'translateX(0%)'
      }
      if (category === 'Jewelries') {
          document.querySelector('#lgBox').style.transform = 'translateX(-33%)'
      }
      
      if (category === 'Shoes') {
          document.querySelector('#lgBox').style.transform = 'translateX(-67%)'
      }
    }


    return (
    <section className='products'>
        <h2>Catergories</h2>
        <ul className='products_menu'>
        <li
          className={selectedCategory === 'Bags' ? 'products_menu_item active' : 'products_menu_item'}
          onClick={() => handleCategoryClick('Bags')}
        >
          Bags
        </li>
        <li
          className={selectedCategory === 'Jewelries' ? 'products_menu_item active' : 'products_menu_item'}
          onClick={() => handleCategoryClick('Jewelries')}
        >
          Jewelries
        </li>
        <li
          className={selectedCategory === 'Shoes' ? 'products_menu_item active' : 'products_menu_item'}
          onClick={() => handleCategoryClick('Shoes')}
        >
          Shoes
        </li>
        </ul>
        <div className='products_container'>
        <div id='lgBox'>
        <div className='products_container-bags'>
                {productList.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
            <div className='products_container-jewelries'>
                {productList.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
            <div className='products_container-shoes'>
                {productList.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
            
        </div>
    </section>
  )
}

export default Products
