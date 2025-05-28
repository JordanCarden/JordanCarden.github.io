import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "Louisiana State University",
    location: "Baton Rouge, LA",
    period: "2021 - 2025",
    gpa: "3.8/4.0",
    achievements: [
      "President's Honor Roll",
      "Undergraduate Research Assistant"
    ],
    relevantCourses: [
      "Data Structures and Algorithms",
      "Software Engineering",
      "Database Systems",
      "Object Oriented Programming",
      "Operating Systems",
      "Machine Learning",
      "Deep Learning"
    ]
  };

  return (
    <section
      id="education"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-600 dark:bg-blue-700 p-6 text-white">
              <div className="flex items-center mb-2">
                <GraduationCap size={28} className="mr-3" />
                <h3 className="text-2xl font-bold">{education.degree}</h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center text-blue-100 mt-2">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span className="mr-4">{education.institution}, {education.location}</span>
                </div>
                <div className="flex items-center mt-1 sm:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    GPA
                  </h4>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {education.gpa}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
                  ></motion.div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Achievements
                  </h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    {education.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 text-sm"
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;