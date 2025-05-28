import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: "ML/AI Research Assistant",
    company: "Louisiana State University",
    location: "Baton Rouge, LA",
    period: "Aug 2024 - Present",
    description:
      "Streamlined data pipelines and constructed predictive models for polymer properties.",
    responsibilities: [
      "Wrote Bash and Python scripts to streamline data generation and collection, saving over 10 hours per week and reducing errors",
      "Constructed a TensorFlow model for polymer properties, achieving a 0.94 R² score",
      "Implemented clustering and unsupervised techniques to enhance property prediction performance",
      "Developed visualizations with Matplotlib and Seaborn to communicate results to stakeholders"
    ],
    technologies: [
      "Bash",
      "Python",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
      "Clustering"
    ]
  },
  {
    title: "Data Science Intern",
    company: "International Paper",
    location: "Rome, GA",
    period: "May 2024 - Aug 2024",
    description:
      "Built ETL pipelines, developed time-series models, and designed dashboards to monitor equipment and process performance.",
    responsibilities: [
      "Constructed ETL pipelines with SQL and Python to process data from SAP HANA and Aveva PI",
      "Developed time-series models in SIMCA and created PI Vision dashboards with real-time alerts",
      "Designed Power BI dashboards for process performance metrics",
      "Built predictive models with Python and scikit-learn to forecast paper properties"
    ],
    technologies: [
      "SQL",
      "Python",
      "SIMCA",
      "PI Vision",
      "Power BI",
      "scikit-learn"
    ]
  },
  {
    title: "Delivery Driver",
    company: "Brady Logistics/Amazon",
    location: "Baton Rouge, LA",
    period: "Nov 2022 - Aug 2023",
    description:
      "Delivered hundreds of packages daily while optimizing routes and assisting team members to ensure timely completion.",
    responsibilities: [
      "Delivered 200+ packages daily, consistently ahead of schedule",
      "Assisted team members with remaining tasks after completing routes",
      "Demonstrated strong planning, collaboration, and efficiency"
    ],
    technologies: []
  },
  {
    title: "Shift Lead",
    company: "Newk's Eatery",
    location: "Baton Rouge, LA",
    period: "Jun 2021 - Dec 2022",
    description:
      "Supervised and trained staff, ensured food safety compliance, and resolved customer concerns.",
    responsibilities: [
      "Supervised and trained a team on daily operations and standards",
      "Upheld food safety standards with zero violations",
      "Resolved customer concerns to maintain satisfaction",
      "Fostered a positive work environment"
    ],
    technologies: []
  }
];

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {experience.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {experience.company}
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
              <Briefcase size={16} className="mr-2" />
              <span>{experience.location}</span>
              <span className="mx-2">•</span>
              <Calendar size={16} className="mr-2" />
              <span>{experience.period}</span>
            </div>
          </div>
          <button
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          {experience.description}
        </p>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
            Key Responsibilities:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            {experience.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>

          {experience.technologies.length > 0 && (
            <>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My professional journey has equipped me with diverse experiences and
          skills across various domains of software development and data science.
        </p>
      </motion.div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;