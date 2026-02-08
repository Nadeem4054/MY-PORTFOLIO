import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
const timelineData = [
  {
    id: 1,
    type: "education",
    year: "2022 - 2026 Present",
    title: "Bachelor of Computer Science (BSCS)",
    company: "University Of Kohat",
    description:
      "Currently enrolled in BS Computer Science. Studying core subjects including Web Development, Databases, Networking, Operating Systems, and Software Engineering."
  },
  {
    id: 2,
    type: "work",
    year: "2024",
    title: "Frontend Developer",
    company: "Self / Projects",
    description:
      "Building responsive and modern web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS. Focused on clean UI, reusable components, and performance."
  },
  {
    id: 3,
    type: "work",
    year: "2024 ",
    title: "Full Stack Developer",
    company: "Learning & Projects",
    description:
      "Working with both frontend and backend technologies including React.js, Node.js, Express.js, MongoDB, and REST APIs. Developing complete full-stack web applications."
  },
  {
    id: 4,
    type: "work",
    year: "2026 - Present",
    title: "DevOps Engineer",
    company: "Learning & Practice",
    description:
      "Learning DevOps practices including Linux, Docker, Docker Compose, CI/CD pipelines, containerization, and deployment of web applications."
  }
];



const Timeline = () => {
    return (
        <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">Experience</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">My Journey</h3>
            </div>

            <div className="relative max-w-4xl mx-auto px-4">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {timelineData.map((item, index) => (
                        <div key={item.id} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-800 transform -translate-x-1/2 z-10"></div>

                            {/* Content */}
                            <div className="ml-12 md:ml-0 md:w-5/12">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                                            {item.type === 'work' ? <FaBriefcase size={14} /> : <FaGraduationCap size={14} />}
                                        </span>
                                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.year}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">{item.company}</p>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            </div>

                            <div className="hidden md:block md:w-5/12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Timeline;
