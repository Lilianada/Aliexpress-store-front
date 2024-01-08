import React from 'react';
import './style.css'; 

export default function ProductsList() {
  return (
    <section className="product_section">
        <ul className="product_list">
            {/* {
                products.map((product) => (
                    <li className="product">
                    <a href={`/product/${product.slug}`} className='product_name'>{product.name}</a>
                    </li>
                ))
            } */}
        </ul>
    </section>
  )
}
