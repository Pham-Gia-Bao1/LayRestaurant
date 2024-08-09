// Footer.tsx
import { useTheme } from 'next-themes';
import React from 'react';
const Footer: React.FC = () => {

  return (
    <footer className={`py-6 h-40 text-black`}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li><a href="/#" className="hover:underline">About Us</a></li>
          <li><a href="/#" className="hover:underline">Contact</a></li>
          <li><a href="/#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/#" className="hover:underline">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
