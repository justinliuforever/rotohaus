import { motion } from 'framer-motion';
import FadeInSection from '../shared/FadeInSection';

const ThanksSection = () => {
  const contactInfo = [
    { label: 'Instagram', value: '@rotohaus.nyc' },
    { label: 'Website', value: 'https://rotohaus.com/residency' },
    { label: 'Email', value: 'info@rotohaus.com' },
    { label: 'WeChat', value: 'ROTOHAUS' }
  ];

  const credits = [
    { role: 'Editorial & Visual Direction', name: 'Rainee Wang' },
    { role: 'Content Advisory', name: 'Yuanyuan Wang' },
    { role: 'Media Matrix Editing', name: 'Max Zhu' }
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
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(40px, 5vw, 80px)',
                  fontWeight: 200,
                  lineHeight: 1.15
                }}
              >
                Special Thanks
              </h2>
            </div>
          </div>
        </FadeInSection>

        {/* Thanks Content */}
        <FadeInSection delay={0.1} className="mb-20 lg:mb-32">
          <p
            className="text-[#392C20]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: 'justify'
            }}
          >
            This project is made possible through the support and collaboration of local partners in Qionglai, including communities in Jiaguan and Linji. We are grateful for the guidance, participation, and exchange with individual artists, researchers, faculty, and students connected to academic communities such as MIT Media Lab, New York University (IMA / ITP), NYU Shanghai, Harvard Graduate School of Education, The Hong Kong University of Science and Technology (Guangzhou), and Boston College. (Affiliations listed for reference only.) We also thank primary local patrons, including Chengdu Heyi Fang Wine Co., Ltd.
          </p>
        </FadeInSection>

        {/* Collaboration Call */}
        <FadeInSection delay={0.2} className="mb-24 lg:mb-32">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-px bg-[#DADADA]" />
          </div>
          <p
            className="text-center text-[#959726] max-w-3xl mx-auto"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 2vw, 28px)',
              lineHeight: 1.8,
              fontWeight: 300
            }}
          >
            Embers of QIONG is sustained by an open and evolving network.<br />
            We welcome further collaboration and exchange across artistic, cultural, and research contexts.
          </p>
        </FadeInSection>

        {/* Contact Us Section */}
        <FadeInSection delay={0.3} className="mt-24 lg:mt-40">
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
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(40px, 5vw, 80px)',
                  fontWeight: 200,
                  lineHeight: 1.15
                }}
              >
                Contact Us
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6">
            {contactInfo.map((item, i) => (
              <p
                key={i}
                className="text-[#959726]"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(18px, 2.5vw, 36px)',
                  fontWeight: 300
                }}
              >
                <span className="text-[#959726]">{item.label}:</span>{' '}
                <span className="text-[#000]">{item.value}</span>
              </p>
            ))}
          </div>
        </FadeInSection>

        {/* Credits */}
        <FadeInSection delay={0.4} className="mt-24 lg:mt-32">
          <div className="flex flex-col items-center gap-3">
            {credits.map((credit, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(14px, 1.5vw, 24px)',
                  fontWeight: 300,
                  color: 'rgba(0, 0, 0, 0.25)'
                }}
              >
                {credit.role}: {credit.name}
              </p>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom decoration */}
        <FadeInSection delay={0.5} className="flex justify-center mt-16 lg:mt-24">
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
