import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // items would get closed in reverse order
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const links = [
  { id: "HomePage", label: "Home" },
  { id: "Contact", label: "Contact" },
  { id: "ProjectsParallax", label: "Projects" },
  { id: "PortfolioParallax", label: "Portfolio" },
];

const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {links.map(({ id, label }) => (
        <motion.a
          href={`#${id}`}
          key={id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
