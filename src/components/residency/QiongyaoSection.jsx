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
      className={`absolute bg-[#E2E6E7] p-2 lg:p-3 shadow-xl cursor-pointer ${className}`}
      style={{ zIndex }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
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

const QiongyaoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

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
                    alt="邛窑"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h2
                    className="text-[#392C20] mb-3"
                    style={{
                      fontFamily: "'FZFengRuSong', serif",
                      fontSize: 'clamp(36px, 5vw, 76px)',
                      fontWeight: 400,
                      lineHeight: 1.15
                    }}
                  >
                    邛窑国家考古遗址公园
                  </h2>
                  <p
                    className="text-[#392C20]/60"
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 'clamp(18px, 2vw, 32px)',
                      fontWeight: 200
                    }}
                  >
                    Qiong Kiln Archaeological Park
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
                  开幕式及学术会议分会场
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
                器物、技术与时间的层累
              </p>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.2} className="mb-16 lg:mb-24">
          <p
            className="text-[#392C20] max-w-5xl"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(16px, 1.5vw, 22px)',
              lineHeight: 1.9,
              textAlign: 'justify'
            }}
          >
            邛窑是中国彩瓷发源地之一，四川古代最大的青瓷窑系，始烧于南北朝，盛于唐五代，衰于宋元之际，主要分布于邛崃境内。邛窑国家考古遗址公园位于南河流域，于1988年被国务院公布为全国重点文物保护单位，2022年12月，成为四川省继三星堆遗址、金沙遗址之后第三家国家考古遗址公园。公园一期核心区面积约300亩，共有窑包14处，作为"文化之窑"的载体，为艺术家提供了独特的创作场域。
          </p>
        </FadeInSection>

        <div className="relative h-[550px] lg:h-[750px] mb-20 lg:mb-32">
          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-1.png"
            alt="邛窑遗址"
            className="w-44 h-64 lg:w-72 lg:h-96 left-[8%] top-[0%]"
            rotate={-4}
            delay={0}
            zIndex={4}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-5.png"
            alt="邛窑陶瓷"
            className="w-40 h-40 lg:w-64 lg:h-64 left-[35%] top-[5%]"
            rotate={3}
            delay={0.08}
            zIndex={5}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-3.png"
            alt="邛窑风景"
            className="w-36 h-44 lg:w-56 lg:h-72 right-[5%] top-[0%]"
            rotate={-2}
            delay={0.12}
            zIndex={3}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-4.png"
            alt="邛窑工艺"
            className="w-48 h-36 lg:w-72 lg:h-52 left-[0%] top-[45%]"
            rotate={2}
            delay={0.16}
            zIndex={6}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-6.png"
            alt="邛窑展览"
            className="w-52 h-44 lg:w-80 lg:h-64 left-[30%] top-[35%]"
            rotate={-3}
            delay={0.2}
            zIndex={7}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-2.png"
            alt="邛窑文物"
            className="w-44 h-52 lg:w-72 lg:h-80 right-[10%] top-[30%]"
            rotate={4}
            delay={0.24}
            zIndex={2}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-8.png"
            alt="邛窑建筑"
            className="w-40 h-52 lg:w-56 lg:h-72 left-[15%] bottom-[0%]"
            rotate={-5}
            delay={0.28}
            zIndex={8}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-9.png"
            alt="邛窑细节"
            className="w-36 h-44 lg:w-52 lg:h-64 left-[45%] bottom-[5%]"
            rotate={2}
            delay={0.32}
            zIndex={9}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-7.png"
            alt="邛窑全景"
            className="w-48 h-36 lg:w-72 lg:h-52 right-[0%] bottom-[10%]"
            rotate={-2}
            delay={0.36}
            zIndex={10}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-10.png"
            alt="邛窑陶艺"
            className="w-36 h-44 lg:w-52 lg:h-64 left-[55%] bottom-[20%]"
            rotate={3}
            delay={0.4}
            zIndex={11}
          />

          <StackedPhoto
            src="/images/residency/qiongyao/qiongyao-11.png"
            alt="邛窑作品"
            className="w-32 h-28 lg:w-44 lg:h-36 right-[25%] top-[50%]"
            rotate={-4}
            delay={0.44}
            zIndex={1}
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
              该场域适合以下类型的研究与创作
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DADADA]" />
          </div>
        </FadeInSection>

        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-24">
          <CreativeDirection
            title="陶瓷、雕塑与装置创作"
            description="工作室与遗址空间对艺术家开放，可进行陶瓷制作与窑烧实验，亦适合发展雕塑与场域型装置创作。"
            delay={0.1}
          />

          <CreativeDirection
            title="装置、影像与声音作品"
            description="以窑址、器物与历史空间为媒介，进行跨媒介的当代艺术实践与展演。"
            delay={0.15}
          />

          <CreativeDirection
            title="邛三彩的色彩与纹理实验"
            description="将釉色与肌理转化为跨媒介的视觉语言。"
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
