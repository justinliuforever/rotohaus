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
  <span style={{ color: '#959726', fontWeight: 600 }}>{children}</span>
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
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(14px, 1.4vw, 20px)',
              lineHeight: 1.9,
              fontWeight: 500,
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
          日本著名计算机科学家、<Highlight>人机交互（HCI）领域先驱</Highlight>，<Highlight>麻省理工学院媒体实验室（MIT Media Lab）</Highlight><Highlight>"可触媒体小组"（Tangible Media Group）创始人</Highlight>，现任<Highlight>杰罗姆·B·韦斯纳传媒艺术与科学教授</Highlight>。其研究聚焦<Highlight>"有形用户界面"（Tangible User Interface）</Highlight>与<Highlight>"可塑形式"（Radical Atoms）</Highlight>，推动数字信息的物理化呈现，在全球学术与艺术实践中具有深远影响。
        </>
      ),
      image: '/images/residency/advisors/hiroshi-ishii.svg',
      align: 'left'
    },
    {
      description: (
        <>
          多媒体艺术家、计算媒体研究者，现任<Highlight>香港科技大学（广州）计算媒体与艺术系访问教授</Highlight>。拥有<Highlight>麻省理工学院媒体艺术与科学博士学位</Highlight>，曾任职于<Highlight>京都大学</Highlight>与<Highlight>上海纽约大学</Highlight>。她的研究聚焦<Highlight>电子纺织与计算机刺绣</Highlight>，结合触觉交互、软电路与实体计算，探索纺织、身体与计算技术之间的感知与学习关系。
        </>
      ),
      image: '/images/residency/advisors/margaret-minsky.svg',
      align: 'right'
    },
    {
      description: (
        <>
          国际知名艺术家，以<Highlight>大型、场域特定装置与公共艺术实践</Highlight>著称。其作品曾于<Highlight>惠特尼美国艺术博物馆</Highlight>、<Highlight>波士顿美术馆</Highlight>、<Highlight>波士顿当代艺术学院（ICA）</Highlight>与越南、中国、韩国、日本等地持续开展跨文化与在地合作实践。著有<Highlight>"Making Art Together"（Beacon Press, 2006）</Highlight>，长期关注协作、公共性与社会参与式艺术实践。
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
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(40px, 5vw, 80px)',
                  fontWeight: 400,
                  lineHeight: 1.15
                }}
              >
                学术顾问
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 400
                }}
              >
                Academic Advisors
              </p>
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
