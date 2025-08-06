import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  borderColor?: string;
  delay?: number;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  iconColor, 
  borderColor = "border-payne-gray-200",
  delay = 0 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card className={`text-center h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${borderColor}`}>
        <CardHeader>
          <motion.div 
            className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${iconColor} text-white`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <CardTitle className="text-gunmetal">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-payne-gray">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}