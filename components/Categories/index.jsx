import React from 'react';
import './style.scss';

const categories = [
  {
    name: 'All',
    slug: 'all',
  },
  {
    name: 'Idea Lists',
    slug: 'idea-lists',
  },
  {
    name: 'Photos',
    slug: 'phtots',
  },
  {
    name: 'Videos',
    slug: 'videos',
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
