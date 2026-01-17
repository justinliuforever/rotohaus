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

const TeamMemberCard = ({ name, nameZh, role, roleEn, description, image, delay = 0, align = 'left' }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const isRight = align === 'right';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-16 lg:mb-20"
    >
      <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 lg:gap-12 items-start`}>
        {/* Avatar and Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-shrink-0 ${isRight ? 'lg:text-right' : ''}`}
        >
          <img
            src={image}
            alt={name}
            className="w-32 sm:w-40 md:w-44 lg:w-56 h-32 sm:h-40 md:h-44 lg:h-56 rounded-full object-cover mx-auto md:mx-0"
            style={{ boxShadow: '0 8px 32px rgba(57, 44, 32, 0.12)' }}
          />

          {/* Name and Role below avatar */}
          <div className={`mt-6 ${isRight ? 'text-right' : ''}`}>
            <div className="flex items-baseline gap-2 justify-center lg:justify-start flex-wrap">
              <span
                className="text-[#392C20]"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(28px, 3vw, 36px)',
                  fontWeight: 400
                }}
              >
                {name}
              </span>
              <span
                className="text-[#392C20]/70"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: 200
                }}
              >
                {nameZh}
              </span>
            </div>
            <p
              className="mt-1 text-[#392C20]/60"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(14px, 1.3vw, 18px)',
                fontWeight: 200
              }}
            >
              {roleEn}
            </p>
          </div>
        </motion.div>

        {/* Description */}
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
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              lineHeight: 2,
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

