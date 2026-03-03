import { motion } from 'framer-motion';
import FadeInSection from '../shared/FadeInSection';

const TimelineItem = ({ label, value, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="flex flex-col gap-1">
      <span
        className="text-[#959726]"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(14px, 1.2vw, 18px)',
          fontWeight: 400
        }}
      >
        {label}
      </span>
      <span
        className="text-[#392C20]"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(18px, 1.8vw, 26px)',
          fontWeight: 400
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
        fontFamily: "'Helvetica Neue', sans-serif",
        fontSize: 'clamp(14px, 1.4vw, 18px)',
        fontWeight: 300
      }}
    >
      {children}
    </motion.span>
  );
};

const ApplicationSection = () => {
  const primaryMedia = [
    'Light Art / Projection',
    'Installation Art / New Media Art',
    'Moving Image / Documentary',
    'Art / Theater / Music Therapy',
    'AIGC / 3D / Animation',
    'Community / Public Art Practice',
    'Ceramic Art'
  ];

  const secondaryMedia = [
    'Architecture & Spatial Design',
    'Graphic & Cultural Product Design',
    'Folklore & Anthropology Research',
    'Fashion Design',
    'Fiber & Material Art',
    'Natural Dyeing / Handicraft'
  ];

  const values = [
    'Genuine interest in site-specific art, rural art initiatives, and intangible cultural heritage',
    'Ability to engage in immersive learning and produce work prototypes within a short timeframe',
    'Sensitivity to community and public space, with willingness to interact with local communities'
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
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
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-90"
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
                Project Timeline
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <TimelineItem
              label="Residency Period"
              value="March 13 – April 15, 2026"
              delay={0.1}
            />
            <TimelineItem
              label="Recruitment Completed"
              value="✓ Closed · February 14, 2026"
              delay={0.15}
            />
            <TimelineItem
              label="First Round Results"
              value="✓ February 1st"
              delay={0.2}
            />
            <TimelineItem
              label="Final Results"
              value="✓ February 16th"
              delay={0.25}
            />
          </div>
        </FadeInSection>

        <FadeInSection className="mb-20 lg:mb-28">
          <div className="flex flex-wrap items-baseline gap-4 mb-6">
            <h2
              className="text-[#392C20]"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: 200,
                lineHeight: 1.15
              }}
            >
              Program Focus
            </h2>
          </div>
          <p
            className="text-[#626262]/80 max-w-4xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            *This residency welcomes diverse experimental practices and encourages cross-media collaborative creation and dialogue. The selected artists represent a wide range of backgrounds and disciplines.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-20 lg:mb-28">
          <FadeInSection delay={0.1}>
            <h3
              className="text-[#959726] mb-6"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.2
              }}
            >
              Primary Media Focus
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
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.2
              }}
            >
              Other Related Fields*
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
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: 300,
                lineHeight: 1
              }}
            >
              Selected Artists
            </h3>
            <span
              className="text-[#392C20] pb-1"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: 400
              }}
            >
              10 Artists (or Groups)
            </span>
          </div>
        </FadeInSection>

        <FadeInSection className="mb-16 lg:mb-24">
          <h3
            className="text-[#959726] mb-8"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.2
            }}
          >
            We Especially Value Artists Who...
          </h3>
          <div className="space-y-4">
            {values.map((value, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.08}>
                <p
                  className="text-[#392C20] flex items-start gap-4"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    lineHeight: 1.6,
                    fontWeight: 300
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
              alt="Art Residency Visual"
              className="w-full h-48 sm:h-56 md:h-72 lg:h-96 xl:h-[480px] object-cover"
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
