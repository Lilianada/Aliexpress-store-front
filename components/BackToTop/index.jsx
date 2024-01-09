import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import './style.scss';

export default function BackToTop() {
  return (
    <div className='backUp__button' >
        <FaArrowUp size={16} />
    </div>
  )
}
