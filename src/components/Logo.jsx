import { motion } from "framer-motion";
import CircularText from "../layout/CircularText";

export function Logo({ logo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-1/4 flex items-center justify-center"
    >
      <CircularText text="Desiner * Developer * ">
        <img
          src={logo}
          alt="AO logo"
          className="grayscale-100 w-4 h-4 md:w-9 md:h-9 object-contain"
        />
      </CircularText>
    </motion.div>
  );
}
