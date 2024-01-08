import { useEffect, useState } from 'react';
import {
  getActiveWearsFromFirestore,
  getDressesFromFirestore,
  getOthersFromFirestore,
  getTechFromFirestore,
  getAllFromFirestore,
} from '../../firebase/firestore'; 
import Image from 'next/image'; 
import "./style.scss";

export default function ProductsList() {
  const [activeWearsData, setActiveWearsData] = useState([]);
  const [dressesData, setDressesData] = useState([]);
  const [othersData, setOthersData] = useState([]);
  const [techData, setTechData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      // Fetch data from Firestore using your functions
      const activeWears = await getActiveWearsFromFirestore();
      const dresses = await getDressesFromFirestore();
      const others = await getOthersFromFirestore();
      const tech = await getTechFromFirestore();
      const all = await getAllFromFirestore();

      // Update state with fetched data
      setActiveWearsData(activeWears);
      setDressesData(dresses);
      setOthersData(others);
      setTechData(tech);
      setAllData(all);
    };

    fetchFirestoreData();
  }, []);

  return (
    <section className="product_section">
      <ul className="product_list">
        <li className='list' style={{backgroundImage: `url('/images/Profile.jpg')`, backgroundSize: 'cover'}}>
         
        </li>
      </ul>

      {/* Repeat the above pattern for other categories */}
    </section>
  );
}
