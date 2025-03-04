import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs some creative work, I'd love to hear about it.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary-500/10 rounded-lg text-primary-500 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-secondary-300">mraman2002bca@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary-500/10 rounded-lg text-primary-500 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-secondary-300">Chennai,Tamil Nadu,India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary-500/10 rounded-lg text-primary-500 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-secondary-300">+91 7200225530</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/muthuraman2002/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary-700 rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary-700 rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary-700 rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-secondary-700 border border-secondary-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="muthu raman"
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
                    rows={5}
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;