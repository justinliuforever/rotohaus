import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const FadeInSection = ({
  children,
  delay = 0,
  className = '',
  margin = '-50px',
  duration = 0.8,
  y = 30,
  blur = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y,
        ...(blur && { filter: 'blur(4px)' })
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        ...(blur && { filter: 'blur(0px)' })
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
