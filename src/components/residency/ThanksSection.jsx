import { motion } from 'framer-motion';
import FadeInSection from '../shared/FadeInSection';

const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-12 lg:my-16">
    <div className="flex-1 max-w-[200px] h-px bg-[#DADADA]" />
    <div className="w-2 h-2 rounded-full bg-[#959726]/40" />
    <div className="flex-1 max-w-[200px] h-px bg-[#DADADA]" />
  </div>
);

const CategoryTitle = ({ children, color = '#392C20' }) => (
  <h3
    className="text-center mb-8"
    style={{
      fontFamily: "'Huiwen-Fangsong', serif",
      fontSize: 'clamp(24px, 2.5vw, 32px)',
      fontWeight: 500,
      color
    }}
  >
    {children}
  </h3>
);

const OrganizationList = ({ items, color = 'rgba(0, 0, 0, 0.35)' }) => (
  <div className="flex flex-col items-center gap-3 lg:gap-4">
    {items.map((item, i) => (
      <p
        key={i}
        style={{
          fontFamily: "'Huiwen-Fangsong', serif",
          fontSize: 'clamp(18px, 2.5vw, 32px)',
          fontWeight: 500,
          color,
          textAlign: 'center'
        }}
      >
        {item}
      </p>
    ))}
  </div>
);

const ThanksSection = () => {
  const supportingOrgs = [
    '邛崃市人民政府',
    '邛崃市夹关镇人民政府',
    '邛崃市临济镇人民政府'
  ];

  const academicSupport = [
    '麻省理工学院媒体实验室（MIT Media Lab）',
    '香港科技大学（广州）计算媒体与艺术',
    '上海纽约大学（NYU Shanghai IMA）',
    '纽约大学Tisch艺术学院（IMA/ITP）',
    '哈佛大学教育学院（Harvard GSE）',
    '波士顿学院（Boston College）'
  ];

  const localSupport = [
    '成都市合义坊酒业有限公司'
  ];

  const contactInfo = [
    { label: '添加微信小助手', value: 'ROTOHAUS' },
    { label: '关注微信公众号', value: '野所ROTOHAUS' },
    { label: '关注Instagram', value: '@rotohaus.nyc' },
    { label: '关注小红书', value: 'ROTOHAUS野所' },
    { label: '邮件咨询', value: 'info@rotohaus.com' },
    { label: '驻地咨询', value: 'residency@rotohaus.com' },
    { label: '致电', value: '（+86）18402876061' }
  ];

  const credits = [
    { role: '文案与视觉设计', name: '王韵依' },
    { role: '内容支持与审核', name: '王媛媛' },
    { role: '平台内容编辑', name: '朱芃妍' }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      {/* Decorative blur effects */}
      <div
        className="absolute top-[200px] left-1/2 -translate-x-1/2 w-20 h-[600px] opacity-30 pointer-events-none"
        style={{
          background: 'rgba(209, 212, 50, 0.5)',
          filter: 'blur(75px)'
        }}
      />
      <div
        className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: '#D1D432',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Special Thanks Header */}
        <FadeInSection className="mb-16 lg:mb-24">
          <div className="flex items-start gap-6">
            <img
              src="/images/residency/application/logo-alt.png"
              alt="Rotohaus"
              className="w-28 h-28 lg:w-36 lg:h-36 opacity-90"
            />
            <div>
              <h2
                className="text-[#392C20]"
                style={{
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(40px, 5vw, 80px)',
                  fontWeight: 400,
                  lineHeight: 1.15
                }}
              >
                特别鸣谢
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 200
                }}
              >
                Special Thanks
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Supporting Organizations */}
        <FadeInSection delay={0.1}>
          <Divider />
          <CategoryTitle>支持单位</CategoryTitle>
          <OrganizationList items={supportingOrgs} color="rgba(0, 0, 0, 0.6)" />
        </FadeInSection>

        {/* Academic Support */}
        <FadeInSection delay={0.2}>
          <Divider />
          <CategoryTitle color="#959726">学术支持单位</CategoryTitle>
          <OrganizationList items={academicSupport} />
        </FadeInSection>

        {/* Local Support */}
        <FadeInSection delay={0.3}>
          <Divider />
          <CategoryTitle color="#ECBA2A">在地支持品牌</CategoryTitle>
          <OrganizationList items={localSupport} color="rgba(0, 0, 0, 0.25)" />
        </FadeInSection>

        {/* Collaboration Call */}
        <FadeInSection delay={0.4} className="mt-16 lg:mt-24">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-px bg-[#DADADA]" />
          </div>
          <p
            className="text-center text-[#959726] max-w-3xl mx-auto"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(16px, 2vw, 28px)',
              lineHeight: 1.8,
              fontWeight: 500
            }}
          >
            本项目支持体系处于持续开放状态。<br />
            我们欢迎机构与品牌以多种形式参与/支持艺术驻地<br />
            如有合作意向，欢迎与我们联系！
          </p>
        </FadeInSection>

        {/* Contact Us Section */}
        <FadeInSection delay={0.5} className="mt-24 lg:mt-40">
          <div className="flex items-start gap-6 mb-16 lg:mb-24">
            <img
              src="/images/residency/application/logo-alt.png"
              alt="Rotohaus"
              className="w-28 h-28 lg:w-36 lg:h-36 opacity-90"
            />
            <div>
              <h2
                className="text-[#392C20]"
                style={{
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(40px, 5vw, 80px)',
                  fontWeight: 400,
                  lineHeight: 1.15
                }}
              >
                联系我们
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 200
                }}
              >
                Contact Us
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6">
            {contactInfo.map((item, i) => (
              <p
                key={i}
                className="text-[#959726]"
                style={{
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(18px, 2.5vw, 36px)',
                  fontWeight: 500
                }}
              >
                {item.label}：{item.value}
              </p>
            ))}
          </div>
        </FadeInSection>

        {/* Credits */}
        <FadeInSection delay={0.6} className="mt-24 lg:mt-32">
          <div className="flex flex-col items-center gap-3">
            {credits.map((credit, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(14px, 1.5vw, 24px)',
                  fontWeight: 500,
                  color: 'rgba(0, 0, 0, 0.25)'
                }}
              >
                {credit.role}：{credit.name}
              </p>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom decoration */}
        <FadeInSection delay={0.7} className="flex justify-center mt-16 lg:mt-24">
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

export default ThanksSection;
