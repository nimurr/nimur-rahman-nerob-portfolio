import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return React.createElement(
    "nav",
    {
      className: `fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`,
    },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center h-20" },
        React.createElement(
          "div",
          { className: "flex-shrink-0" },
          React.createElement(
            "span",
            {
              className:
                "text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent",
            },
            "NEROB",
          ),
        ),
        React.createElement(
          "div",
          { className: "hidden md:block" },
          React.createElement(
            "div",
            { className: "flex items-center space-x-8" },
            navItems.map((item) =>
              React.createElement(
                "button",
                {
                  key: item.name,
                  onClick: () => scrollToSection(item.href),
                  className:
                    "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 hover:bg-clip-text px-4 py-2 text-lg font-bold transition-all duration-300 relative group",
                },
                item.name,
                React.createElement("span", {
                  className:
                    "absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 transition-all duration-300 group-hover:w-full rounded-full",
                }),
              ),
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "md:hidden" },
          React.createElement(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              className:
                "text-white hover:text-pink-400 transition-colors duration-200 p-2",
            },
            isOpen
              ? React.createElement(X, { size: 28 })
              : React.createElement(Menu, { size: 28 }),
          ),
        ),
      ),
    ),
    isOpen &&
      React.createElement(
        "div",
        {
          className:
            "md:hidden bg-black/95 backdrop-blur-md border-t border-white/10",
        },
        React.createElement(
          "div",
          { className: "px-4 pt-4 pb-6 space-y-2" },
          navItems.map((item) =>
            React.createElement(
              "button",
              {
                key: item.name,
                onClick: () => scrollToSection(item.href),
                className:
                  "block w-full text-left px-4 py-3 text-lg font-bold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 hover:bg-clip-text hover:bg-white/10 rounded-xl transition-all duration-300",
              },
              item.name,
            ),
          ),
        ),
      ),
  );
};

export default Navigation;
