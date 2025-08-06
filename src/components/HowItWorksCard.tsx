import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HowItWorksCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  delay?: number;
  direction?: 'left' | 'right';
}

export function HowItWorksCard({ 
  icon: Icon, 
  title, 
  description, 
  iconColor, 
  delay = 0,
  direction = 'left'
}: HowItWorksCardProps) {
  const initialX = direction === 'left' ? -30 : 30;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full bg-white shadow-lg border-payne-gray-200 hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Icon className={`h-6 w-6 ${iconColor}`} />
            <CardTitle className="text-gunmetal">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-payne-gray">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}