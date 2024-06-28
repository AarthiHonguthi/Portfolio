import "./heroine.scss";
import { Suspense } from 'react';
import {motion} from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
    animate:{
      x:0,
      opacity: 1,
    transition:{
      duration: 1,
      straggerChildren: 0.1,
    },
    },
    scrollButton:{
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity
      },
    }
  };
const slideVariants = {
  initial: {
    x: 0,
    
  },
    animate:{
      x:"-220%",
    transition:{
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    },
    },
    scrollButton:{
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity
      },
    }
  };


const Heroine = () => {
  return (
    <div className="heroine">
      <div className="wrapper">
        <motion.div className="textContainer" 
        variants = {textVariants}
          initial = "initial"
          animate = "animate"
          >
           <motion.h2 variants = {textVariants}>AARTHI HONGUTHI</motion.h2>
           <motion.h1 variants = {textVariants}> Web Developer and UI Designer</motion.h1>
            <motion.div className="buttons">
             <motion.button variants = {textVariants}>See the Latest Works</motion.button>
             <motion.button variants = {textVariants}>Contact Me</motion.button>
            </motion.div>
               <motion.img variants = {textVariants} animate = "scrollButton" src = "/scroll.png" alt=""/>
           </motion.div>
           </div>
           <motion.div 
           className = "slidingTextContainer" 
           variants = {slideVariants} 
           initial = "initial" 
           animate ="animate">
          Designer Developer Writer Coder 
           </motion.div>
            <div className="imageContainer">
          <img src="/arty.jpeg" alt="" height = "500" width = "500"/>
            
        </div>
    </div>
  );
};

export default Heroine;
