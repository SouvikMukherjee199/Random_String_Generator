
import { CopyIcon, EyeIcon, EyeOffIcon, LockIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
  <header className="bg-gray-800 shadow-md">
    <div className="container mx-auto p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <LockIcon className="h-6 w-6 text-indigo-400" />
        <h1 className="text-2xl font-bold tracking-tight text-gray-50">SecurePass</h1>
      </div>
      <nav className="hidden sm:flex space-x-4">
        <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
        <Link to="/About" className="hover:text-indigo-400 transition-colors">About</Link>
        <Link to="/Contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
      </nav>
    </div>
  </header>
);
}

export default Navbar;