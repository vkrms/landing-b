'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gunmetal text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to Our 
            <span className="block text-coral">Amazing Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gunmetal-800 max-w-3xl mx-auto">
            Discover innovative solutions that transform the way you work and connect with your audience.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-coral hover:bg-coral-400 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gunmetal px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}