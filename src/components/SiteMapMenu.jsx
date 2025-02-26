import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Span } from "./Span";

export function SiteMapMenu({ sitemap, projects, delay }) {
  return (
    <motion.div
      className="w-full mb-4 cursor-default"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <Span text="Site Map" />
      <ul className="flex gap-1">
        {sitemap?.map((page, index) => {
          const formattedPage =
            page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();

          return (
            <motion.li
              key={index}
              className="flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                to={page === "Index" ? "/" : `/${page}`}
                className="transition-colors slideUp"
              >
                {page === "projects"
                  ? `${formattedPage}[${projects.length}]`
                  : formattedPage}
              </Link>
              {index < sitemap.length - 1 && ",  "}
            </motion.li>
          );
        })}
        .
      </ul>
    </motion.div>
  );
}
