import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Span } from "./Span";

export function NameMenu({ birthYear, name, role, delay }) {
  return (
    <motion.div
      className="w-full mb-4 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <Span text="Name" />
      <p className="text-md tracking-sm">
        <button className="text-mainlines transition-colors slideUp">
          <Link to="/">{name}</Link>
        </button>
        __@{birthYear}, {role}.
      </p>
    </motion.div>
  );
}
