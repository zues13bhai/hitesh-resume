import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Package, 
  BarChart3, 
  FileText, 
  Brain, 
  Sparkles,
  MessageCircle,
  Bot,
  Globe,
  Languages
} from 'lucide-react';

interface ProjectThumbnailProps {
  title: string;
  description: string;
  className?: string;
}

const MacBookFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`relative ${className}`}>
    {/* MacBook Frame */}
    <div className="relative bg-gray-800 rounded-t-xl p-1 shadow-2xl">
      {/* Screen Bezel */}
      <div className="bg-black rounded-t-lg p-4 relative">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 mx-4 bg-gray-700 rounded-md h-6 flex items-center px-3">
            <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
            <div className="text-xs text-gray-400">localhost:3000</div>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        {/* Screen Content */}
        <div className="bg-white rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {children}
        </div>
      </div>
    </div>
    
    {/* MacBook Base */}
    <div className="bg-gray-700 h-4 rounded-b-xl relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-gray-600 rounded-full mx-auto w-16"></div>
    </div>
  </div>
);

export const EcommerceStoreThumbnail: React.FC<ProjectThumbnailProps> = ({ 
  title, 
  description, 
  className = '' 
}) => (
  <motion.div 
    className={`relative group ${className}`}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 rounded-2xl blur-xl opacity-60"></div>
    
    <div className="relative p-6">
      <MacBookFrame>
        <div className="h-full relative">
          <img 
            src="/Screenshot 2025-06-08 170657.png" 
            alt="E-commerce Store Interface"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </MacBookFrame>
      
      {/* Project Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const AIResumeBuilderThumbnail: React.FC<ProjectThumbnailProps> = ({ 
  title, 
  description, 
  className = '' 
}) => (
  <motion.div 
    className={`relative group ${className}`}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 rounded-2xl blur-xl opacity-60"></div>
    
    <div className="relative p-6">
      <MacBookFrame>
        <div className="h-full relative">
          <img 
            src="/Screenshot 2025-06-08 172401.png" 
            alt="AI Resume Builder Interface"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </MacBookFrame>
      
      {/* Project Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const AIAssistantAppThumbnail: React.FC<ProjectThumbnailProps> = ({ 
  title, 
  description, 
  className = '' 
}) => (
  <motion.div 
    className={`relative group ${className}`}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 rounded-2xl blur-xl opacity-60"></div>
    
    <div className="relative p-6">
      <MacBookFrame>
        <div className="h-full relative">
          <img 
            src="/Screenshot 2025-06-08 172522.png" 
            alt="AI Assistant App Interface"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </MacBookFrame>
      
      {/* Project Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const SmartChatbotThumbnail: React.FC<ProjectThumbnailProps> = ({ 
  title, 
  description, 
  className = '' 
}) => (
  <motion.div 
    className={`relative group ${className}`}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-teal-50 to-cyan-100 rounded-2xl blur-xl opacity-60"></div>
    
    <div className="relative p-6">
      <MacBookFrame>
        <div className="h-full relative">
          <img 
            src="/Screenshot 2025-06-30 011123.png" 
            alt="Smart Chatbot Interface"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </MacBookFrame>
      
      {/* Project Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const ProjectThumbnailsGrid: React.FC = () => {
  const projects = [
    {
      component: EcommerceStoreThumbnail,
      title: "E-commerce Store",
      description: "Full-featured online store with admin dashboard and analytics"
    },
    {
      component: AIResumeBuilderThumbnail,
      title: "AI Resume Builder",
      description: "Smart resume builder with AI-powered writing assistance"
    },
    {
      component: AIAssistantAppThumbnail,
      title: "AI Assistant App",
      description: "Conversational AI with task automation and smart replies"
    },
    {
      component: SmartChatbotThumbnail,
      title: "Smart Chatbot",
      description: "Multilingual chatbot with NLP and language detection"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projects.map((project, index) => {
        const Component = project.component;
        return (
          <Component
            key={index}
            title={project.title}
            description={project.description}
            className="w-full"
          />
        );
      })}
    </div>
  );
};