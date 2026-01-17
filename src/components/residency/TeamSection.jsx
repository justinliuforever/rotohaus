import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeInSection from '../shared/FadeInSection';

const TeamMemberCard = ({ name, nameEn, role, roleEn, description, image, delay = 0, align = 'left' }) => {
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
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(28px, 3vw, 36px)',
                  fontWeight: 500
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
                {nameEn}
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
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              lineHeight: 2,
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

const CreativeTeamCard = ({ role, roleEn, name, nameEn, description, image, delay = 0, align = 'left' }) => {
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
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.1
            }}
          >
            {role}
          </h3>
          <span
            className="text-[#392C20]/60"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(24px, 2.5vw, 36px)',
              fontWeight: 200
            }}
          >
            {roleEn}
          </span>
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
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 500
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
              {nameEn}
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
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              lineHeight: 2,
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

const TeamSection = () => {
  const productionTeam = [
    {
      name: '王韵依',
      nameEn: 'Rainee',
      role: 'Director',
      roleEn: 'Director of Art Residency',
      description: '野所（ROTOHAUS）创始人、艺术总监，本次「烟火邛州｜Embers of Qiong」国际艺术驻地发起人及首席策划。王韵依拥有哈佛大学艺术教育硕士学位、纽约大学交互媒体艺术学士学位，曾任麻省理工学院 MIT Media Lab 研究助理，长期关注文化遗产、民族社群与数字科技的跨领域实践。作为艺术家与策展人，其作品与讲座曾在阿布扎比卢浮宫、MIT Media Lab、哈佛大学绿色发展办公室、奥地利林茨艺术节、荷兰媒体建筑双年展、时尚杂志ELLE、La MaMa Galleria（纽约）、联合国世界国际非遗节等机构与平台呈现。她曾参与发起「数字羌境」与「南海黎风」等艺术驻地项目，积累了在地研究、跨文化协作与公共呈现的经验。',
      image: '/images/residency/team/rainee.svg',
      align: 'left'
    },
    {
      name: '朱芃妍',
      nameEn: 'Max',
      role: 'Co-director',
      roleEn: 'Co-director',
      description: '野所（ROTOHAUS）创始人之一，多媒体艺术家、策展人及叙事者，毕业于波士顿学院影像艺术与传播学方向。曾参与《时尚芭莎》等时尚杂志、戛纳电影节及联合国芭蕾舞峰会等项目的创意与影像叙事工作。发起并主导波士顿学生艺术家平台 SPoT，通过策划展览、论坛与公共项目，构建青年艺术家与艺术生态之间的实践与对话网络。她的实践以影像装置、文本与社会参与式项目为核心，借鉴具身性取向与感官民族志方法，探索个体叙事与感官经验如何在不同媒介中被转译，并在跨越空间与时间的过程中生成可被他者感知与理解的共享体验。其作品曾于波士顿市政厅等艺术空间展出。',
      image: '/images/residency/team/max.svg',
      align: 'right'
    },
    {
      name: '刘沁源',
      nameEn: 'Justin',
      role: 'Head of Finance',
      roleEn: 'Head of Finance and Tech',
      description: '野所（ROTOHAUS）创始人之一，约翰霍普金斯大学计算机科学硕士，软件工程师，现任佛罗里达对冲基金工程师。曾于加州 FinTech 初创公司 Ark7 从事软件开发工作。大学期间主导开发技术平台 KaraOrchee，项目在多项美国州级创业竞赛中获得前三名，并得到 HopStart、PAVA、TEDCO 等机构支持。作为 ROTOHAUS 联合创始人，他致力于以科技为媒介，重塑文化与创作的当代体验，使传统与创新在现实中持续生长。',
      image: '/images/residency/team/justin.svg',
      align: 'left'
    }
  ];

  const creativeTeam = [
    {
      role: '策展人',
      roleEn: 'Chief Curator',
      name: '王媛媛',
      nameEn: 'Yuanyuan',
      description: '青年艺术家、策展人和研究者，擅长跨媒介与跨感官互动的艺术表达，探索数字媒介环境中人类感知、技术与文化的复杂交互。她拥有纽约大学Tisch艺术学院互动电子媒体实验室（NYU ITP）硕士学位，并曾在探索频道、旅游卫视《行者》栏目及新疆电视台担任纪录片编导及研究员。近年来，她专注于"数字语境中的感知重构与经验转译"和"技术赋权下的互动机制"方向的研究，运用影像、声音、互动装置及人工智能等多元媒介，探讨数字技术如何介入、重塑并影响当代人的感知经验。她的交互式艺术作品曾在美国和中国展出，并积极参与跨学科对话及多项高校学术课题，致力于打破数字环境中个体与技术之间的边界，激发观众对自身感知的再思考。',
      image: '/images/residency/team/yuanyuan.svg',
      align: 'left'
    },
    {
      role: '媒体专员',
      roleEn: 'Media Specialist',
      name: '付浩然',
      nameEn: 'Charles',
      description: '纪录片导演、策展人。中国传媒大学艺术学学士、四川大学软件工程硕士，现工作生活于四川成都。研究领域为纪录片、艺术设计，博物馆展陈、影像艺术。作品聚焦人文纪实、社会热点、乡村振兴等领域，旨在用镜头记录人物，用情感传递故事，用艺术呈现真实生活。代表作《四川水脉》、《三云与久香的羌年》、《高速路上又一年》、《村官日记》、《"蓝天"守望者》、《时光拼图师》等，作品获多项国家级、省级奖项。三级导演、中国电视艺术家协会会员、中国博物馆协会会员、中国摄影著作权协会会员。',
      image: '/images/residency/team/charles.svg',
      align: 'right'
    },
    {
      role: '在地统筹',
      roleEn: 'Local Coordinator',
      name: '吴沛阳',
      nameEn: 'Kris',
      description: '本科毕业于莫纳什大学商业数据分析专业，研究生就读于迪肯大学商业运动管理专业，兼具扎实的数据分析能力与前沿的体育商业运营思维。现任职于合义坊酒业有限公司，深度参与国内外多场大型体育赛事的策划与执行工作。聚焦商业、艺术与体育的跨界融合赛道，以酒业品牌为实践载体，探索传统文化与现代潮流的破圈路径。致力于通过数据分析赋能创意策划，用体育的活力链接艺术的质感，驱动商业价值与文化价值的双重提升，催生全新的产业创意增长点。',
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
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-90"
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
                出品团队
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 200
                }}
              >
                Rotohaus Production Team
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
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-90"
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
                主创团队
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
