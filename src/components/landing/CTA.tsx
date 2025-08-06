'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 bg-gunmetal text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gunmetal-800 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already revolutionized their productivity with our platform.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-coral hover:bg-coral-400 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gunmetal px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Sales
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-gunmetal-800 mt-8"
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}