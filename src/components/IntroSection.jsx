import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(4px)' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const IntroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const locations = [
    {
      image: '/images/intro/qiongyao-park.png',
      title: '邛窑国家考古遗址公园',
      titleEn: 'Qiongyao National Archaeological Site Park'
    },
    {
      image: '/images/intro/jiaguan-town.png',
      title: '夹关古镇',
      titleEn: 'Jiaguan Ancient Town'
    },
    {
      image: '/images/intro/landin-fang.png',
      title: '临济镇蓝靛坊',
      titleEn: 'Landin Workshop, Linji Town'
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      {/* Decorative element */}
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
              src="/images/intro/logo.png"
              alt="Rotohaus"
              className="w-16 h-16 lg:w-20 lg:h-20"
            />
            <div className="h-12 w-px bg-[#392C20]/15" />
            <h2
              className="text-[#392C20]"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 400
              }}
            >
              项目简介
            </h2>
          </div>
          <p
            className="text-[#392C20]/50"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(14px, 1.8vw, 20px)',
              fontWeight: 300,
              letterSpacing: '0.15em'
            }}
          >
            Program Introduction
          </p>
        </FadeInSection>

        <FadeInSection className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#392C20]/20 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#476724]/30" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#392C20]/20 to-transparent" />
          </div>
        </FadeInSection>

        {/* Introduction text */}
        <div className="max-w-4xl mx-auto mb-24 lg:mb-32 space-y-10">
          <FadeInSection>
            <p
              className="text-[#392C20]"
              style={{
                fontFamily: "'Huiwen-Fangsong', 'FZFengRuSong', serif",
                fontSize: 'clamp(20px, 3vw, 36px)',
                fontWeight: 500,
                lineHeight: 1.7
              }}
            >
              首届<span className="text-[#476724] hand-drawn-underline">烟火邛州</span>·国际非遗艺术驻地将于2026年春季在四川省邛崃市举办。
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p
              className="text-[#392C20]/75"
              style={{
                fontFamily: "'Huiwen-Fangsong', 'FZFengRuSong', serif",
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 500,
                lineHeight: 1.8
              }}
            >
              驻地以川西边境门户古镇夹关镇为锚点，延展串联至邛窑国家考古遗址公园与清末川西古四合院蓝靛坊等创作与调研基地。
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p
              className="text-[#392C20]/60"
              style={{
                fontFamily: "'Huiwen-Fangsong', 'FZFengRuSong', serif",
                fontSize: 'clamp(16px, 2vw, 24px)',
                fontWeight: 500,
                lineHeight: 1.8
              }}
            >
              我们深入邛崃的在地文化空间，在古法酿酒工厂合义坊调动五感、在平乐古镇感受非遗的延续。横跨市井生活、历史遗址与非遗活态现场，本次驻地项目邀请艺术家在这片土地上进行创作与探索。
            </p>
          </FadeInSection>
        </div>

        {/* Location cards */}
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
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 500
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
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 500
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
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 500
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
