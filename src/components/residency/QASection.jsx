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

const QAItem = ({ question, answer, subItems, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="mb-12 lg:mb-16">
      {/* Question */}
      <p
        className="text-[#959726] mb-4"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          lineHeight: 1.5,
          fontWeight: 500
        }}
      >
        <span className="text-[#392C20] font-medium">Q：</span>
        {question}
      </p>

      {/* Answer */}
      <p
        className="text-[#959726] pl-0 sm:pl-4 md:pl-6 lg:pl-8"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(18px, 2vw, 28px)',
          lineHeight: 1.7
        }}
      >
        <span className="text-[#392C20] font-medium">A：</span>
        {answer}
      </p>

      {/* Sub-items if any */}
      {subItems && subItems.length > 0 && (
        <div className="mt-4 sm:mt-6 pl-0 sm:pl-4 md:pl-6 lg:pl-8 space-y-3 sm:space-y-4">
          {subItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span
                className="text-[#959726]/60 mt-1 flex-shrink-0"
                style={{ fontSize: 'clamp(16px, 1.8vw, 24px)' }}
              >
                •
              </span>
              <div>
                <p
                  className="text-[#392C20] font-medium"
                  style={{
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    lineHeight: 1.5
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[#959726] mt-1"
                  style={{
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(16px, 1.8vw, 24px)',
                    lineHeight: 1.6
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          {subItems.length > 0 && (
            <p
              className="text-[#959726]/80 mt-4 pl-6"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(16px, 1.8vw, 24px)',
                lineHeight: 1.6
              }}
            >
              不同参与方式对应不同的责任与产出预期，请在申请或联系时明确你的参与意向。
            </p>
          )}
        </div>
      )}
    </FadeInSection>
  );
};

const QASection = () => {
  const qaData = [
    {
      question: '我目前不确定到驻地后会完成什么样的作品，可以申请吗？',
      answer: '完全可以。申请阶段的创作提议不需要是一个已经完全成型的方案。我们更关注的是你过往的创作经验、工作方式，以及你对开放探索与现场研究的兴趣。入选后，驻地团队将与艺术家共同讨论并逐步完善创作计划，在创作过程中保持灵活调整与持续交流。'
    },
    {
      question: '我目前还没有成熟的作品，但对本次驻地很感兴趣，可以参与吗？',
      answer: '可以，但参与方式有所不同。',
      subItems: [
        {
          title: '作为艺术家申请驻地创作',
          description: '需要提交个人作品及创作提案'
        },
        {
          title: '作为交流参与者 / 志愿协作者',
          description: '若你暂时不以艺术家身份申请，也欢迎以短期交流或志愿协作的方式参与项目。你可参与驻地的日常运营、公共活动或艺术节筹备，与艺术家和在地团队建立交流与学习关系。'
        }
      ]
    },
    {
      question: '我目前还不能完全确定是否能在驻地期间内全程到场，可以先申请吗？',
      answer: '可以。本次驻地采用滚动申请与艺术家储备机制。你可以先提交申请，后续再与我们确认是否能够实际到场参与。即使本次时间未能匹配，申请仍将作为未来合作的重要参考。'
    },
    {
      question: '我想了解更多活动相关的信息，有什么渠道呢？',
      answer: '更多信息请通过公众号后台或邮件 info@rotohaus.com 与我们联系。'
    }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header with logo */}
        <FadeInSection className="mb-16 lg:mb-20">
          <div className="flex items-start gap-6">
            {/* Logo */}
            <img
              src="/images/residency/application/logo-alt.png"
              alt="Rotohaus"
              className="w-24 h-24 lg:w-36 lg:h-36 opacity-90 flex-shrink-0"
            />

            {/* Title */}
            <div>
              <h2
                className="text-[#392C20]"
                style={{
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(48px, 6vw, 96px)',
                  fontWeight: 400,
                  lineHeight: 1.15
                }}
              >
                常见问题
              </h2>
              <p
                className="text-[#392C20]/60 mt-1"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 44px)',
                  fontWeight: 200
                }}
              >
                Q / A
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Divider */}
        <FadeInSection delay={0.1} className="mb-12 lg:mb-16">
          <div className="h-px bg-gradient-to-r from-[#392C20]/20 via-[#392C20]/10 to-transparent" />
        </FadeInSection>

        {/* QA Items */}
        {qaData.map((qa, i) => (
          <QAItem
            key={i}
            question={qa.question}
            answer={qa.answer}
            subItems={qa.subItems}
            delay={0.15 + i * 0.1}
          />
        ))}

        {/* Bottom decoration */}
        <FadeInSection delay={0.6} className="flex justify-center mt-20 lg:mt-28">
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

export default QASection;
