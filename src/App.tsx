import './App.css';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'motion/react';

// Custom components
import { FeatureCard } from './components/FeatureCard';
import { HowItWorksCard } from './components/HowItWorksCard';
import { BlogPostCard } from './components/BlogPostCard';
import { FooterSection } from './components/FooterSection';
import { SectionHeader } from './components/SectionHeader';
import { AnimatedButton } from './components/AnimatedButton';

// Data
import {
  siteConfig,
  navigation,
  heroContent,
  howItWorksContent,
  keyFeaturesContent,
  ctaContent,
  blogContent,
  footerContent,
} from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-payne-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Globe className="h-6 w-6 text-coral" />
            <span className="text-xl font-bold text-gunmetal">{siteConfig.name}</span>
          </motion.div>
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-gunmetal hover:text-coral transition-colors`}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-coral hover:bg-coral-600 text-white">Get Started</Button>
                </motion.div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-coral-50 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4 bg-coral-100 text-coral-700 hover:bg-coral-200">
              {heroContent.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gunmetal"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-payne-gray mb-8 max-w-3xl mx-auto"
          >
            {heroContent.description}
          </motion.p>
          <AnimatedButton
            size="lg"
            className="text-lg px-8 py-6 bg-coral hover:bg-coral-600 text-white shadow-lg"
            icon={ArrowRight}
            delay={0.8}
          >
            {heroContent.primaryCTA}
          </AnimatedButton>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* How It Works Section */}
      <section className="py-20 bg-battleship-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={howItWorksContent.title}
            description={howItWorksContent.description}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {howItWorksContent.features.map((feature, index) => (
              <HowItWorksCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                delay={0.2 + index * 0.2}
                direction={index === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* Feature Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={keyFeaturesContent.title}
            description={keyFeaturesContent.description}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyFeaturesContent.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                borderColor={feature.borderColor}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* CTA Section */}
      <section className="py-20 bg-coral relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            {ctaContent.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {ctaContent.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-coral hover:bg-gray-100 shadow-lg">
                {ctaContent.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-coral">
                {ctaContent.secondaryButton}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* Blog List Section */}
      <section className="py-20 bg-battleship-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={blogContent.title}
            description={blogContent.description}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogContent.posts.map((post, index) => (
              <BlogPostCard
                key={post.id}
                post={post}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-payne-gray-200 py-12 bg-gunmetal text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-coral" />
                <span className="text-xl font-bold">{siteConfig.name}</span>
              </div>
              <p className="text-white/80">
                {siteConfig.description}
              </p>
            </motion.div>
            
            {footerContent.sections.map((section, index) => (
              <FooterSection
                key={index}
                section={section}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
          
          <Separator className="my-8 border-payne-gray-600" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-white/60 text-sm">
              {footerContent.copyright}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {footerContent.bottomLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-white/60 hover:text-coral transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
