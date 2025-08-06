import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export function AnimatedButton({ 
  children, 
  icon: Icon, 
  variant = "default", 
  size = "default", 
  className = "",
  onClick,
  delay = 0
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        variant={variant} 
        size={size} 
        className={className}
        onClick={onClick}
      >
        {children}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </Button>
    </motion.div>
  );
}