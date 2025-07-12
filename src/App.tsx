import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Brain,
  Zap,
  Award,
  ShoppingBag,
  Star,
  Filter,
  Search,
  Heart,
  Eye,
  Globe,
  Languages,
  ChevronDown,
  Quote,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Sparkles,
  Rocket,
  Target,
  CheckCircle
} from 'lucide-react';
import { Orb } from './components/Orb';


interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: string;
}

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

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  verified: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productFilter, setProductFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [languageDropdown, setLanguageDropdown] = useState(false);

  // Sample data
  const products: Product[] = [
    {
      id: 1,
      name: "Smart Wireless Earbuds Pro",
      price: 2999,
      originalPrice: 4999,
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "electronics",
      rating: 4.8,
      reviews: 234,
      description: "Premium wireless earbuds with active noise cancellation and 30-hour battery life.",
      features: ["Active Noise Cancellation", "30H Battery", "IPX7 Waterproof", "Touch Controls"],
      inStock: true,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 12999,
      originalPrice: 18999,
      image: "https://images.pexels.com/photos/586344/pexels-photo-586344.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "furniture",
      rating: 4.6,
      reviews: 156,
      description: "Premium ergonomic office chair with lumbar support and adjustable height.",
      features: ["Lumbar Support", "Adjustable Height", "Breathable Mesh", "5-Year Warranty"],
      inStock: true
    },
    {
      id: 3,
      name: "Smart Home Security Camera",
      price: 5999,
      originalPrice: 8999,
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "electronics",
      rating: 4.7,
      reviews: 89,
      description: "AI-powered security camera with night vision and mobile alerts.",
      features: ["1080p HD", "Night Vision", "Motion Detection", "Cloud Storage"],
      inStock: true,
      badge: "New"
    },
    {
      id: 4,
      name: "Premium Coffee Maker",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "appliances",
      rating: 4.5,
      reviews: 67,
      description: "Professional-grade coffee maker with programmable settings and thermal carafe.",
      features: ["Programmable", "Thermal Carafe", "Auto Shut-off", "Water Filter"],
      inStock: false
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      price: 1999,
      originalPrice: 2999,
      image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "electronics",
      rating: 4.4,
      reviews: 123,
      description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
      features: ["Fast Charging", "LED Indicator", "Non-slip Base", "Universal Compatibility"],
      inStock: true
    },
    {
      id: 6,
      name: "Bluetooth Mechanical Keyboard",
      price: 6999,
      originalPrice: 9999,
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "electronics",
      rating: 4.9,
      reviews: 201,
      description: "Premium mechanical keyboard with RGB backlighting and wireless connectivity.",
      features: ["Mechanical Switches", "RGB Backlighting", "Wireless", "Programmable Keys"],
      inStock: true,
      badge: "Editor's Choice"
    }
  ];

  const projects: Project[] = [
    {
       title: "Siwach Enterprices (E-commerce store)",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Redux", "Stripe", "Firebase", "Material-UI"],
      github: "https://github.com/zues13bhai",
      live: "https://siwachenterprices.netlify.app",
      image: "https://imgs.search.brave.com/2zf04HH3Ct1gK3flmQYqKyC3cE98nQzMbak09SZWUQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA0Lzk4Lzc4/LzM2MF9GXzYwNDk4/NzgwMF9QVnZzT0J0/VUg2bXZSMVNBZnV2/T09HTThhSTViQlFM/Ti5qcGc",
      category: "Web App",
      featured: true
    },
    { title: "AI Resume Builder",
      description: "Intelligent resume builder powered by AI that creates professional resumes with smart suggestions and ATS optimization.",
      tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Firebase"],
      github: "https://github.com/zues13bhai",
      live: "https://ats-resumebuilder-1.netlify.app",
      image: "https://imgs.search.brave.com/H_aTGVi7bPjJdsIpM9VbJ8uc0-b-tpNMo7h5unHoQkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zd29v/cGVkLmNvL3dwLWNv/bnRlbnQvdGhlbWVz/L3N3b29wZWQtbGFu/ZGluZy1wYWdlcy9p/bWFnZXMvc3dvb3Bl/ZC1oZXJvLnBuZw",
      category: "AI",
      featured: true
     
    },
    {
      title: "AI Assistant App",
      description: "Conversational AI assistant with natural language processing, task automation, and personalized responses.",
      tech: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB"],
      github: "https://github.com/zues13bhai",
      live: "https://hitesh-ai.netlify.app",
      image: "https://imgs.search.brave.com/wr3hwMuIPQ81EXFCELN_pb0Anfyj2nSCU7ZbD4M0m8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzU3LzI3LzMz/LzM2MF9GXzg1NzI3/MzM1OF9HT3VTU0RX/cnZhcldQdTQ5MTFu/VEREMnB4YVN1SnBQ/aS5qcGc",
      category: "AI",
      featured: true
    },
   
    {
      title: "Smart Chatbot",
      description: "Intelligent chatbot with context awareness, multi-language support, and integration capabilities.",
      tech: ["Python", "NLP", "React", "FastAPI", "PostgreSQL"],
      github: "https://github.com/zues13bhai/siwach-chatbot",
      live: "https://sunny-blini-2cac45.netlify.app",
      image: "https://imgs.search.brave.com/6d68vqEzk_822zT6xNApqcraNmTFl53bTcU4YfKdX4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/NzYzNzE2Ni9waG90/by9haS1jaGF0Ym90/LXVzYWdlLWFydGlm/aWNpYWwtaW50ZWxs/aWdlbmNlLWNoYXQt/Ym90LWNvbmNlcHQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVh4dDJ0eTA0aFFC/RlpvRl9KT3Y0UnN4/aVJXMnBVcUpfTU1G/WmNZWENORVk9",
      category: "AI"
    }
  ];

  const skills: Skill[] = [
    { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", level: 90, category: "Frontend", icon: "📘" },
    { name: "Python", level: 88, category: "Backend", icon: "🐍" },
    { name: "AI/ML", level: 85, category: "AI", icon: "🤖" },
    { name: "Node.js", level: 82, category: "Backend", icon: "🟢" },
    { name: "Firebase", level: 87, category: "Database", icon: "🔥" },
    { name: "Tailwind CSS", level: 93, category: "Frontend", icon: "🎨" },
    { name: "MongoDB", level: 80, category: "Database", icon: "🍃" }
  ];

  const achievements: Achievement[] = [
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "IBM via Coursera",
      date: "2024",
      description: "Comprehensive program covering machine learning, deep learning, and AI application development.",
      badge: "🏆",
      verified: true
    },
    {
      title: "IBM Digital Professional Skills",
      issuer: "IBM",
      date: "2024",
      description: "Professional development program focusing on digital transformation and modern workplace skills.",
      badge: "💼",
      verified: true
    },
    {
      title: "Drive Coordinator",
      issuer: "T&P Cell, GJUST Hisar",
      date: "2023-2024",
      description: "Led placement drives and coordinated between students and recruiting companies.",
      badge: "👥",
      verified: true
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "HR Manager",
      company: "TechCorp Solutions",
      content: "Hitesh demonstrated exceptional problem-solving skills and delivered high-quality code. His AI integration expertise is impressive.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Developer",
      company: "InnovateTech",
      content: "Working with Hitesh was a pleasure. His clarity in communication and technical depth made our project successful.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "Hitesh brings both technical excellence and business understanding. His AI-powered solutions exceeded our expectations.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5
    }
  ];

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        store: "Store",
        achievements: "Achievements",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I'm Hitesh Siwach",
        title: "A Developer who blends AI, Design, and Code to Build for the Future",
        subtitle: "Explore my work, skills, and Siwach Enterprises below.",
        cta: "Explore My Work"
      },
      store: {
        title: "Siwach Enterprises",
        subtitle: "Trusted Tech & Utility Store",
        description: "Discover premium products curated for modern professionals and tech enthusiasts."
      }
    },
    hi: {
      nav: {
        home: "होम",
        about: "परिचय",
        projects: "प्रोजेक्ट्स",
        skills: "कौशल",
        store: "स्टोर",
        achievements: "उपलब्धियां",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क"
      },
      hero: {
        greeting: "नमस्ते, मैं हितेश सिवाच हूं",
        title: "एक डेवलपर जो AI, डिज़ाइन और कोड को मिलाकर भविष्य के लिए बनाता है",
        subtitle: "नीचे मेरे काम, कौशल और सिवाच एंटरप्राइजेज देखें।",
        cta: "मेरा काम देखें"
      },
      store: {
        title: "सिवाच एंटरप्राइजेज",
        subtitle: "विश्वसनीय टेक और उपयोगिता स्टोर",
        description: "आधुनिक पेशेवरों और तकनीकी उत्साही लोगों के लिए चुने गए प्रीमियम उत्पाद खोजें।"
      }
    }
  };

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'store', 'achievements', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesFilter = productFilter === 'all' || product.category === productFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HS</span>
                </div>
                <span className="font-bold text-lg">Hitesh Siwach</span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {Object.entries(t.nav).map(([key, label]) => (
                  <motion.button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === key 
                        ? 'bg-blue-500 text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                {/* Language Switcher */}
                <div className="relative">
                  <motion.button
                    onClick={() => setLanguageDropdown(!languageDropdown)}
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Languages className="w-4 h-4" />
                    <span className="text-sm font-medium">{language.toUpperCase()}</span>
                    <ChevronDown className="w-3 h-3" />
                  </motion.button>
                  
                  <AnimatePresence>
                    {languageDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                      >
                        <button
                          onClick={() => {
                            setLanguage('en');
                            setLanguageDropdown(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          English
                        </button>
                        <button
                          onClick={() => {
                            setLanguage('hi');
                            setLanguageDropdown(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          हिंदी
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Theme Toggle */}
                <motion.button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-2 space-y-1">
                  {Object.entries(t.nav).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => scrollToSection(key)}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 -z-10">
  <Orb hue={180} hoverIntensity={0.4} rotateOnHover />
</div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3"
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">AI-Friendly • Startup-Ready • Frontend Focused</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
                >
                  {t.hero.greeting}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 max-w-4xl mx-auto leading-relaxed"
                >
                  {t.hero.title}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  {t.hero.subtitle}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>{t.hero.cta}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-gray-400 dark:border-gray-600 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex items-center justify-center space-x-6 pt-8"
              >
                {[
                  { icon: Github, href: "https://github.com/zues13bhai", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/hitesh-siwach-84b3aa32a", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:hiteshsiwach@example.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <TechBackground variant="minimal" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="glass-card-light dark:glass-card rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                    "I'm Hitesh Siwach — a builder who thrives where clarity meets innovation. I don't just use AI tools — I <em className="text-blue-600 dark:text-blue-400 font-semibold">understand, prompt, integrate,</em> and <em className="text-purple-600 dark:text-purple-400 font-semibold">extend</em> them. I bring full-stack structure with frontend finesse to every project I work on."
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Hisar, Haryana</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>B.Tech CSE (AI/ML)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-card-light dark:glass-card rounded-xl p-6 text-center"
                  >
                    <Brain className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">AI Integration</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expert in AI tools and prompt engineering</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-card-light dark:glass-card rounded-xl p-6 text-center"
                  >
                    <Code className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Full-Stack</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React, Node.js, Python, and modern frameworks</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="glass-card-light dark:glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <Target className="w-6 h-6 text-blue-500" />
                    <span>What I Bring</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: "🎯", title: "Clarity-Driven Approach", desc: "I break down complex problems into clear, actionable solutions" },
                      { icon: "🤝", title: "Strong Communication", desc: "Bilingual (English + Hindi) with excellent presentation skills" },
                      { icon: "⚡", title: "Modern Practices", desc: "GitHub workflows, CI/CD, API integration, and agile development" },
                      { icon: "🚀", title: "Startup Ready", desc: "Fast learner, adaptable, and committed to meaningful work" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="glass-card-light dark:glass-card rounded-xl p-6">
                  <h4 className="font-semibold mb-4 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>Currently Learning</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "GraphQL", "Docker", "AWS", "Microservices"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Showcasing AI-powered applications and full-stack solutions that solve real-world problems
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="project-card glass-card-light dark:glass-card rounded-2xl overflow-hidden group"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ⭐ Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-3 py-1 text-sm text-blue-300">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-600 dark:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <TechBackground variant="minimal" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                What I Build With
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Modern technologies and AI tools that power intelligent applications
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="skill-badge glass-card-light dark:glass-card rounded-xl p-6 text-center group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{skill.category}</p>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </motion.div>
              ))}
            </div>

            {/* AI Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-light dark:glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center space-x-2">
                <Brain className="w-6 h-6 text-blue-500" />
                <span>AI Tools & Platforms</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "ChatGPT", "GitHub Copilot", "Claude", "Midjourney", 
                  "Hugging Face", "OpenAI API", "TensorFlow", "PyTorch",
                  "Langchain", "Pinecone", "Weaviate", "Anthropic"
                ].map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 text-center hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-sm font-medium">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* E-commerce Store Section */}
        <section id="store" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-6">
                <ShoppingBag className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-300">E-commerce Showcase</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t.store.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2 font-semibold">
                {t.store.subtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t.store.description}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded-full mt-6" />
            </motion.div>

            {/* Store Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0"
            >
              <div className="flex flex-wrap gap-2">
                {['all', 'electronics', 'furniture', 'appliances'].map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => setProductFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      productFilter === filter
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </motion.button>
                ))}
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card-light dark:glass-card rounded-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <motion.button
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-4 h-4 text-white" />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium capitalize">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <motion.button
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          product.inStock
                            ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg'
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        }`}
                        whileHover={product.inStock ? { scale: 1.05 } : {}}
                        whileTap={product.inStock ? { scale: 0.95 } : {}}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-gray-200 dark:border-gray-700"
            >
              {[
                { icon: "🔒", text: "Secure Payments" },
                { icon: "🚚", text: "Free Shipping" },
                { icon: "↩️", text: "Easy Returns" },
                { icon: "⭐", text: "5-Star Reviews" },
                { icon: "📞", text: "24/7 Support" }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Product Modal */}
          <AnimatePresence>
            {selectedProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProduct(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  className="glass-card-light dark:glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
                      className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium capitalize">
                        {selectedProduct.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProduct.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                          ₹{selectedProduct.price.toLocaleString()}
                        </span>
                        {selectedProduct.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ₹{selectedProduct.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <motion.button
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                          selectedProduct.inStock
                            ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg'
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        }`}
                        whileHover={selectedProduct.inStock ? { scale: 1.05 } : {}}
                        whileTap={selectedProduct.inStock ? { scale: 0.95 } : {}}
                        disabled={!selectedProduct.inStock}
                      >
                        {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 relative">
          <TechBackground variant="minimal" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Achievements & Certifications
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Professional certifications and recognitions that validate my expertise
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card-light dark:glass-card rounded-2xl p-6 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{achievement.badge}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {achievement.title}
                        </h3>
                        {achievement.verified && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {achievement.issuer}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {achievement.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                What People Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Feedback from colleagues, mentors, and collaborators
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card-light dark:glass-card rounded-2xl p-6 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-6 h-6 text-blue-500 mb-3" />
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <TechBackground variant="cyberpunk" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to bring AI-powered solutions to your next project? Let's connect and discuss opportunities.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "theoriginalhitesh@gmail.com",
                        href: "mailto:hiteshsiwach@example.com"
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        value: "linkedin.com/in/hitesh-siwach-84b3aa32a",
                        href: "https://linkedin.com/in/hitesh-siwach-84b3aa32a"
                      },
                      {
                        icon: Github,
                        label: "GitHub",
                        value: "github.com/zues13bhai",
                        href: "https://github.com/zues13bhai"
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Hisar, Haryana, India",
                        href: null
                      }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <contact.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-blue-400 transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-white">{contact.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8"
                >
                  <h4 className="text-xl font-bold mb-4 text-white">Available For</h4>
                  <div className="space-y-3">
                    {[
                      "AI/ML Internships",
                      "Frontend Development Roles",
                      "Full-Stack Projects",
                      "Freelance Opportunities",
                      "Tech Consultations"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">HS</span>
                  </div>
                  <span className="font-bold text-lg">Hitesh Siwach</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Building intelligent systems that think, assist, and impress.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/zues13bhai" },
                    { icon: Linkedin, href: "https://linkedin.com/in/hitesh-siwach-84b3aa32a" },
                    { icon: Mail, href: "mailto:hiteshsiwach@example.com" }
                  ].map(({ icon: Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {Object.entries(t.nav).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => scrollToSection(key)}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <div className="space-y-2 text-gray-400">
                  <p>AI Integration</p>
                  <p>React Development</p>
                  <p>Full-Stack Solutions</p>
                  <p>E-commerce Development</p>
                  <p>Technical Consulting</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Hitesh Siwach. All rights reserved. Built with React, TypeScript, and Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;