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

const StackedPhoto = ({ src, alt, className, rotate = 0, delay = 0, zIndex = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
      whileTap={{ scale: 1.02 }}
      className={`absolute bg-[#E8EBEC] p-1.5 sm:p-2 lg:p-3 shadow-xl cursor-pointer ${className}`}
      style={{ zIndex }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

const CreativeDirection = ({ title, description, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="text-center">
      <h3
        className="text-[#C35900] mb-4"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(22px, 2.8vw, 40px)',
          fontWeight: 200,
          lineHeight: 1.3
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#392C20] max-w-3xl mx-auto"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(15px, 1.6vw, 22px)',
          lineHeight: 1.6,
          fontWeight: 300
        }}
      >
        {description}
      </p>
    </FadeInSection>
  );
};

const JiaguanSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden"
    >
      <div className="paper-texture absolute inset-0" />

      <motion.div
        style={{ y: decorY }}
        className="absolute -right-16 top-1/4 w-48 h-48 opacity-[0.03] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#392C20]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">

          <div className="lg:col-span-5">
            <FadeInSection>
              <div className="mb-8 flex items-start gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden lg:block w-12 h-20 mt-2 rounded overflow-hidden shadow-lg flex-shrink-0"
                >
                  <img
                    src="/images/residency/jiaguan/jiaguan-visual.png"
                    alt="Jiaguan"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h2
                    className="text-[#392C20] mb-3"
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 'clamp(36px, 5vw, 72px)',
                      fontWeight: 200,
                      lineHeight: 1.1
                    }}
                  >
                    Jiaguan Ancient Town
                  </h2>
                  <p
                    className="text-[#392C20]/60"
                    style={{
                      fontFamily: "'FZFengRuSong', serif",
                      fontSize: 'clamp(18px, 2vw, 32px)',
                      fontWeight: 400
                    }}
                  >
                    夹关镇
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <FadeInSection delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-6">
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    fontWeight: 300
                  }}
                >
                  *Main venues: artists' studio and accommodation
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    fontWeight: 300
                  }}
                >
                  Key public sites for exhibition and community interaction
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    fontWeight: 300
                  }}
                >
                  Riverside night-time settings
                </span>
              </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.15} className="mb-12 lg:mb-16">
          <p
            className="text-[#C35900] max-w-5xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(17px, 1.8vw, 26px)',
              lineHeight: 1.7,
              fontWeight: 300,
              fontStyle: 'italic'
            }}
          >
            Jiaguan has long served as a key passage connecting the Sichuan Basin with the Tibetan regions to the west. Historically positioned along major westward route, the town functioned as a strategic gateway where military, trade, and cultural exchange converged, giving it lasting significance as a threshold between regions.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2} className="mb-12 lg:mb-16">
          <p
            className="text-[#392C20] max-w-5xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 22px)',
              lineHeight: 1.8,
              textAlign: 'justify',
              fontWeight: 300
            }}
          >
            As the primary site of the residency, Jiaguan today operates less as a preserved historical monument than as a continuously active public realm. Well-preserved segments of ancient trade routes, riverside stilted houses, and old street structures coexist with ongoing markets, festivals, and everyday communal life, making the town a fertile context for public art and community-oriented artistic practice.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.25} className="mb-16 lg:mb-24">
          <p
            className="text-[#392C20]/80 max-w-5xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 22px)',
              lineHeight: 1.8,
              textAlign: 'justify',
              fontWeight: 300,
              fontStyle: 'italic'
            }}
          >
            Jiaguan is characterized by an active nocturnal public culture shaped by night-time tourism and collective gathering. Existing water-screen performances, fire-based spectacles, and illuminated public spaces offer strong contextual conditions for lighting installations, projection mapping, and spatial media practices, especially those engaging with outdoor environments and public spectatorship.
          </p>
        </FadeInSection>

        <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-4.png"
            alt="Jiaguan street view"
            className="w-24 h-20 sm:w-32 sm:h-26 md:w-44 md:h-36 lg:w-64 lg:h-48 xl:w-72 xl:h-56 left-[3%] top-[3%] sm:left-[4%] sm:top-[4%] lg:left-[5%] lg:top-[5%]"
            rotate={-6}
            delay={0}
            zIndex={3}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-5.png"
            alt="Jiaguan architecture"
            className="w-32 h-26 sm:w-40 sm:h-32 md:w-56 md:h-44 lg:w-72 lg:h-56 xl:w-80 xl:h-64 right-[5%] top-[0%] sm:right-[8%] lg:right-[10%]"
            rotate={4}
            delay={0.1}
            zIndex={5}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-6.png"
            alt="Jiaguan scenery"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-60 xl:h-60 left-[10%] top-[28%] sm:left-[12%] sm:top-[30%] lg:left-[15%]"
            rotate={-3}
            delay={0.15}
            zIndex={4}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-3.png"
            alt="Jiaguan culture"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 left-[30%] top-[18%] sm:left-[32%] sm:top-[20%] lg:left-[35%]"
            rotate={2}
            delay={0.2}
            zIndex={6}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-1.png"
            alt="Jiaguan life"
            className="w-26 h-28 sm:w-32 sm:h-36 md:w-48 md:h-52 lg:w-56 lg:h-64 xl:w-64 xl:h-72 right-[3%] top-[32%] sm:right-[4%] sm:top-[34%] lg:right-[5%] lg:top-[35%]"
            rotate={-4}
            delay={0.25}
            zIndex={2}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-7.png"
            alt="Jiaguan heritage"
            className="w-36 h-22 sm:w-44 sm:h-28 md:w-60 md:h-36 lg:w-72 lg:h-44 xl:w-80 xl:h-48 left-[0%] bottom-[3%] sm:bottom-[4%] lg:bottom-[5%]"
            rotate={3}
            delay={0.3}
            zIndex={7}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-2.png"
            alt="Jiaguan cuisine"
            className="w-40 h-26 sm:w-52 sm:h-32 md:w-72 md:h-44 lg:w-84 lg:h-52 xl:w-96 xl:h-56 right-[8%] bottom-[0%] sm:right-[10%] lg:right-[15%]"
            rotate={-2}
            delay={0.35}
            zIndex={8}
          />
        </div>

        <FadeInSection className="text-center mb-12">
          <p
            className="text-[#9C9C9C] mb-8"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.8vw, 24px)',
              fontWeight: 200
            }}
          >
            Jiaguan Project Framework
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#DADADA]" />
            <div className="w-2 h-2 rounded-full bg-[#C35900]/30" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DADADA]" />
          </div>
        </FadeInSection>

        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-24">
          <CreativeDirection
            title="Riverfront Light & Projection Works"
            description="Site-responsive light installations and projection-based works developed for riverfront and night-time public spaces."
            delay={0.1}
          />

          <CreativeDirection
            title="Performance & Live Practices"
            description="Live works in public and outdoor settings drawing from local landscapes and everyday life—rivers, bridges, tea hills, and markets—using movement, sound, ritual, or technology, and extending existing water-screen and fire-based performances for public presentation during the May Day festival."
            delay={0.15}
          />

          <CreativeDirection
            title="Community-engaged Art"
            description="Participatory projects developed with local residents and visitors, engaging shared memory, local history, and everyday experience."
            delay={0.2}
          />

          <CreativeDirection
            title="Photography and Moving Images"
            description="Lens-based practices exploring place, landscape, and lived experience through photography, video, or hybrid moving-image works, presented in public exhibition contexts."
            delay={0.25}
          />
        </div>

        <FadeInSection delay={0.3} className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#476724]/30" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default JiaguanSection;
