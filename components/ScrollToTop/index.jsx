import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import './style.scss';

export default function ScrollToTop() {
  return (
    <div className='scrollUp__button' >
        <FaArrowUp size={16} />
    </div>
  )
}
