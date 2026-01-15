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
      className={`absolute bg-[#E6ECE6] p-2 lg:p-3 shadow-xl cursor-pointer ${className}`}
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
          fontSize: 'clamp(22px, 2.8vw, 40px)',
          fontWeight: 500,
          lineHeight: 1.3
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#6E6E6E] max-w-3xl mx-auto"
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
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

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
                    alt="蓝靛"
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
                    蓝靛坊
                  </h2>
                  <p
                    className="text-[#392C20]/60"
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 'clamp(20px, 2.5vw, 36px)',
                      fontWeight: 200
                    }}
                  >
                    The Indigo Courtyard
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
                  短期驻扎空间：蓝靛坊·吴家小院
                </span>
                <span
                  className="px-4 py-2 bg-[#392C20]/5 rounded-full text-[#6E6E6E]"
                  style={{
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(14px, 1.5vw, 18px)'
                  }}
                >
                  媒介｜工艺｜空间
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
                山谷与手工系统的延续与试验场
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
            蓝靛坊始建于清光绪六年（1880），距今近一百五十年，2013年被列为成都市文物保护单位。院落位于临济镇万福村的吴大沟山谷中：溪流汇入白沫江，竹林环绕，山路蜿蜒——这样的地理条件，正是传统蓝靛作物生长的理想环境。作为一座典型的川西农家大院，前临水、后靠山，条石保坎分出三级平台，门厅、前院、过厅、后院与侧井层层递进，天然构成一个适合沉浸式创作与公共活动的空间场域。
          </p>
        </FadeInSection>

        <div className="relative h-[550px] lg:h-[750px] mb-20 lg:mb-32">
          <StackedPhoto
            src="/images/residency/landianfang/landianfang-1.png"
            alt="蓝靛坊院落"
            className="w-44 h-60 lg:w-72 lg:h-96 left-[2%] top-[5%]"
            rotate={-3}
            delay={0}
            zIndex={4}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-2.png"
            alt="蓝靛坊建筑"
            className="w-40 h-52 lg:w-64 lg:h-80 left-[28%] top-[0%]"
            rotate={4}
            delay={0.08}
            zIndex={3}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-3.png"
            alt="蓝靛坊全景"
            className="w-56 h-40 lg:w-96 lg:h-64 left-[25%] top-[30%]"
            rotate={-2}
            delay={0.12}
            zIndex={8}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-4.png"
            alt="蓝靛坊细节"
            className="w-36 h-36 lg:w-56 lg:h-56 right-[8%] top-[5%]"
            rotate={3}
            delay={0.16}
            zIndex={5}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-5.png"
            alt="蓝靛坊工艺"
            className="w-32 h-32 lg:w-48 lg:h-48 right-[0%] top-[35%]"
            rotate={-4}
            delay={0.2}
            zIndex={2}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-6.png"
            alt="蓝靛坊环境"
            className="w-40 h-40 lg:w-60 lg:h-60 left-[5%] bottom-[5%]"
            rotate={2}
            delay={0.24}
            zIndex={6}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-7.png"
            alt="蓝靛坊染织"
            className="w-44 h-56 lg:w-64 lg:h-80 left-[35%] bottom-[0%]"
            rotate={-3}
            delay={0.28}
            zIndex={7}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-8.png"
            alt="蓝靛坊材料"
            className="w-36 h-36 lg:w-52 lg:h-52 right-[15%] bottom-[10%]"
            rotate={5}
            delay={0.32}
            zIndex={9}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-9.png"
            alt="蓝靛坊活动"
            className="w-40 h-36 lg:w-56 lg:h-48 right-[0%] bottom-[20%]"
            rotate={-2}
            delay={0.36}
            zIndex={10}
          />

          <StackedPhoto
            src="/images/residency/landianfang/landianfang-10.png"
            alt="蓝靛坊建筑图纸"
            className="w-60 h-32 lg:w-96 lg:h-52 left-[15%] bottom-[15%]"
            rotate={1}
            delay={0.4}
            zIndex={11}
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
              在蓝靛坊，艺术家可以展开
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DADADA]" />
          </div>
        </FadeInSection>

        <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-24">
          <CreativeDirection
            title="蜡染、植物染与当代纺织实验"
            description="利用在地染织环境与材料，完成传统与当代纺织相结合的创作。"
            delay={0.1}
          />

          <CreativeDirection
            title={'以"蓝靛-竹纸-河流-院落"为线索的疗愈叙事'}
            description="围绕材料与空间的关系，构建以感知与情绪体验为核心的艺术疗愈导向公众项目。"
            delay={0.15}
          />

          <CreativeDirection
            title="院落尺度的场域装置与影像创作"
            description="结合院落尺度与行走动线，完成可体验、可停留的影像或空间作品。"
            delay={0.2}
          />

          <CreativeDirection
            title="古建筑外墙投影与光影叙事"
            description="以蓝靛坊的古建筑外墙作为投影介质，发展夜间光影叙事作品。"
            delay={0.25}
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
