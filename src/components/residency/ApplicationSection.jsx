import { motion, useInView } from 'framer-motion';
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

const TimelineItem = ({ label, value, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="flex flex-col gap-1">
      <span
        className="text-[#959726]"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(14px, 1.2vw, 18px)',
          fontWeight: 500
        }}
      >
        {label}
      </span>
      <span
        className="text-[#392C20]"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(18px, 1.8vw, 26px)',
          fontWeight: 500
        }}
      >
        {value}
      </span>
    </FadeInSection>
  );
};

const MediaTag = ({ children, primary = true, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`inline-block px-4 py-2 rounded-full ${
        primary
          ? 'bg-[#392C20]/5 text-[#392C20]'
          : 'bg-transparent text-[#808080] border border-[#E0E0E0]'
      }`}
      style={{
        fontFamily: "'Huiwen-Fangsong', serif",
        fontSize: 'clamp(14px, 1.4vw, 18px)'
      }}
    >
      {children}
    </motion.span>
  );
};

const ApplicationSection = () => {
  const primaryMedia = [
    '灯光艺术/投影',
    '装置艺术/多媒体艺术',
    '艺术/戏剧/音乐疗愈',
    '纪录片/影像/摄影艺术',
    'AIGC/3D/动画',
    '社区/公共艺术实践',
    '陶瓷艺术'
  ];

  const secondaryMedia = [
    '建筑与空间设计',
    '平面与文创设计',
    '民俗与人类学研究',
    '服装设计',
    '纤维与材料艺术',
    '植物染/手工艺'
  ];

  const values = [
    '对在地艺术、艺术乡建、非遗文化有真诚兴趣',
    '能够在较短时间内沉浸式学习并产出作品原型',
    '对社区与公共空间有敏感度，愿意与当地社区互动'
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="absolute left-[15%] top-[10%] w-24 h-24 bg-[#E2E55F]/40 rounded-full blur-[50px]" />
      <div className="absolute right-[20%] top-[25%] w-24 h-24 bg-[#E2E55F]/40 rounded-full blur-[50px]" />
      <div className="absolute left-[5%] bottom-[30%] w-24 h-24 bg-[#E2E55F]/40 rounded-full blur-[50px]" />
      <div className="absolute right-[30%] bottom-[20%] w-24 h-24 bg-[#E2E55F]/40 rounded-full blur-[50px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">

        <FadeInSection className="mb-20 lg:mb-28">
          <div className="flex items-start gap-6 mb-10">
            <img
              src="/images/residency/application/logo-alt.png"
              alt="Rotohaus"
              className="w-28 h-28 lg:w-40 lg:h-40 opacity-90"
            />
            <div>
              <h2
                className="text-[#392C20] mb-2"
                style={{
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(48px, 6vw, 96px)',
                  fontWeight: 400,
                  lineHeight: 1.15
                }}
              >
                申请时间
              </h2>
              <p
                className="text-[#392C20]/60"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 44px)',
                  fontWeight: 200
                }}
              >
                Application Timeline
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <TimelineItem
              label="驻地时间"
              value="2026年3月13日 - 4月15日"
              delay={0.1}
            />
            <TimelineItem
              label="申请时间"
              value="即日起至2026年2月14日"
              delay={0.15}
            />
            <TimelineItem
              label="首批入选者公布"
              value="2月1日"
              delay={0.2}
            />
            <TimelineItem
              label="最终招募结果公布"
              value="2月20日"
              delay={0.25}
            />
          </div>
        </FadeInSection>

        <FadeInSection className="mb-20 lg:mb-28">
          <div className="flex flex-wrap items-baseline gap-4 mb-6">
            <h2
              className="text-[#392C20]"
              style={{
                fontFamily: "'FZFengRuSong', serif",
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: 400,
                lineHeight: 1.15
              }}
            >
              招募对象
            </h2>
            <p
              className="text-[#392C20]/60"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(24px, 3vw, 44px)',
                fontWeight: 200
              }}
            >
              Who Are We Looking for?
            </p>
          </div>
          <p
            className="text-[#626262]/80 max-w-4xl"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6
            }}
          >
            *我们欢迎多元的实验性实践，鼓励跨媒介的合作创作与对话，诚邀各类背景的艺术家报名参与。
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28">
          <FadeInSection delay={0.1}>
            <h3
              className="text-[#959726] mb-6"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: 500,
                lineHeight: 1.2
              }}
            >
              侧重媒介
            </h3>
            <div className="flex flex-wrap gap-3">
              {primaryMedia.map((media, i) => (
                <MediaTag key={i} delay={0.1 + i * 0.05} primary>
                  {media}
                </MediaTag>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3
              className="text-[#959726] mb-6 lg:text-right"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: 500,
                lineHeight: 1.2
              }}
            >
              其它相关*
            </h3>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {secondaryMedia.map((media, i) => (
                <MediaTag key={i} delay={0.2 + i * 0.05} primary={false}>
                  {media}
                </MediaTag>
              ))}
            </div>
          </FadeInSection>
        </div>

        <FadeInSection className="mb-20 lg:mb-28">
          <div className="flex items-end gap-6">
            <h3
              className="text-[#959726]"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: 500,
                lineHeight: 1
              }}
            >
              招募人数
            </h3>
            <span
              className="text-[#392C20] pb-1"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: 500
              }}
            >
              5 - 10人（组）
            </span>
          </div>
        </FadeInSection>

        <FadeInSection className="mb-16 lg:mb-24">
          <h3
            className="text-[#959726] mb-8"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 500,
              lineHeight: 1.2
            }}
          >
            我们尤为看重
          </h3>
          <div className="space-y-4">
            {values.map((value, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.08}>
                <p
                  className="text-[#392C20] flex items-start gap-4"
                  style={{
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    lineHeight: 1.6
                  }}
                >
                  <span className="text-[#959726] mt-1">•</span>
                  {value}
                </p>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="/images/residency/application/ai-visual.png"
              alt="艺术驻地视觉"
              className="w-full h-64 lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="flex justify-center mt-16 lg:mt-24">
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#959726]/30" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ApplicationSection;
