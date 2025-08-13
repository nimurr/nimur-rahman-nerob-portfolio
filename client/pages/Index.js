import React from "react";
import Navigation from "../components/Navigation.js";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Code,
  Palette,
  Database,
  Globe,
  User,
  Award,
  BookOpen,
  Send,
  Star,
  Zap,
  Heart,
  Sparkles,
  Camera,
  Play,
  Music,
} from "lucide-react";

export default function Index() {
  const skills = [
    {
      name: "React.js",
      level: 95,
      icon: React.createElement(Code, { className: "w-6 h-6" }),
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: React.createElement(Code, { className: "w-6 h-6" }),
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "HTML & CSS",
      level: 95,
      icon: React.createElement(Palette, { className: "w-6 h-6" }),
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Node.js",
      level: 85,
      icon: React.createElement(Database, { className: "w-6 h-6" }),
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "MongoDB",
      level: 80,
      icon: React.createElement(Database, { className: "w-6 h-6" }),
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Express.js",
      level: 85,
      icon: React.createElement(Globe, { className: "w-6 h-6" }),
      color: "from-blue-500 to-purple-500",
    },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Leading frontend development for modern web applications using React, TypeScript, and advanced CSS frameworks.",
      color: "from-pink-500 to-violet-500",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed and maintained full-stack applications, implemented responsive designs, and optimized application performance.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      location: "Los Angeles, CA",
      description:
        "Created stunning user interfaces and interactive web experiences for various clients across different industries.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const projects = [
    {
      title: "React E-commerce Platform",
      description:
        "A modern e-commerce platform built with React.js, featuring user authentication, product catalog, and shopping cart functionality.",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "MERN Social Media App",
      description:
        "A full-stack social media application with real-time messaging, post sharing, and user interactions built with MERN stack.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "React Dashboard",
      description:
        "A responsive admin dashboard with data visualization, user management, and analytics built with React and modern UI libraries.",
      gradient: "from-pink-500 via-red-500 to-orange-500",
      technologies: ["React.js", "Chart.js", "Material-UI", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const blogPosts = [
    {
      title: "Mastering React.js Hooks",
      excerpt:
        "Deep dive into React hooks and how to build modern, efficient components using useState, useEffect, and custom hooks.",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "React.js",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "MERN Stack Best Practices",
      excerpt:
        "Complete guide to building scalable web applications with MongoDB, Express.js, React.js, and Node.js.",
      date: "Dec 10, 2023",
      readTime: "12 min read",
      category: "MERN",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Modern CSS Techniques",
      excerpt:
        "Exploring advanced CSS features, flexbox, grid, and responsive design principles for beautiful web interfaces.",
      date: "Dec 5, 2023",
      readTime: "10 min read",
      category: "CSS",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return React.createElement(
    "div",
    { className: "min-h-screen bg-black overflow-x-hidden" },
    React.createElement(Navigation),

    // Hero Section
    React.createElement(
      "section",
      {
        id: "hero",
        className: "min-h-screen flex items-center justify-center relative",
      },
      React.createElement("div", {
        className: "absolute inset-0 gradient-bg-animated opacity-30",
      }),
      React.createElement("div", { className: "absolute inset-0 bg-black/50" }),

      // Floating Elements
      React.createElement(
        "div",
        { className: "absolute top-20 left-10 animate-float" },
        React.createElement("div", {
          className:
            "w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 opacity-60 blur-xl",
        }),
      ),
      React.createElement(
        "div",
        {
          className: "absolute top-40 right-20 animate-float",
          style: { animationDelay: "2s" },
        },
        React.createElement("div", {
          className:
            "w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40 blur-2xl",
        }),
      ),
      React.createElement(
        "div",
        {
          className: "absolute bottom-40 left-1/4 animate-float",
          style: { animationDelay: "4s" },
        },
        React.createElement("div", {
          className:
            "w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-50 blur-xl",
        }),
      ),

      React.createElement(
        "div",
        {
          className:
            "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        },
        React.createElement(
          "div",
          { className: "space-y-8" },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement(
              "h1",
              {
                className:
                  "text-4xl md:text-7xl font-black tracking-tight text-white mb-4",
              },
              "NIMUR RAHMAN",
            ),
            React.createElement(
              "h1",
              {
                className:
                  "text-4xl md:text-7xl font-black tracking-tight gradient-text animate-rainbow",
              },
              "NEROB",
            ),
            React.createElement("div", {
              className:
                "absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl animate-pulse",
            }),
          ),

          React.createElement(
            "p",
            {
              className:
                "text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light",
            },
            React.createElement(
              "span",
              { className: "text-neon font-bold" },
              "MERN Stack Developer",
            ),
            " • Professional front-end developer who loves ",
            React.createElement(
              "span",
              {
                className:
                  "bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent font-bold",
              },
              "creativity",
            ),
            " and making something new",
          ),

          // Social Links with Glow
          React.createElement(
            "div",
            { className: "flex justify-center space-x-8 pt-8" },
            React.createElement(
              "a",
              { href: "#", className: "group relative" },
              React.createElement("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity",
              }),
              React.createElement(
                "div",
                {
                  className:
                    "relative bg-black p-4 rounded-full border border-pink-500/50 group-hover:border-pink-500 transition-colors",
                },
                React.createElement(Github, {
                  className:
                    "w-8 h-8 text-white group-hover:text-pink-400 transition-colors",
                }),
              ),
            ),
            React.createElement(
              "a",
              { href: "#", className: "group relative" },
              React.createElement("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity",
              }),
              React.createElement(
                "div",
                {
                  className:
                    "relative bg-black p-4 rounded-full border border-cyan-500/50 group-hover:border-cyan-500 transition-colors",
                },
                React.createElement(Linkedin, {
                  className:
                    "w-8 h-8 text-white group-hover:text-cyan-400 transition-colors",
                }),
              ),
            ),
            React.createElement(
              "a",
              { href: "#", className: "group relative" },
              React.createElement("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity",
              }),
              React.createElement(
                "div",
                {
                  className:
                    "relative bg-black p-4 rounded-full border border-green-500/50 group-hover:border-green-500 transition-colors",
                },
                React.createElement(Mail, {
                  className:
                    "w-8 h-8 text-white group-hover:text-green-400 transition-colors",
                }),
              ),
            ),
          ),

          // CTA Button
          React.createElement(
            "div",
            { className: "pt-12" },
            React.createElement(
              "button",
              {
                onClick: () =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" }),
                className:
                  "group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-lg overflow-hidden",
              },
              React.createElement("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity",
              }),
              React.createElement("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur group-hover:blur-lg transition-all",
              }),
              React.createElement(
                "span",
                { className: "relative text-white" },
                "Explore My Universe",
              ),
              React.createElement(ArrowDown, {
                className: "relative w-6 h-6 text-white animate-bounce",
              }),
            ),
          ),
        ),
      ),
    ),

    // About Section
    React.createElement(
      "section",
      {
        id: "about",
        className:
          "py-32 relative bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20",
      },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center" },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("div", {
              className:
                "absolute -inset-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl blur opacity-30 animate-pulse",
            }),
            React.createElement(
              "div",
              {
                className:
                  "relative glassmorphism rounded-3xl p-8 border border-pink-500/30",
              },
              React.createElement(
                "h2",
                { className: "text-5xl font-black text-white mb-8" },
                "About ",
                React.createElement(
                  "span",
                  { className: "gradient-text" },
                  "Me",
                ),
              ),
              React.createElement(
                "p",
                { className: "text-xl text-gray-300 mb-6 leading-relaxed" },
                "I'm a professional ",
                React.createElement(
                  "span",
                  { className: "text-neon font-bold" },
                  "front-end developer",
                ),
                " and ",
                React.createElement(
                  "span",
                  { className: "text-pink-400 font-bold" },
                  "React.js Developer",
                ),
                ". I love to use my creativity and make something new. Try creating visually appealing and highly functional web interfaces. Proficient in HTML, CSS, and JavaScript with a strong foundation in modern front-end frameworks React.",
              ),
              React.createElement(
                "p",
                { className: "text-xl text-gray-300 mb-8 leading-relaxed" },
                "Specializing in ",
                React.createElement(
                  "span",
                  { className: "text-cyan-400 font-bold" },
                  "MERN Stack development",
                ),
                " - a collection of powerful technologies used to develop scalable master web applications comprising backend, front-end, and database components.",
              ),

              // Stats
              React.createElement(
                "div",
                { className: "grid grid-cols-2 gap-6" },
                React.createElement(
                  "div",
                  {
                    className:
                      "text-center p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20",
                  },
                  React.createElement(
                    "div",
                    { className: "flex items-center justify-center mb-2" },
                    React.createElement(Zap, {
                      className: "w-8 h-8 text-pink-400",
                    }),
                  ),
                  React.createElement(
                    "div",
                    { className: "text-3xl font-bold text-white" },
                    "100+",
                  ),
                  React.createElement(
                    "div",
                    { className: "text-gray-400" },
                    "Projects Launched",
                  ),
                ),
                React.createElement(
                  "div",
                  {
                    className:
                      "text-center p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20",
                  },
                  React.createElement(
                    "div",
                    { className: "flex items-center justify-center mb-2" },
                    React.createElement(Star, {
                      className: "w-8 h-8 text-cyan-400",
                    }),
                  ),
                  React.createElement(
                    "div",
                    { className: "text-3xl font-bold text-white" },
                    "50K+",
                  ),
                  React.createElement(
                    "div",
                    { className: "text-gray-400" },
                    "Lines of Code",
                  ),
                ),
              ),
            ),
          ),

          // Visual Element
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement(
              "div",
              { className: "aspect-square relative" },
              // Main Circle
              React.createElement(
                "div",
                {
                  className:
                    "absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 animate-spin",
                  style: { animationDuration: "20s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-full h-full rounded-full bg-black flex items-center justify-center",
                  },
                  React.createElement(
                    "div",
                    {
                      className: "text-center space-y-4",
                      style: { animation: "reverse-spin 20s linear infinite" },
                    },
                    React.createElement(
                      "div",
                      {
                        className:
                          "w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center",
                      },
                      React.createElement(User, {
                        className: "w-12 h-12 text-white",
                      }),
                    ),
                    React.createElement(
                      "div",
                      { className: "text-white font-bold text-xl" },
                      "NEROB",
                    ),
                  ),
                ),
              ),

              // Floating Icons
              React.createElement(
                "div",
                { className: "absolute top-10 right-10 animate-float" },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(Heart, {
                    className: "w-8 h-8 text-white",
                  }),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "absolute bottom-10 left-10 animate-float",
                  style: { animationDelay: "2s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(Sparkles, {
                    className: "w-8 h-8 text-white",
                  }),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "absolute top-1/2 left-0 animate-float",
                  style: { animationDelay: "4s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(Code, {
                    className: "w-8 h-8 text-white",
                  }),
                ),
              ),

              // Additional Tech Icons
              React.createElement(
                "div",
                {
                  className: "absolute top-1/2 right-0 animate-float",
                  style: { animationDelay: "1s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(Database, {
                    className: "w-8 h-8 text-white",
                  }),
                ),
              ),
              React.createElement(
                "div",
                {
                  className:
                    "absolute top-4 left-1/2 transform -translate-x-1/2 animate-float",
                  style: { animationDelay: "3s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(Globe, {
                    className: "w-8 h-8 text-white",
                  }),
                ),
              ),
              React.createElement(
                "div",
                {
                  className:
                    "absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-float",
                  style: { animationDelay: "5s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(Palette, {
                    className: "w-8 h-8 text-white",
                  }),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "absolute top-20 left-20 animate-float",
                  style: { animationDelay: "6s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(
                    "span",
                    {
                      className: "text-white font-bold text-lg",
                    },
                    "JS",
                  ),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "absolute bottom-20 right-20 animate-float",
                  style: { animationDelay: "7s" },
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center animate-glow",
                  },
                  React.createElement(
                    "span",
                    {
                      className: "text-white font-bold text-lg",
                    },
                    "R",
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    // Skills Section
    React.createElement(
      "section",
      {
        id: "skills",
        className:
          "py-32 bg-gradient-to-br from-black via-purple-900/10 to-black",
      },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "text-center mb-20" },
          React.createElement(
            "h2",
            { className: "text-6xl font-black text-white mb-6" },
            "My ",
            React.createElement(
              "span",
              { className: "gradient-text" },
              "Superpowers",
            ),
          ),
          React.createElement(
            "p",
            { className: "text-2xl text-gray-300 max-w-3xl mx-auto" },
            "Technologies I wield to create ",
            React.createElement(
              "span",
              { className: "text-neon font-bold" },
              "extraordinary",
            ),
            " digital experiences",
          ),
        ),

        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
          skills.map((skill, index) =>
            React.createElement(
              "div",
              { key: index, className: "group relative" },
              React.createElement("div", {
                className: `absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity`,
              }),
              React.createElement(
                "div",
                {
                  className:
                    "relative glassmorphism rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all transform group-hover:scale-105",
                },
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-4 mb-6" },
                  React.createElement(
                    "div",
                    {
                      className: `p-3 rounded-full bg-gradient-to-r ${skill.color}`,
                    },
                    skill.icon,
                  ),
                  React.createElement(
                    "h3",
                    { className: "text-2xl font-bold text-white" },
                    skill.name,
                  ),
                ),

                // Animated Progress Bar
                React.createElement(
                  "div",
                  { className: "relative" },
                  React.createElement(
                    "div",
                    { className: "w-full bg-gray-800 rounded-full h-3 mb-2" },
                    React.createElement(
                      "div",
                      {
                        className: `bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`,
                        style: { width: `${skill.level}%` },
                      },
                      React.createElement("div", {
                        className: "absolute inset-0 bg-white/30 animate-pulse",
                      }),
                    ),
                  ),
                  React.createElement(
                    "div",
                    { className: "flex justify-between" },
                    React.createElement(
                      "span",
                      { className: "text-gray-400" },
                      "Proficiency",
                    ),
                    React.createElement(
                      "span",
                      {
                        className: `font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`,
                      },
                      `${skill.level}%`,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    // Experience Section - Timeline Design
    React.createElement(
      "section",
      {
        id: "experience",
        className:
          "py-32 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10",
      },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "text-center mb-20" },
          React.createElement(
            "h2",
            { className: "text-4xl md:text-6xl font-black text-white mb-6" },
            "My ",
            React.createElement(
              "span",
              { className: "gradient-text" },
              "Journey",
            ),
          ),
          React.createElement(
            "p",
            { className: "text-2xl text-gray-300 max-w-3xl mx-auto" },
            "The evolution of a ",
            React.createElement(
              "span",
              { className: "text-neon font-bold" },
              "digital creator",
            ),
          ),
        ),

        React.createElement(
          "div",
          { className: "relative" },
          // Timeline Line - Hidden on mobile, visible on desktop
          React.createElement("div", {
            className:
              "hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500",
          }),
          // Mobile Timeline Line - Left aligned for mobile
          React.createElement("div", {
            className:
              "lg:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500",
          }),

          React.createElement(
            "div",
            { className: "space-y-12 lg:space-y-20" },
            experiences.map((experience, index) =>
              React.createElement(
                "div",
                {
                  key: index,
                  className: `relative flex items-center lg:${index % 2 === 0 ? "justify-start" : "justify-end"} justify-start`,
                },
                // Timeline Dot - Desktop center, Mobile left
                React.createElement("div", {
                  className:
                    "absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 left-6 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 border-4 border-black z-10",
                }),

                React.createElement(
                  "div",
                  {
                    className: `w-full lg:w-5/12 pl-16 lg:pl-0 lg:${index % 2 === 0 ? "text-right lg:pr-8" : "text-left lg:pl-8"}`,
                  },
                  React.createElement(
                    "div",
                    { className: "relative group" },
                    React.createElement("div", {
                      className: `absolute inset-0 bg-gradient-to-r ${experience.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`,
                    }),
                    React.createElement(
                      "div",
                      {
                        className:
                          "relative glassmorphism rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all",
                      },
                      React.createElement(
                        "h3",
                        { className: "text-2xl font-bold text-white mb-2" },
                        experience.title,
                      ),
                      React.createElement(
                        "p",
                        {
                          className: `text-xl font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-4`,
                        },
                        experience.company,
                      ),
                      React.createElement(
                        "div",
                        {
                          className:
                            "flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-4 text-gray-400",
                        },
                        React.createElement(
                          "div",
                          { className: "flex items-center space-x-2" },
                          React.createElement(Calendar, {
                            className: "w-4 h-4",
                          }),
                          React.createElement("span", null, experience.period),
                        ),
                        React.createElement(
                          "div",
                          { className: "flex items-center space-x-2" },
                          React.createElement(MapPin, { className: "w-4 h-4" }),
                          React.createElement(
                            "span",
                            null,
                            experience.location,
                          ),
                        ),
                      ),
                      React.createElement(
                        "p",
                        { className: "text-gray-300 leading-relaxed" },
                        experience.description,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    // Projects Section - 3D Cards
    React.createElement(
      "section",
      {
        id: "projects",
        className:
          "py-32 bg-gradient-to-br from-black via-pink-900/10 to-black",
      },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "text-center mb-20" },
          React.createElement(
            "h2",
            { className: "text-6xl font-black text-white mb-6" },
            "Featured ",
            React.createElement(
              "span",
              { className: "gradient-text" },
              "Creations",
            ),
          ),
          React.createElement(
            "p",
            { className: "text-2xl text-gray-300 max-w-3xl mx-auto" },
            "Groundbreaking projects that showcase ",
            React.createElement(
              "span",
              { className: "text-neon font-bold" },
              "innovation",
            ),
            " and creativity",
          ),
        ),

        React.createElement(
          "div",
          {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",
          },
          projects.map((project, index) =>
            React.createElement(
              "div",
              {
                key: index,
                className:
                  "group relative transform transition-all duration-500 hover:scale-105",
              },
              React.createElement("div", {
                className: `absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-50 group-hover:opacity-80 transition-opacity`,
              }),
              React.createElement(
                "div",
                {
                  className:
                    "relative glassmorphism rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all",
                },
                // Project Image/Visual
                React.createElement(
                  "div",
                  {
                    className: `h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`,
                  },
                  React.createElement("div", {
                    className: "absolute inset-0 bg-black/20",
                  }),
                  React.createElement(
                    "div",
                    {
                      className:
                        "absolute inset-0 flex items-center justify-center",
                    },
                    React.createElement(
                      "div",
                      { className: "text-center" },
                      React.createElement(
                        "div",
                        {
                          className:
                            "w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4",
                        },
                        React.createElement(Play, {
                          className: "w-8 h-8 text-white",
                        }),
                      ),
                      React.createElement(
                        "div",
                        { className: "text-white font-bold" },
                        "Live Preview",
                      ),
                    ),
                  ),

                  // Floating Elements
                  React.createElement(
                    "div",
                    { className: "absolute top-4 right-4 animate-float" },
                    React.createElement(Camera, {
                      className: "w-6 h-6 text-white/80",
                    }),
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "absolute bottom-4 left-4 animate-float",
                      style: { animationDelay: "2s" },
                    },
                    React.createElement(Music, {
                      className: "w-6 h-6 text-white/80",
                    }),
                  ),
                ),

                React.createElement(
                  "div",
                  { className: "p-8" },
                  React.createElement(
                    "h3",
                    { className: "text-2xl font-bold text-white mb-3" },
                    project.title,
                  ),
                  React.createElement(
                    "p",
                    { className: "text-gray-300 mb-6 leading-relaxed" },
                    project.description,
                  ),

                  // Tech Stack
                  React.createElement(
                    "div",
                    { className: "flex flex-wrap gap-2 mb-6" },
                    project.technologies.map((tech, techIndex) =>
                      React.createElement(
                        "span",
                        {
                          key: techIndex,
                          className: `px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`,
                        },
                        tech,
                      ),
                    ),
                  ),

                  // Action Buttons
                  React.createElement(
                    "div",
                    { className: "flex space-x-4" },
                    React.createElement(
                      "a",
                      {
                        href: project.liveUrl,
                        className:
                          "flex-1 group/btn relative overflow-hidden rounded-full",
                      },
                      React.createElement("div", {
                        className: `absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 group-hover/btn:opacity-100 transition-opacity`,
                      }),
                      React.createElement(
                        "div",
                        { className: "relative px-6 py-3 text-center" },
                        React.createElement(
                          "div",
                          {
                            className:
                              "flex items-center justify-center space-x-2 text-white font-bold",
                          },
                          React.createElement(ExternalLink, {
                            className: "w-4 h-4",
                          }),
                          React.createElement("span", null, "Live Demo"),
                        ),
                      ),
                    ),
                    React.createElement(
                      "a",
                      {
                        href: project.githubUrl,
                        className:
                          "px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all flex items-center space-x-2",
                      },
                      React.createElement(Github, { className: "w-4 h-4" }),
                      React.createElement("span", null, "Code"),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    // Blog Section - Modern Cards
    React.createElement(
      "section",
      {
        id: "blog",
        className:
          "py-32 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10",
      },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "text-center mb-20" },
          React.createElement(
            "h2",
            { className: "text-6xl font-black text-white mb-6" },
            "Latest ",
            React.createElement(
              "span",
              { className: "gradient-text" },
              "Insights",
            ),
          ),
          React.createElement(
            "p",
            { className: "text-2xl text-gray-300 max-w-3xl mx-auto" },
            "Thoughts and tutorials on the ",
            React.createElement(
              "span",
              { className: "text-neon font-bold" },
              "future",
            ),
            " of web development",
          ),
        ),

        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
          blogPosts.map((post, index) =>
            React.createElement(
              "article",
              {
                key: index,
                className:
                  "group relative transform transition-all duration-500 hover:scale-105",
              },
              React.createElement("div", {
                className: `absolute inset-0 bg-gradient-to-r ${post.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`,
              }),
              React.createElement(
                "div",
                {
                  className:
                    "relative glassmorphism rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all",
                },
                React.createElement(
                  "div",
                  { className: "p-8" },
                  React.createElement(
                    "div",
                    { className: "flex items-center justify-between mb-6" },
                    React.createElement(
                      "span",
                      {
                        className: `px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${post.gradient} text-white`,
                      },
                      post.category,
                    ),
                    React.createElement(
                      "div",
                      {
                        className:
                          "flex items-center space-x-2 text-gray-400 text-sm",
                      },
                      React.createElement(BookOpen, { className: "w-4 h-4" }),
                      React.createElement("span", null, post.readTime),
                    ),
                  ),

                  React.createElement(
                    "h3",
                    {
                      className:
                        "text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all",
                    },
                    post.title,
                  ),
                  React.createElement(
                    "p",
                    { className: "text-gray-300 mb-6 leading-relaxed" },
                    post.excerpt,
                  ),

                  React.createElement(
                    "div",
                    { className: "flex items-center justify-between" },
                    React.createElement(
                      "span",
                      { className: "text-gray-500 text-sm" },
                      post.date,
                    ),
                    React.createElement(
                      "button",
                      {
                        className: `px-6 py-2 rounded-full font-bold bg-gradient-to-r ${post.gradient} text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all`,
                      },
                      "Read More →",
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    // Contact Section
    React.createElement(
      "section",
      { id: "contact", className: "py-32 relative" },
      React.createElement("div", {
        className: "absolute inset-0 gradient-bg-animated opacity-20",
      }),
      React.createElement("div", { className: "absolute inset-0 bg-black/50" }),

      React.createElement(
        "div",
        { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "text-center mb-20" },
          React.createElement(
            "h2",
            { className: "text-6xl font-black text-white mb-6" },
            "Let's Create ",
            React.createElement(
              "span",
              { className: "gradient-text" },
              "Together",
            ),
          ),
          React.createElement(
            "p",
            { className: "text-2xl text-gray-300 max-w-3xl mx-auto" },
            "Ready to bring your ",
            React.createElement(
              "span",
              { className: "text-neon font-bold" },
              "wildest ideas",
            ),
            " to life? Let's make magic happen.",
          ),
        ),

        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 gap-16" },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-3xl blur opacity-30",
            }),
            React.createElement(
              "div",
              {
                className:
                  "relative glassmorphism rounded-3xl p-10 border border-white/20",
              },
              React.createElement(
                "h3",
                { className: "text-3xl font-bold text-white mb-8" },
                "Get In Touch",
              ),

              React.createElement(
                "div",
                { className: "space-y-6" },
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-4 group" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "p-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 group-hover:scale-110 transition-transform",
                    },
                    React.createElement(Mail, {
                      className: "w-6 h-6 text-white",
                    }),
                  ),
                  React.createElement(
                    "span",
                    {
                      className:
                        "text-xl text-gray-300 group-hover:text-white transition-colors",
                    },
                    "nimurnerob404@gmail.com",
                  ),
                ),
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-4 group" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform",
                    },
                    React.createElement(MapPin, {
                      className: "w-6 h-6 text-white",
                    }),
                  ),
                  React.createElement(
                    "span",
                    {
                      className:
                        "text-xl text-gray-300 group-hover:text-white transition-colors",
                    },
                    "Thakurgaon, Bangladesh",
                  ),
                ),
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-4 group" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 group-hover:scale-110 transition-transform",
                    },
                    React.createElement(Mail, {
                      className: "w-6 h-6 text-white",
                    }),
                  ),
                  React.createElement(
                    "span",
                    {
                      className:
                        "text-xl text-gray-300 group-hover:text-white transition-colors",
                    },
                    "+88 01708784404",
                  ),
                ),
              ),
            ),
          ),

          // Contact Form
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30",
            }),
            React.createElement(
              "div",
              {
                className:
                  "relative glassmorphism rounded-3xl p-10 border border-white/20",
              },
              React.createElement(
                "form",
                { className: "space-y-6" },
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "label",
                    {
                      htmlFor: "name",
                      className: "block text-lg font-bold text-white mb-3",
                    },
                    "Name",
                  ),
                  React.createElement("input", {
                    type: "text",
                    id: "name",
                    className:
                      "w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm",
                    placeholder: "Your awesome name",
                  }),
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block text-lg font-bold text-white mb-3",
                    },
                    "Email",
                  ),
                  React.createElement("input", {
                    type: "email",
                    id: "email",
                    className:
                      "w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm",
                    placeholder: "your@email.com",
                  }),
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "label",
                    {
                      htmlFor: "message",
                      className: "block text-lg font-bold text-white mb-3",
                    },
                    "Message",
                  ),
                  React.createElement("textarea", {
                    id: "message",
                    rows: 6,
                    className:
                      "w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm resize-none",
                    placeholder:
                      "Tell me about your incredible project idea...",
                  }),
                ),
                React.createElement(
                  "button",
                  {
                    type: "submit",
                    className:
                      "w-full relative group overflow-hidden rounded-xl py-4 font-bold text-lg",
                  },
                  React.createElement("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity",
                  }),
                  React.createElement("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur group-hover:blur-lg transition-all",
                  }),
                  React.createElement(
                    "div",
                    {
                      className:
                        "relative flex items-center justify-center space-x-3 text-white",
                    },
                    React.createElement(Send, { className: "w-6 h-6" }),
                    React.createElement("span", null, "Launch Project 🚀"),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    // Footer
    React.createElement(
      "footer",
      { className: "bg-black border-t border-white/10 py-12" },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "text-4xl font-black gradient-text mb-4" },
            "Nimur Rahman Nerob",
          ),
          React.createElement(
            "p",
            { className: "text-gray-400 text-lg" },
            "© 2024 MERN Stack Developer. Crafting the future, one pixel at a time.",
          ),
        ),
      ),
    ),
  );
}
