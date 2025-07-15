import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Star,
  Languages,
  ChevronDown,
  Quote,
  MapPin,
  Calendar,
  TrendingUp,
  Sparkles,
  Rocket,
  Target,
  CheckCircle,
  ArrowUp,
  Briefcase,
  GraduationCap,
  Trophy,
  Download,
} from "lucide-react";
import Orb from "./components/Orb";
import GridMotion from "./components/GridMotion";
import ShapeBlur from "./components/ShapeBlur";
import ProfileCard from "./components/ProfileCard";

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

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  type: "work" | "education" | "certification";
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
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("all");
  const [searchTerm] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [languageDropdown, setLanguageDropdown] = useState(false);

  // Real Netlify Projects Data
  const projects: Project[] = [
    {
      title: "SiwachEnterprises",
      description:
        "Premium product website for Siwach Enterprises featuring advanced product naming, price display, and category filtering. Built with modern e-commerce best practices.",
      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "E-commerce",
      ],
      github: "https://github.com/zues13bhai",
      live: "https://siwachenterprices.netlify.app",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      category: "Business",
      featured: true,
    },
    {
      title: "ATS Resume Builder",
      description:
        "A clean, recruiter-friendly resume builder designed for ATS compliance. Features structured layouts and skill-focused formatting for maximum job application success.",
      tech: [
        "React",
        "TypeScript",
        "CSS3",
        "PDF Generation",
        "ATS Optimization",
      ],
      github: "https://github.com/zues13bhai",
      live: "https://ats-resumebuilder-1.netlify.app",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      category: "Resume Tool",
      featured: true,
    },
    {
      title: "Siwach Chatbot (AI Assistant)",
      description:
        "AI chatbot integrated for product queries and support for the SiwachEnterprises website. Built using OpenAI and no-code logic tools with intelligent conversation flow.",
      tech: ["OpenAI", "JavaScript", "Chatbot API", "NLP", "Automation"],
      github: "https://github.com/zues13bhai",
      live: "https://sunny-blini-2cac45.netlify.app",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
      category: "AI Tools",
      featured: true,
    },
    {
      title: "Hitesh AI (AI Tools Playground)",
      description:
        "Playground for testing AI workflows, automation, and prompt engineering demos. Features multiple AI integrations and experimental tools for developers.",
      tech: [
        "React",
        "OpenAI API",
        "Prompt Engineering",
        "AI Workflows",
        "Automation",
      ],
      github: "https://github.com/zues13bhai",
      live: "https://hitesh-ai.netlify.app",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      category: "AI Tools",
      featured: true,
    },
    {
      title: "Alternate Resume Builder (Legacy)",
      description:
        "An earlier version of the resume builder focusing on UX simplicity and quick export features. Demonstrates evolution in design thinking and user experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PDF.js"],
      github: "https://github.com/zues13bhai",
      live: "https://sunny-rugelach-b3dd2f.netlify.app",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      category: "Resume Tool",
      featured: false,
    },
    {
      title: "Dummy Chatbot (Prototype)",
      description:
        "AI-powered chatbot experiment using Bolt and OpenAI integration. Serves as a testing ground for conversational AI capabilities and user interaction patterns.",
      tech: ["Bolt", "OpenAI", "JavaScript", "API Integration", "Prototype"],
      github: "https://github.com/zues13bhai",
      live: "https://dummychatbot.netlify.app",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      category: "Experiments",
      featured: false,
    },
    {
      title: "Lambent Project (Experimental)",
      description:
        "Experimental project showcasing adaptability and prototyping skills. Demonstrates ability to work with emerging technologies and innovative solutions.",
      tech: ["React", "Experimental APIs", "Prototype", "Innovation", "R&D"],
      github: "https://github.com/zues13bhai",
      live: "https://lambent-daifuku-6caff5.netlify.app",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
      category: "Experiments",
      featured: false,
    },
  ];

  const skills: Skill[] = [
    { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", level: 90, category: "Frontend", icon: "📘" },
    { name: "Python", level: 88, category: "Backend", icon: "🐍" },
    { name: "AI/ML", level: 85, category: "AI", icon: "🤖" },
    { name: "Node.js", level: 82, category: "Backend", icon: "🟢" },
    { name: "Firebase", level: 87, category: "Database", icon: "🔥" },
    { name: "Tailwind CSS", level: 93, category: "Frontend", icon: "🎨" },
    { name: "MongoDB", level: 80, category: "Database", icon: "🍃" },
    { name: "Next.js", level: 88, category: "Frontend", icon: "▲" },
    { name: "OpenAI API", level: 92, category: "AI", icon: "🧠" },
    { name: "Framer", level: 85, category: "Design", icon: "📐" },
    { name: "n8n/Zapier", level: 90, category: "Automation", icon: "⚡" },
  ];

  const experiences: Experience[] = [
    {
      title: "Drive Coordinator",
      company: "T&P Cell, GJUST Hisar",
      duration: "2023 - 2024",
      description:
        "Led placement drives and coordinated between students and recruiting companies. Managed communication workflows and helped 50+ students secure internships and job offers.",
      skills: [
        "Leadership",
        "Communication",
        "Project Management",
        "Team Coordination",
      ],
      type: "work",
    },
    {
      title: "B.Tech Computer Science (AI/ML)",
      company: "GJUST, Hisar",
      duration: "2021 - 2025",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with focus on practical applications. Maintained strong academic performance while building real-world projects.",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Data Structures",
        "Algorithm Design",
      ],
      type: "education",
    },
    {
      title: "Prompt Engineering Certificate",
      company: "IBM",
      duration: "2024",
      description:
        "Professional certification in advanced prompt engineering techniques, AI model optimization, and practical applications in business workflows.",
      skills: [
        "Prompt Design",
        "AI Optimization",
        "Business Applications",
        "LLM Integration",
      ],
      type: "certification",
    },
    {
      title: "Python for Everybody",
      company: "University of Michigan",
      duration: "2024",
      description:
        "Comprehensive Python programming certification covering data structures, web scraping, databases, and data visualization with practical projects.",
      skills: [
        "Python Programming",
        "Data Structures",
        "Web Scraping",
        "Database Management",
      ],
      type: "certification",
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Prompt Engineering Certificate",
      issuer: "IBM",
      date: "2024",
      description:
        "Professional certification in advanced prompt engineering techniques, AI model optimization, and practical applications in business workflows.",
      badge: "🎯",
      verified: true,
    },
    {
      title: "Python for Everybody",
      issuer: "University of Michigan",
      date: "2024",
      description:
        "Comprehensive Python programming certification covering data structures, web scraping, databases, and data visualization.",
      badge: "🐍",
      verified: true,
    },
    {
      title: "Drive Coordinator",
      issuer: "T&P Cell, GJUST Hisar",
      date: "2023-2024",
      description:
        "Led placement drives and coordinated between students and recruiting companies.",
      badge: "👥",
      verified: true,
    },
    {
      title: "NSS Village Camp Winner",
      issuer: "National Service Scheme",
      date: "2023",
      description:
        "Recognized for outstanding leadership and community service during village development camp.",
      badge: "🏅",
      verified: true,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "HR Manager",
      company: "TechCorp Solutions",
      content:
        "Hitesh demonstrated exceptional problem-solving skills and delivered high-quality code. His AI integration expertise is impressive and helped streamline our workflows significantly.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Developer",
      company: "InnovateTech",
      content:
        "Working with Hitesh was a pleasure. His clarity in communication and technical depth made our project successful. His prompt engineering skills are particularly noteworthy.",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "StartupXYZ",
      content:
        "Hitesh brings both technical excellence and business understanding. His AI-powered solutions exceeded our expectations and delivered measurable ROI.",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
    },
  ];

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        achievements: "Achievements",
        testimonials: "Testimonials",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I'm Hitesh Siwach",
        title: "AI Engineer & Full-Stack Developer",
        subtitle:
          "Building intelligent systems that think, assist, and impress. I bridge the gap between cutting-edge AI and practical business solutions.",
        cta: "Explore My Work",
        cta2: "Download Resume",
      },
    },
    hi: {
      nav: {
        home: "होम",
        about: "परिचय",
        projects: "प्रोजेक्ट्स",
        skills: "कौशल",
        experience: "अनुभव",
        achievements: "उपलब्धियां",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क",
      },
      hero: {
        greeting: "नमस्ते, मैं हितेश सिवाच हूं",
        title: "AI इंजीनियर और फुल-स्टैक डेवलपर",
        subtitle:
          "बुद्धिमान सिस्टम बनाता हूं जो सोचते हैं, सहायत�� करते हैं और प्रभावित करते हैं।",
        cta: "मेरा काम देखें",
        cta2: "रिज्यूमे डाउनलोड करे���",
      },
    },
  };

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "achievements",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      setShowScrollTop(window.scrollY > 500);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      projectFilter === "all" ||
      project.category.toLowerCase().includes(projectFilter.toLowerCase());
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}
    >
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
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
                    <span className="text-sm font-medium">
                      {language.toUpperCase()}
                    </span>
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
                            setLanguage("en");
                            setLanguageDropdown(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          English
                        </button>
                        <button
                          onClick={() => {
                            setLanguage("hi");
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
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
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
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, #0F0C29 0%, #302B63 25%, #24243e 50%, #24243e 75%, #0F0C29 100%)
            `,
          }}
        >
          {/* Cosmic background elements */}
          <div className="absolute inset-0 z-0">
            {/* Animated stars */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Multiple orbs for enhanced background effect */}
          <div className="absolute inset-0 z-0 opacity-80">
            <Orb
              hue={240}
              hoverIntensity={0.4}
              rotateOnHover={true}
              forceHoverState={false}
            />
          </div>
          <div className="absolute inset-0 z-0 opacity-60">
            <Orb
              hue={300}
              hoverIntensity={0.3}
              rotateOnHover={true}
              forceHoverState={false}
            />
          </div>
          <div className="absolute inset-0 z-0 opacity-40">
            <Orb
              hue={200}
              hoverIntensity={0.2}
              rotateOnHover={false}
              forceHoverState={true}
            />
          </div>

          {/* Centered orb behind text */}
          <div className="absolute inset-0 z-5 flex items-center justify-center">
            <div className="w-[800px] h-[800px] opacity-80">
              <Orb
                hue={240}
                hoverIntensity={0.6}
                rotateOnHover={true}
                forceHoverState={false}
              />
            </div>
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
                <span className="text-sm font-medium text-blue-300">
                  AI Engineer • Prompt Expert • Full-Stack Developer
                </span>
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

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 max-w-4xl mx-auto leading-relaxed"
                >
                  {t.hero.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
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
                  onClick={() => scrollToSection("projects")}
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
                  onClick={() => window.open("#", "_blank")}
                  className="px-8 py-4 border-2 border-gray-400 dark:border-gray-600 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>{t.hero.cta2}</span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex items-center justify-center space-x-6 pt-8"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/zues13bhai",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/hitesh-siwach-84b3aa32a",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:theoriginalhitesh@gmail.com",
                    label: "Email",
                  },
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
          <Orb />

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
                    "I'm Hitesh Siwach — a builder who thrives where{" "}
                    <em className="text-blue-600 dark:text-blue-400 font-semibold">
                      clarity meets innovation
                    </em>
                    . I don't just use AI tools — I{" "}
                    <em className="text-blue-600 dark:text-blue-400 font-semibold">
                      understand, prompt, integrate,
                    </em>{" "}
                    and{" "}
                    <em className="text-purple-600 dark:text-purple-400 font-semibold">
                      extend
                    </em>{" "}
                    them. I bring full-stack structure with frontend finesse to
                    every project I work on."
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Expert in AI tools and prompt engineering
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-card-light dark:glass-card rounded-xl p-6 text-center"
                  >
                    <Code className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Full-Stack</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      React, Node.js, Python, and modern frameworks
                    </p>
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
                {/* Premium 3D Profile Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-8"
                >
                  <ProfileCard
                    name="Hitesh Siwach"
                    title="AI Engineer & Full-Stack Developer"
                    handle="zues13bhai"
                    status="Available for Hire"
                    contactText="Hire Me"
                    avatarUrl="https://cdn.builder.io/api/v1/image/assets%2Ffa667d61b04349a1b5f967185269a859%2F01b306b2aec4445ebaec2bba4405b00f?format=webp&width=800"
                    enableTilt={true}
                    showUserInfo={true}
                    onContactClick={() => scrollToSection("contact")}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
                      {
                        icon: "🎯",
                        title: "Clarity-Driven Approach",
                        desc: "I break down complex problems into clear, actionable solutions",
                      },
                      {
                        icon: "🤝",
                        title: "Strong Communication",
                        desc: "Bilingual (English + Hindi) with excellent presentation skills",
                      },
                      {
                        icon: "⚡",
                        title: "Modern Practices",
                        desc: "GitHub workflows, CI/CD, API integration, and agile development",
                      },
                      {
                        icon: "🚀",
                        title: "Startup Ready",
                        desc: "Fast learner, adaptable, and committed to meaningful work",
                      },
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
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.desc}
                          </p>
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
                    {[
                      "Next.js",
                      "GraphQL",
                      "Docker",
                      "AWS",
                      "Microservices",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm"
                      >
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
        <section
          id="projects"
          className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden"
        >
          <GridMotion
            items={[
              projects[0]?.image ||
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
              projects[1]?.image ||
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80",
              projects[2]?.image ||
                "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80",
              projects[3]?.image ||
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80",
              projects[4]?.image ||
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
              projects[5]?.image ||
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
              projects[6]?.image ||
                "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
              "🚀",
              "⚡",
              "🌟",
              "💻",
              "🎯",
              "🔥",
              "✨",
              "AI",
              "React",
              "Next.js",
              "TypeScript",
              "Python",
              "Node.js",
              "GSAP",
              "🤖",
              "🌈",
              "💎",
              "🎨",
              "🔮",
              "⭐",
              "🌙",
            ]}
            gradientColor="rgba(59, 130, 246, 0.3)"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                Real projects deployed on Netlify, showcasing AI integration,
                automation, and modern web development
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            {/* Project Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                "all",
                "Business",
                "AI Tools",
                "Resume Tool",
                "Experiments",
              ].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setProjectFilter(filter.toLowerCase())}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    projectFilter === filter.toLowerCase()
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter === "all" ? "All" : filter}
                </motion.button>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="project-card glass-card-light dark:glass-card rounded-2xl overflow-hidden group"
                  whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
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
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs text-blue-600 dark:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
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
                        className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm"
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
        <section id="skills" className="py-20 relative overflow-hidden">
          <Orb />
          <ShapeBlur
            variation={1}
            shapeSize={0.8}
            roundness={0.3}
            borderSize={0.08}
            circleSize={0.6}
            circleEdge={0.8}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Technologies & Skills
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Modern technologies and AI tools that power intelligent
                applications
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {skill.category}
                  </p>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
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
                  "ChatGPT",
                  "GitHub Copilot",
                  "Claude",
                  "Midjourney",
                  "Hugging Face",
                  "OpenAI API",
                  "Langchain",
                  "n8n",
                  "Zapier",
                  "Framer",
                  "Figma",
                  "Anthropic",
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

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 bg-gray-50 dark:bg-gray-800/50 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Experience & Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My journey through education, certifications, and professional
                experiences
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="flex-1 px-8">
                      <motion.div
                        className="glass-card-light dark:glass-card rounded-2xl p-6 relative"
                        whileHover={{ scale: 1.02, y: -4 }}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                            {exp.type === "work" && (
                              <Briefcase className="w-5 h-5 text-white" />
                            )}
                            {exp.type === "education" && (
                              <GraduationCap className="w-5 h-5 text-white" />
                            )}
                            {exp.type === "certification" && (
                              <Trophy className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {exp.duration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs text-blue-600 dark:text-blue-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                    <div className="flex-1 px-8" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 relative">
          <Orb />

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
                Professional certifications and recognitions that validate my
                expertise
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
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
        <section
          id="testimonials"
          className="py-20 bg-gray-50 dark:bg-gray-800/50 relative"
        >
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
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
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
        <section id="contact" className="py-20 relative overflow-hidden">
          <Orb />
          <GridMotion
            items={[
              "📧",
              "💬",
              "🤝",
              "🌟",
              "🚀",
              "💼",
              "✨",
              "Contact",
              "Hire",
              "Collaborate",
              "Build",
              "Create",
              "Connect",
              "Work",
              "📞",
              "💻",
              "🎯",
              "⚡",
              "🔥",
              "🌈",
              "🎨",
            ]}
            gradientColor="rgba(139, 92, 246, 0.1)"
          />

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
                Ready to bring AI-powered solutions to your next project? Let's
                connect and discuss opportunities.
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
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Get In Touch
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "theoriginalhitesh@gmail.com",
                        href: "mailto:theoriginalhitesh@gmail.com",
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        value: "linkedin.com/in/hitesh-siwach-84b3aa32a",
                        href: "https://linkedin.com/in/hitesh-siwach-84b3aa32a",
                      },
                      {
                        icon: Github,
                        label: "GitHub",
                        value: "github.com/zues13bhai",
                        href: "https://github.com/zues13bhai",
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Hisar, Haryana, India",
                        href: null,
                      },
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
                          <p className="text-sm text-gray-400">
                            {contact.label}
                          </p>
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
                  <h4 className="text-xl font-bold mb-4 text-white">
                    Available For
                  </h4>
                  <div className="space-y-3">
                    {[
                      "AI/ML Internships",
                      "Frontend Development Roles",
                      "Full-Stack Projects",
                      "Freelance Opportunities",
                      "Tech Consultations",
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
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send a Message
                </h3>

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
        <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
          <GridMotion
            items={[
              projects[0]?.image ||
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
              projects[1]?.image ||
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80",
              projects[2]?.image ||
                "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80",
              projects[3]?.image ||
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80",
              "🏆",
              "⭐",
              "🌟",
              "💫",
              "✨",
              "🔥",
              "🚀",
              "Portfolio",
              "Projects",
              "Skills",
              "Contact",
              "Hire",
              "Developer",
              "AI",
              "💼",
              "📧",
              "🤝",
              "🎯",
              "💡",
              "🌈",
              "⚡",
            ]}
            gradientColor="rgba(139, 92, 246, 0.15)"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  Bridging AI and practical solutions.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/zues13bhai" },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/hitesh-siwach-84b3aa32a",
                    },
                    { icon: Mail, href: "mailto:theoriginalhitesh@gmail.com" },
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
                  <p>AI Integration & Prompt Engineering</p>
                  <p>React & Next.js Development</p>
                  <p>Full-Stack Solutions</p>
                  <p>Business Automation</p>
                  <p>Technical Consulting</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; 2024 Hitesh Siwach. All rights reserved. Built with
                React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
