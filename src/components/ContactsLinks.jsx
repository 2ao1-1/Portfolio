import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Span } from "./Span";

export function ContactsLinks({ contact, delay }) {
  return (
    <motion.div
      className="w-full mb-4 cursor-default"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <Span text="Let's Contact" />
      <ul className="flex gap-1">
        {contact?.map((contact, index) => (
          <motion.li
            key={index}
            className="flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Link
              to={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="slideUp transition-colors"
            >
              {contact.name}
            </Link>
            {index < contact.length - 1 && ", "}
          </motion.li>
        ))}
        .
      </ul>
    </motion.div>
  );
}
