import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar.jsx";
import {motion} from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Navbar content */}
      <div className="wrapper">
        <motion.span
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity:1, scale: 1}}
        transition={{duration: 0.5}}><h3>Aarthi Dev</h3></motion.span>
        <div className="social">
          <a href="https://github.com/AarthiHonguthi">
            <img src="/2.png" alt="" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/aarthi-honguthi-b01838257/">
            <img src="/1.png" alt="" width="30" height="30" />
          </a>
          <a href="https://leetcode.com/u/Aarthi_025/">
            <img src="/3.png" alt="" width="30" height="30" />
          </a>
          <a href="https://www.cloudskillsboost.google/public_profiles/079a8244-0d09-4dfa-bd32-340503f68757">
            <img src="/4.png" alt="" width="30" height="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

