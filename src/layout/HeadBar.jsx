import { motion } from "framer-motion";
export function HeadBar({ name, city, country }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="container mx-auto mt-4 border-y"
    >
      <div className="flex justify-between items-center">
        <SpanFixed text="Vol. 1, No. 1" delay="0.3" />
        <SubSpan city={city} country={country} delay="0.4" />
        <MainName name={name} delay="0.5" />
        <SubSpan delay="0.6">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </SubSpan>
        <SpanFixed text="Priceless" delay="0.7" />
      </div>
    </motion.div>
  );
}

function SpanFixed({ text, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className="hidden sm:block text-[8px] md:text-base text-midText"
    >
      {text}
    </motion.span>
  );
}

function SubSpan({ children, city, country, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className="text-[10px] md:text-base"
    >
      {city}
      {country}
      {children}
    </motion.span>
  );
}

function MainName({ name, delay }) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className="text-xl md:text-5xl font-subHead"
    >
      {name}
    </motion.h1>
  );
}
