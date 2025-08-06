import { Hero } from './components/landing/Hero'
import { Features } from './components/landing/Features'
import { About } from './components/landing/About'
import { CTA } from './components/landing/CTA'
import { Footer } from './components/landing/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
