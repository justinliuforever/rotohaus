import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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

const ProjectCard = ({
  title,
  titleEn,
  subtitle,
  description,
  image,
  logo,
  titleSvg,
  accentColor,
  decorSvg,
  delay = 0,
  reverse = false
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-24 lg:mb-40"
    >
      {/* Main two-column layout */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`relative ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {/* Main image */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl"
            style={{
              boxShadow: `0 30px 80px -20px ${accentColor}35, 0 10px 40px -15px rgba(0,0,0,0.12)`
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
            {/* Subtle color overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{ background: `linear-gradient(180deg, transparent 60%, ${accentColor})` }}
            />
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`relative ${reverse ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}
        >
          {/* Decorative element - positioned as accent */}
          {decorSvg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: delay + 0.4 }}
              className={`mb-8 ${reverse ? 'flex justify-end' : ''}`}
            >
              <img
                src={decorSvg}
                alt=""
                className="w-28 lg:w-36 h-auto"
                style={{ filter: `drop-shadow(3px 2px 6px ${accentColor}40)` }}
              />
            </motion.div>
          )}

          {/* Logo - positioned as accent */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delay + 0.35 }}
              className={`mb-8 ${reverse ? 'flex justify-end' : ''}`}
            >
              <div
                className="inline-flex p-4 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}08, ${accentColor}15)`,
                  border: `1px solid ${accentColor}20`
                }}
              >
                <img
                  src={logo}
                  alt=""
                  className="w-20 lg:w-24 h-auto"
                />
              </div>
            </motion.div>
          )}

          {/* Title area */}
          <div className={`mb-8 ${reverse ? 'lg:text-right' : ''}`}>
            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.3 }}
              className={`h-1 w-16 mb-6 rounded-full ${reverse ? 'origin-right ml-auto' : 'origin-left'}`}
              style={{ background: accentColor }}
            />

            {titleSvg ? (
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: delay + 0.35 }}
                src={titleSvg}
                alt={title}
                className={`h-14 lg:h-20 w-auto mb-3 ${reverse ? 'ml-auto' : ''}`}
              />
            ) : (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: delay + 0.35 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: accentColor
                }}
              >
                {title}
              </motion.h3>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.85 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.4 }}
                className="mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  fontWeight: 300,
                  color: accentColor
                }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* English subtitle */}
            {titleEn && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.35 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.45 }}
                className="mt-3"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(10px, 0.9vw, 13px)',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#000'
                }}
              >
                {titleEn}
              </motion.p>
            )}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: delay + 0.5 }}
            className={`text-[#555] ${reverse ? 'lg:text-right' : ''}`}
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              lineHeight: 2,
              fontWeight: 300
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HistorySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  const projects = [
    {
      title: 'Digital Qiang Garden',
      subtitle: 'Lily in Shang\'Guan',
      titleEn: 'Mao County, Aba Prefecture · 2024',
      description: 'Launched in 2023 in Mao County, Aba Tibetan and Qiang Autonomous Prefecture, Digital Qiang Garden is an artist residency centered on Qiang embroidery, architecture, ritual practices, and ecological knowledge. The project brings together Qiang heritage practitioners and artists to explore new forms of dialogue between contemporary media and living intangible heritage. Residency outcomes have been presented at NYU Shanghai IMA Gallery, MIT Media Lab, Harvard Green Office, and the UN International Intangible Cultural Heritage Expo.',
      image: '/images/residency/history/qiang-main.png',
      decorSvg: '/images/residency/history/qiang-decor.svg',
      accentColor: '#D23577'
    },
    {
      title: 'Nanhai Li Art Residency',
      titleSvg: '/images/residency/history/liwind-title.svg',
      titleEn: 'Hainan · 2025',
      description: 'Launched in January 2025, the Nanhai Li Art Residency is based in Li ethnic communities and coastal fishing villages in Hainan. The program focuses on Li intangible cultural heritage and island-based artistic research, fostering collaboration between artists and local heritage practitioners through fieldwork and material-based practices.',
      image: '/images/residency/history/liwind-main.png',
      logo: '/images/residency/history/liwind-logo.png',
      accentColor: '#6AC1BB'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#FAFAF8] overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      {/* Subtle background accents */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #D23577, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #6AC1BB, transparent 70%)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Intro text */}
        <FadeInSection className="max-w-3xl mx-auto text-center mb-20 lg:mb-32">
          <p
            className="text-black/25"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(15px, 1.8vw, 24px)',
              lineHeight: 2.1,
              fontWeight: 300
            }}
          >
            Over the past three years, ROTOHAUS founder Rainee Wang has led site-based research and artist residency projects across minority and island cultural contexts in China. These experiences inform ROTOHAUS's approach to place-based curation and long-term residency development, with current research focused in Southwest China.
          </p>
        </FadeInSection>

        {/* Project cards */}
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
            delay={0.1}
            reverse={i % 2 === 1}
          />
        ))}

        {/* Footer note */}
        <FadeInSection delay={0.2} className="max-w-2xl mx-auto text-center mt-8 lg:mt-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#392C20]/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#392C20]/15" />
            <div className="w-12 h-px bg-[#392C20]/10" />
          </div>
          <p
            className="text-black/20"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(12px, 1.1vw, 15px)',
              lineHeight: 1.9,
              fontWeight: 300
            }}
          >
            Note: Nanhai Li Art Residency is an independent program. ROTOHAUS founder Rainee Wang participated in its early development as a co-initiator and Creative/Academic Director. The project is currently operated by an independent team.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HistorySection;
