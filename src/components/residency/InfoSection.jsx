import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeInSection from '../shared/FadeInSection';

const InfoCard = ({ icon, title, content, delay = 0 }) => {
  return (
    <FadeInSection delay={delay}>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="group h-full p-5 sm:p-6 lg:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#476724]/8 transition-all duration-500 border border-[#476724]/8 hover:border-[#476724]/15 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-4 right-4 w-16 h-16 border border-[#476724]/5 rounded-full" />
        </div>

        <div className="relative z-10">
          <motion.div
            className="w-10 h-10 mb-4 text-[#476724]/70 group-hover:text-[#476724] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <h3
            className="text-[#392C20] mb-3"
            style={{
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 400
            }}
          >
            {title}
          </h3>
          <div
            className="text-[#392C20]/70"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              lineHeight: 1.6
            }}
          >
            {content}
          </div>
        </div>
      </motion.div>
    </FadeInSection>
  );
};

const InfoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  // SVG 图标组件
  const icons = {
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    exhibition: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    artists: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  };

  const infoCards = [
    {
      icon: icons.location,
      title: '驻地地点',
      content: (
        <>
          <p className="font-medium text-[#476724]">四川 · 邛崃</p>
          <p className="mt-2 text-sm">夹关镇 / 邛窑国家考古遗址公园 / 蓝靛坊</p>
          <p className="mt-1 text-sm opacity-70">多会场形式</p>
        </>
      )
    },
    {
      icon: icons.calendar,
      title: '驻地时间',
      content: (
        <>
          <p className="font-medium text-[#476724]">2026.03.13 – 04.15</p>
          <p className="mt-2 text-sm">共34天</p>
          <p className="mt-1 text-sm opacity-70">可根据个人情况灵活调整</p>
        </>
      )
    },
    {
      icon: icons.clock,
      title: '重要日期',
      content: (
        <>
          <p><span className="opacity-70">招募截止：</span><span className="font-medium">2026.02.14</span></p>
          <p className="mt-2"><span className="opacity-70">入选公布：</span><span className="font-medium">2026.02.16</span></p>
        </>
      )
    },
    {
      icon: icons.exhibition,
      title: '成果呈现',
      content: (
        <>
          <p className="font-medium text-[#476724]">2026.05.01（五一）</p>
          <p className="mt-2 text-sm">夹关镇公共空间展出</p>
        </>
      )
    },
    {
      icon: icons.artists,
      title: '招募对象',
      content: (
        <>
          <p className="font-medium">艺术家 / 跨媒介创作者</p>
          <p className="mt-2 text-sm">个人或小组均可</p>
          <p className="mt-2"><span className="opacity-70">名额：</span><span className="font-medium text-[#476724]">5–10 位（组）</span></p>
        </>
      )
    },
    {
      icon: icons.support,
      title: '项目支持',
      content: (
        <>
          <p className="font-medium text-[#476724]">免费申请</p>
          <p className="mt-2 text-sm">驻地期间食宿补贴</p>
          <p className="mt-1 text-sm">创作材料支持</p>
        </>
      )
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(255, 225, 72, 0.08) 0%, rgba(255, 225, 72, 0.15) 100%)' }}
    >
      <div className="paper-texture absolute inset-0" />

      <motion.div
        style={{ y: decorY }}
        className="absolute -left-20 top-1/4 w-40 h-40 opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#476724]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </motion.div>

      <motion.div
        style={{ y: decorY }}
        className="absolute -right-10 bottom-1/4 w-32 h-32 opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#476724]">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(15 50 50)" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(15 50 50)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <FadeInSection className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/residency/intro/logo.png"
              alt="Rotohaus"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
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
              重要信息
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
            Important Info
          </p>
        </FadeInSection>

        <FadeInSection className="flex justify-center mb-14">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#476724]/25" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              delay={index * 0.08}
            />
          ))}
        </div>

        <FadeInSection delay={0.5} className="text-center mt-16 lg:mt-24">
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#476724] text-white rounded-full shadow-lg shadow-[#476724]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#476724]/30"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontWeight: 500
            }}
          >
            <span>立即申请</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
          <p className="mt-5 text-[#392C20]/45 text-sm tracking-wide">
            申请截止：2026年2月14日
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default InfoSection;
