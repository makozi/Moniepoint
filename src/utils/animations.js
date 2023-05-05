export const scrollReveal = (delay, duration) => ({
  initial: {
    y: "50px",
    opacity: 0,
    transition: { duration: duration || 0.5, ...(delay && { delay }) },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: duration || 0.5, ...(delay && { delay }) },
  },
});
