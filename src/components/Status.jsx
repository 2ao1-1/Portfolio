import { motion } from "framer-motion";
import { Span } from "./Span";

export function Status({ status, delay }) {
  return (
    <motion.div
      className="w-full mb-4 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <Span text="Status" />
      <p className="text-md tracking-sm">
        Currently <span className="text-mainlines">{status}</span>
      </p>
    </motion.div>
  );
}
