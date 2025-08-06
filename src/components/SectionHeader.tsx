import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  delay?: number;
}

export function SectionHeader({ 
  title, 
  description, 
  titleClassName = "text-3xl md:text-4xl font-bold mb-4 text-gunmetal",
  descriptionClassName = "text-xl text-payne-gray",
  delay = 0
}: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className={titleClassName}>{title}</h2>
      <p className={`${descriptionClassName} max-w-2xl mx-auto`}>
        {description}
      </p>
    </motion.div>
  );
}