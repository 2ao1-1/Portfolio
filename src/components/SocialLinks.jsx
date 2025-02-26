import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Span } from "./Span";

export function SocialLinks({ social, delay }) {
  return (
    <motion.div
      className="w-full mb-4 cursor-default"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <Span text="Find Me Here" />
      <ul className="flex gap-1">
        {social?.map((link, index) => (
          <motion.li
            key={index}
            className="flex flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Link
              to={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors slideUp"
            >
              {link.name}
            </Link>
            {index < social.length - 1 && ", "}
          </motion.li>
        ))}
        .
      </ul>
    </motion.div>
  );
}
