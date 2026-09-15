import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the default animations

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800,     // Values from 0 to 3000, with step 50ms
      once: true,        // Whether animation should happen only once - while scrolling down
      easing: 'ease-out', // Default easing for AOS animations
      offset: 100,       // Offset (in px) from the original trigger point
    });
  }, []);

  return null; // This component handles initialization logic only
}
