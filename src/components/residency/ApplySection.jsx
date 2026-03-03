import FadeInSection from '../shared/FadeInSection';

const MaterialItem = ({ title, description, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="mb-6">
      <p
        className="text-[#6E6E6E]"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(18px, 2vw, 26px)',
          lineHeight: 1.6
        }}
      >
        <span className="text-[#392C20] font-medium">{title}</span>
        {description && <span className="text-[#808080]">{description}</span>}
      </p>
    </FadeInSection>
  );
};

const ParticipationOption = ({ title, description, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="mb-10">
      <h4
        className="text-[#392C20] mb-3"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(24px, 2.5vw, 36px)',
          fontWeight: 500
        }}
      >
        {title}
      </h4>
      <p
        className="text-[#6E6E6E]"
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(16px, 1.6vw, 22px)',
          lineHeight: 1.7
        }}
      >
        {description}
      </p>
    </FadeInSection>
  );
};

const ApplySection = () => {
  const materials = [
    { title: '个人简历 / CV', description: '' },
    { title: '作品集', description: '（PDF 或个人网站链接）' },
    {
      title: '驻地创作企划',
      description: '（请说明创作方向，陈述对本次驻地感兴趣的原因，大致罗列创作经费区间，作品留存可能，期望合作的艺术家背景等）'
    },
    {
      title: '公共教育活动策划案',
      description: '（驻地期间面向当地公众或同期艺术家的公共教育活动策划案，若有）'
    }
  ];

  const participationOptions = [
    {
      title: '艺术家库',
      description: '提交作品与研究资料，纳入驻地艺术家档案库，作为未来项目、展览与合作的参考资源。'
    },
    {
      title: '跨领域合作提案',
      description: '分享您于文旅、商业、教育等行业交叉的构想，我们很期待与您聊聊。'
    },
    {
      title: '成为志愿者',
      description: '影像记录与拍摄、现场协调与执行支持、设计与新媒体运营等。志愿者将通过单独渠道进行招募，请关注后续发布。'
    }
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-40 bg-gradient-to-b from-[#476724]/[0.03] via-white to-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        {/* 招募已结束通知 */}
        <FadeInSection className="mb-16 lg:mb-20">
          <div className="bg-[#476724]/5 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <p style={{ fontFamily: "'FZFengRuSong', serif", fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400, color: '#392C20' }}>
              本期招募已结束
            </p>
            <p className="mt-4 text-[#6E6E6E]" style={{ fontFamily: "'Huiwen-Fangsong', serif", fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
              10 组艺术家已入选 · 驻留将于 2026年3月13日 正式开始
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1} className="mb-16 lg:mb-20">
          <div className="text-center py-8">
            <p className="text-[#392C20]/60" style={{ fontFamily: "'Huiwen-Fangsong', serif", fontSize: 'clamp(14px, 1.4vw, 18px)' }}>
              如有疑问，请联系
            </p>
            <p className="mt-2" style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 'clamp(16px, 1.8vw, 24px)', fontWeight: 300, color: '#392C20' }}>
              info@rotohaus.com
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mb-20 lg:mb-28">
          <div className="h-px bg-gradient-to-r from-transparent via-[#392C20]/10 to-transparent" />
        </FadeInSection>

        <FadeInSection delay={0.55} className="mb-12">
          <div className="flex items-start gap-6">
            <img
              src="/images/residency/application/logo-alt.png"
              alt="Rotohaus"
              className="w-24 h-24 lg:w-36 lg:h-36 opacity-90"
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
                联系与合作
              </h2>
              <p
                className="text-[#392C20]/60"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 44px)',
                  fontWeight: 200
                }}
              >
                Join Our Community
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.6} className="mb-12">
          <p
            className="text-[#808080]"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              lineHeight: 1.6
            }}
          >
            *如暂时不能来到驻地现场，也欢迎提交资料与我们保持联系。
          </p>
        </FadeInSection>

        <FadeInSection delay={0.65} className="mb-8">
          <p
            className="text-[#6E6E6E]"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6
            }}
          >
            除驻地创作外，我们也欢迎以下形式的参与：
          </p>
        </FadeInSection>

        <div className="mt-10">
          {participationOptions.map((option, i) => (
            <ParticipationOption
              key={i}
              title={option.title}
              description={option.description}
              delay={0.7 + i * 0.1}
            />
          ))}
        </div>

        <FadeInSection delay={1} className="flex justify-center mt-16 lg:mt-24">
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

export default ApplySection;
