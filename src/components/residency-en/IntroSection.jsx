import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeInSection from '../shared/FadeInSection';

const IntroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const locations = [
    {
      image: '/images/residency/intro/qiongyao-park.png',
      title: 'Qiong Kiln Archaeological Park',
      titleEn: '邛窑国家考古遗址公园'
    },
    {
      image: '/images/residency/intro/jiaguan-town.png',
      title: 'Jiaguan Ancient Town',
      titleEn: '夹关古镇'
    },
    {
      image: '/images/residency/intro/landin-fang.png',
      title: 'The Indigo Courtyard',
      titleEn: '蓝靛坊'
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <motion.div
        style={{ y: decorY }}
        className="absolute top-20 right-10 lg:right-20 w-20 h-20 opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#476724]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeInSection className="text-center mb-20 lg:mb-28">
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/residency/intro/logo.png"
              alt="Rotohaus"
              className="w-16 h-16 lg:w-20 lg:h-20"
            />
            <div className="h-12 w-px bg-[#392C20]/15" />
            <h2
              className="text-[#392C20]"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 200
              }}
            >
              Program Introduction
            </h2>
          </div>
          <p
            className="text-[#392C20]/50"
            style={{
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(14px, 1.8vw, 20px)',
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
          >
            项目简介
          </p>
        </FadeInSection>

        <FadeInSection className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#392C20]/20 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#476724]/30" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#392C20]/20 to-transparent" />
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto mb-24 lg:mb-32 space-y-10">
          <FadeInSection>
            <p
              className="text-[#392C20]"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(20px, 3vw, 36px)',
                fontWeight: 300,
                lineHeight: 1.6
              }}
            >
              The inaugural <span className="text-[#476724] hand-drawn-underline">Embers of QIONG</span>: International Artist Residency will take place March 13 – April 15, 2026, in Qionglai, Sichuan, China.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p
              className="text-[#392C20]/75"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 300,
                lineHeight: 1.7
              }}
            >
              Anchored in an ancient gateway town on the western edge of the Sichuan Basin, the residency operates across archaeological sites, historic courtyards, and active contexts of craft and production, shaped by the tele-absence of intangible cultural heritage.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p
              className="text-[#392C20]/60"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(16px, 2vw, 24px)',
                fontWeight: 300,
                lineHeight: 1.7
              }}
            >
              The program emphasizes site-based research and material practice within lived cultural environments. Artists from diverse disciplines are invited to develop proposals engaging with yesterday's tomorrow—where once-future practices shape the present—through work in public and natural contexts, in dialogue with intangible cultural heritage.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <FadeInSection className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl shadow-lg shadow-black/5"
            >
              <img
                src={locations[0].image}
                alt={locations[0].title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <p
                  className="text-white mb-2"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 300
                  }}
                >
                  {locations[0].title}
                </p>
                <p className="text-white/50 text-sm tracking-wide">{locations[0].titleEn}</p>
              </div>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="lg:col-span-5 lg:mt-12">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl shadow-lg shadow-black/5"
            >
              <img
                src={locations[1].image}
                alt={locations[1].title}
                className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <p
                  className="text-white mb-2"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 300
                  }}
                >
                  {locations[1].title}
                </p>
                <p className="text-white/50 text-sm tracking-wide">{locations[1].titleEn}</p>
              </div>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.3} className="lg:col-span-6 lg:col-start-4">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl shadow-lg shadow-black/5"
            >
              <img
                src={locations[2].image}
                alt={locations[2].title}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <p
                  className="text-white mb-2"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 300
                  }}
                >
                  {locations[2].title}
                </p>
                <p className="text-white/50 text-sm tracking-wide">{locations[2].titleEn}</p>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
