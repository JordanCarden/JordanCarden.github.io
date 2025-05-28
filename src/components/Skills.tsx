import { motion } from 'framer-motion';
import { Code, Layers, Database, Globe, Terminal, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming & Libraries",
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 }
    ]
  },
  {
    title: "Data Science & ML",
    icon: <Globe className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Seaborn", level: 75 }
    ]
  },
  {
    title: "Big Data & Databases",
    icon: <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      { name: "Hadoop", level: 85 },
      { name: "Spark", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "SAP", level: 70 }
    ]
  },
  {
    title: "Development Tools",
    icon: <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    skills: [
      { name: "Docker", level: 90 },
      { name: "Power BI", level: 80 },
      { name: "PI Vision", level: 95 },
      { name: "Bash", level: 85 }
    ]
  },
  {
    title: "Core CS Concepts",
    icon: <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "Database Design", level: 70 }
    ]
  },
  {
    title: "Mathematical Foundation",
    icon: <GitBranch className="w-6 h-6 text-red-600 dark:text-red-400" />,
    skills: [
      { name: "Calculus", level: 90 },
      { name: "Linear Algebra", level: 85 },
      { name: "Statistics", level: 75 },
      { name: "Numerical Methods", level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed expertise in data science, machine learning, and software development,
            enabling me to tackle complex analytical challenges and build efficient solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2.5 rounded-full`}
                        style={{
                          background: `linear-gradient(90deg, 
                            ${index % 6 === 0 ? '#3B82F6' : 
                             index % 6 === 1 ? '#0D9488' : 
                             index % 6 === 2 ? '#6366F1' : 
                             index % 6 === 3 ? '#9333EA' : 
                             index % 6 === 4 ? '#F97316' : 
                             '#EF4444'} 0%, 
                            ${index % 6 === 0 ? '#93C5FD' : 
                             index % 6 === 1 ? '#5EEAD4' : 
                             index % 6 === 2 ? '#A5B4FC' : 
                             index % 6 === 3 ? '#D8B4FE' : 
                             index % 6 === 4 ? '#FDBA74' : 
                             '#FCA5A5'} 100%)`
                        }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;