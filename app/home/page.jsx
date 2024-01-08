'use client';
import HeaderBanner from '@/components/Header'
import SearchBar from '@/components/SearchBar';
import React from 'react';
import './style.scss';

export default function StoreFront() {
  return (
    <div className='main_container'>
      <HeaderBanner/>
      <div className="body_container">
      <SearchBar/>

      </div>
    </div>
  )
}
