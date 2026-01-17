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

const Highlight = ({ children }) => (
  <span style={{ color: '#959726', fontWeight: 500 }}>{children}</span>
);

const AdvisorCard = ({ description, image, delay = 0, align = 'left' }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });

  const isRight = align === 'right';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-16 lg:mb-24"
    >
      <div className={`flex flex-col ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-start`}>
        {/* Avatar SVG (contains name + institution) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <img
            src={image}
            alt=""
            className="w-52 lg:w-64 h-auto"
          />
        </motion.div>

        {/* Description only */}
        <motion.div
          initial={{ opacity: 0, x: isRight ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-1 ${isRight ? 'lg:text-right' : ''} pt-2 lg:pt-4`}
        >
          <p
            className="text-[#555]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(14px, 1.4vw, 20px)',
              lineHeight: 1.9,
              fontWeight: 300,
              textAlign: 'justify'
            }}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AdvisorsSection = () => {
  const advisors = [
    {
      description: (
        <>
          Computer scientist and a <Highlight>pioneer in human–computer interaction (HCI)</Highlight>. He is a <Highlight>Jerome B. Wiesner Professor of Media Arts and Sciences</Highlight> at the <Highlight>MIT Media Lab</Highlight> and the <Highlight>founder of the Tangible Media Group</Highlight>. Ishii received the ACM SIGCHI Lifetime Research Award in 2019 and was elected an ACM Fellow in 2020.
        </>
      ),
      image: '/images/residency/advisors/hiroshi-ishii.svg',
      align: 'left'
    },
    {
      description: (
        <>
          <Highlight>Margaret Minsky</Highlight> is a multimedia artist, computational media researcher, currently a <Highlight>Visiting Professor in Computational Media and Arts</Highlight> at the <Highlight>Hong Kong University of Science and Technology (Guangzhou)</Highlight>. She holds a <Highlight>PhD in Media Arts and Sciences from MIT</Highlight>. Her research focuses on <Highlight>electronic textiles and computer embroidery</Highlight>, haptics, movement, and physical computing to explore relationships between textiles, the body, and computational systems in perception and learning.
        </>
      ),
      image: '/images/residency/advisors/margaret-minsky.svg',
      align: 'right'
    },
    {
      description: (
        <>
          An <Highlight>internationally recognized artist</Highlight> known for <Highlight>large-scale, site-specific installations and public art projects</Highlight>. His work has been exhibited at institutions including the <Highlight>Whitney Museum of American Art</Highlight>, the <Highlight>Museum of Fine Arts, Boston</Highlight>, and the <Highlight>Institute of Contemporary Art (ICA) Boston</Highlight>, with sustained cross-cultural collaborations across Vietnam, China (Jingdezhen), Korea, and Japan. He is the author of <Highlight>"Making Art Together" (Beacon Press, 2006)</Highlight> and has long focused on collaboration, public engagement, and socially participatory art practices.
        </>
      ),
      image: '/images/residency/advisors/mark-cooper.svg',
      align: 'left'
    }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
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
                Academic Advisors
              </h2>
            </div>
          </div>
        </FadeInSection>

        {/* Advisor cards */}
        {advisors.map((advisor, i) => (
          <AdvisorCard
            key={i}
            {...advisor}
            delay={0.1 + i * 0.1}
          />
        ))}

        {/* Bottom decoration */}
        <FadeInSection delay={0.5} className="flex justify-center mt-12 lg:mt-20">
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

export default AdvisorsSection;
