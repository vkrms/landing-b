'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gunmetal-400 text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">Company</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="#" className="hover:text-coral transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">Product</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="#" className="hover:text-coral transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">Support</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="#" className="hover:text-coral transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">Legal</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="#" className="hover:text-coral transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gunmetal-600 mt-8 pt-8 text-center text-gunmetal-800">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}