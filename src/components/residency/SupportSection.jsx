import FadeInSection from '../shared/FadeInSection';

const SupportCategory = ({ title, items, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="mb-12 lg:mb-16">
      <h3
        className="text-[#392C20] mb-6"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 500,
          lineHeight: 1.3
        }}
      >
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <p
            key={i}
            className="text-[#959726] flex items-start gap-3"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6
            }}
          >
            <span className="text-[#959726]/50 mt-1 flex-shrink-0">—</span>
            {item}
          </p>
        ))}
      </div>
    </FadeInSection>
  );
};

const RequirementItem = ({ children, delay = 0 }) => {
  return (
    <FadeInSection delay={delay}>
      <p
        className="text-[#959726] flex items-start gap-3 mb-4"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(18px, 2vw, 28px)',
          lineHeight: 1.6
        }}
      >
        <span className="text-[#959726]/50 mt-1 flex-shrink-0">•</span>
        {children}
      </p>
    </FadeInSection>
  );
};

const SupportSection = () => {
  const supportData = [
    {
      title: '项目支持',
      items: [
        '驻地期间提供住宿支持及定期的餐食补贴；',
        '创作经费支持：根据入选作品方案，对实际发生的材料、设计及制作相关创作支出予以报销；'
      ]
    },
    {
      title: '资源与交流',
      items: [
        '提供与国际知名学者及艺术从业者一对一交流的机会，支持创作反馈与研究性对话；',
        '在地调研、非遗工艺及社区资源的协调对接；',
        '与在地社区、商业品牌及文化机构合作机会；'
      ]
    },
    {
      title: '展示与传播',
      items: [
        '驻地成果纳入后续展览，有机会在纽约、波士顿、北京、上海、成都等城市的艺术空间呈现；',
        '项目过程及成果的影像将用于后续媒体曝光。'
      ]
    }
  ];

  const requirements = [
    '形式不限，可与其他艺术家开展跨媒介合作；',
    '驻地期间需完成可用于展览呈现的成品作品，或清晰的半成品 / 作品方案；',
    '作品应具备较长期的留存条件，或提供可用于展览呈现的影像记录；',
    '驻地期间需设计或协助举办一次面向当地公众的公共教育活动。'
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        <FadeInSection className="mb-8">
          <h2
            className="text-[#392C20] mb-2"
            style={{
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 400,
              lineHeight: 1.15
            }}
          >
            驻地支持
          </h2>
          <p
            className="text-[#392C20]/60"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(24px, 3vw, 44px)',
              fontWeight: 200
            }}
          >
            What We Offer
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1} className="mb-16 lg:mb-20">
          <p
            className="text-[#626262]/80"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6
            }}
          >
            *本次驻地以创作条件与研究支持为核心，不向艺术家收取固定驻地费用；
          </p>
        </FadeInSection>

        {supportData.map((category, i) => (
          <SupportCategory
            key={i}
            title={category.title}
            items={category.items}
            delay={0.1 + i * 0.1}
          />
        ))}

        <FadeInSection delay={0.4} className="my-20 lg:my-28">
          <div className="h-px bg-gradient-to-r from-transparent via-[#392C20]/10 to-transparent" />
        </FadeInSection>

        <FadeInSection delay={0.5} className="mb-8">
          <h2
            className="text-[#392C20] mb-2"
            style={{
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 400,
              lineHeight: 1.15
            }}
          >
            驻地要求
          </h2>
          <p
            className="text-[#392C20]/60"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(24px, 3vw, 44px)',
              fontWeight: 200
            }}
          >
            What We Need
          </p>
        </FadeInSection>

        <div className="mt-12">
          {requirements.map((req, i) => (
            <RequirementItem key={i} delay={0.5 + i * 0.08}>
              {req}
            </RequirementItem>
          ))}
        </div>

        <FadeInSection delay={0.9} className="flex justify-center mt-16 lg:mt-24">
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

export default SupportSection;
