'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import reactLogo from '../../../src/assets/react.svg'
import viteLogo from '/vite.svg'

export function Hero() {
  const [count, setCount] = useState(0)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gunmetal text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-8 mb-8">
            <motion.a 
              href='https://vitejs.dev' 
              target='_blank'
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={viteLogo} className='h-16 w-16 md:h-24 md:w-24' alt='Vite logo' />
            </motion.a>
            <motion.a 
              href='https://react.dev' 
              target='_blank'
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={reactLogo} className='h-16 w-16 md:h-24 md:w-24' alt='React logo' />
            </motion.a>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-coral">Vite</span> + <span className="text-coral">React</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Button 
              onClick={() => setCount(count => count + 1)}
              size="lg" 
              className="bg-coral hover:bg-coral-400 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 mb-4"
            >
              count is {count}
            </Button>
            <p className="text-white/80">
              Edit <code className="bg-gunmetal-800 px-2 py-1 rounded text-coral">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          
          <p className="text-white/70 text-lg">
            Click on the Vite and React logos to learn more
          </p>
        </motion.div>
      </div>
    </section>
  )
}