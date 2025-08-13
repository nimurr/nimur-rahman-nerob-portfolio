import Navigation from '../components/Navigation';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Code, Palette, Database, Globe, User, Award, BookOpen, Send } from 'lucide-react';

export default function Index() {
  const skills = [
    { name: 'React', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'TypeScript', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'Tailwind CSS', level: 95, icon: <Palette className="w-6 h-6" /> },
    { name: 'Node.js', level: 80, icon: <Database className="w-6 h-6" /> },
    { name: 'Next.js', level: 85, icon: <Globe className="w-6 h-6" /> },
    { name: 'Python', level: 75, icon: <Code className="w-6 h-6" /> },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for modern web applications using React, TypeScript, and advanced CSS frameworks.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed and maintained full-stack applications, implemented responsive designs, and optimized application performance.',
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      period: '2018 - 2020',
      location: 'Los Angeles, CA',
      description: 'Created stunning user interfaces and interactive web experiences for various clients across different industries.',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles and smooth animations built with React and Framer Motion.',
      image: '/placeholder.svg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const blogPosts = [
    {
      title: 'Building Modern React Applications',
      excerpt: 'Learn the best practices for building scalable and maintainable React applications in 2024.',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      category: 'React',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Advanced techniques and tips for creating beautiful user interfaces with Tailwind CSS.',
      date: 'Dec 10, 2023',
      readTime: '7 min read',
      category: 'CSS',
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
      date: 'Dec 5, 2023',
      readTime: '6 min read',
      category: 'Technology',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-gray-900">
              Creative <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting beautiful, functional, and user-centered digital experiences with modern technologies
            </p>
            <div className="flex justify-center space-x-6 pt-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <div className="pt-12">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span>Discover More</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate frontend developer with over 5 years of experience creating digital experiences that combine beautiful design with functional code. I specialize in React, TypeScript, and modern CSS frameworks.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through blog posts and community talks.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">50+ Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-blue-600">{skill.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and creativity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{post.category}</span>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <BookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">hello@portfolio.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">San Francisco, CA</span>
                </div>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
