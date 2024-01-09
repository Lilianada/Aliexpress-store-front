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

export default function StoreFront() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeWearsData, setActiveWearsData] = useState([]);
  const [dressesData, setDressesData] = useState([]);
  const [othersData, setOthersData] = useState([]);
  const [techData, setTechData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      // Fetch data from Firestore using your functions
      const activeWears = await getActiveWearsFromFirestore();
      const dresses = await getDressesFromFirestore();
      const others = await getOthersFromFirestore();
      const tech = await getTechFromFirestore();
      const all = [...activeWears, ...dresses, ...others, ...tech];
      // Update state with fetched data
      setActiveWearsData(activeWears);
      setDressesData(dresses);
      setOthersData(others);
      setTechData(tech);
      setAllData(all);
    };

    fetchFirestoreData();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
            selectedCategory={selectedCategory}
          />
        </div>
        <ProductsList
          activeWearsData={activeWearsData}
          dressesData={dressesData}
          othersData={othersData}
          techData={techData}
          allData={allData}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
