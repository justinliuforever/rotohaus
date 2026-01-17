import FadeInSection from '../shared/FadeInSection';

const SupportCategory = ({ title, items, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="mb-12 lg:mb-16">
      <h3
        className="text-[#392C20] mb-6"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 400,
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
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6,
              fontWeight: 300
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
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(18px, 2vw, 28px)',
          lineHeight: 1.6,
          fontWeight: 300
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
      title: 'Project Support',
      items: [
        'Accommodation and regular meal subsidies provided during the residency;',
        'Production funding: Reimbursement for actual material, design, and production costs based on approved project proposals.'
      ]
    },
    {
      title: 'Resources & Exchange',
      items: [
        'One-on-one exchange opportunities with internationally renowned scholars and art practitioners for creative feedback and research dialogue;',
        'Coordination of on-site research, intangible cultural heritage crafts, and community resources;',
        'Collaboration opportunities with local communities, commercial brands, and cultural institutions.'
      ]
    },
    {
      title: 'Exhibition & Media Exposure',
      items: [
        'Residency outcomes included in future exhibitions, with opportunities for presentation in art spaces across New York, Boston, Beijing, Shanghai, Chengdu, and other cities;',
        'Documentation of project process and outcomes for subsequent media exposure.'
      ]
    }
  ];

  const requirements = [
    'Open format; cross-media collaboration with other artists is encouraged;',
    'Complete a finished work suitable for exhibition, or a clear prototype/proposal during the residency;',
    'Works should have potential for long-term preservation, or provide video documentation for exhibition;',
    'Design or assist in organizing one public education activity for local audiences during the residency.'
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        <FadeInSection className="mb-8">
          <h2
            className="text-[#392C20] mb-2"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 200,
              lineHeight: 1.15
            }}
          >
            What We Offer
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1} className="mb-16 lg:mb-20">
          <p
            className="text-[#626262]/80"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(18px, 2vw, 28px)',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            *This residency prioritizes creative conditions and research support. No fixed residency fee is charged to artists.
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
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 200,
              lineHeight: 1.15
            }}
          >
            Requirement
          </h2>
        </FadeInSection>

        <div className="mt-12">
          {requirements.map((req, i) => (
            <RequirementItem key={i} delay={0.5 + i * 0.08}>
              {req}
            </RequirementItem>
          ))}
        </div>

        <FadeInSection delay={0.8} className="mt-16 lg:mt-20">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-[#476724] hover:text-[#476724]/80 transition-colors"
          >
            <span
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 400
              }}
            >
              Learn How to Apply
            </span>
            <span>→</span>
          </a>
        </FadeInSection>

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
