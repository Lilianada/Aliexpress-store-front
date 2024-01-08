import React from 'react';
import './style.scss';

export default function CategoriesList({ onSelectCategory, selectedCategory }) {
  const categories = [
    {
      name: 'All',
      slug: 'all',
    },
    {
      name: 'Active Wears',
      slug: 'active-wears',
    },
    {
      name: 'Dresses',
      slug: 'dresses',
    },
    {
      name: 'Others',
      slug: 'others',
    },
    {
      name: 'Tech',
      slug: 'tech',
    },
  ];

  return (
    <section className="categories_container">
      <ul className="categories_list">
        {categories.map((category) => (
          <li className="category" key={category.slug}>
            <a
              href={`/category/${category.slug}`}
              className={`category_name ${selectedCategory === category.slug ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.slug)}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
        }