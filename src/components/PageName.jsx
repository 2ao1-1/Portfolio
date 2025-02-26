import { motion } from "framer-motion";
export function Name({ pageName }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="w-1/2 flex items-center justify-center"
    >
      <h1 className="font-title text-3xl sm:text-6xl lg:text-8xl">
        {pageName}
      </h1>
    </motion.div>
  );
}
