'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-20 bg-battleship-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Empowering Innovation Through Technology
            </h2>
            <p className="text-lg text-payne-gray mb-6 leading-relaxed">
              Our mission is to democratize access to powerful tools that enable creators, entrepreneurs, and teams to build extraordinary things. We believe that technology should be intuitive, accessible, and transformative.
            </p>
            <p className="text-lg text-payne-gray mb-8 leading-relaxed">
              With over a decade of experience in the industry, we've learned what it takes to create solutions that not only work but inspire. Our platform is the result of countless hours of research, development, and user feedback.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 text-left"
            >
              <div>
                <div className="text-3xl font-bold text-coral mb-2">10K+</div>
                <div className="text-payne-gray">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-2">99.9%</div>
                <div className="text-payne-gray">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-2">50+</div>
                <div className="text-payne-gray">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-2">24/7</div>
                <div className="text-payne-gray">Support</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-coral to-payne-gray rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg opacity-90">
                Join thousands of users who are already transforming their workflows with our platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}