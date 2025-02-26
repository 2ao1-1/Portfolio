import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NameMenu } from "./NameMenu";
import { Status } from "./Status";
import { SiteMapMenu } from "./SiteMapMenu";
import { SocialLinks } from "./SocialLinks";
import { ContactsLinks } from "./ContactsLinks";

export function Menu({
  name,
  birthYear,
  status,
  role,
  sitemap,
  social,
  contact,
  projects,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative p-4">
      <MenuOpenBtn isOpen={isOpen} setIsOpen={setIsOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full h-full fixed top-0 left-0 bg-paper flex flex-col p-8 z-50"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <MenuClosebtn isOpen={isOpen} setIsOpen={setIsOpen} />

            <NameMenu
              birthYear={birthYear}
              name={name}
              role={role}
              delay="0.5"
            />

            <Status status={status} delay="0.6" />

            <SiteMapMenu sitemap={sitemap} projects={projects} delay="0.7" />

            <SocialLinks social={social} delay="0.8" />

            <ContactsLinks contact={contact} delay="0.9" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuOpenBtn({ isOpen, setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="bg-white text-mainlines"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </button>
  );
}

function MenuClosebtn({ isOpen, setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(false)} className="self-end text-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="bg-paper text-mainlines stroke-2"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}
