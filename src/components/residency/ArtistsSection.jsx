import { motion } from 'framer-motion';

const ArtistPortrait = ({ member, accentColor, solo = false }) => (
  <div className={solo ? 'max-w-lg mx-auto' : ''}>

    {/* Portrait */}
    <div className={`flex justify-center ${solo ? 'mb-8' : 'mb-6'}`}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute -inset-2 rounded-full opacity-20 blur-xl"
          style={{ background: accentColor }}
        />
        {member.image ? (
          <img
            src={member.image}
            alt={member.name || member.nameEn}
            className={`relative rounded-full object-cover grayscale ${
              solo
                ? 'w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64'
                : 'w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56'
            }`}
            style={{ boxShadow: `0 12px 40px ${accentColor}25` }}
          />
        ) : (
          <div
            className={`relative rounded-full flex items-center justify-center ${
              solo
                ? 'w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64'
                : 'w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56'
            }`}
            style={{
              background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)`,
              boxShadow: `0 12px 40px ${accentColor}15`,
              border: `1px solid ${accentColor}20`
            }}
          >
            <span style={{ fontFamily: "'FZFengRuSong', serif", fontSize: 'clamp(28px, 3vw, 40px)', color: `${accentColor}60` }}>
              {(member.name || member.nameEn).charAt(0)}
            </span>
          </div>
        )}
      </motion.div>
    </div>

    {/* Name — only for group members, solo name is in the header */}
    {!solo && (
      <div className="text-center mb-4">
        <div className="flex items-baseline gap-2 justify-center flex-wrap">
          <span
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              fontWeight: 500,
              color: '#392C20'
            }}
          >
            {member.name}
          </span>
          <span
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              fontWeight: 200,
              color: 'rgba(57, 44, 32, 0.65)'
            }}
          >
            {member.nameEn}
          </span>
        </div>
      </div>
    )}

    {/* Bio */}
    <p
      className="text-center"
      style={{
        fontFamily: "'Huiwen-Fangsong', serif",
        fontSize: 'clamp(13px, 1.2vw, 16px)',
        lineHeight: 2,
        fontWeight: 500,
        color: '#666',
        maxWidth: solo ? '520px' : '380px',
        margin: '0 auto'
      }}
    >
      {member.bio}
    </p>
  </div>
);

const ArtistGroupCard = ({ groupName, members, medium, accentColor }) => {
  const isSolo = members.length === 1;

  return (
    <div className="mb-20 lg:mb-28">
      {/* Group / Artist name */}
      <div className={`mb-10 lg:mb-14 ${isSolo ? 'text-center' : ''}`}>

        <h3
          style={{
            fontFamily: "'FZFengRuSong', serif",
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: accentColor
          }}
        >
          {groupName}
          {isSolo && members[0].nameEn && members[0].name && (
            <span
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                fontWeight: 200,
                marginLeft: '0.4em',
                opacity: 0.7
              }}
            >
              {members[0].nameEn}
            </span>
          )}
        </h3>
        <div className={`mt-3 flex items-center gap-3 ${isSolo ? 'justify-center' : ''}`}>
          <div
            className="h-px flex-grow max-w-[80px]"
            style={{ background: `linear-gradient(to right, ${accentColor}40, transparent)` }}
          />
          <span
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              color: accentColor,
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            {medium}
          </span>
          <div
            className="h-px flex-grow max-w-[80px]"
            style={{ background: `linear-gradient(to left, ${accentColor}40, transparent)`, display: isSolo ? 'block' : 'none' }}
          />
        </div>
      </div>

      {/* Members */}
      {isSolo ? (
        <ArtistPortrait
          member={members[0]}
          accentColor={accentColor}
          solo
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {members.map((member, i) => (
            <ArtistPortrait
              key={member.nameEn}
              member={member}
              accentColor={accentColor}
            />
          ))}
        </div>
      )}

      {/* Divider between groups */}
      <div className="flex justify-center mt-16 lg:mt-20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, ${accentColor}20)` }} />
          <div className="w-1 h-1 rounded-full" style={{ background: `${accentColor}30` }} />
          <div className="w-12 h-px" style={{ background: `linear-gradient(to left, transparent, ${accentColor}20)` }} />
        </div>
      </div>
    </div>
  );
};

