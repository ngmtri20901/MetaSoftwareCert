import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

const BackToHomeButton = () => {
  // Track the visibility of the button
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show button when scrolling up
      if (currentScrollPos < prevScrollPos && currentScrollPos > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Scroll to the top of the page (hero section or nav bar)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Only render the button if it's visible
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-yellow-400 text-white rounded-full p-4 shadow-lg hover:bg-yellow-500 transition-all duration-300"
      >
        <FaChevronUp />
      </button>
    )
  );
};

export default BackToHomeButton;
