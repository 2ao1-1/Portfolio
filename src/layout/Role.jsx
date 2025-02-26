import { motion } from "framer-motion";
import { Data } from "../Data";

export function Role({ role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="container mx-auto flex justify-center font-headline font-bold text-4xl md:text-8xl lg:text-9xl pt-4 border-b items-center"
    >
      {Data.role}
    </motion.div>
  );
}
