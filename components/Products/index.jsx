import React from "react";
import Spinner from "../Spinner";
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
      
      return products.sort((a, b) => {
        const categoryA = a.category || ""; 
        const categoryB = b.category || "";
  
        return categoryA.localeCompare(categoryB);
      });
    }
  
    return products;
  };
  

  const filteredProducts = getFilteredProducts();

  return (
    <section className="product_section">
      <ul className="product_list">
        {filteredProducts.map((product, idx) => (
          <a href={product.links} target="_blank" >
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
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
            }}
            
          >
            <span className="category">{product.category}</span>
            <span className="product_name">{product.name}</span>
          </li>
          </a>
        ))}
      </ul>
        {
          isLoading ? <Spinner /> : (
            filteredProducts.length === 0 && (
              <p className="no_products">No products found.</p>
            )
          )
        }
    </section>
  );
}
