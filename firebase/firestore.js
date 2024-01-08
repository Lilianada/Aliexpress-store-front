/*
* @license
* Copyright 2022 Google LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { auth, db } from "./firebase";
  import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence,
  } from "firebase/auth";


// Retrieve activeWears data from Firestore
export const getActiveWearsFromFirestore = async () => {
    try {
      const activeWearsRef = collection(db, 'activeWears');
      const querySnapshot = await getDocs(activeWearsRef);
      const activeWearsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Active Wears Data:', activeWearsData);
      return activeWearsData;
    } catch (error) {
      console.error('Error retrieving activeWears from Firestore:', error);
    }
  };
  
  // Retrieve dresses data from Firestore
  export const getDressesFromFirestore = async () => {
    try {
      const dressesRef = collection(db, 'dresses');
      const querySnapshot = await getDocs(dressesRef);
      const dressesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Dress Lists Data:', dressesData);
      return dressesData;
    } catch (error) {
      console.error('Error retrieving dresses from Firestore:', error);
    }
  };
  
  // Retrieve others data from Firestore
  export const getOthersFromFirestore = async () => {
    try {
      const othersRef = collection(db, 'others');
      const querySnapshot = await getDocs(othersRef);
      const othersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Other Lists Data:', othersData);
      return othersData;
    } catch (error) {
      console.error('Error retrieving others from Firestore:', error);
    }
  };
  
  // Retrieve tech data from Firestore
  export const getTechFromFirestore = async () => {
    try {
      const techRef = collection(db, 'tech');
      const querySnapshot = await getDocs(techRef);
      const techData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Tech Lists Data:', techData);
      return techData;
    } catch (error) {
      console.error('Error retrieving tech from Firestore:', error);
    }
  };