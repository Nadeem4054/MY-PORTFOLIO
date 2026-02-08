import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen transition-colors duration-300 ease-in-out font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
