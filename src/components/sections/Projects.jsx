import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "Hostel Management",
        category: "Full Stack",
        image: "https://www.smartschoolerp.com/wp-content/uploads/2022/05/hostel.jpg",
        description: "Hostel Management System is a smart web application that efficiently manages hostel rooms, students, and records.",
        technologies: ["React", "Node.js", "MongoDB", ],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        title: "Pharmacy Management",
        category: "Frontend",
        image: "https://mediasoftbd.com/wp-content/uploads/2022/09/Features-Pic-01-01-1.png",
        description: "Pharmacy Management System is a web-based application that efficiently manages medicines, sales, inventory, and billing.",
        technologies: ["React", "Tailwind CSS", ],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 3,
        title: "Todo App",
        category: "Frontend",
        image: "https://images.ctfassets.net/lpvian6u6i39/GtD3qzHrBIgVZJNIJBlO0/8610e2883df2dec28305841aa1ddd2ae/todo-app.png",
        description: "Todo Application is a simple productivity app that helps users organize, track, and complete their daily tasks efficiently.",
        technologies: ["React", "Use state hook", "Tailwind CSSs"],
        demoLink: "#",
        githubLink: "#"
    },
   
    
];

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const proxyImage = (url) => {
        const stripped = url.replace(/^https?:\/\//, "");
        return `https://images.weserv.nl/?url=${encodeURIComponent(stripped)}&w=1200`;
    };

    const handleImgError = (e, original) => {
        if (!e?.target) return;
        if (!e.target.dataset.triedProxy) {
            e.target.dataset.triedProxy = '1';
            e.target.src = proxyImage(original);
            return;
        }
        e.target.src = 'https://via.placeholder.com/600x400/94a3b8/ffffff?text=Image+Unavailable';
    };

    const categories = ["All", "Frontend", "Full Stack", ];

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <SectionWrapper id="projects" className="bg-white dark:bg-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">Portfolio</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">Recent Projects</h3>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => handleImgError(e, project.image)}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                            {/* Overlay (Visible on Hover in Desktop, or we can just use the click) */}
                            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Details Modal */}
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div>
                        <div className="h-64 rounded-xl overflow-hidden mb-6">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                                onError={(e) => handleImgError(e, selectedProject.image)}
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                            {selectedProject.title}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                            {selectedProject.category}
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {selectedProject.description}
                        </p>

                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button href={selectedProject.demoLink} target="_blank" variant="primary" className="flex items-center gap-2">
                                <FaExternalLinkAlt /> Live Demo
                            </Button>
                            <Button href={selectedProject.githubLink} target="_blank" variant="secondary" className="flex items-center gap-2">
                                <FaGithub /> Source Code
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </SectionWrapper>
    );
};

export default Projects;
