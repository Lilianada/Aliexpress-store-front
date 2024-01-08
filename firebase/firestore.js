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
      const activeWearsRef = await firestore.collection('activeWears').get();
      const activeWearsData = activeWearsRef.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data().products;
        return acc;
      }, {});
      console.log('Idea Lists Data:', activeWearsData);
    } catch (error) {
      console.error('Error retrieving activeWears from Firestore:', error);
    }
};

// Retrieve dresses data from Firestore
export const getDressesFromFirestore = async () => {
    try {
      const dressesRef = await firestore.collection('dresses').get();
      const dressesData = dressesRef.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data().products;
        return acc;
      }, {});
      console.log('Dress Lists Data:', dressesData);
    } catch (error) {
      console.error('Error retrieving dresses from Firestore:', error);
    }
};

// Retrieve others data from Firestore
export const getOthersFromFirestore = async () => {
    try {
      const othersRef = await firestore.collection('others').get();
      const othersData = othersRef.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data().products;
        return acc;
      }, {});
      console.log('Other Lists Data:', othersData);
    } catch (error) {
      console.error('Error retrieving others from Firestore:', error);
    }
};

// Retrieve tech data from Firestore
export const getTechFromFirestore = async () => {
    try {
      const techRef = await firestore.collection('tech').get();
      const techData = techRef.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data().products;
        return acc;
      }, {});
      console.log('Other Lists Data:', techData);
    } catch (error) {
      console.error('Error retrieving tech from Firestore:', error);
    }
};

// Retrieve all data from Firestore
export const getAllFromFirestore = async () => {
    try {
      const allRef = await firestore.collection('all').get();
      const allData = allRef.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data().products;
        return acc;
      }, {});
      console.log('All Lists Data:', allData);
    } catch (error) {
      console.error('Error retrieving all from Firestore:', error);
    }
};