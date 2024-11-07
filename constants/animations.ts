export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideInUp = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const slideInDown = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const zoomIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const zoomOut = {
  initial: { scale: 1, opacity: 1 },
  animate: { scale: 0.9, opacity: 0 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const rotateIn = {
  initial: { rotate: "-360deg", opacity: 0 },
  animate: { rotate: "0deg", opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const rotateOut = {
  initial: { rotate: "0deg", opacity: 1 },
  animate: { rotate: "360deg", opacity: 0 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};

export const flipIn = {
  initial: { rotateY: "-90deg", opacity: 0 },
  animate: { rotateY: "0deg", opacity: 1 },
  // transition: { duration: 0.5, ease: "easeInOut" },
};
