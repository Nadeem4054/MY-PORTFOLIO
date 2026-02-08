import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Message sent successfully! (Check console for data)");
        reset();
    };

    const socialLinks = [
        { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Nadeem4054" },
        { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-nadeem-358186330" },
        
    ];

    return (
        <SectionWrapper id="contact" className="bg-white dark:bg-slate-800">
            <div className="text-center mb-16">
                <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">Get in Touch</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">Contact Me</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Let's Talk</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-slate-700/50 text-blue-600 dark:text-blue-400 rounded-lg">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-800 dark:text-white">Email</h5>
                                <p className="text-slate-600 dark:text-slate-400">nk4054420@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-slate-700/50 text-blue-600 dark:text-blue-400 rounded-lg">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-800 dark:text-white">Location</h5>
                                <p className="text-slate-600 dark:text-slate-400">Hangu, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h5 className="font-bold text-slate-800 dark:text-white mb-4">Follow Me</h5>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required" })}
                                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors`}
                                placeholder="Your Name"
                            />
                            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors`}
                                placeholder="your@email.com"
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                {...register("message", { required: "Message is required" })}
                                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors resize-none`}
                                placeholder="Your message..."
                            ></textarea>
                            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                        </div>

                        <Button type="submit" variant="primary" className="w-full justify-center flex items-center gap-2">
                            Send Message <FaPaperPlane />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
