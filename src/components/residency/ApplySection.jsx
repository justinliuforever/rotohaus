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
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        <FadeInSection className="mb-12">
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
                申请方式
              </h2>
              <p
                className="text-[#392C20]/60"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 44px)',
                  fontWeight: 200
                }}
              >
                How to Apply?
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1} className="mb-16 lg:mb-20">
          <div className="bg-[#FFE148]/15 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <p
              className="text-[#392C20] mb-4"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                lineHeight: 1.5
              }}
            >
              请将以下材料发送至：
            </p>
            <p
              className="text-[#392C20] mb-4"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 500
              }}
            >
              <span className="mr-2">📩</span>
              residency@rotohaus.com
            </p>
            <p
              className="text-[#6E6E6E]"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(16px, 1.6vw, 24px)'
              }}
            >
              邮件标题格式：【烟火邛州驻地申请｜姓名】
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2} className="mb-8">
          <h3
            className="text-[#959726]"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 500,
              lineHeight: 1.2
            }}
          >
            申请材料
          </h3>
        </FadeInSection>

        <div className="mb-20 lg:mb-32">
          {materials.map((item, i) => (
            <MaterialItem
              key={i}
              title={item.title}
              description={item.description}
              delay={0.25 + i * 0.08}
            />
          ))}
        </div>

        <FadeInSection delay={0.5} className="mb-20 lg:mb-28">
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
                其它参与方式
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
