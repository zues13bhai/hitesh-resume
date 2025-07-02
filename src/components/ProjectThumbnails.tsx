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
        <div className="h-full bg-gradient-to-br from-slate-50 to-gray-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-800">Store Dashboard</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                <div className="w-full h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                <div className="flex justify-between items-center mt-2">
                  <div className="h-2 bg-green-200 rounded w-1/3"></div>
                  <Package className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Stats */}
          <div className="flex space-x-3">
            <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
              <div className="h-2 bg-blue-200 rounded mb-1"></div>
              <div className="h-1 bg-gray-100 rounded"></div>
            </div>
            <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
              <div className="h-2 bg-green-200 rounded mb-1"></div>
              <div className="h-1 bg-gray-100 rounded"></div>
            </div>
          </div>
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
        <div className="h-full bg-gradient-to-br from-blue-50 to-white p-4 flex">
          {/* Resume Preview */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-4 mr-3">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
              <div>
                <div className="h-3 bg-gray-800 rounded w-24 mb-1"></div>
                <div className="h-2 bg-gray-400 rounded w-32"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="h-2 bg-blue-600 rounded w-16 mb-2"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
              
              <div>
                <div className="h-2 bg-blue-600 rounded w-20 mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Assistant Sidebar */}
          <div className="w-1/3 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg p-3 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-4 h-4" />
              <span className="text-xs font-medium">AI Assistant</span>
            </div>
            
            <div className="space-y-2">
              <div className="bg-blue-500 rounded-lg p-2">
                <div className="flex items-center space-x-1 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <div className="h-1 bg-blue-300 rounded w-12"></div>
                </div>
                <div className="h-1 bg-blue-300 rounded mb-1"></div>
                <div className="h-1 bg-blue-300 rounded w-3/4"></div>
              </div>
              
              <div className="bg-blue-500 rounded-lg p-2">
                <div className="h-1 bg-blue-300 rounded mb-1"></div>
                <div className="h-1 bg-blue-300 rounded w-2/3"></div>
              </div>
            </div>
            
            <div className="mt-3 bg-blue-800 rounded p-2">
              <div className="h-1 bg-blue-400 rounded w-1/2"></div>
            </div>
          </div>
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
        <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 bg-gray-800 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">AI Assistant</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-3 mb-4 flex-1">
            {/* AI Message */}
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                <div className="h-2 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
            
            {/* User Message */}
            <div className="flex items-start space-x-2 justify-end">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3 max-w-xs">
                <div className="h-2 bg-purple-200 rounded mb-1"></div>
                <div className="h-2 bg-purple-200 rounded w-2/3"></div>
              </div>
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* AI Message with Actions */}
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Brain className="w-3 h-3 text-white" />
              </div>
              <div className="space-y-2">
                <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-purple-600 rounded px-2 py-1">
                    <div className="h-1 bg-purple-200 rounded w-8"></div>
                  </div>
                  <div className="bg-blue-600 rounded px-2 py-1">
                    <div className="h-1 bg-blue-200 rounded w-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-2">
            <div className="flex-1 bg-gray-700 rounded-lg p-2">
              <div className="h-2 bg-gray-500 rounded w-1/3"></div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
          </div>
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
        <div className="h-full bg-gradient-to-br from-gray-50 to-white p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 bg-white rounded-lg p-3 shadow-sm border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Smart Chatbot</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <div className="bg-gray-100 rounded-full px-2 py-1 flex items-center space-x-1">
                <Languages className="w-3 h-3 text-gray-600" />
                <span className="text-xs text-gray-600">EN</span>
              </div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-3 mb-4 flex-1">
            {/* Bot Message in English */}
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <div className="flex items-center space-x-1 mb-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">EN</span>
                </div>
                <div className="h-2 bg-gray-400 rounded mb-1"></div>
                <div className="h-2 bg-gray-400 rounded w-3/4"></div>
              </div>
            </div>
            
            {/* User Message */}
            <div className="flex items-start space-x-2 justify-end">
              <div className="bg-teal-500 rounded-lg p-3 max-w-xs text-white">
                <div className="h-2 bg-teal-200 rounded mb-1"></div>
                <div className="h-2 bg-teal-200 rounded w-2/3"></div>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
            
            {/* Bot Message in Hindi */}
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <div className="flex items-center space-x-1 mb-1">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">HI</span>
                </div>
                <div className="h-2 bg-gray-400 rounded mb-1"></div>
                <div className="h-2 bg-gray-400 rounded w-4/5"></div>
              </div>
            </div>
            
            {/* Language Detection Indicator */}
            <div className="flex justify-center">
              <div className="bg-blue-50 border border-blue-200 rounded-full px-3 py-1 flex items-center space-x-2">
                <Languages className="w-3 h-3 text-blue-600" />
                <span className="text-xs text-blue-600">Auto-detected: Hindi</span>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="bg-white rounded-lg p-3 shadow-sm border flex items-center space-x-2">
            <div className="flex-1 bg-gray-50 rounded-lg p-2 flex items-center space-x-2">
              <div className="h-2 bg-gray-300 rounded w-1/2"></div>
              <div className="bg-gray-200 rounded px-2 py-1">
                <Languages className="w-3 h-3 text-gray-500" />
              </div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
          </div>
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