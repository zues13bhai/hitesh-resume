import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Star,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ShoppingCart,
  Filter,
  Search,
  Heart,
  Eye,
  Plus,
  Minus,
  Check,
  Shield,
  Truck,
  RefreshCw,
  Globe,
  Languages,
  MessageCircle,
  Brain,
  Sparkles,
  Bot,
  FileText,
  Zap,
  Target,
  TrendingUp,
  Users,
  Coffee,
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Watch,
  Home,
  Car,
  Gamepad2,
  Book,
  Dumbbell,
  Shirt
} from 'lucide-react';

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  features: string[];
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description: string;
}

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// Data
const projects: Project[] = [
  {
    title: "E-commerce Store",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Redux", "Stripe", "Firebase", "Material-UI"],
    github: "https://github.com/zues13bhai",
    live: "https://siwachinterprices.netlify.app",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Web App",
    featured: true
  },
  {
    title: "AI Resume Builder",
    description: "Intelligent resume builder powered by AI that creates professional resumes with smart suggestions and ATS optimization.",
    tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Firebase"],
    github: "https://github.com/zues13bhai",
    live: "https://resumebuilderai.netlify.app",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "AI",
    featured: true
  },
  {
    title: "AI Assistant App",
    description: "Conversational AI assistant with natural language processing, task automation, and personalized responses.",
    tech: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB"],
    github: "https://github.com/zues13bhai",
    live: "https://hitesh-ai.netlify.app",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "AI",
    featured: true
  },
  {
    title: "Smart Chatbot",
    description: "Intelligent chatbot with context awareness, multi-language support, and integration capabilities.",
    tech: ["Python", "NLP", "React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/zues13bhai",
    live: "https://dummychatbot.netlify.app",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "AI"
  }
];

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Electronics",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    features: ["Active Noise Cancellation", "30-hour battery", "Premium drivers", "Comfortable fit"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249,
    originalPrice: 329,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Electronics",
    rating: 4.6,
    reviews: 892,
    inStock: true,
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day battery"]
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 899,
    originalPrice: 1199,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Photography",
    rating: 4.9,
    reviews: 456,
    inStock: true,
    description: "Professional-grade camera lens for stunning photography.",
    features: ["85mm focal length", "f/1.4 aperture", "Weather sealed", "Image stabilization"]
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 449,
    originalPrice: 599,
    image: "https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Furniture",
    rating: 4.7,
    reviews: 623,
    inStock: true,
    description: "Ergonomic office chair designed for all-day comfort and productivity.",
    features: ["Lumbar support", "Adjustable height", "Breathable mesh", "360° swivel"]
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 159,
    originalPrice: 199,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Gaming",
    rating: 4.5,
    reviews: 1089,
    inStock: true,
    description: "High-performance mechanical keyboard for gaming enthusiasts.",
    features: ["RGB backlighting", "Mechanical switches", "Anti-ghosting", "Programmable keys"]
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 89,
    originalPrice: 129,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Electronics",
    rating: 4.4,
    reviews: 734,
    inStock: false,
    description: "Compact and powerful Bluetooth speaker with exceptional sound quality.",
    features: ["360° sound", "Waterproof", "12-hour battery", "Voice assistant"]
  }
];

const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", icon: <Code className="w-5 h-5" /> },
  { name: "TypeScript", level: 90, category: "Frontend", icon: <Code className="w-5 h-5" /> },
  { name: "Node.js", level: 88, category: "Backend", icon: <Code className="w-5 h-5" /> },
  { name: "Python", level: 85, category: "Backend", icon: <Code className="w-5 h-5" /> },
  { name: "AI/ML", level: 82, category: "AI", icon: <Brain className="w-5 h-5" /> },
  { name: "MongoDB", level: 80, category: "Database", icon: <Code className="w-5 h-5" /> },
  { name: "Firebase", level: 85, category: "Backend", icon: <Code className="w-5 h-5" /> },
  { name: "Tailwind CSS", level: 92, category: "Frontend", icon: <Code className="w-5 h-5" /> }
];

const experiences: Experience[] = [
  {
    title: "AI Developer Intern",
    company: "Tech Innovations Ltd",
    period: "2024 - Present",
    description: [
      "Developed AI-powered applications using OpenAI API and machine learning models",
      "Built responsive web applications with React and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality software solutions"
    ],
    technologies: ["React", "TypeScript", "OpenAI API", "Python", "Firebase"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Inc",
    period: "2023 - 2024",
    description: [
      "Created modern, responsive web applications using React and Tailwind CSS",
      "Implemented complex UI components and interactive features",
      "Optimized application performance and user experience"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "Git"]
  }
];

const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Kurukshetra University",
    period: "2021 - 2025",
    grade: "8.5 CGPA",
    description: "Specialized in Software Engineering and Artificial Intelligence"
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "DAV Public School",
    period: "2020 - 2021",
    grade: "92%",
    description: "Science Stream with Mathematics and Computer Science"
  }
];

