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
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(18px, 2vw, 26px)',
          lineHeight: 1.6,
          fontWeight: 300
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
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(24px, 2.5vw, 36px)',
          fontWeight: 400
        }}
      >
        {title}
      </h4>
      <p
        className="text-[#6E6E6E]"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(16px, 1.6vw, 22px)',
          lineHeight: 1.7,
          fontWeight: 300
        }}
      >
        {description}
      </p>
    </FadeInSection>
  );
};

const ApplySection = () => {
  const materials = [
    { title: 'CV / Resume', description: '' },
    { title: 'Portfolio', description: ' (PDF or website link)' },
    {
      title: 'Project Proposal',
      description: ' (Please describe your creative direction, reasons for interest in this residency, estimated budget range, work preservation possibilities, and preferred collaborator backgrounds)'
    },
    {
      title: 'Public Program Proposal',
      description: ' (Optional: A proposal for public education activities for local audiences or fellow artists during the residency)'
    }
  ];

  const participationOptions = [
    {
      title: 'Remote Participation',
      description: 'Online talks, research exchange, or collaborative projects'
    },
    {
      title: 'Artist Archive',
      description: 'Submission of works and research materials for future exhibitions and programs'
    },
    {
      title: 'Cross-disciplinary Proposals',
      description: 'Ideas connecting art with culture, education, or related fields'
    },
    {
      title: 'Volunteers',
      description: 'Support in documentation, production, coordination, design, or media. (Volunteer opportunities will be announced separately.)'
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
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(48px, 6vw, 96px)',
                  fontWeight: 200,
                  lineHeight: 1.15
                }}
              >
                How to Apply?
              </h2>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1} className="mb-16 lg:mb-20">
          <div className="bg-[#FFE148]/15 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <p
              className="text-[#392C20] mb-4"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                lineHeight: 1.5,
                fontWeight: 300
              }}
            >
              Please submit the following materials to:
            </p>
            <p
              className="text-[#959726] mb-4"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 400
              }}
            >
              residency@rotohaus.com
            </p>
            <p
              className="text-[#6E6E6E]"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(16px, 1.6vw, 24px)',
                fontWeight: 300
              }}
            >
              Email subject: [Embers of Qiong Application | Your Name]
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2} className="mb-8">
          <h3
            className="text-[#959726]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.2
            }}
          >
            Application Materials
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
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(48px, 6vw, 96px)',
                  fontWeight: 200,
                  lineHeight: 1.15
                }}
              >
                Join Our Community
              </h2>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.6} className="mb-12">
          <p
            className="text-[#808080]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            *If you are unable to join the residency on site, we also welcome alternative forms of engagement:
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
