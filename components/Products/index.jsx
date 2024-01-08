import React from "react";
import "./style.scss";

export default function ProductsList({
  activeWearsData,
  dressesData,
  othersData,
  techData,
  allData,
  selectedCategory,
}) {

  const renderProductsByCategory = () => {
    switch (selectedCategory) {
      case 'active-wears':
        return activeWearsData.map((product) => (
          <li
          className="list"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 5e-5) 30.66%,
              rgba(0, 0, 0, 0.01953) 42.66%,
              rgba(0, 0, 0, 0.5) 99.66%
            ), url('${product.image}')`,
            backgroundSize: "cover",
          }}
        >
          <span className="category">
            {selectedCategory}
          </span>
          <span className="product_name">{product.name}</span>
        </li>
        ));
      case 'dresses':
        return dressesData.map((product) => (
          <li
          className="list"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 5e-5) 30.66%,
              rgba(0, 0, 0, 0.01953) 42.66%,
              rgba(0, 0, 0, 0.5) 99.66%
            ), url('${product.image}')`,
            backgroundSize: "cover",
          }}
        >
          <span className="category">
            {selectedCategory}
          </span>
          <span className="product_name">{product.name}</span>
        </li>
        ));
      case 'others':
        return othersData.map((product) => (
          <li
          className="list"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 5e-5) 30.66%,
              rgba(0, 0, 0, 0.01953) 42.66%,
              rgba(0, 0, 0, 0.5) 99.66%
            ), url('${product.image}')`,
            backgroundSize: "cover",
          }}
        >
          <span className="category">
            {selectedCategory}
          </span>
          <span className="product_name">{product.name}</span>
        </li>
        ));
      case 'tech':
        return techData.map((product) => (
          <li
          className="list"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 5e-5) 30.66%,
              rgba(0, 0, 0, 0.01953) 42.66%,
              rgba(0, 0, 0, 0.5) 99.66%
            ), url('${product.image}')`,
            backgroundSize: "cover",
          }}
        >
          <span className="category">
            {selectedCategory}
          </span>
          <span className="product_name">{product.name}</span>
        </li>
        ));
      default:
        // Render all products for 'all' category
        return allData.map((product) => (
          <li
          className="list"
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 5e-5) 30.66%,
              rgba(0, 0, 0, 0.01953) 42.66%,
              rgba(0, 0, 0, 0.5) 99.66%
            ), url('${product.image}')`,
            backgroundSize: "cover",
          }}
        >
          <span className="category">
            {selectedCategory}
          </span>
          <span className="product_name">{product.name}</span>
        </li>
        ));
    }
  };

  return (
    <section className="product_section">
      <ul className="product_list">
        {renderProductsByCategory()}
      </ul>
    </section>
  );
}
