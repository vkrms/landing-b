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
              Build Amazing Things with Vite + React
            </h2>
            <p className="text-lg text-payne-gray mb-6 leading-relaxed">
              Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Combined with React's declarative approach to building user interfaces, you get the perfect stack for modern web development.
            </p>
            <p className="text-lg text-payne-gray mb-8 leading-relaxed">
              React lets you build user interfaces out of individual pieces called components. Whether you're working on a simple prototype or a complex application, React's component-based architecture scales with your needs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 text-left"
            >
              <div>
                <div className="text-3xl font-bold text-coral mb-2">⚡</div>
                <div className="text-payne-gray">Instant HMR</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-2">🎯</div>
                <div className="text-payne-gray">Zero Config</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-2">🔧</div>
                <div className="text-payne-gray">Rich Features</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-2">⚙️</div>
                <div className="text-payne-gray">Optimized</div>
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
              <h3 className="text-2xl font-bold mb-4">Start Building Today!</h3>
              <p className="text-lg opacity-90">
                Experience the joy of fast, modern web development with Vite and React.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}