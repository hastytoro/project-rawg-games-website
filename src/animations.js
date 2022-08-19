export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const pageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fadeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const waveAnimation = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const lineAnimation = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

// Below are more of scrolling animation types.
// Secondary parent container to prevent above parent stagger from applying.
export const sliderWrapperAnimation = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

export const sliderAnimation = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const scrollAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const reveal = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
    },
  },
};
