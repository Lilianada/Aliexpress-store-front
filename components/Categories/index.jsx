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

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <section className="categories_container">
      <ul className="categories_list">
        {categories.map((category) => (
          <li className={`category ${selectedCategory === category.slug ? 'active' : ''}`} key={category.slug}>
            <button
              className='category_button'
              onClick={() => handleCategoryClick(category.slug)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
