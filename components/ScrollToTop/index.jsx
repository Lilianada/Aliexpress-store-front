import './style.scss';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Adjust the scroll position threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling for a nicer effect
    });
  };

  return (
    <div
      className={`scrollUp__button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={16} />
    </div>
  );
}
