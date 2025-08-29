import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Left Section */}
      <p>&copy; {new Date().getFullYear()} SecurePass. All rights reserved.</p>

      {/* Right Section - Social Media Icons */}
      <div className="flex space-x-4">
        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaFacebook size={20} />
        </Link>
        <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaTwitter size={20} />
        </Link>
        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaLinkedin size={20} />
        </Link>
        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaInstagram size={20} />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
