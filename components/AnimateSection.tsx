import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimateSection = ({
  children,
  delay = 0,
  duration = 0.5,
  ease = "easeInOut",
  animation,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  ease?: string;
  animation?: any;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const defaultValue = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease },
  };

  const combinedValue = { ...defaultValue, ...animation };

  return (
    <motion.div
      ref={ref}
      initial={combinedValue.initial}
      animate={inView ? combinedValue.animate : combinedValue.initial}
      transition={{
        ...combinedValue.transition,
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    // transition={combinedValue.transition}
    // transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};
