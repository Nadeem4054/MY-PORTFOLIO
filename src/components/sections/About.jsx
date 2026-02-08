import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { FiDownload } from 'react-icons/fi';
import profileImage from '../../assets/nadeem-profile.png';

const About = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/nadeem-cv.pdf';
        link.download = 'nadeem-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <SectionWrapper id="about" className="bg-white dark:bg-slate-800">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-700 mx-auto">
                        {/* Profile Image */}
                        <img src={profileImage} alt="About Me" className="w-full h-full object-cover" />

                        {/* Simple decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                    </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">
                        About Me
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                        Dedicated to creating impactful digital experiences.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        I am a passionate Full Stack Developer with a knack for building beautiful, functional, and user-friendly websites.
                        With a strong foundation in React and modern CSS frameworks, I transform ideas into seamless interactive realities.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        My journey in web development is driven by curiosity and a commitment to excellence.
                        Whether it's optimizing performance or crafting pixel-perfect UIs, I pay attention to every detail.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" icon={<FiDownload />} className="flex items-center gap-2" onClick={handleDownloadResume}>
                            Download Resume <FiDownload />
                        </Button>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-6 text-center border-t border-slate-200 dark:border-slate-700 pt-8">
                        <div>
                            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Happy Clients</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
