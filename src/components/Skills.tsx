import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Python", level: 90 },
        { name: "HTML/CSS", level: 88 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "NumPy", level: 88 },
        { name: "Pandas", level: 90 },
      ],
    },
    {
      title: "Tools & Database",
      skills: [
        { name: "MySQL", level: 82 },
        { name: "Visual Studio Code", level: 90 },
        { name: "Git/GitHub", level: 85 },
        { name: "Matplotlib/Seaborn", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to solve problems and build solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Technologies & Libraries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "C/C++",
              "Python",
              "HTML",
              "CSS",
              "MySQL",
              "NumPy",
              "Pandas",
              "Matplotlib",
              "Seaborn",
              "Scikit-learn",
              "TensorFlow",
              "Visual Studio Code",
              "Git",
              "GitHub",
              "Machine Learning",
              "Data Analysis",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Coding Profiles
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://leetcode.com/u/Badal917978/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105"
            >
              LeetCode Profile
            </a>
            <a
              href="https://www.naukri.com/code360/profile/cb1390f9-0758-4b37-9621-0026fe32804d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
            >
              Coding Ninjas Profile
            </a>
            <a
              href="https://github.com/Badal3375"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg font-medium hover:from-gray-600 hover:to-gray-800 transition-all duration-300 hover:scale-105"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
