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
            <h3 className="text-xl font-bold text-coral mb-4">Vite</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="https://vitejs.dev" target="_blank" className="hover:text-coral transition-colors">Documentation</a></li>
              <li><a href="https://vitejs.dev/guide/" target="_blank" className="hover:text-coral transition-colors">Getting Started</a></li>
              <li><a href="https://vitejs.dev/config/" target="_blank" className="hover:text-coral transition-colors">Configuration</a></li>
              <li><a href="https://vitejs.dev/plugins/" target="_blank" className="hover:text-coral transition-colors">Plugins</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">React</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="https://react.dev" target="_blank" className="hover:text-coral transition-colors">Documentation</a></li>
              <li><a href="https://react.dev/learn" target="_blank" className="hover:text-coral transition-colors">Tutorial</a></li>
              <li><a href="https://react.dev/reference/react" target="_blank" className="hover:text-coral transition-colors">API Reference</a></li>
              <li><a href="https://react.dev/community" target="_blank" className="hover:text-coral transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">Resources</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="https://github.com/vitejs/vite" target="_blank" className="hover:text-coral transition-colors">Vite GitHub</a></li>
              <li><a href="https://github.com/facebook/react" target="_blank" className="hover:text-coral transition-colors">React GitHub</a></li>
              <li><a href="https://stackoverflow.com/questions/tagged/vite" target="_blank" className="hover:text-coral transition-colors">Stack Overflow</a></li>
              <li><a href="https://discord.gg/vite" target="_blank" className="hover:text-coral transition-colors">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-coral mb-4">Ecosystem</h3>
            <ul className="space-y-2 text-gunmetal-800">
              <li><a href="https://www.npmjs.com" target="_blank" className="hover:text-coral transition-colors">npm</a></li>
              <li><a href="https://nodejs.org" target="_blank" className="hover:text-coral transition-colors">Node.js</a></li>
              <li><a href="https://www.typescriptlang.org" target="_blank" className="hover:text-coral transition-colors">TypeScript</a></li>
              <li><a href="https://tailwindcss.com" target="_blank" className="hover:text-coral transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gunmetal-600 mt-8 pt-8 text-center text-gunmetal-800">
          <p>&copy; 2024 Vite + React. Built with ❤️ for developers.</p>
        </div>
      </div>
    </motion.footer>
  )
}