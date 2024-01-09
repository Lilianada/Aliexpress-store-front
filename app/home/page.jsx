"use client";
import { useEffect, useState } from "react";
import {
  getActiveWearsFromFirestore,
  getDressesFromFirestore,
  getOthersFromFirestore,
  getTechFromFirestore,
} from "../../firebase/firestore";
import HeaderBanner from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoriesList from "@/components/Categories";
import ProductsList from "@/components/Products";
import "./style.scss";
import Pagination from "@/components/Pagination";
import BackToTop from "@/components/BackToTop";

export default function StoreFront() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeWearsData, setActiveWearsData] = useState([]);
  const [dressesData, setDressesData] = useState([]);
  const [othersData, setOthersData] = useState([]);
  const [techData, setTechData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const productsPerPage = 24;


  // Define currentPage and pageNumbers for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState(1);
   
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    setIsLoading(true);
  
    const fetchFirestoreData = async () => {
      try {
        let categoryData = [];
  
        switch (selectedCategory) {
          case "active-wears":
            categoryData = await getActiveWearsFromFirestore();
            setActiveWearsData(categoryData);
            break;
          case "dresses":
            categoryData = await getDressesFromFirestore();
            setDressesData(categoryData);
            break;
          case "others":
            categoryData = await getOthersFromFirestore();
            setOthersData(categoryData);
            break;
          case "tech":
            categoryData = await getTechFromFirestore();
            setTechData(categoryData);
            break;
          default:
            // Handle "all" case or other categories if needed
            const activeWears = await getActiveWearsFromFirestore();
            const dresses = await getDressesFromFirestore();
            const others = await getOthersFromFirestore();
            const tech = await getTechFromFirestore();
            categoryData = [...activeWears, ...dresses, ...others, ...tech];
            setAllData(categoryData);
            break;
        }
  
        setPageNumbers(Math.ceil(categoryData.length / productsPerPage));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchFirestoreData();
  }, [selectedCategory]);
  

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className="main_container">
      <HeaderBanner />
      <div className="body_container">
        <div className="body_nav">
          <CategoriesList
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
          <SearchBar
            onSelectCategory={handleSelectCategory}
            onSearch={handleSearch}
          />
        </div>
        <ProductsList
          activeWearsData={activeWearsData}
          dressesData={dressesData}
          othersData={othersData}
          techData={techData}
          allData={allData}
          selectedCategory={selectedCategory}
          isLoading={isLoading}
          searchQuery={searchQuery}
        />
      </div>
      {
        productsPerPage < allData.length && (
          <Pagination
            handleClick={handleClick}
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
            currentPage={currentPage}
            pageNumbers={pageNumbers}
          />
        )
      }
      <BackToTop/>
    </div>
  );
}
