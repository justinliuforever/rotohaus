import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#476724] overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/images/residency/backgrounds/cover-bg.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        />
        <div className="paper-texture absolute inset-0" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(226,209,158,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,200,100,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-center xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto"
      >
        <div className="flex-1 relative flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[550px] xl:max-w-[600px] float-animation"
          >
            <div
              className="w-full aspect-[4/3] rounded-lg shadow-2xl shadow-black/30"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(96, 62, 0, 0.12), rgba(96, 62, 0, 0.12)), url('/images/residency/cover-main.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            <motion.span
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4 md:-left-6 md:-top-6 lg:-left-10 lg:-top-8 xl:-left-12 xl:-top-10 text-[rgba(255,244,212,0.75)] ink-blur"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(36px, 8vw, 120px)',
                fontWeight: 700,
              }}
            >
              烟
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 md:-right-6 md:-top-6 lg:-right-10 lg:-top-8 xl:-right-12 xl:-top-10 text-[rgba(255,244,212,0.75)] ink-blur"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(36px, 8vw, 120px)',
                fontWeight: 700,
              }}
            >
              火
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-3 -bottom-3 sm:-left-4 sm:-bottom-4 md:-left-6 md:-bottom-6 lg:-left-10 lg:-bottom-8 xl:-left-12 xl:-bottom-10 text-[rgba(255,244,212,0.75)] ink-blur"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(36px, 8vw, 120px)',
                fontWeight: 700,
              }}
            >
              邛
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-3 -bottom-3 sm:-right-4 sm:-bottom-4 md:-right-6 md:-bottom-6 lg:-right-10 lg:-bottom-8 xl:-right-12 xl:-bottom-10 text-[rgba(255,244,212,0.75)] ink-blur"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(36px, 8vw, 120px)',
                fontWeight: 700,
              }}
            >
              州
            </motion.span>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16 lg:max-w-[500px] xl:max-w-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-px bg-[#E2D19E]/40" />
              <p
                className="text-[#E2D19E]/80 tracking-[0.2em]"
                style={{
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(12px, 1.5vw, 16px)'
                }}
              >
                丙午年·春
              </p>
            </div>
            <p
              className="text-[#E2D19E] hand-drawn-underline inline-block"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(20px, 2.5vw, 28px)'
              }}
            >
              烟火邛州国际非遗艺术驻地
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h1
              className="text-[#E2D19E] mb-3"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 200,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Embers <span className="text-[0.45em] opacity-60">OF</span> QIONG
            </h1>
            <p
              className="text-[#E2D19E]/70"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(14px, 1.8vw, 20px)',
                fontWeight: 300,
                letterSpacing: '0.05em'
              }}
            >
              Art Residency · Spring 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 mb-12"
          >
            {[
              { label: '地点', value: '中国 · 四川 · 邛崃' },
              { label: '驻地周期', value: '2026.03.13 – 04.15' },
              { label: '入选艺术家', value: '10 组' }
            ].map((item, index) => (
              <div key={index} className="flex items-baseline gap-4">
                <span
                  className="text-[#E2D19E]/40 w-16"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.1em'
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-white/90"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 'clamp(14px, 1.5vw, 17px)',
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/residency/artists" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block px-8 py-4 bg-[#E2D19E] text-[#392C20] rounded-full overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-[#E2D19E]/20"
                style={{
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  探索艺术家阵容
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 pt-6 border-t border-white/10"
          >
            <p className="text-white/40 text-[11px] tracking-widest mb-1">主办</p>
            <p className="text-white/70 text-sm tracking-wide">野所 ROTOHAUS</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-white/30 tracking-[0.3em]"
            style={{ fontSize: '10px', fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
