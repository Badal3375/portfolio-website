import React from "react";
import { Code, Database, Brain, Zap } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      description:
        "Proficient in C/C++, Python with strong problem-solving skills",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Creating responsive web applications with modern technologies",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description:
        "Building predictive models using TensorFlow and scikit-learn",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Ability to adapt to new technologies and frameworks",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Computer Science student passionate about creating innovative
            solutions through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 px-4 sm:px-0">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Hello! I'm Badal Singh, a Computer Science and Engineering student
              at Oriental College of Technology, Bhopal. Currently pursuing my
              B.Tech with a CGPA of 7.73, I have developed a strong foundation
              in programming, web development, and machine learning.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a passion for
              problem-solving. I've solved over 300+ coding questions across
              various platforms and have hands-on experience in building machine
              learning models and web applications. Currently working as a Web
              Development Intern at Boostup Digital.
            </p>

            <div className="pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                What I Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="text-blue-400 mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative px-4 sm:px-0">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 mb-4 shadow-lg animate-float-slow hover:scale-110 transition-transform duration-500">
                    <img
                      src="/src/assets/profileimg.jpg"
                      alt="Badal Singh"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "../assets/profileimg.jpg";
                      }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Badal Singh
                  </h3>
                  <p className="text-blue-400 text-sm sm:text-base">
                    CS Student & Developer
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        5+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Projects
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        300+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Problems Solved
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        7.73
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        CGPA
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        2026
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Graduation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
