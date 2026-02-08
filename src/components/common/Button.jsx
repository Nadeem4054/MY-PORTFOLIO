import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-block cursor-pointer";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30",
        secondary: "bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm",
        outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    };

    const Component = href ? 'a' : 'button';

    return (
        <motion.div whileTap={{ scale: 0.95 }}>
            <Component
                href={href}
                onClick={onClick}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </Component>
        </motion.div>
    );
};

export default Button;
