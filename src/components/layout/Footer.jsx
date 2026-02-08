import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-sans bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                            Portfolio
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/Nadeem4054" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-nadeem-358186330" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Nadeem. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Made with <FaHeart className="text-red-500" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
