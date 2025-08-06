import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { BlogPost } from '@/data/content';

interface BlogPostCardProps {
  post: BlogPost;
  delay?: number;
}

export function BlogPostCard({ post, delay = 0 }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-payne-gray-200">
        <CardHeader>
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="secondary" className={post.category.color}>
              {post.category.label}
            </Badge>
            <span className="text-sm text-payne-gray">{post.readTime}</span>
          </div>
          <CardTitle className="text-gunmetal">{post.title}</CardTitle>
          <CardDescription className="text-payne-gray">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Avatar className={`h-8 w-8 border-2 ${post.author.borderColor}`}>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback className={`${post.author.bgColor} text-white`}>
                {post.author.initials}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium text-gunmetal">{post.author.name}</p>
              <p className="text-payne-gray">{post.author.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}