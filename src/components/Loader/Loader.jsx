import { motion } from "framer-motion";
import scss from "./Loader.module.scss";

const Loader = () => {

  return (
      <motion.div className={scss.dots_container} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={scss.dot}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1, 0.3] }}
            transition={{ duration: 1.5, delay: index * 0.30, repeat: Infinity, repeatDelay: 1}}
          />
        ))}
      </motion.div>
  );
};

export default Loader;







