import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import styles from "../assets/css/navbar.module.css";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Gallery", to: "/gallery", id: 2 },
  { name: "Contact", to: "/contact", id: 3 },
  { name: "Licence", to: "/licence", id: 4 },

];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main>
      <div>
        <button className={styles.nav} onClick={cycleOpen}>{open ? "Close" : "Menu"}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: 0 }}
            className={styles.aside}
            animate={{
            width: 150
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.div
              className={styles.open_nav}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
