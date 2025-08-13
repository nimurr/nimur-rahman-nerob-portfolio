import Navigation from '../components/Navigation';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Code, Palette, Database, Globe, User, Award, BookOpen, Send, Star, Zap, Heart, Sparkles, Camera, Play, Music } from 'lucide-react';

export default function Index() {
  const skills = [
    { name: 'React.js', level: 95, icon: <Code className="w-6 h-6" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', level: 90, icon: <Code className="w-6 h-6" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML & CSS', level: 95, icon: <Palette className="w-6 h-6" />, color: 'from-pink-500 to-rose-500' },
    { name: 'Node.js', level: 85, icon: <Database className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-emerald-500 to-teal-500' },
    { name: 'Express.js', level: 85, icon: <Globe className="w-6 h-6" />, color: 'from-blue-500 to-purple-500' },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for modern web applications using React, TypeScript, and advanced CSS frameworks.',
      color: 'from-pink-500 to-violet-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed and maintained full-stack applications, implemented responsive designs, and optimized application performance.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      period: '2018 - 2020',
      location: 'Los Angeles, CA',
      description: 'Created stunning user interfaces and interactive web experiences for various clients across different industries.',
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const projects = [
    {
      title: 'React E-commerce Platform',
      description: 'A modern e-commerce platform built with React.js, featuring user authentication, product catalog, and shopping cart functionality.',
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'MERN Social Media App',
      description: 'A full-stack social media application with real-time messaging, post sharing, and user interactions built with MERN stack.',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'React Dashboard',
      description: 'A responsive admin dashboard with data visualization, user management, and analytics built with React and modern UI libraries.',
      gradient: 'from-pink-500 via-red-500 to-orange-500',
      technologies: ['React.js', 'Chart.js', 'Material-UI', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const blogPosts = [
    {
      title: 'The Future of Web Animations',
      excerpt: 'Exploring cutting-edge animation techniques with CSS, JavaScript, and WebGL for immersive user experiences.',
      date: 'Dec 15, 2023',
      readTime: '8 min read',
      category: 'Animation',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Building with AI Integration',
      excerpt: 'How to integrate AI APIs and machine learning models into modern web applications for enhanced user experiences.',
      date: 'Dec 10, 2023',
      readTime: '12 min read',
      category: 'AI/ML',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Designing for Accessibility',
      excerpt: 'Creating inclusive digital experiences that work for everyone, with practical tips and real-world examples.',
      date: 'Dec 5, 2023',
      readTime: '10 min read',
      category: 'UX/UI',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Ultra Modern */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg-animated opacity-30"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 opacity-60 blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40 blur-2xl"></div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{animationDelay: '4s'}}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-50 blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-4">
                NIMUR RAHMAN
              </h1>
              <h1 className="text-4xl md:text-7xl font-black tracking-tight gradient-text animate-rainbow">
                NEROB
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl animate-pulse"></div>
            </div>

            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              <span className="text-neon font-bold">MERN Stack Developer</span> • Professional front-end developer who loves
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent font-bold"> creativity</span> and making something new
            </p>
            
            {/* Social Links with Glow */}
            <div className="flex justify-center space-x-8 pt-8">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black p-4 rounded-full border border-pink-500/50 group-hover:border-pink-500 transition-colors">
                  <Github className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black p-4 rounded-full border border-cyan-500/50 group-hover:border-cyan-500 transition-colors">
                  <Linkedin className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black p-4 rounded-full border border-green-500/50 group-hover:border-green-500 transition-colors">
                  <Mail className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" />
                </div>
              </a>
            </div>
            
            {/* CTA Button */}
            <div className="pt-12">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur group-hover:blur-lg transition-all"></div>
                <span className="relative text-white">Explore My Universe</span>
                <ArrowDown className="relative w-6 h-6 text-white animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Unique Design */}
      <section id="about" className="py-32 relative bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl blur opacity-30 animate-pulse"></div>
              <div className="relative glassmorphism rounded-3xl p-8 border border-pink-500/30">
                <h2 className="text-5xl font-black text-white mb-8">
                  About <span className="gradient-text">Me</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  I'm a professional <span className="text-neon font-bold">front-end developer</span> and <span className="text-pink-400 font-bold">React.js Developer</span>.
                  I love to use my creativity and make something new. Try creating visually appealing and highly functional web interfaces.
                  Proficient in HTML, CSS, and JavaScript with a strong foundation in modern front-end frameworks React.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Specializing in <span className="text-cyan-400 font-bold">MERN Stack development</span> - a collection of powerful technologies
                  used to develop scalable master web applications comprising backend, front-end, and database components.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-pink-400" />
                    </div>
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-gray-400">Projects Launched</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white">50K+</div>
                    <div className="text-gray-400">Lines of Code</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square relative">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 animate-spin" style={{animationDuration: '20s'}}>
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center">
                        <User className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-white font-bold text-xl">Creative Mind</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-10 right-10 animate-float">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center animate-glow">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 animate-float" style={{animationDelay: '2s'}}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center animate-glow">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 animate-float" style={{animationDelay: '4s'}}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-glow">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Colorful & Interactive */}
      <section id="skills" className="py-32 bg-gradient-to-br from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              My <span className="gradient-text">Superpowers</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Technologies I wield to create <span className="text-neon font-bold">extraordinary</span> digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                <div className="relative glassmorphism rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all transform group-hover:scale-105">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Proficiency</span>
                      <span className={`font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline Design */}
      <section id="experience" className="py-32 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              The evolution of a <span className="text-neon font-bold">digital creator</span>
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500"></div>
            
            <div className="space-y-20">
              {experiences.map((experience, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 border-4 border-black z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                      <div className="relative glassmorphism rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                        <p className={`text-xl font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-4`}>
                          {experience.company}
                        </p>
                        <div className="flex items-center space-x-4 mb-4 text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - 3D Cards */}
      <section id="projects" className="py-32 bg-gradient-to-br from-black via-pink-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              Featured <span className="gradient-text">Creations</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Groundbreaking projects that showcase <span className="text-neon font-bold">innovation</span> and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group relative transform transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                <div className="relative glassmorphism rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all">
                  {/* Project Image/Visual */}
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-white font-bold">Live Preview</div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 animate-float">
                      <Camera className="w-6 h-6 text-white/80" />
                    </div>
                    <div className="absolute bottom-4 left-4 animate-float" style={{animationDelay: '2s'}}>
                      <Music className="w-6 h-6 text-white/80" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a href={project.liveUrl} className="flex-1 group/btn relative overflow-hidden rounded-full">
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 group-hover/btn:opacity-100 transition-opacity`}></div>
                        <div className="relative px-6 py-3 text-center">
                          <div className="flex items-center justify-center space-x-2 text-white font-bold">
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </div>
                        </div>
                      </a>
                      <a href={project.githubUrl} className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Modern Cards */}
      <section id="blog" className="py-32 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Thoughts and tutorials on the <span className="text-neon font-bold">future</span> of web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group relative transform transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                <div className="relative glassmorphism rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${post.gradient} text-white`}>
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <BookOpen className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <button className={`px-6 py-2 rounded-full font-bold bg-gradient-to-r ${post.gradient} text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all`}>
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Futuristic */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 gradient-bg-animated opacity-20"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              Let's Create <span className="gradient-text">Together</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your <span className="text-neon font-bold">wildest ideas</span> to life? Let's make magic happen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-3xl blur opacity-30"></div>
              <div className="relative glassmorphism rounded-3xl p-10 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl text-gray-300 group-hover:text-white transition-colors">nimurnerob404@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl text-gray-300 group-hover:text-white transition-colors">Thakurgaon, Bangladesh</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl text-gray-300 group-hover:text-white transition-colors">+88 01708784404</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-6 mt-10">
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black p-4 rounded-full border border-pink-500/50 group-hover:border-pink-500 transition-colors transform group-hover:scale-110">
                      <Github className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black p-4 rounded-full border border-cyan-500/50 group-hover:border-cyan-500 transition-colors transform group-hover:scale-110">
                      <Linkedin className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black p-4 rounded-full border border-green-500/50 group-hover:border-green-500 transition-colors transform group-hover:scale-110">
                      <Mail className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
              <div className="relative glassmorphism rounded-3xl p-10 border border-white/20">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-white mb-3">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Your awesome name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-white mb-3">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-bold text-white mb-3">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your incredible project idea..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full relative group overflow-hidden rounded-xl py-4 font-bold text-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur group-hover:blur-lg transition-all"></div>
                    <div className="relative flex items-center justify-center space-x-3 text-white">
                      <Send className="w-6 h-6" />
                      <span>Launch Project 🚀</span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-black gradient-text mb-4">Nimur Rahman Nerob</div>
            <p className="text-gray-400 text-lg">&copy; 2024 MERN Stack Developer. Crafting the future, one pixel at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
