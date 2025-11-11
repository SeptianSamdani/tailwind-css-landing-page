import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/SectionHeader';
import { education, experience, tools } from '@/constants';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ToolsCard } from '@/components/ToolsCard';
export const Resume = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-10'
            id='resume'
        >
            <SectionHeader
                subtitle='Resume'
                title='Education and Practical Experience'
            />

            <motion.p 
                variants={fadeUp}
                className='mt-4 text-neutral-300'
            >
                With a background in Computer Engineering and Proper Experience in Programming and Electrical Engineering, I've worked very hard.
            </motion.p>

            <div className="grid gap-x-10 my-16 md:grid-cols-2">
                <motion.div
                    variants={fadeUp}
                    className='mb-16 md:mb-0'
                >
                    <h2 className="text-3xl font-semibold mb-8">Education</h2>

                    <div className="space-y-8 border-l border-neutral-700 pl-6">
                        {education.map((item, i) => (
                            <ExperienceCard 
                                item={item} 
                                key={i} 
                            />
                        ))}
                    </div>
                </motion.div>
                
                <motion.div
                    variants={fadeUp}
                    className='mb-16 md:mb-0'
                >
                    <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>

                    <div className="space-y-8 border-l border-border pl-6">
                        {experience.map((item, i) => (
                            <ExperienceCard
                                item={item}
                                key={i}
                            />
                        ))}
                    </div>
                </motion.div>


            </div>

            <div className="my-16">
                <motion.h2 variants={fadeUp} className='text-3xl font-semibold mb-8 capitalize'>
                    Tools
                </motion.h2>

                <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer(0.5)}
                    className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5' 
                >
                    {tools.map((tool, i) => (
                        <ToolsCard
                            key={i}
                            tool={tool}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}