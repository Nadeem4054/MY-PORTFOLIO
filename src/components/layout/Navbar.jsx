import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-slate-800/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="home" smooth={true} duration={500} className="text-2xl font-bold font-sans bg-gradient-to-r from-indigo-600 to-sky-400 bg-clip-text text-transparent">
                            Portfolio
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-sky-400 font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="mr-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 focus:outline-none"
                        >
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
