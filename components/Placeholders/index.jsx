import React from 'react';
import './style.scss';

const data = [1,2,3,];

export default function Placeholder() {
  return (
    <section className="placeholder_section">
        <ul className="placeholder_list">
        {data.map((data,index) => (
          <li
            className="placeholder"
            key={index}
            style={{
              backgroundImage: `linear-gradient(
               180deg,
               rgba(0, 0, 0, 5e-5) 30.66%,
               rgba(0, 0, 0, 0.01953) 42.66%,
               rgba(0, 0, 0, 0.5) 99.66%
             )`,
            }}
          >
            {data}
          </li>
        ))}
      </ul>
    </section>
  )
}
