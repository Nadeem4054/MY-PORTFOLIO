import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import abdulbasit from "../../assets/abdulbasit.jpeg";
import shakir from "../../assets/shakir.jpeg";
import shafaqat from "../../assets/shafaqat.jpeg";

const testimonialsData = [
  {
    id: 1,
    name: "Abdul Basit",
    role: "DevOps Engineer",
    image: abdulbasit,
    rating: 4,
    text: "Nadeem is highly dedicated and detail-oriented. His understanding of frontend and DevOps basics makes him a strong team player who is always eager to learn and improve."
  },
  {
    id: 2,
    name: "Shakir Waheed",
    role: "Full Stack Developer",
    image: shakir,
    rating: 3,
    text: "Working with Nadeem has been great. He writes clean code, builds responsive UIs, and understands how frontend connects with backend systems."
  },
  {
    id: 3,
    name: "Shafqat Iqbal",
    role: "Frontend Developer",
    image: shafaqat,
    rating: 3,
    text: "Nadeem has a strong eye for UI and user experience. He focuses on building clean, modern, and responsive interfaces."
  }
];


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <SectionWrapper id="testimonials" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 dark:text-blue-400 font-medium mb-2 uppercase tracking-wide">Testimonials</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">What Clients Say</h3>
                </div>

                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700">
                    <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-blue-100 dark:text-slate-700" />

                    <div className="relative z-10 text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                                        <img
                                            src={testimonialsData[currentIndex].image}
                                            alt={testimonialsData[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < testimonialsData[currentIndex].rating ? "" : "text-slate-300 dark:text-slate-600"} />
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">
                                    "{testimonialsData[currentIndex].text}"
                                </p>

                                <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                                    {testimonialsData[currentIndex].name}
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {testimonialsData[currentIndex].role}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                        aria-label="Previous Testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                        aria-label="Next Testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
