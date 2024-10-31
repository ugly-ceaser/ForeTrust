import Link from 'next/link';
import navCss from './css/navBar.module.css';

const Navbar = () => {
    return (
        <nav className={`fixed top-0 left-0 w-full shadow-lg z-50 ${navCss.navbar}`}>
            <div className={`${navCss.divContainter} flex items-center justify-between px-4 py-5`}>

                <img
                    src="/assets/ftlogo.png"
                    alt="Logo"
                    className="h-10 w-auto" 
                />

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-2 justify-end">
                    <li>
                        <Link href='/' className="text-gray-800 hover:text-blue-600">Home</Link>
                    </li>
                    <li>
                        <Link href='/about' className="text-gray-800 hover:text-blue-600">About Us</Link>
                    </li>
                    <li>
                        <Link href='/service' className="text-gray-800 hover:text-blue-600">Services</Link>
                    </li>
                    <li>
                        <Link href='/resource' className="text-gray-800 hover:text-blue-600">Resources</Link>
                    </li>
                    <li>
                        <Link href='/contact' className="text-gray-800 hover:text-blue-600">Contact Us</Link>
                    </li>
                    <li>
                        <Link href='/academy' className="text-gray-800 hover:text-blue-600">Our Academy</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
