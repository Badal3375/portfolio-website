import React from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Brain,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Spam Email Detection using TensorFlow",
      description:
        "Machine learning model that classifies emails as Spam or Ham (Not Spam) using TensorFlow and Python. Implemented with natural language processing techniques for accurate email classification.",
      image:
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TensorFlow", "NLP", "Machine Learning"],
      github: "https://github.com/Badal3375",
      demo: "#",
      featured: true,
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Calories Burnt Prediction",
      description:
        "Predictive model to estimate the number of calories burned during physical activity based on various features like age, weight, duration, and activity type using machine learning algorithms.",
      image:
        "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
      ],
      github: "https://github.com/Badal3375",
      demo: "#",
      featured: true,
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Loan Approval Prediction System",
      description:
        "Machine learning system that classifies loan applications as approved or rejected based on applicant data. Uses various ML algorithms to predict loan approval with high accuracy.",
      image:
        "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "ML Algorithms",
      ],
      github: "https://github.com/Badal3375",
      demo: "#",
      featured: false,
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Machine learning and web development projects showcasing my
            technical skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full text-blue-400">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Code2 className="w-6 h-6 mr-3 text-blue-400" />
              Other Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">{project.icon}</div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/Badal3375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 rounded-full hover:border-blue-400 hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
