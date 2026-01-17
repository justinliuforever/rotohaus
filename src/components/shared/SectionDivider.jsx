import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionDivider = ({ variant = 'line', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  if (variant === 'line') {
    return (
      <div ref={ref} className={`w-full py-6 sm:py-8 flex justify-center ${className}`}>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#476724]/20 to-transparent"
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div ref={ref} className={`w-full py-6 sm:py-8 flex justify-center ${className}`}>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#E2D19E]/60"
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div ref={ref} className={`w-full py-6 sm:py-8 flex justify-center ${className}`}>
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          width="60"
          height="8"
          viewBox="0 0 60 8"
          fill="none"
          className="text-[#476724]/15"
        >
          <path
            d="M0 4C10 4 10 1 20 1C30 1 30 7 40 7C50 7 50 4 60 4"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    );
  }

  return null;
};

export default SectionDivider;
