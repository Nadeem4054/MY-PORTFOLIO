import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt,  } from 'react-icons/fa';
import { FcLinux } from "react-icons/fc";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript, SiPostgresql, SiDocker } from 'react-icons/si';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            skills: [
                { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 50 },
                { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 50},
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 75 },
               
            ]
        },
        {
            category: "Devops ",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 40 },
                { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: 50 },
                { name: "Linux", icon: <FcLinux className="text-purple-500" />, level: 50 },
            ]
        }
    ];

    return (
        <SectionWrapper id="skills" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">Skills</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">My Technical Expertise</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700"
                    >
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                            {category.category}
                        </h4>
                        <div className="space-y-6">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
