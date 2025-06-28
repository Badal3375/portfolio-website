import React from "react";
import { Github, Linkedin, Mail, Phone, Heart, Code } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/badalsingh91/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/Badal3375",
      label: "GitHub",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:singh.badal3375@gmail.com",
      label: "Email",
    },
    { icon: <Phone size={20} />, href: "tel:+919179787632", label: "Phone" },
    {
      icon: <Code size={20} />,
      href: "https://leetcode.com/u/Badal917978/",
      label: "LeetCode",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Badal Singh
            </div>
            <p className="text-gray-400">
              Computer Science Student & Developer
            </p>
            <p className="text-gray-500 text-sm">Bhopal, India</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
          >
            Back to Top
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 Badal Singh. Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>and lots of dedication.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