const CreativeTeamCard = ({ role, roleEn, name, nameZh, description, image, delay = 0, align = 'left' }) => {
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
      {/* Role Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className={`mb-8 ${isRight ? 'lg:text-right' : ''}`}
      >
        <div className={`flex items-baseline gap-4 flex-wrap ${isRight ? 'lg:justify-end' : ''}`}>
          <h3
            className="text-[#392C20]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 200,
              lineHeight: 1.1
            }}
          >
            {roleEn}
          </h3>
        </div>
      </motion.div>

      {/* Content */}
      <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 lg:gap-12 items-start`}>
        {/* Avatar and Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-shrink-0 ${isRight ? 'lg:text-right' : ''}`}
        >
          <img
            src={image}
            alt={name}
            className="w-32 sm:w-40 md:w-44 lg:w-56 h-32 sm:h-40 md:h-44 lg:h-56 rounded-full object-cover mx-auto md:mx-0"
            style={{ boxShadow: '0 8px 32px rgba(57, 44, 32, 0.12)' }}
          />

          {/* Name below avatar */}
          <div className={`mt-5 flex items-baseline gap-2 justify-center lg:justify-start flex-wrap ${isRight ? 'lg:justify-end' : ''}`}>
            <span
              className="text-[#392C20]"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 400
              }}
            >
              {name}
            </span>
            <span
              className="text-[#392C20]/70"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(20px, 2vw, 28px)',
                fontWeight: 200
              }}
            >
              {nameZh}
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: isRight ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-1 ${isRight ? 'lg:text-right' : ''} pt-2 lg:pt-4`}
        >
          <p
            className="text-[#555]"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              lineHeight: 2,
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

const TeamSection = () => {
  const productionTeam = [
    {
      name: 'Rainee',
      nameZh: '王韵依',
      role: 'Director',
      roleEn: 'Director of Art Residency',
      description: 'Founder and Art Director of ROTOHAUS, initiator and chief curator of "Embers of Qiong" International Art Residency. Rainee holds a Master\'s degree in Arts Education from Harvard University and a Bachelor\'s degree in Interactive Media Arts from New York University. She was a research assistant at MIT Media Lab, focusing on cross-disciplinary practices involving cultural heritage, ethnic communities, and digital technology. As an artist and curator, her works and lectures have been presented at Louvre Abu Dhabi, MIT Media Lab, Harvard Green Office, Ars Electronica, Media Architecture Biennale, ELLE Magazine, La MaMa Galleria (NYC), and the UN International Intangible Cultural Heritage Expo.',
      image: '/images/residency/team/rainee.svg',
      align: 'left'
    },
    {
      name: 'Max',
      nameZh: '朱芃妍',
      role: 'Co-director',
      roleEn: 'Co-director',
      description: 'Co-founder of ROTOHAUS, multimedia artist, curator, and storyteller. Max graduated from Boston College with a focus on Film Studies and Communication. She has participated in creative and visual narrative projects for Harper\'s Bazaar, Cannes Film Festival, and the UN Ballet Summit. She founded SPoT, a Boston-based student artist platform, organizing exhibitions, forums, and public programs to build dialogue networks between emerging artists and the art ecosystem.',
      image: '/images/residency/team/max.svg',
      align: 'right'
    },
    {
      name: 'Justin',
      nameZh: '刘沁源',
      role: 'Head of Finance',
      roleEn: 'Head of Finance and Tech',
      description: 'Co-founder of ROTOHAUS, software engineer with a Master\'s degree in Computer Science from Johns Hopkins University. Currently working as an engineer at a Florida-based hedge fund. Previously worked in software development at Ark7, a California FinTech startup. During university, he led the development of KaraOrchee, winning top placements in multiple US state-level entrepreneurship competitions with support from HopStart, PAVA, and TEDCO.',
      image: '/images/residency/team/justin.svg',
      align: 'left'
    }
  ];

  const creativeTeam = [
    {
      role: '策展人',
      roleEn: 'Chief Curator',
      name: 'Yuanyuan',
      nameZh: '王媛媛',
      description: 'Young artist, curator, and researcher specializing in cross-media and multi-sensory interactive art, exploring the complex interactions between human perception, technology, and culture in digital environments. She holds a Master\'s degree from NYU Tisch ITP, and has worked as a documentary director and researcher at Discovery Channel, Travel Channel\'s "Explorer" program, and Xinjiang Television. Her interactive artworks have been exhibited in the US and China.',
      image: '/images/residency/team/yuanyuan.svg',
      align: 'left'
    },
    {
      role: '媒体专员',
      roleEn: 'Media Specialist',
      name: 'Charles',
      nameZh: '付浩然',
      description: 'Documentary Director and Curator. Holds a Bachelor of Arts from the Communication University of China and a Master of Software Engineering from Sichuan University. Currently based in Chengdu, Sichuan. Research interests include documentary filmmaking, artistic design, museum exhibition design, and visual arts. Third-Grade Director, member of the China Television Artists Association, the Chinese Museums Association, and the China Photography Copyright Society.',
      image: '/images/residency/team/charles.svg',
      align: 'right'
    },
    {
      role: '在地统筹',
      roleEn: 'Local Coordinator',
      name: 'Kris',
      nameZh: '吴沛阳',
      description: 'She holds a bachelor\'s degree in Business Data Analytics from Monash University and a master\'s degree in Business Sports Management from Deakin University. Currently working at Heyifang Wine Co., Ltd., she has participated in the planning of many domestic and international sports events, gaining abundant practical planning experience and industry resources. Now, she focuses on the cross-border integration of business, art and sports.',
      image: '/images/residency/team/kris.svg',
      align: 'left'
    }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Production Team Section */}
        <FadeInSection className="mb-20 lg:mb-32">
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
                Production Team
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 200
                }}
              >
                Rotohaus Core Team
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Production Team Members */}
        {productionTeam.map((member, i) => (
          <TeamMemberCard
            key={i}
            {...member}
            delay={0.1 + i * 0.1}
          />
        ))}

        {/* Divider */}
        <FadeInSection delay={0.2} className="flex justify-center my-16 lg:my-24">
          <div className="flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#959726]/30" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
          </div>
        </FadeInSection>

        {/* Creative Team Section */}
        <FadeInSection className="mb-20 lg:mb-32">
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
                Creative Team
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 200
                }}
              >
                Residency Creative Team
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Creative Team Members */}
        {creativeTeam.map((member, i) => (
          <CreativeTeamCard
            key={i}
            {...member}
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

export default TeamSection;
