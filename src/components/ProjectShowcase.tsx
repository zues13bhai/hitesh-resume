import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Brain, 
  ShoppingCart, 
  MessageCircle,
  Zap,
  Code,
  Eye,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { 
  EcommerceStoreThumbnail,
  AIResumeBuilderThumbnail,
  AIAssistantAppThumbnail,
  SmartChatbotThumbnail
} from './ProjectThumbnails';

interface TechStackItem {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: {
    label: string;
    icon: React.ReactNode;
    color: string;
  };
  featured: boolean;
  techStack: TechStackItem[];
  liveDemo: string;
  codeUrl: string;
  thumbnail: React.ComponentType<any>;
  aiPowered?: boolean;
  isNew?: boolean;
}

const projects: Project[] = [
  {
    id: 'ecommerce-store',
    title: 'E-commerce Store',
    description: 'Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    category: {
      label: 'Featured Web App',
      icon: <ShoppingCart className="w-4 h-4" />,
      color: 'from-blue-500 to-purple-600'
    },
    featured: true,
    techStack: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Redux', color: 'bg-purple-500' },
      { name: 'Stripe', color: 'bg-indigo-500' },
      { name: 'Firebase', color: 'bg-orange-500' },
      { name: 'Material-UI', color: 'bg-blue-400' }
    ],
    liveDemo: '#',
    codeUrl: '#',
    thumbnail: EcommerceStoreThumbnail
  },
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    description: 'Intelligent resume builder powered by AI that creates professional resumes with smart suggestions and ATS optimization.',
    category: {
      label: 'Featured AI',
      icon: <Brain className="w-4 h-4" />,
      color: 'from-cyan-500 to-blue-600'
    },
    featured: true,
    aiPowered: true,
    techStack: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'OpenAI API', color: 'bg-green-500' },
      { name: 'Tailwind CSS', color: 'bg-teal-500' },
      { name: 'Firebase', color: 'bg-orange-500' }
    ],
    liveDemo: '#',
    codeUrl: '#',
    thumbnail: AIResumeBuilderThumbnail
  },
  {
    id: 'ai-assistant-app',
    title: 'AI Assistant App',
    description: 'Conversational AI assistant with natural language processing, task automation, and personalized responses.',
    category: {
      label: 'Featured AI',
      icon: <Brain className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-600'
    },
    featured: true,
    aiPowered: true,
    isNew: true,
    techStack: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'OpenAI', color: 'bg-green-500' },
      { name: 'WebSocket', color: 'bg-yellow-500' },
      { name: 'MongoDB', color: 'bg-green-700' }
    ],
    liveDemo: '#',
    codeUrl: '#',
    thumbnail: AIAssistantAppThumbnail
  },
  {
    id: 'smart-chatbot',
    title: 'Smart Chatbot',
    description: 'Intelligent chatbot with context awareness, multi-language support, and integration capabilities.',
    category: {
      label: 'AI',
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'from-teal-500 to-cyan-600'
    },
    featured: false,
    aiPowered: true,
    techStack: [
      { name: 'Python', color: 'bg-yellow-600' },
      { name: 'NLP', color: 'bg-purple-600' },
      { name: 'React', color: 'bg-blue-500' },
      { name: 'FastAPI', color: 'bg-green-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' }
    ],
    liveDemo: '#',
    codeUrl: '#',
    thumbnail: SmartChatbotThumbnail
  }
];

const TechStackTooltip: React.FC<{ tech: TechStackItem }> = ({ tech }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={`${tech.color} text-white text-xs px-2 py-1 rounded-full font-medium cursor-pointer transition-all duration-200 hover:scale-110`}>
        {tech.name}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap z-10"
          >
            {tech.name}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ThumbnailComponent = project.thumbnail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Main Card */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {project.featured && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </div>
          )}
          
          {project.isNew && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              <Zap className="w-3 h-3" />
              <span>New</span>
            </div>
          )}
          
          {project.aiPowered && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              <Sparkles className="w-3 h-3" />
              <span>AI Powered</span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className={`flex items-center space-x-1 bg-gradient-to-r ${project.category.color} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm`}>
            {project.category.icon}
            <span>{project.category.label}</span>
          </div>
        </div>

        {/* Thumbnail with Overlay */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <ThumbnailComponent 
              title={project.title}
              description={project.description}
              className="w-full"
            />
            
            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8"
            >
              <div className="flex space-x-3">
                <motion.a
                  href={project.liveDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg hover:bg-white transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
                
                <motion.a
                  href={project.codeUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-gray-900 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, techIndex) => (
              <TechStackTooltip key={techIndex} tech={tech} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.a
              href={project.liveDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 group/btn"
            >
              <Eye className="w-4 h-4" />
              <span>Live Demo</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </motion.a>
            
            <motion.a
              href={project.codeUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-2.5 px-4 rounded-xl font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <Code className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Featured Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Premium Portfolio
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of cutting-edge projects that showcase expertise in AI integration, 
            modern web development, and innovative user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
            <Github className="w-4 h-4" />
            <span>More projects available on GitHub</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};