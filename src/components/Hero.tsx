import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "Computer Science Student",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Problem Solver",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < texts[textIndex].length) {
            setDisplayText(texts[textIndex].substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(texts[textIndex].substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, texts]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-6 sm:mb-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 mb-6 shadow-2xl animate-float-slow hover:scale-110 transition-transform duration-500">
              <img
                src="/src/assets/profileimg.jpg"
                alt="Badal Singh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "../src/assets/profileimg.jpg";
                }}
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
            Badal Singh
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 h-8 sm:h-10">
            <span className="text-blue-400">I'm a </span>
            <span className="text-purple-400 font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Computer Science student with a strong foundation in programming,
            web development, and machine learning, seeking to apply my skills in
            dynamic and challenging environments.
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <a
              href="https://www.linkedin.com/in/badalsingh91/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/Badal3375"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:singh.badal3375@gmail.com"
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="tel:+919179787632"
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              <Phone size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={scrollToAbout}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              View My Work
            </button>
            <a
              href="/src/assets/Badal_resume.pdf"
              target="_blank"
              className="px-6 sm:px-8 py-3 border border-gray-600 rounded-full font-medium hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              onError={(e) => {
                e.preventDefault();
                alert("Resume will be available soon!");
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown size={28} className="sm:w-8 sm:h-8 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
