import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Jordan Carden</h2>
            <p className="text-gray-400">Data Science & Machine Learning Engineer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                <ArrowUp size={20} />
              </button>
            </Link>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Jordan Carden. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;