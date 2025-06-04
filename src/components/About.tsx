import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <img
              src="/Headshot.jpg"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Data Science & Machine Learning Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Recent graduate with a B.S. in Computer Science from Louisiana State University, specializing in Data Science & Analytics.
              Achieved a GPA of 3.8 while gaining hands-on experience in machine learning, data analysis, and software development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As an ML/AI Research Assistant at LSU and through my internship at International Paper,
              I've developed practical experience in building predictive models, implementing ETL pipelines,
              and creating data visualizations that drive decision-making.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm passionate about using new technology to build a better and brighter future.
              Outside of work, I enjoy exploring new restaurants, learning to cook, staying active through rock climbing and hiking, and experimenting with creative AI applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                Problem Solver
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                Data Driven
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                Detail-Oriented
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                Fast Learner
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
