import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const experiences = [
  {
    job: "Backend Developer",
    company: "Freelance / Portfolio Projects",
    date: "2023 - Present",
    responsibilities: [
      "Developing secure and scalable backend systems using PHP and CodeIgniter.",
      "Building RESTful APIs and integrating third-party services.",
      // "Creating admin panels and dashboards for web applications.",
      // "Optimizing application performance and database queries.",
    ],
  },
  {
    job: "Web Development Instructor",
    company: "Online Training / Workshops",
    date: "2024 - Present",
    responsibilities: [
      "Teaching PHP, CodeIgniter, and web development best practices.",
      "Providing hands-on coding sessions and live demos.",
      // "Assisting students with project work and code reviews.",
      // "Creating course materials and learning resources.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Personal Projects",
    date: "2025 - Present",
    responsibilities: [
      "Combining PHP (CodeIgniter) with modern JavaScript (React) for dynamic apps.",
      "Designing and developing full-featured web solutions from scratch.",
      // "Handling both frontend and backend responsibilities for projects.",
      // "Continuously learning and applying new technologies in real-world scenarios.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
