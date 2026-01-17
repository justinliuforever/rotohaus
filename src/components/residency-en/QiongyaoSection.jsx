import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeInSection from '../shared/FadeInSection';

const StackedPhoto = ({ src, alt, className, rotate = 0, delay = 0, zIndex = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
      whileTap={{ scale: 1.02 }}
      className={`absolute bg-[#E2E6E7] p-1.5 sm:p-2 lg:p-3 shadow-xl cursor-pointer ${className}`}
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
        className="text-[#959726] mb-4"
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

const QiongyaoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section
      id="qiongyao"
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden"
    >
      <div className="paper-texture absolute inset-0" />

      <motion.div
        style={{ y: decorY }}
        className="absolute -left-16 top-1/3 w-48 h-48 opacity-[0.03] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#392C20]">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(10 50 50)" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(10 50 50)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">

          <div className="lg:col-span-6">
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
                    src="/images/residency/qiongyao/qiongyao-visual.png"
                    alt="Qiong Kiln"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h2
                    className="text-[#392C20] mb-3"
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 'clamp(28px, 4vw, 56px)',
                      fontWeight: 200,
                      lineHeight: 1.15
                    }}
                  >
                    Qiong Kiln Archaeological Park
                  </h2>
                  <p
                    className="text-[#392C20]/60"
                    style={{
                      fontFamily: "'FZFengRuSong', serif",
                      fontSize: 'clamp(16px, 1.8vw, 28px)',
                      fontWeight: 400
                    }}
                  >
                    邛窑国家考古遗址公园
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="lg:col-span-6 lg:pt-4">
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
                  *Artists' living and working spaces
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    fontWeight: 300
                  }}
                >
                  Opening and academic convenings
                </span>
              </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.15} className="mb-12 lg:mb-16">
          <p
            className="text-[#9EB996] max-w-5xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(17px, 1.8vw, 26px)',
              lineHeight: 1.7,
              fontWeight: 300,
              fontStyle: 'italic'
            }}
          >
            Qiong Kiln is one of China's major historic ceramic centers and the largest celadon kiln system of ancient Sichuan. Active from the Southern and Northern Dynasties through the Tang and Five Dynasties periods, the site reflects the close relationship between ceramic technology and everyday life. Qiong Kiln Archaeological Park became a National Archaeological Park in 2022.
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
            The material language of Qiong Kiln ceramics, including Qiong tri-color ware and oil-lamp vessels, offers historical reference points for contemporary practice, particularly in the integration of structure, function, and aesthetics.
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
            The residency will be based at the Qiong Kiln Master Studio and International Exchange Center, providing studio and living spaces for artists and hosting the residency opening events. The site supports wood-fired kiln production and can accommodate sculpture and installation making.
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
            The park also brings together ceramic heritage and textile-based intangible practices, including bamboo weaving, creating a rare context for cross-material and interdisciplinary artistic exploration.
          </p>
        </FadeInSection>

        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] xl:h-[800px] mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-1.png"
            alt="Qiong Kiln site"
            className="w-28 h-40 sm:w-36 sm:h-52 md:w-48 md:h-68 lg:w-64 lg:h-88 xl:w-72 xl:h-96 left-[5%] top-[0%] sm:left-[6%] lg:left-[8%]"
            rotate={-4}
            delay={0}
            zIndex={4}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-5.png"
            alt="Qiong Kiln ceramics"
            className="w-26 h-26 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 left-[30%] top-[3%] sm:left-[32%] sm:top-[4%] lg:left-[35%] lg:top-[5%]"
            rotate={3}
            delay={0.08}
            zIndex={5}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-3.png"
            alt="Qiong Kiln scenery"
            className="w-24 h-28 sm:w-28 sm:h-36 md:w-40 md:h-52 lg:w-48 lg:h-64 xl:w-56 xl:h-72 right-[3%] top-[0%] sm:right-[4%] lg:right-[5%]"
            rotate={-2}
            delay={0.12}
            zIndex={3}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-4.png"
            alt="Qiong Kiln craft"
            className="w-32 h-24 sm:w-40 sm:h-28 md:w-52 md:h-36 lg:w-64 lg:h-44 xl:w-72 xl:h-52 left-[0%] top-[42%] sm:top-[44%] lg:top-[45%]"
            rotate={2}
            delay={0.16}
            zIndex={6}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-6.png"
            alt="Qiong Kiln exhibition"
            className="w-36 h-28 sm:w-44 sm:h-36 md:w-60 md:h-48 lg:w-72 lg:h-56 xl:w-80 xl:h-64 left-[25%] top-[32%] sm:left-[28%] sm:top-[34%] lg:left-[30%] lg:top-[35%]"
            rotate={-3}
            delay={0.2}
            zIndex={7}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-2.png"
            alt="Qiong Kiln artifacts"
            className="w-28 h-36 sm:w-36 sm:h-44 md:w-52 md:h-60 lg:w-64 lg:h-72 xl:w-72 xl:h-80 right-[6%] top-[28%] sm:right-[8%] sm:top-[29%] lg:right-[10%] lg:top-[30%]"
            rotate={4}
            delay={0.24}
            zIndex={2}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-8.png"
            alt="Qiong Kiln building"
            className="w-26 h-36 sm:w-32 sm:h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 xl:w-56 xl:h-72 left-[10%] bottom-[0%] sm:left-[12%] lg:left-[15%]"
            rotate={-5}
            delay={0.28}
            zIndex={8}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-9.png"
            alt="Qiong Kiln detail"
            className="w-24 h-28 sm:w-28 sm:h-36 md:w-36 md:h-48 lg:w-44 lg:h-56 xl:w-52 xl:h-64 left-[40%] bottom-[3%] sm:left-[42%] sm:bottom-[4%] lg:left-[45%] lg:bottom-[5%]"
            rotate={2}
            delay={0.32}
            zIndex={9}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-7.png"
            alt="Qiong Kiln panorama"
            className="w-32 h-24 sm:w-40 sm:h-28 md:w-52 md:h-36 lg:w-64 lg:h-44 xl:w-72 xl:h-52 right-[0%] bottom-[8%] sm:bottom-[9%] lg:bottom-[10%]"
            rotate={-2}
            delay={0.36}
            zIndex={10}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-10.png"
            alt="Qiong Kiln pottery"
            className="w-24 h-28 sm:w-28 sm:h-36 md:w-36 md:h-48 lg:w-44 lg:h-56 xl:w-52 xl:h-64 left-[50%] bottom-[18%] sm:left-[52%] sm:bottom-[19%] lg:left-[55%] lg:bottom-[20%]"
            rotate={3}
            delay={0.4}
            zIndex={11}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-11.png"
            alt="Qiong Kiln works"
            className="w-22 h-20 sm:w-28 sm:h-24 md:w-36 md:h-28 lg:w-40 lg:h-32 xl:w-44 xl:h-36 right-[20%] top-[48%] sm:right-[22%] sm:top-[49%] lg:right-[25%] lg:top-[50%]"
            rotate={-4}
            delay={0.44}
            zIndex={1}
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
            Qiongyao Project Framework
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#DADADA]" />
            <div className="w-2 h-2 rounded-full bg-[#959726]/30" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DADADA]" />
          </div>
        </FadeInSection>

        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-24">
          <CreativeDirection
            title="Ceramics, Sculpture & Installation"
            description="On-site ceramic making and kiln-based experimentation, with open studios supporting sculptural and installation practices."
            delay={0.1}
          />

          <CreativeDirection
            title="Color & Texture Experiments"
            description="Material and visual experiments translating the chromatic language of Qiong tri-color ceramics into contemporary and cross-media artistic expressions."
            delay={0.15}
          />

          <CreativeDirection
            title="Wheel Throwing, Movement & Wellbeing"
            description="Projects engaging wheel throwing and clay work as embodied practice, including workshops exploring the therapeutic and meditative qualities of making."
            delay={0.2}
          />
        </div>

        <FadeInSection delay={0.25} className="flex justify-center">
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

export default QiongyaoSection;
