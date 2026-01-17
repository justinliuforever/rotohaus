import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(4px)' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const RotohausSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <section ref={containerRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      {/* Background decorative elements */}
      <motion.div
        style={{ opacity: decorOpacity }}
        className="absolute top-20 right-10 lg:right-32 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#959726]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Desktop: Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left column - Logo and Title */}
          <div className="lg:col-span-5">
            <FadeInSection>
              {/* Logo with parallax */}
              <motion.div style={{ y: logoY }} className="mb-8">
                <img
                  src="/images/residency/rotohaus/logo-rotohaus.png"
                  alt="Rotohaus"
                  className="w-32 h-auto lg:w-48 opacity-90"
                />
              </motion.div>

              {/* Title */}
              <h2
                className="text-[#392C20] mb-4"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(36px, 4vw, 64px)',
                  fontWeight: 200,
                  lineHeight: 1.2
                }}
              >
                About the Organizer
              </h2>
              <p
                className="text-[#392C20]/50 mb-8"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(16px, 2vw, 28px)',
                  fontWeight: 200,
                  letterSpacing: '0.02em'
                }}
              >
                Our Story
              </p>

              {/* Divider - mobile only */}
              <div className="lg:hidden h-px bg-gradient-to-r from-[#392C20]/20 via-[#392C20]/10 to-transparent mb-8" />
            </FadeInSection>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7">
            {/* Subtitle */}
            <FadeInSection delay={0.1} className="mb-8 lg:mb-12">
              <h3
                className="text-[#959726] lg:text-right"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  lineHeight: 1.3
                }}
              >
                About ROTOHAUS
              </h3>
            </FadeInSection>

            {/* Description paragraphs */}
            <FadeInSection delay={0.2}>
              <p
                className="text-[#959726] mb-6"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                ROTOHAUS is a heritage-rooted creative house founded in New York City in 2025. Through multisensory experiences, we weave tradition and innovation to renew the creative spirit.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p
                className="text-[#6E6E6E]"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                Grounded in art-based healing, everyday aesthetics, and narratives of intangible cultural heritage, ROTOHAUS develops new creative systems that integrate traditional craft, hands-on making, social connection, and exhibition-making.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.35}>
              <p
                className="text-[#6E6E6E] mt-6"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                ROTOHAUS is dedicated to building a cross-cultural, cross-media, and cross-disciplinary cultural ecosystem—bringing together artists, artisans, researchers, brands, and institutions from around the world through collaborative practice and shared inquiry.
              </p>
            </FadeInSection>

            {/* Decorative element */}
            <FadeInSection delay={0.4} className="mt-10 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-[#959726]/30 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-[#959726]/40" />
            </FadeInSection>
          </div>
        </div>

        {/* Letter Image - constrained width on desktop */}
        <FadeInSection delay={0.45} className="mt-16 sm:mt-20 lg:mt-28">
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl xl:max-w-5xl mx-auto overflow-hidden rounded-xl lg:rounded-2xl shadow-xl shadow-black/10"
          >
            <img
              src="/images/residency/rotohaus/letter.png"
              alt="Rotohaus Letter"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </FadeInSection>

        {/* Bottom decoration */}
        <FadeInSection delay={0.5} className="flex justify-center mt-16 sm:mt-20 lg:mt-28">
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#959726]/30" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RotohausSection;
