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
        className="text-[#000000] mb-4"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(24px, 3vw, 42px)',
          fontWeight: 500,
          lineHeight: 1.3
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#6E6E6E] max-w-2xl mx-auto"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(16px, 1.8vw, 24px)',
          lineHeight: 1.6
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
      id="jiaguan"
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-[#FAFAF8] overflow-hidden"
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
                    alt="夹关"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h2
                    className="text-[#392C20] mb-3"
                    style={{
                      fontFamily: "'FZFengRuSong', serif",
                      fontSize: 'clamp(48px, 6vw, 90px)',
                      fontWeight: 400,
                      lineHeight: 1.1
                    }}
                  >
                    夹关镇
                  </h2>
                  <p
                    className="text-[#392C20]/60"
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 'clamp(20px, 2.5vw, 36px)',
                      fontWeight: 200
                    }}
                  >
                    Jiaguan Ancient Town
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
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(14px, 1.5vw, 18px)'
                  }}
                >
                  *艺术家长驻空间
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(14px, 1.5vw, 18px)'
                  }}
                >
                  主会场，公共呈现与社区互动的核心空间
                </span>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <p
                className="text-[#476724] mb-6"
                style={{
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  lineHeight: 1.6,
                  fontWeight: 500
                }}
              >
                河畔烟火与边关市井的公共现场
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p
                className="text-[#392C20]"
                style={{
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(16px, 1.5vw, 22px)',
                  lineHeight: 1.9,
                  textAlign: 'justify'
                }}
              >
                夹关是古代临邛至康藏的清溪道（又名灵关道）必经之路。早在秦惠文王公元前316年灭蜀后，因地势险要，关以西与汉地域接壤，外控夷獠，自古以来屯兵以戍守之，称夹门关，简称夹关，一直沿用至今，有南丝古道第一关的美誉。康熙《邛州志》载："城西南八十里夹门镇，关在山边，水出其间，饮食中流传的"夹关四绝"与马帮菜系，则为声音、影像、表演与叙事性创作提供了丰厚的素材来源。
              </p>
            </FadeInSection>
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-4.png"
            alt="夹关镇街景"
            className="w-24 h-20 sm:w-32 sm:h-26 md:w-44 md:h-36 lg:w-64 lg:h-48 xl:w-72 xl:h-56 left-[3%] top-[3%] sm:left-[4%] sm:top-[4%] lg:left-[5%] lg:top-[5%]"
            rotate={-6}
            delay={0}
            zIndex={3}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-5.png"
            alt="夹关镇建筑"
            className="w-32 h-26 sm:w-40 sm:h-32 md:w-56 md:h-44 lg:w-72 lg:h-56 xl:w-80 xl:h-64 right-[5%] top-[0%] sm:right-[8%] lg:right-[10%]"
            rotate={4}
            delay={0.1}
            zIndex={5}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-6.png"
            alt="夹关镇风光"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-60 xl:h-60 left-[10%] top-[28%] sm:left-[12%] sm:top-[30%] lg:left-[15%]"
            rotate={-3}
            delay={0.15}
            zIndex={4}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-3.png"
            alt="夹关镇文化"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 left-[30%] top-[18%] sm:left-[32%] sm:top-[20%] lg:left-[35%]"
            rotate={2}
            delay={0.2}
            zIndex={6}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-1.png"
            alt="夹关镇生活"
            className="w-26 h-28 sm:w-32 sm:h-36 md:w-48 md:h-52 lg:w-56 lg:h-64 xl:w-64 xl:h-72 right-[3%] top-[32%] sm:right-[4%] sm:top-[34%] lg:right-[5%] lg:top-[35%]"
            rotate={-4}
            delay={0.25}
            zIndex={2}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-7.png"
            alt="夹关镇古迹"
            className="w-36 h-22 sm:w-44 sm:h-28 md:w-60 md:h-36 lg:w-72 lg:h-44 xl:w-80 xl:h-48 left-[0%] bottom-[3%] sm:bottom-[4%] lg:bottom-[5%]"
            rotate={3}
            delay={0.3}
            zIndex={7}
          />

          <StackedPhoto
            src="/images/residency/jiaguan/jiaguan-2.png"
            alt="夹关镇美食"
            className="w-40 h-26 sm:w-52 sm:h-32 md:w-72 md:h-44 lg:w-84 lg:h-52 xl:w-96 xl:h-56 right-[8%] bottom-[0%] sm:right-[10%] lg:right-[15%]"
            rotate={-2}
            delay={0.35}
            zIndex={8}
          />
        </div>

        <FadeInSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#DADADA]" />
            <p
              className="text-[#6E6E6E] px-4"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(14px, 1.5vw, 20px)'
              }}
            >
              在夹关，艺术家可以围绕以下方向展开实践
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DADADA]" />
          </div>
        </FadeInSection>

        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-24">
          <CreativeDirection
            title="河畔夜游与灯光 / 投影创作"
            description="以白沫江两岸为幕布，结合水面倒影、桥梁、古建筑群落进行光影介入与夜间表演。"
            delay={0.1}
          />

          <CreativeDirection
            title="市井气息 × 社群共创"
            description="以老街、码头、茶市等公共空间为现场，与居民、手艺人及游客共同完成参与式作品。"
            delay={0.15}
          />

          <CreativeDirection
            title="茶马古道 × 声音档案"
            description="沿茶马古道的历史路径，采集口述史、地景与遗存，发展声音档案或视觉叙事。"
            delay={0.2}
          />
        </div>

        <FadeInSection delay={0.25}>
          <p
            className="text-center text-[#6E6E6E] max-w-4xl mx-auto"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(16px, 1.8vw, 24px)',
              lineHeight: 1.7
            }}
          >
            驻地后期，夹关将作为主要展示与交流节点，部分作品计划在河畔公共空间或节日场景中与公众见面。
          </p>
        </FadeInSection>

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
