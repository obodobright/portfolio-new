const Skills = () => {
  const skills = {
    Frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
    Backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
    Tools: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
    ],
    Other: [
      { name: "Agile", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Leadership", level: 80 },
      { name: "Technical Writing", level: 75 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover-scale animate-scale-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category header */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 text-white text-sm">
                    {category.charAt(0)}
                  </span>
                  {category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="relative z-10 space-y-4">
                {items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform origin-left transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["TypeScript", "Redux", "GraphQL", "Jest", "CI/CD", "Webpack", "Sass", "Tailwind"].map(
            (skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center group hover-scale"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{skill.charAt(0)}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
