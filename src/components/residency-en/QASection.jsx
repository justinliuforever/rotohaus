import FadeInSection from '../shared/FadeInSection';

const QAItem = ({ question, answer, delay = 0 }) => {
  return (
    <FadeInSection delay={delay} className="mb-12 lg:mb-16">
      {/* Question */}
      <p
        className="text-[#959726] mb-4"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          lineHeight: 1.5,
          fontWeight: 300
        }}
      >
        <span className="text-[#392C20] font-medium">Q: </span>
        {question}
      </p>

      {/* Answer */}
      <p
        className="text-[#959726] pl-0 sm:pl-4 md:pl-6 lg:pl-8"
        style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 'clamp(18px, 2vw, 28px)',
          lineHeight: 1.7,
          fontWeight: 300
        }}
      >
        <span className="text-[#392C20] font-medium">A: </span>
        {answer}
      </p>
    </FadeInSection>
  );
};

const QASection = () => {
  const qaData = [
    {
      question: 'Can international artists apply?',
      answer: 'Yes. International applicants are welcome. The residency team can provide invitation documents to support visa applications, but visa fees and arrangements are the artist\'s responsibility.'
    },
    {
      question: 'Do I need to speak Chinese?',
      answer: 'No. English is the working language of the residency. Translation and local support will be provided when needed.'
    },
    {
      question: 'Are travel costs covered?',
      answer: 'Accommodation and basic production support are provided. International and domestic travel to Qionglai is the artist\'s responsibility.'
    },
    {
      question: 'What if I can\'t stay for the entire residency period?',
      answer: 'Flexible participation is possible. Please indicate your availability clearly in your application.'
    },
    {
      question: 'I\'m early-career or still a student. Am I eligible?',
      answer: 'Yes. We welcome students and emerging artists. Selection is based on artistic vision and relevance, not career stage.'
    },
    {
      question: 'I don\'t have a fully developed project yet. Can I still apply?',
      answer: 'Yes. A finished proposal is not required. We value your stories, work ethics, and passion. Selected artists will further develop their projects during the residency.'
    },
    {
      question: 'What kind of works are expected?',
      answer: 'Works should be suitable for public presentation, exhibition, or documentation. Process-based, site-responsive, and collaborative approaches are encouraged.'
    },
    {
      question: 'Where can I get more information?',
      answer: 'Please contact info@rotohaus.com or follow our official announcements.'
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
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(48px, 6vw, 96px)',
                  fontWeight: 200,
                  lineHeight: 1.15
                }}
              >
                Q & A
              </h2>
              <p
                className="text-[#392C20]/60 mt-1"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 44px)',
                  fontWeight: 200
                }}
              >
                Frequently Asked Questions
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
