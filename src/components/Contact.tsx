import { useForm } from "react-hook-form"
import { motion } from 'motion/react';
import { SectionHeader } from "@/components/SectionHeader";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { fadeUp } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: '', 
            company: '', 
            email: '', 
            phone: '', 
            message: '', 
        }, 
    }); 

    const onSubmit = (values: ContactFormValues) => {

    }
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            variants={ fadeUp}
            className='mt-30 scroll-mt-10'
            id='contact'
        >
            <SectionHeader 
                subtitle="Contact"
                title="Let's make something great together"
            />

            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full mx-auto space-y-4 mt-10"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            className="border-0" 
                                            placeholder="Your Name"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            className="border-0" 
                                            placeholder="Company Name"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            type="email"
                                            className="border-0" 
                                            placeholder="your.email@example.com"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            type="phone"
                                            className="border-0" 
                                            placeholder="(123) 456-7890"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField 
                        control={form.control}
                        name="message"
                        render={({ field}) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea 
                                        placeholder="Write your message please..."
                                        className="h-36 border-0"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button 
                        type="submit"
                        size='lg'
                    >
                        Send Message
                    </Button>
                </form>
            </Form>
        </motion.section>
    )
}