const ArtistsSection = () => {
  const artistGroups = [
    {
      groupName: '没SENSE',
      medium: '媒介：音乐、新媒体艺术',
      accentColor: '#7E79D6',
      members: [
        {
          name: '王一乔',
          nameEn: 'Yiqiao Wang',
          bio: '加拿大籍华裔青年钢琴演奏家、作曲家、新媒体视觉艺术家；没SENSE联合创始人；《火花》室内乐重奏组成员',
          image: '/images/residency/artists/meisense/yiqiao-wang.png'
        },
        {
          name: '齐嘉妮',
          nameEn: 'Emily Qi',
          bio: '美国籍华裔青年新媒体视觉艺术家、策展人、音乐制作人、戏剧制作人；没SENSE创始人',
          image: '/images/residency/artists/meisense/emily-qi.png'
        }
      ]
    },
    {
      groupName: '杨莉澜',
      medium: '媒介：16毫米，动态影像，装置艺术',
      accentColor: '#5A8F7B',
      members: [
        {
          name: '杨莉澜',
          nameEn: 'Lilan Yang',
          bio: '一位以动态影像为核心的艺术家，创作涵盖装置、电影、摄影及行为艺术。她的实践扎根于16毫米胶片的物质性，探讨迁徙的流动性、记忆的衰退以及感知的复杂性。杨莉澜的作品曾多次在国际范围内展出并放映，她拥有罗德岛设计学院的艺术硕士学位。',
          image: '/images/residency/artists/lilan-yang/portrait.png'
        }
      ]
    },
    {
      groupName: 'Nick Vye',
      medium: '媒介：装置，雕塑，绘画',
      accentColor: '#C49A6C',
      members: [
        {
          name: '',
          nameEn: 'Nick Vye',
          bio: '围绕人类与熵的关系展开创作。熵指系统中无序、随机与能量消散的状态，象征不可预测性。尽管不确定性在科学层面上几乎是必然的，现代性却不断试图通过分类与秩序建立确定性。创作并不追求这种确定性，而是对其位移进行形式上的调解。其作品以沙与光为核心媒介，两者皆具有高度的时间性与敏感性，使作品呈现出短暂性与场域特定性。同时，通过图像化实践对这种消逝进行回应。不同媒介中的单件作品均以编号标题呈现，强调其背后的结构主义方法论。',
          image: '/images/residency/artists/nick-vye/portrait.png'
        }
      ]
    },
    {
      groupName: '端木琼芳',
      medium: '媒介：剧场、文本、声音',
      accentColor: '#B8697A',
      members: [
        {
          name: '端木琼芳',
          nameEn: 'Duanmu Qiongfang',
          bio: '编剧、导演、跨媒介创作者。她既有影视行业的一线经验，也持续在独立剧场和当代艺术领域深耕。她的创作始终围绕一个核心：用叙事探测存在的边界。她的剧场代表作：《我好吗》（上海国际艺术节邀约）、《本来我们应该跳舞》（上海油罐艺术中心）、《葵上》（璀璨星河艺术中心驻留作品）等。她始终关注那些在规则、伦理、时间缝隙里游走的个体，以及人性深处无法被简单归类的灰度地带。',
          image: '/images/residency/artists/duanmu-qiongfang/portrait.png'
        }
      ]
    },
    {
      groupName: '姚雨何',
      medium: '媒介：影像、装置、手工艺',
      accentColor: '#7A8B6E',
      members: [
        {
          name: '姚雨何',
          nameEn: 'Yuhe Yao',
          bio: '其创作围绕生产方式变迁后遗留下来的文化痕迹展开。她常使用影像、装置和手工艺等媒介，将自然物和人工废弃材料用于虚构或重建历史与记忆。她擅长用人们熟悉的事物去营造陌异的氛围，让观众在其中感受悖论和意外，以此讨论集体意识、身份认同等议题。少数民族地区及其散落于现代化社会日常之中的传统技术，是她近期的研究方向。',
          image: '/images/residency/artists/yuhe-yao/portrait.png'
        }
      ]
    },
    {
      groupName: '谢晋',
      medium: '媒介：木雕木刻、陶艺陶塑、大地艺术、地景艺术',
      accentColor: '#8B6F4E',
      members: [
        {
          name: '谢晋',
          nameEn: 'Xie Jin',
          bio: '其艺术实践以与自然环境相融作为核心，依托木、石、陶等取自自然的原生媒介，通过造型塑造与空间组合完成艺术表达。创作元素与形象主要源于云南山野、莽荒自然与少数民族神话传说，汲取民族纹样、符号、故事与传统造型进行当代转译。作品多呈现诡谲神秘、充满原始生命力的鸟兽与植物形象，结合地域神话背景，构建出神秘而苍茫的茫荒意象，传递自然原始力量与民族文化深处的精神内核，在大地与材料之间，重建人与自然、传统与当代的精神联结。',
          image: '/images/residency/artists/xie-jin/portrait.png'
        }
      ]
    },
    {
      groupName: '李羽',
      medium: '媒介：参与式艺术、工作坊实践、当代首饰艺术',
      accentColor: '#9B7BA0',
      members: [
        {
          name: '李羽',
          nameEn: 'Li Yu',
          bio: '当代首饰设计师，物体艺术疗愈师，自然艺术家。致力于将当代行为艺术和当代首饰艺术的语言融入物体和自然中进行研究和创作，并将其应用于以疗愈为目标的参与式艺术实践。艺术作品曾参与国外展览与大赛，幸会物体疗愈工作坊也持续活跃并在多地开展，该工作坊作为身体和物体互动的场域，探索物体如何作为媒介，承载情绪经验、记忆与疗愈叙事。在人和物之间构建情景感知，探索疗愈思维的新可能。',
          image: '/images/residency/artists/li-yu/portrait.png'
        }
      ]
    },
    {
      groupName: '郑明楷 & 刘格豪',
      medium: '媒介：电影、戏剧',
      accentColor: '#6B7F8E',
      members: [
        {
          name: '郑明楷',
          nameEn: 'Meng Kai Cheang',
          bio: '导演及摄影指导，常驻珠海。曾任纪录片短片《婆婆》摄影指导，该片入选NFFTY（National Film Festival for Talented Youth）官方片单，获Redstone电影节最佳摄影等电影节奖项，并入围坎城世界电影节最佳纪录片短片提名。亦曾参与央视纪录频道植物纪录片项目的拍摄。目前持续进行独立短片创作，多部作品正在国内外电影节投递中。',
          image: '/images/residency/artists/cheang-liu/mengkai-cheang.png'
        },
        {
          name: '刘格豪',
          nameEn: 'Gehao (Denny) Liu',
          bio: '来自云南的彝族导演、水下摄影师。常驻地昆明。作品以柔和的人文视角和温度，聚焦在地文化和人生议题。',
          image: '/images/residency/artists/cheang-liu/gehao-liu.png'
        }
      ]
    },
    {
      groupName: '刘芝伶',
      medium: '媒介：二维动画、多媒介',
      accentColor: '#D4855E',
      members: [
        {
          name: '刘芝伶',
          nameEn: 'Boby Liu',
          bio: '多媒体艺术家，独立动画师，毕业于纽约大学阿布扎比分校视觉艺术专业。出生于台湾，Boby的艺术创作通常围绕故事叙事展开，并从东方神话、民间传说和虚构作品中获取灵感。Boby涉猎多种艺术形式，包括二维动画、版画、数字插画和纹身。每种媒介都为其提供了独特的视角，用以探索叙事与创造力的不同面向。',
          image: '/images/residency/artists/boby-liu/portrait.png'
        }
      ]
    },
    {
      groupName: '李远浩',
      medium: '媒介：摄影',
      accentColor: '#7E8B6A',
      members: [
        {
          name: '李远浩',
          nameEn: 'Yuanhao Li',
          bio: '陕西西安人。拍摄日常生活的自然状态，纪录光线、物件、人像、环境和特定的时刻。',
          image: '/images/residency/artists/yuanhao-li/portrait.png'
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#FAFAF8' }}>
      {/* Subtle texture overlay */}
      <div className="paper-texture absolute inset-0" />

      {/* Decorative background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(126, 121, 214, 0.04) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
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
                驻留艺术家
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 44px)',
                  fontWeight: 200
                }}
              >
                2026 Resident Artists
              </p>
            </div>
          </div>
        </div>

        {/* Introductory text */}
        <div className="mb-20 lg:mb-28">
          <p
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(15px, 1.4vw, 20px)',
              lineHeight: 2,
              fontWeight: 500,
              color: '#555',
              maxWidth: '720px'
            }}
          >
            经过公开征集与评审，以下艺术家/组合入选「烟火邛州」国际非遗艺术驻留项目。他们将于2026年春季前往四川邛崃，展开为期数周的在地创作。
          </p>
        </div>

        {/* Artist Groups */}
        {artistGroups.map((group, i) => (
          <ArtistGroupCard
            key={group.groupName}
            {...group}
          />
        ))}

        {/* Bottom decoration */}
        <div className="flex justify-center mt-8 lg:mt-16">
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#7E79D6]/30" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#392C20]/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
