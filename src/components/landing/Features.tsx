'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform that delivers results in milliseconds."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using our intuitive collaboration tools and real-time updates."
  },
  {
    icon: CheckCircle,
    title: "Reliable & Secure",
    description: "Built with enterprise-grade security and 99.9% uptime to keep your data safe and accessible."
  },
  {
    icon: Star,
    title: "Premium Support",
    description: "Get expert help when you need it with our dedicated support team available 24/7."
  }
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-payne-gray max-w-2xl">
            We've built everything you need to succeed, with powerful features designed to streamline your workflow and boost productivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-left p-6 rounded-lg border border-battleship-gray-200 hover:border-coral transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-gunmetal mb-3">
                {feature.title}
              </h3>
              <p className="text-payne-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}