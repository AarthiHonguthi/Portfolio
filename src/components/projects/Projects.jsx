// Projects.jsx
import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Carbon FootPrint",
    description:
      "Welcome to the Carbon Footprint Tracker! My web application empowers users to monitor and reduce their daily carbon emissions actively. Using Flask, HTML, Python, SQL, Jinja, and Matplotlib, we've developed a platform that calculates carbon footprints and encourages users to reflect on their environmental impact. With tool, users can make informed decisions to contribute positively to the planet.",
  },
  {
    id: 2,
    title: "NAYSA",
    description:
      "My project, titled NaysaChatBot, seeks to transform the digital ordering process for Fresh and Delicious Foods by incorporating an intelligent chat system into their website. By utilizing cutting-edge technologies like Dialogflow for natural language processing (NLP), FastAPI for backend development, and MySQL for database management, the chatbot streamlines interactions for users. This enables them to seamlessly place orders and effortlessly track them using conversational interfaces.",
  },
  {
    id: 3,
    title: "MEDICO",
    description:
      "Medico is our innovative Medical Automation System designed for the college PHC center, streamlining medical services for students and staff. It features an intuitive web interface for easy appointment scheduling, medical record management, and access to essential healthcare services, ensuring efficient and effective healthcare delivery. Medico aims to enhance the quality of care while reducing administrative burdens.",
  },
  {
    id: 4,
    title: "PayTM Clone",
    description:
      "Welcome to Paytm Clone! My project aims to replicate the seamless digital payment experience provided by Paytm. Through a combination of technologies including React, Node.js, Express.js, MongoDB, and Material-UI, we have developed a platform that enables users to perform various financial transactions securely and conveniently. From mobile recharges to bill payments, this application provides a user-friendly interface and robust backend functionality.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <section ref={ref} className="projectSection">
      <div className="container">
        <div className="wrapper">
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Source Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
