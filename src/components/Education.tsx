import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Oriental College of Technology',
      location: 'Bhopal',
      period: '2022 - 2026 (Expected)',
      cgpa: '7.73',
      description: 'Pursuing Bachelor of Technology with focus on software engineering, data structures, and machine learning.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Achievement',
      description: 'Secured 8th place in college hackathon and coding competitions',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'LeetCode Progress',
      description: 'Solved over 100+ SQL questions on LeetCode platform',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Coding Practice',
      description: 'Solved over 300+ coding questions on various platforms',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Web Development Intern',
      description: 'Currently working at Boostup Digital, Bhopal (June 2023 - Present)',
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <span>{edu.period}</span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <Award className="w-6 h-6 mr-3 text-blue-400" />
              Achievements & Experience
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-400 mt-1">{achievement.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Current Focus</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Advanced Machine Learning Techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Full Stack Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Data Science & Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;