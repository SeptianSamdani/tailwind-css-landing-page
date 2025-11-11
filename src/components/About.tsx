import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-10'
            id='about'
        >
            <SectionHeader 
                subtitle='About Me'
                title='Transforming complexity into effortless design'
            />

            <motion.p 
                variants={fadeUp}
                className='mt-4 text-neutral-300'
            >
                I'am a Fullstack Developer Javascript and Machine Learning Engineer with a 10+ years of experience in creating dynamic and responsive web applications. My expertise lies in leveraging modern frameworks and technologies to build scalable solutions that meet client needs. I am passionate about coding and continuously learning new skills to stay updated with the latest industry trends.
            </motion.p>

            <motion.div 
                variants={fadeUp}
                transition={{ delay: 0.2 }}
            >
                <Button 
                    className='mt-5'
                >
                    Contact Me
                </Button>
            </motion.div>
        </motion.section>
    )
}