import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { FaCode, FaPaintBrush, FaDatabase, FaServer, FaDocker, FaTools } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Building responsive and modern user interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS."
  },
  {
    icon: <FaServer />,
    title: "Full Stack Development",
    description:
      "Developing complete web applications using React.js, Node.js, Express.js, MongoDB, and RESTful APIs."
  },
  {
    icon: <FaPaintBrush />,
    title: "UI Implementation",
    description:
      "Converting UI/UX designs into clean, user-friendly, and pixel-perfect web interfaces."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Designing and managing databases using MongoDB and SQL for secure and efficient data handling."
  },
  {
    icon: <FaDocker />,
    title: "DevOps & Deployment",
    description:
      "Containerizing applications with Docker and deploying projects using basic CI/CD workflows on cloud platforms."
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Maintaining, updating, and optimizing web applications for performance, security, and scalability."
  }
];


const Services = () => {
    return (
        <SectionWrapper id="services" className="bg-white dark:bg-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">What I Do</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">My Services</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="p-8 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
                    >
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{service.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
