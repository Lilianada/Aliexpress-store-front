import React from "react";
import Spinner from "../Spinner";
import Link from "next/link";
import "./style.scss";

export default function ProductsList({
  activeWearsData,
  dressesData,
  othersData,
  techData,
  allData,
  selectedCategory,
  isLoading,
  searchQuery,
}) {
  const getProductsByCategory = () => {
    switch (selectedCategory) {
      case "active-wears":
        return activeWearsData;
      case "dresses":
        return dressesData;
      case "others":
        return othersData;
      case "tech":
        return techData;
      case "all":
      default:
        // Combine products from all categories
        return allData;
    }
  };

  const getFilteredProducts = () => {
    const products = getProductsByCategory();
    if (searchQuery) {
      // Filter products based on search query
      return products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory === "all") {
      // Sort products by category
      return products.sort((a, b) => a.category.localeCompare(b.category));
    }
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="product_section">
        {isLoading && <Spinner />}
      <ul className="product_list">
        {filteredProducts.map((product, idx) => (
          <a href={product.links}>
          <li
            className="list"
            key={idx}
            style={{
              backgroundImage: `linear-gradient(
               180deg,
               rgba(0, 0, 0, 5e-5) 30.66%,
               rgba(0, 0, 0, 0.01953) 42.66%,
               rgba(0, 0, 0, 0.5) 99.66%
             ), url('https://firebasestorage.googleapis.com/v0/b/aliexpress-storefront.appspot.com/o/${encodeURIComponent(product.image)}?alt=media')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
          >
            <span className="category">{product.category}</span>
            <span className="product_name">{product.name}</span>
          </li>
          </a>
        ))}
      </ul>
    </section>
  );
}
