import { testimonials } from '@/constants';
import { fadeUp } from '@/lib/animations';
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon, StarIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 
    const next = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeUp}
            className='mt-20 scroll-mt-10'
            id='testimonials'
        >
            <p
                className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
            >
                <SparklesIcon size={15} /> Reviews
            </p>

            <h2
                className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'
            >
                What Clients Say About my Work
            </h2>

            <div className="mt-10 relative w-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        layout
                        className='border rounded-3xl border-neutral-800 bg-neutral-900/10 p-8 flex flex-col md:flex-row items-start gap-6'
                    >
                        <img 
                            src={testimonials[currentSlide].image}
                            alt={testimonials[currentSlide].name}
                            className='size-20 rouded-full object-cover'
                        />

                        <div className="flex-1 space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {testimonials[currentSlide].name}
                                </h3>

                                <p className="text-sm text-neutral-400">
                                    {testimonials[currentSlide].role}
                                </p>
                            </div>

                            <div className="flex gap-1 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={17}
                                        fill='currentColor'
                                    />
                                ))}
                            </div>

                            <p className="text-neutral-300 leading-relaxed">
                                {testimonials[currentSlide].text}
                            </p>

                            <a 
                                href={testimonials[currentSlide].link}
                                className='inline-flex items-center gap-1 text-sm font-medium hover:text-green-400 text-neutral-400 transition'
                            >
                                Project
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:border-neutral-800 transition ">
                        <ChevronLeftIcon size={18} />
                    </button>

                    <button
                        onClick={next}
                        className="size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:border-neutral-800 transition "
                    >
                        <ChevronRightIcon size={18} />
                    </button>
                </div>
            </div>
        </motion.section>
    )
}