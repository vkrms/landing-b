import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu';
import { Shield, BarChart3, ArrowRight, Globe, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <span className="text-xl font-bold text-gunmetal">Eventflo</span>
          </motion.div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-gunmetal hover:text-coral transition-colors`}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-gunmetal hover:text-coral transition-colors`}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-gunmetal hover:text-coral transition-colors`}>
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
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
              Revolutionary Event Platform
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gunmetal"
          >
            Eventflo: Pioneering a new era in events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-payne-gray mb-8 max-w-3xl mx-auto"
          >
            Reshaping the industry through blockchain and AI to put power back in the hands of organizers and fans.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-coral hover:bg-coral-600 text-white shadow-lg">
              Try Eventflo Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* How It Works Section */}
      <section className="py-20 bg-battleship-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gunmetal">How It Works</h2>
            <p className="text-xl text-payne-gray max-w-2xl mx-auto">
              Explain how Eventflo utilizes blockchain and AI to empower event organizers and fans.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white shadow-lg border-payne-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-coral" />
                    <CardTitle className="text-gunmetal">Blockchain Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-payne-gray">
                    Secure, transparent, and decentralized event management powered by blockchain technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white shadow-lg border-payne-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-coral" />
                    <CardTitle className="text-gunmetal">AI-Powered Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-payne-gray">
                    Advanced analytics and AI-driven recommendations for optimal event planning and execution.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* Feature Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gunmetal">Key Features</h2>
            <p className="text-xl text-payne-gray">
              Discover what makes Eventflo the future of event management
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Decentralized Event Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="text-center h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-coral-200">
                <CardHeader>
                  <motion.div 
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-gunmetal">Decentralized Event Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-payne-gray">
                    Take control of your events with our decentralized platform that puts organizers first.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2: AI-Driven Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="text-center h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-payne-gray-200">
                <CardHeader>
                  <motion.div 
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-payne-gray text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarChart3 className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-gunmetal">AI-Driven Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-payne-gray">
                    Enhanced event planning with intelligent insights and predictive analytics.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3: Secure Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="text-center h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-battleship-gray-200">
                <CardHeader>
                  <motion.div 
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-battleship-gray text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Lock className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-gunmetal">Secure & Transparent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-payne-gray">
                    Blockchain-powered security ensures every transaction is safe and transparent.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
            Ready to revolutionize your events?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of organizers who are already using Eventflo to create amazing experiences.
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
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-coral">
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="border-payne-gray-200" />

      {/* Blog List Section */}
      <section className="py-20 bg-battleship-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gunmetal">Latest Insights</h2>
            <p className="text-xl text-payne-gray">
              Curated resources and articles that provide value to event organizers and attendees.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-payne-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-coral-100 text-coral-700">Event Planning</Badge>
                    <span className="text-sm text-payne-gray">5 min read</span>
                  </div>
                  <CardTitle className="text-gunmetal">10 Tips for Successful Event Planning in 2024</CardTitle>
                  <CardDescription className="text-payne-gray">
                    Learn the latest strategies and best practices for organizing memorable events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 border-2 border-coral">
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback className="bg-coral text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium text-gunmetal">John Doe</p>
                      <p className="text-payne-gray">Event Specialist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-payne-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-payne-gray-100 text-payne-gray-700">Technology</Badge>
                    <span className="text-sm text-payne-gray">8 min read</span>
                  </div>
                  <CardTitle className="text-gunmetal">How Blockchain is Transforming Event Management</CardTitle>
                  <CardDescription className="text-payne-gray">
                    Discover the revolutionary impact of blockchain technology on the events industry.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 border-2 border-payne-gray">
                      <AvatarImage src="/avatars/02.png" />
                      <AvatarFallback className="bg-payne-gray text-white">JS</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium text-gunmetal">Jane Smith</p>
                      <p className="text-payne-gray">Tech Writer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-payne-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-battleship-gray-100 text-battleship-gray-700">Analytics</Badge>
                    <span className="text-sm text-payne-gray">6 min read</span>
                  </div>
                  <CardTitle className="text-gunmetal">AI-Powered Event Analytics: A Complete Guide</CardTitle>
                  <CardDescription className="text-payne-gray">
                    Master the art of data-driven event planning with AI analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 border-2 border-battleship-gray">
                      <AvatarImage src="/avatars/03.png" />
                      <AvatarFallback className="bg-battleship-gray text-white">MJ</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium text-gunmetal">Mike Johnson</p>
                      <p className="text-payne-gray">Data Analyst</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                <span className="text-xl font-bold">Eventflo</span>
              </div>
              <p className="text-white/80">
                Pioneering a new era in events through blockchain and AI technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 text-coral">Product</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-coral transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">API</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Documentation</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 text-coral">Company</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-coral transition-colors">About</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Contact</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 text-coral">Support</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-coral transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Security</a></li>
              </ul>
            </motion.div>
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
              © 2024 Eventflo. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-coral transition-colors">Privacy</a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">Terms</a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">Cookies</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
