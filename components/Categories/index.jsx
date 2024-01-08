import React from 'react';
import './style.scss';

const categories = [
  {
    name: 'Activewear',
    slug: 'activewear',
  },
  {
    name: 'Clothing',
    slug: 'clothing',
  },
  {
    name: 'Content Creation Essentials',
    slug: 'content-creation-essentials',
  },
  {
    name: 'Home Decor',
    slug: 'home-decor',
  },
  {
    name: 'Tech',
    slug: 'tech',
  },
];

export default function CategoriesList() {

  return (
    <section className="categories_container">
        <ul className="categories_list">
            {
                categories.map((category) => (
                    <li className="category">
                    <a href={`/category/${category.slug}`} className='category_name'>{category.name}</a>
                    </li>
                ))
            }
        </ul>
    </section>
  )
}
