import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#020617] pt-16">
            {/* Background Decor */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 dark:bg-sky-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex flex-col items-center"
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-sky-400 mb-4">
                            Aoa, I'm
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                            Nadeem
                        </h1>
                        <div className="text-2xl md:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-6 h-20 md:h-24 flex items-center justify-center">
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    2000,
                                    'React Specialist',
                                    2000,
                                    'Full Stack Developer',
                                    2000,
                                    'Devops Engineer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="bg-gradient-to-r from-indigo-600 to-sky-400 bg-clip-text text-transparent"
                            />
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            I build pixel-perfect, engaging, and accessible digital experiences.
                            Let's turn your vision into reality.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <Link to="projects" smooth={true} duration={500} offset={-70}>
                                <Button variant="primary">View My Work</Button>
                            </Link>
                            <Link to="contact" smooth={true} duration={500} offset={-70}>
                                <Button variant="secondary">Contact Me</Button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <Link to="about" smooth={true} duration={500} offset={-70}>
                    <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-slate-400 rounded-full" />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