const achievements: Achievement[] = [
  {
    title: "AI Innovation Award",
    organization: "Tech Conference 2024",
    date: "March 2024",
    description: "Recognized for outstanding contribution in AI application development",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Best Project Award",
    organization: "University Hackathon",
    date: "January 2024",
    description: "Won first place for developing an innovative AI-powered solution",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Full Stack Developer Certification",
    organization: "FreeCodeCamp",
    date: "December 2023",
    description: "Completed comprehensive full-stack development certification",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Innovations Ltd",
    content: "Hitesh is an exceptional developer with a keen eye for detail. His AI integration skills are outstanding and he consistently delivers high-quality work.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    company: "Digital Solutions Inc",
    content: "Working with Hitesh was a pleasure. His React expertise and problem-solving abilities make him a valuable team member.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "Creative Agency",
    content: "Hitesh brings designs to life with pixel-perfect precision. His attention to user experience is remarkable.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  // Add to cart
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // Toggle wishlist
  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: language === 'en' ? 'Home' : 'होम' },
    { id: 'about', label: language === 'en' ? 'About' : 'परिचय' },
    { id: 'projects', label: language === 'en' ? 'Projects' : 'प्रोजेक्ट्स' },
    { id: 'ecommerce', label: language === 'en' ? 'Store' : 'स्टोर' },
    { id: 'skills', label: language === 'en' ? 'Skills' : 'कौशल' },
    { id: 'experience', label: language === 'en' ? 'Experience' : 'अनुभव' },
    { id: 'achievements', label: language === 'en' ? 'Achievements' : 'उपलब्धियां' },
    { id: 'testimonials', label: language === 'en' ? 'Testimonials' : 'प्रशंसापत्र' },
    { id: 'contact', label: language === 'en' ? 'Contact' : 'संपर्क' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hitesh Siwach
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
              >
                <Languages className="w-5 h-5" />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Cart */}
              <div className="relative">
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">
                {language === 'en' ? "Hi, I'm" : "नमस्ते, मैं"}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hitesh Siwach
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? "A Developer who blends AI, Design, and Code to Build for the Future. Explore my work, skills, and Siwach Enterprises below."
                : "एक डेवलपर जो भविष्य के लिए AI, डिज़ाइन और कोड को मिलाता है। नीचे मेरे काम, कौशल और सिवाच एंटरप्राइजेज देखें।"
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'View My Work' : 'मेरा काम देखें'}
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Get In Touch' : 'संपर्क करें'}
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'About Me' : 'मेरे बारे में'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "I'm a passionate developer specializing in AI integration, modern web development, and creating intelligent solutions that make a difference."
                : "मैं एक जुनूनी डेवलपर हूं जो AI इंटीग्रेशन, आधुनिक वेब डेवलपमेंट और बुद्धिमान समाधान बनाने में विशेषज्ञ हूं।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Hitesh Siwach"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                {language === 'en' ? 'Clarity-Led Technologist' : 'स्पष्टता-नेतृत्व प्रौद्योगिकीविद्'}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {language === 'en' 
                  ? "With a strong foundation in computer science and a passion for artificial intelligence, I create solutions that bridge the gap between complex technology and user-friendly experiences. My expertise spans across modern web development, AI integration, and building scalable applications."
                  : "कंप्यूटर साइंस में मजबूत आधार और कृत्रिम बुद्धिमत्ता के लिए जुनून के साथ, मैं ऐसे समाधान बनाता हूं जो जटिल तकनीक और उपयोगकर्ता-अनुकूल अनुभवों के बीच की खाई को पाटते हैं।"
                }
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">
                      {language === 'en' ? 'Projects' : 'प्रोजेक्ट्स'}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">15+</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold">
                      {language === 'en' ? 'AI Tools' : 'AI उपकरण'}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">8+</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'AI/ML', 'Node.js', 'Python'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Featured Projects' : 'चुनिंदा प्रोजेक्ट्स'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Explore my latest work showcasing AI integration, modern web development, and innovative solutions."
                : "AI इंटीग्रेशन, आधुनिक वेब डेवलपमेंट और नवाचार समाधानों को दिखाने वाले मेरे नवीनतम काम देखें।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section id="ecommerce" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Siwach Enterprises' : 'सिवाच एंटरप्राइजेज'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {language === 'en' ? 'Trusted Tech & Utility Store' : 'विश्वसनीय तकनीक और उपयोगिता स्टोर'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === 'en' ? 'Demo store showcasing e-commerce capabilities' : 'ई-कॉमर्स क्षमताओं को दिखाने वाला डेमो स्टोर'}
            </p>
          </motion.div>

          {/* Store Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search products...' : 'उत्पाद खोजें...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Secure Payments' : 'सुरक्षित भुगतान'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Truck className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Fast Delivery' : 'तेज़ डिलीवरी'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600">
              <RefreshCw className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Easy Returns' : 'आसान रिटर्न'}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-gray-800" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full transition-colors ${
                        wishlist.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Stock Status */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock 
                        ? (language === 'en' ? 'In Stock' : 'स्टॉक में')
                        : (language === 'en' ? 'Out of Stock' : 'स्टॉक खत्म')
                      }
                    </span>
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock 
                      ? (language === 'en' ? 'Add to Cart' : 'कार्ट में जोड़ें')
                      : (language === 'en' ? 'Out of Stock' : 'स्टॉक खत्म')
                    }
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {language === 'en' ? 'No products found matching your criteria.' : 'आपके मानदंडों से मेल खाने वाले कोई उत्पाद नहीं मिले।'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Skills & Technologies' : 'कौशल और तकनीकें'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "My expertise spans across modern web technologies, AI/ML frameworks, and development tools."
                : "मेरी विशेषज्ञता आधुनिक वेब तकनीकों, AI/ML फ्रेमवर्क और डेवलपमेंट टूल्स में फैली है।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">{skill.category}</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Experience & Education' : 'अनुभव और शिक्षा'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "My professional journey and educational background in technology and development."
                : "तकनीक और विकास में मेरी व्यावसायिक यात्रा और शैक्षणिक पृष्ठभूमि।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                {language === 'en' ? 'Experience' : 'अनुभव'}
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-purple-600" />
                {language === 'en' ? 'Education' : 'शिक्षा'}
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    {edu.grade && (
                      <div className="mb-3">
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          Grade: {edu.grade}
                        </span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Achievements & Certifications' : 'उपलब्धियां और प्रमाणपत्र'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Recognition and certifications that showcase my commitment to excellence and continuous learning."
                : "मान्यता और प्रमाणपत्र जो उत्कृष्टता और निरंतर सीखने के लिए मेरी प्रतिबद्धता को दर्शाते हैं।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                  </div>
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{achievement.organization}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'What People Say' : 'लोग क्या कहते हैं'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Feedback from colleagues, clients, and collaborators who have worked with me."
                : "सहयोगियों, ग्राहकों और सहयोगियों की प्रतिक्रिया जिन्होंने मेरे साथ काम किया है।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? "Let's Work Together" : 'आइए मिलकर काम करें'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Ready to bring your ideas to life? Let's discuss how we can create something amazing together."
                : "अपने विचारों को जीवंत बनाने के लिए तैयार हैं? आइए चर्चा करें कि हम मिलकर कुछ अद्भुत कैसे बना सकते हैं।"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'en' ? 'Get in Touch' : 'संपर्क में रहें'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {language === 'en' 
                    ? "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation."
                    : "मैं हमेशा नए अवसरों, दिलचस्प परियोजनाओं पर चर्चा करने या तकनीक और नवाचार के बारे में बात करने के लिए तैयार हूं।"
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hiteshsiwach13@gmail.com" className="text-blue-600 hover:underline">
                      hiteshsiwach13@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919813692604" className="text-green-600 hover:underline">
                      +91 98136 92604
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Haryana, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">
                  {language === 'en' ? 'Follow Me' : 'मुझे फॉलो करें'}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/zues13bhai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/hitesh-siwach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Name' : 'नाम'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'en' ? 'Your name' : 'आपका नाम'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Email' : 'ईमेल'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'en' ? 'your.email@example.com' : 'आपका.ईमेल@example.com'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Subject' : 'विषय'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'en' ? 'Project discussion' : 'प्रोजेक्ट चर्चा'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Message' : 'संदेश'}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'en' ? 'Tell me about your project...' : 'अपने प्रोजेक्ट के बारे में बताएं...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {language === 'en' ? 'Send Message' : 'संदेश भेजें'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold">Hitesh Siwach</span>
              </div>
              <p className="text-gray-400 mb-4">
                {language === 'en' 
                  ? "Building the future with AI, one line of code at a time."
                  : "AI के साथ भविष्य का निर्माण, एक समय में एक कोड लाइन।"
                }
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
              </h3>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Connect' : 'जुड़ें'}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zues13bhai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hiteshsiwach13@gmail.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Hitesh Siwach. {language === 'en' ? 'All rights reserved.' : 'सभी अधिकार सुरक्षित।'}
            </p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(selectedProduct.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({selectedProduct.reviews} reviews)</span>
                  </div>
                  
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    selectedProduct.inStock
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedProduct.inStock 
                      ? (language === 'en' ? 'In Stock' : 'स्टॉक में')
                      : (language === 'en' ? 'Out of Stock' : 'स्टॉक खत्म')
                    }
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-3xl font-bold text-blue-600">₹{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                    <>
                      <span className="text-lg text-gray-500 line-through">₹{selectedProduct.originalPrice}</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                        {Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProduct.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    {language === 'en' ? 'Key Features:' : 'मुख्य विशेषताएं:'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    disabled={!selectedProduct.inStock}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                      selectedProduct.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {selectedProduct.inStock 
                      ? (language === 'en' ? 'Add to Cart' : 'कार्ट में जोड़ें')
                      : (language === 'en' ? 'Out of Stock' : 'स्टॉक खत्म')
                    }
                  </button>
                  
                  <button
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className={`p-3 rounded-lg transition-colors ${
                      wishlist.includes(selectedProduct.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;