import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Interested in working together? Feel free to contact me for any project or collaboration.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-secondary-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-primary-600 p-8 text-white">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Contact Me</h3>
              </div>
              <p className="mb-6 text-primary-100">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some creative work, I'd love to hear about it.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-primary-100">mraman2002bca@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-primary-100">Chennai,Tamil Nadu,India</p>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-primary-100">+91 7200225530</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-secondary-700 border border-secondary-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Muthu Raman"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-secondary-700 border border-secondary-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="mraman2002bca@gmail.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;