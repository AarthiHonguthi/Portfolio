import React from 'react';
import "./app.scss";
import { motion } from "framer-motion"; 
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar.jsx"; 
import Heroine from "./components/Heroine/Heroine.jsx"; 
import Parallax from "./components/parallax/Parallax.jsx";
import Tech from "./components/techstack/Tech.jsx";
import Projects  from "./components/projects/Projects.jsx"; 
import Contact  from "./components/contact/Contact.jsx"; 


const App = () => {
  return (
    <div>
      <div>
      <section id="Homepage">
        <Navbar />
        <Heroine />
      </section>
      <section id="Projects"><Parallax type = "projects"/></section>
      <section><Tech/></section>
      <section id="Portfolio"><Parallax type = "portfolio"/></section>
      <section id="Projects"><Projects/></section>
      <Sidebar />
      </div>
      {/* <section id ="Contact" ><Contact/></section>  */}
    {/* <div> <section><Contact/></section>
      </div> */}
      </div>
  );
};

export default App;

