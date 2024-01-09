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

  const getProductsByCategory = () => {
    switch (selectedCategory) {
      case 'active-wears':
        return activeWearsData;
      case 'dresses':
        return dressesData;
      case 'others':
        return othersData;
      case 'tech':
        return techData;
      case 'all':
      default:
        // Combine products from all categories
        return allData;
    }
  };

  const filteredProducts = getProductsByCategory();

  return (
    <section className="product_section">
      <ul className="product_list">
      {filteredProducts.map((product) => (
           <li
           className="list"
           key={product.id}
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
            <span className="category">{product.category}</span>
           <span className="product_name">{product.name}</span>
         </li>
        ))}
      </ul>
    </section>
  );
}
