import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  highlight,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title.split(" ").map((word, i) =>
          word === highlight ? (
            <span key={i} className="text-primary">{word}</span>
          ) : (
            <span key={i}>{word}</span>
          )
        )}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}