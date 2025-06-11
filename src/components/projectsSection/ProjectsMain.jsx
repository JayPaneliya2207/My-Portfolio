import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "OPUS Financial Web",
    year: "Mar2024",
    align: "right",
    image: "../../public/images/opus.jpeg",
    link: "https://opuschain.pro/",
  },
  {
    name: "Richway Crypto Trade",
    year: "Sept2024",
    align: "left",
    image: "../../public/images/richway.jpeg",
    link: "https://richway.ai/",
  },
  {
    name: "Camary",
    year: "Jan2025",
    align: "right",
    image: "../../public/images/camry.jpeg",
    link: "https://camryprotocol.com/",
  },
  {
    name: "SabjiWale",
    year: "May2025",
    align: "left",
    image: "../../public/images/sabjiwale.jpeg",
    link: "https://sabjiwalebhaiya.in/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
