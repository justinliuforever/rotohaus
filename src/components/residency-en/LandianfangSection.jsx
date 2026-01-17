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
      className={`absolute bg-[#E6ECE6] p-1.5 sm:p-2 lg:p-3 shadow-xl cursor-pointer ${className}`}
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
        className="text-[#7F97B2] mb-4"
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

const LandianfangSection = () => {
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
        className="absolute -right-20 top-1/4 w-56 h-56 opacity-[0.03] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#1a365d]">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
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
                    src="/images/residency/landianfang/landianfang-11.png"
                    alt="Indigo"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h2
                    className="text-[#392C20] mb-3"
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 'clamp(32px, 4.5vw, 64px)',
                      fontWeight: 200,
                      lineHeight: 1.1
                    }}
                  >
                    The Indigo Courtyard
                  </h2>
                  <p
                    className="text-[#392C20]/60"
                    style={{
                      fontFamily: "'FZFengRuSong', serif",
                      fontSize: 'clamp(18px, 2vw, 32px)',
                      fontWeight: 400
                    }}
                  >
                    蓝靛坊
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
                  Short-term residency site
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    fontWeight: 300
                  }}
                >
                  Indigo dyeing, textile practices, and bamboo
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    fontWeight: 300
                  }}
                >
                  Material | Craft | Architecture Research
                </span>
              </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.15} className="mb-12 lg:mb-16">
          <p
            className="text-[#7F97B2] max-w-5xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(17px, 1.8vw, 26px)',
              lineHeight: 1.7,
              fontWeight: 300,
              fontStyle: 'italic'
            }}
          >
            The Indigo Courtyard is a short-term residency site for textile- and material-based practices, established in 1880 and preserved as a historic rural courtyard in western Sichuan. Architecturally organized through layered halls, terraces, and transitional spaces, the site supports research at the intersection of material, craft, and spatial practice.
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
            Historically, the site was not an artist workshop but part of one of southwest China's major regions for indigo raw-material production and trade, where dyeing, paper-making traditions, and everyday life were closely integrated. This historical context positions the courtyard as a site of material circulation rather than isolated craft.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.25} className="mb-12 lg:mb-16">
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
            Located in a mountainous setting, the Indigo Courtyard offers a slower, more immersive working environment. Adjacent Wu's Family House provides comfortable accommodation and meals for resident artists.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mb-16 lg:mb-24">
          <p
            className="text-[#392C20]/80 max-w-5xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 22px)',
              lineHeight: 1.8,
              textAlign: 'justify',
              fontWeight: 300
            }}
          >
            Surrounded by private gardens and extensive bamboo groves, the site supports projects working with bamboo as material, including architectural structures, furniture, bio-art, and public installations. The landscape also offers conditions for wellbeing- and healing-oriented practices, such as forest bathing, somatic research, and nature-based experimentation.
          </p>
        </FadeInSection>

        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] xl:h-[800px] mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <StackedPhoto
            src="/images/residency/landianfang/landianfang-1.png"
            alt="Indigo Courtyard"
            className="w-28 h-40 sm:w-36 sm:h-48 md:w-48 md:h-64 lg:w-64 lg:h-84 xl:w-72 xl:h-96 left-[1%] top-[3%] sm:left-[2%] sm:top-[4%] lg:top-[5%]"
            rotate={-3}
            delay={0}
            zIndex={4}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-2.png"
            alt="Indigo architecture"
            className="w-26 h-36 sm:w-32 sm:h-44 md:w-44 md:h-60 lg:w-56 lg:h-72 xl:w-64 xl:h-80 left-[24%] top-[0%] sm:left-[26%] lg:left-[28%]"
            rotate={4}
            delay={0.08}
            zIndex={3}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-3.png"
            alt="Indigo panorama"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-72 md:h-48 lg:w-84 lg:h-56 xl:w-96 xl:h-64 left-[20%] top-[28%] sm:left-[22%] sm:top-[29%] lg:left-[25%] lg:top-[30%]"
            rotate={-2}
            delay={0.12}
            zIndex={8}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-4.png"
            alt="Indigo detail"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 right-[5%] top-[3%] sm:right-[6%] sm:top-[4%] lg:right-[8%] lg:top-[5%]"
            rotate={3}
            delay={0.16}
            zIndex={5}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-5.png"
            alt="Indigo craft"
            className="w-22 h-22 sm:w-26 sm:h-26 md:w-36 md:h-36 lg:w-42 lg:h-42 xl:w-48 xl:h-48 right-[0%] top-[32%] sm:top-[33%] lg:top-[35%]"
            rotate={-4}
            delay={0.2}
            zIndex={2}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-6.png"
            alt="Indigo environment"
            className="w-26 h-26 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 left-[3%] bottom-[3%] sm:left-[4%] sm:bottom-[4%] lg:left-[5%] lg:bottom-[5%]"
            rotate={2}
            delay={0.24}
            zIndex={6}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-7.png"
            alt="Indigo dyeing"
            className="w-28 h-40 sm:w-36 sm:h-48 md:w-48 md:h-60 lg:w-56 lg:h-72 xl:w-64 xl:h-80 left-[30%] bottom-[0%] sm:left-[32%] lg:left-[35%]"
            rotate={-3}
            delay={0.28}
            zIndex={7}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-8.png"
            alt="Indigo materials"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52 right-[10%] bottom-[8%] sm:right-[12%] sm:bottom-[9%] lg:right-[15%] lg:bottom-[10%]"
            rotate={5}
            delay={0.32}
            zIndex={9}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-9.png"
            alt="Indigo activities"
            className="w-28 h-24 sm:w-36 sm:h-28 md:w-44 md:h-36 lg:w-48 lg:h-40 xl:w-56 xl:h-48 right-[0%] bottom-[18%] sm:bottom-[19%] lg:bottom-[20%]"
            rotate={-2}
            delay={0.36}
            zIndex={10}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-10.png"
            alt="Indigo blueprint"
            className="w-44 h-24 sm:w-56 sm:h-28 md:w-72 md:h-36 lg:w-84 lg:h-44 xl:w-96 xl:h-52 left-[10%] bottom-[13%] sm:left-[12%] sm:bottom-[14%] lg:left-[15%] lg:bottom-[15%]"
            rotate={1}
            delay={0.4}
            zIndex={11}
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
            The Indigo Courtyard Framework
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#DADADA]" />
            <div className="w-2 h-2 rounded-full bg-[#7F97B2]/30" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DADADA]" />
          </div>
        </FadeInSection>

        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-24">
          <CreativeDirection
            title="Indigo, Fiber & Material Processes"
            description="Hands-on exploration of indigo dyeing, textiles, bamboo, paper, and local materials, engaging traditional processes as living material systems rather than symbolic heritage."
            delay={0.1}
          />

          <CreativeDirection
            title="Courtyard-Scale Spatial Interventions"
            description="Site-sensitive interventions responding to the courtyard's architecture, surfaces, and circulation, including light, projection, or spatial installations developed in close dialogue with the built environment."
            delay={0.15}
          />

          <CreativeDirection
            title="Nature-Based Experiments"
            description="Projects engaging the surrounding gardens, bamboo groves, and mountain landscape, supporting practices related to ecological thinking, bio-art, public installation, and nature-based wellbeing."
            delay={0.2}
          />
        </div>

        <FadeInSection delay={0.3} className="flex justify-center">
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

export default LandianfangSection;
