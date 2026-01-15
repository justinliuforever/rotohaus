import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TimelineItem = ({ time, title, description, isLast = false, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#476724] ring-4 ring-[#476724]/20" />
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-[#476724]/40 to-transparent mt-2" />}
      </div>

      <div className="pb-12">
        <p
          className="text-[#476724] text-sm mb-2"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {time}
        </p>
        <h4
          className="text-[#392C20] mb-2"
          style={{
            fontFamily: "'FZFengRuSong', serif",
            fontSize: 'clamp(18px, 2vw, 24px)'
          }}
        >
          {title}
        </h4>
        <p
          className="text-[#392C20]/60"
          style={{
            fontFamily: "'Huiwen-Fangsong', serif",
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            lineHeight: 1.7
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const JourneySection = () => {
  const timeline = [
    {
      time: '2026.02.14',
      title: '申请截止',
      description: '提交你的作品集、创作计划和个人简介。我们欢迎各种媒介的艺术家申请。'
    },
    {
      time: '2026.02.26',
      title: '入选公布',
      description: '我们将通过邮件通知入选艺术家，并开始行前沟通。'
    },
    {
      time: '2026.03.13',
      title: '驻地开始',
      description: '抵达邛崃，入住驻地空间。开启你的在地探索与创作之旅。'
    },
    {
      time: '2026.03 - 04',
      title: '创作期',
      description: '在邛窑遗址、夹关古镇、蓝靛坊等地进行调研与创作。我们会安排非遗工坊参访、艺术家交流等活动。'
    },
    {
      time: '2026.04.15',
      title: '驻地结束',
      description: '完成作品创作，为五一展览做准备。'
    },
    {
      time: '2026.05.01',
      title: '成果展出',
      description: '在夹关古镇公共空间举办群展，让作品与当地社区对话。'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#476724]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <FadeIn className="text-center mb-16 lg:mb-24">
          <p
            className="text-[#E2D19E]/60 text-sm tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            Timeline
          </p>
          <h2
            className="text-[#E2D19E]"
            style={{
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 400
            }}
          >
            驻地旅程
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-x-16">
          <div className="lg:pr-8">
            {timeline.slice(0, 3).map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                delay={index * 0.1}
                isLast={index === 2}
              />
            ))}
          </div>
          <div className="lg:pl-8 lg:border-l lg:border-[#E2D19E]/10">
            {timeline.slice(3).map((item, index) => (
              <TimelineItem
                key={index + 3}
                {...item}
                delay={(index + 3) * 0.1}
                isLast={index === 2}
              />
            ))}
          </div>
        </div>

        <FadeIn delay={0.6} className="mt-16 lg:mt-24 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 lg:gap-12 p-8 rounded-2xl bg-[#E2D19E]/10">
            <div className="text-center">
              <p
                className="text-[#E2D19E] text-3xl lg:text-4xl mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                34
              </p>
              <p className="text-[#E2D19E]/60 text-sm">天驻地时间</p>
            </div>
            <div className="w-px h-12 bg-[#E2D19E]/20" />
            <div className="text-center">
              <p
                className="text-[#E2D19E] text-3xl lg:text-4xl mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                5-10
              </p>
              <p className="text-[#E2D19E]/60 text-sm">位入选艺术家</p>
            </div>
            <div className="w-px h-12 bg-[#E2D19E]/20" />
            <div className="text-center">
              <p
                className="text-[#E2D19E] text-3xl lg:text-4xl mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                3
              </p>
              <p className="text-[#E2D19E]/60 text-sm">个驻地基地</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default JourneySection;
