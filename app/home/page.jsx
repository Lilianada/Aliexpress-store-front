'use client';
import HeaderBanner from '@/components/Header'
import SearchBar from '@/components/SearchBar';
import CategoriesList from '@/components/Categories';
import React from 'react';
import './style.scss';

export default function StoreFront() {
  return (
    <div className='main_container'>
      <HeaderBanner/>
      <div className="body_container">
        <div className="body_nav">
          <CategoriesList/>
           <SearchBar/>
        </div>

      </div>
    </div>
  )
}
