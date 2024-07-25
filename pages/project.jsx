import styles from "../styles/Project.module.css";
import HelmetMetaData from "../components/HelmetMetaData";
import { motion } from "framer-motion";

const projects = [
  {
    title: "finai",
    codeBlockContent: [
      "AI-powered personal finance advisor",
      "Next.js, Typescript and Tailwind CSS",
      "OpenAI API for customized financial advice",
      "secure user authentication and management",
    ],
    description:
      "An AI-powered finance advisor app built using Next.js. Allows users to manage their income, expenses, and budget effectively. Provides personalized financial advice based on the user's financial data.",
    commits: "7 commits",
    liveProjectLink: "https://github.com/jung-eugene/finai",
  },
  {
    title: "apple-website",
    codeBlockContent: [
      "Apple's iPhone 15 Pro website",
      "dynamic 3D model rendering",
      "smooth animations using GSAP",
      "fully responsive",
    ],
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. Features custom animations, 3D model rendering, and a fully responsive design.",
    commits: "27 commits",
    liveProjectLink: "https://3d-iphone15.vercel.app/",
  },

  {
    title: "bostonhacks-medimind",
    codeBlockContent: [
      "fitness and diet mobile app",
      "React Native and OpenAI",
      "health metric monitor",
      "AI-powered symptom checker",
    ],
    description:
      "A mental health tracking mobile app developed for BostonHacks. Designed for individuals with medical conditions to monitor their health metrics and receive AI diet recommendations.",
    commits: "72 commits",
    liveProjectLink: "https://github.com/jung-eugene/bostonhacks-medimind",
  },
  {
    title: "bu-website",
    codeBlockContent: [
      "simplified version of the BU website",
      "introduces the university",
      "HTML, CSS, and Javascript",
      "fully responsive",
    ],
    description:
      "A simple website designed to introduce Boston University, built using HTML, CSS, and Javascript. Includes a contact form and various pages such as About, Programs, and Blog. Fully responsive design.",
    commits: "7 commits",
    liveProjectLink: "https://jung-eugene.github.io/bu-website/",
  },
];

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Project = () => {
  return (
    <div className={styles.container}>
      <HelmetMetaData />
      <h2 className={styles.heading}>// Top projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{ marginBottom: "20px" }}
          >
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.commits}>{project.commits}</span>
              </div>
              <div className={styles.codeBlock}>
                <pre>
                  <code>
                    {`/**\n`}
                    {project.codeBlockContent
                      .map((line) => ` * ${line}\n`)
                      .join("")}
                    {` */`}
                  </code>
                </pre>
                <a
                  href={project.liveProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  view live project &gt;&gt;{" "}
                </a>
              </div>
              <div className={styles.description}>{project.description}</div>
              <a
                href={`https://github.com/jung-eugene/${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
