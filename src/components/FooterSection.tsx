import { motion } from 'framer-motion';
import { FooterSection as FooterSectionType } from '@/data/content';

interface FooterSectionProps {
  section: FooterSectionType;
  delay?: number;
}

export function FooterSection({ section, delay = 0 }: FooterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <h3 className={`font-semibold mb-4 ${section.titleColor}`}>{section.title}</h3>
      <ul className="space-y-2 text-white/80">
        {section.links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-coral transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}