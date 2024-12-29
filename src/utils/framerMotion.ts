import { AnimationProps } from 'framer-motion';

export const FramerMotionFadeProps: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
