import "./tech.scss";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Tech = () => {
  const ref = useRef();
  const [isinView, setIsInView] = useInView({ margin: "-100px" });

  return (
    <motion.div
      className="Tech"
      variants={variants}
      initial="initial"
      animate={isinView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I leverage these Technologies to bring innovative ideas to life</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/future.jpg" alt="" width="300" height="100" />
          <h1>
            {" "}
            <motion.b whileHover={{ color: "#59B4C3" }}> Building </motion.b>{" "}
            Future
          </h1>
        </div>
        <div className="title">
          <h1>
            {" "}
            <motion.b whileHover={{ color: "#59B4C3" }}> One Line </motion.b>{" "}
            of <motion.b whileHover={{ color: "#59B4C3" }}>Code</motion.b> at a
            Time
          </h1>
          <button>MY PROJECTS</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2> Languages </h2>
          <p>C++ Javascript Python Java C </p>
          <button>Medium Article</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2> Frameworks & Tools </h2>
          <p>
            <b>Frontend:</b> HTML,CSS, ReactJS, ReduxJS, Tailwind, <br /> Bootstrap,
            NextJs {" "}
          </p>
          <p><b>Backend:</b> NodeJS, ExpressJS </p>
          <p><b>Developer Tools:</b> Git, VSCode, Github</p>
          <button>Medium Article</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2> Data Infrastructures </h2>
          <p><b>Relational Database:</b> MySQL, PostgreSQL </p>
          <p><b>Non-Relational Database:</b> MongoDB</p>
          <button>Medium Article</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2> Servers and LoadBalancers </h2>
          <p><b>Cloud Platforms:</b> GCP, AWS</p>
          <p>
            {" "}
            <b>Other Technology:</b> Docker, Kubernetes, OpenAPISpec,
            Kafka, Reddis
          </p>
          <button>Medium Article</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2> College Courses </h2>
          <p>Strong computer science fundamentals (Operating System, Computer Networks, System Design)</p>
<p><b>Data Structures and Algorithms.</b></p>

<p>Data Science, Machine Learning, Data Analysis.</p>
<p>Blockchain</p>
          <p>
          </p>
          <button>Medium Article</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Tech;
