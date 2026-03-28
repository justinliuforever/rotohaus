import { motion } from 'framer-motion';

const ArtistPortrait = ({ member, accentColor, solo = false }) => (
  <div className={solo ? 'max-w-lg mx-auto' : ''}
  >
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
            alt={member.nameEn}
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
            <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 200, color: `${accentColor}60` }}>
              {(member.nameEn || member.name).charAt(0)}
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
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 300,
              color: '#392C20'
            }}
          >
            {member.nameEn}
          </span>
          {member.name && (
            <span
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(16px, 1.6vw, 22px)',
                fontWeight: 500,
                color: 'rgba(57, 44, 32, 0.65)'
              }}
            >
              {member.name}
            </span>
          )}
        </div>
      </div>
    )}

    {/* Bio */}
    <p
      className="text-center"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontSize: 'clamp(13px, 1.2vw, 16px)',
        lineHeight: 1.9,
        fontWeight: 300,
        color: '#666',
        maxWidth: solo ? '580px' : '400px',
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
    <div className="mb-16 lg:mb-22">
      {/* Group / Artist name */}
      <div className={`mb-8 lg:mb-10 ${isSolo ? 'text-center' : ''}`}>
        <h3
          style={{
            fontFamily: isSolo ? "'Instrument Serif', serif" : "'FZFengRuSong', serif",
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: accentColor,
            fontStyle: isSolo ? 'italic' : 'normal'
          }}
        >
          {groupName}
          {isSolo && members[0].name && (
            <span
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                fontWeight: 500,
                marginLeft: '0.4em',
                opacity: 0.7,
                fontStyle: 'normal'
              }}
            >
              {members[0].name}
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
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              color: accentColor,
              fontWeight: 400,
              letterSpacing: '0.03em'
            }}
          >
            {medium}
          </span>
          {isSolo && (
            <div
              className="h-px flex-grow max-w-[80px]"
              style={{ background: `linear-gradient(to left, ${accentColor}40, transparent)` }}
            />
          )}
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
      <div className="flex justify-center mt-12 lg:mt-16">
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
      medium: 'Medium: Music, New Media Art',
      accentColor: '#7E79D6',
      members: [
        {
          name: '王一乔',
          nameEn: 'Yiqiao Wang',
          bio: 'Chinese-Canadian young pianist, composer, and new media visual artist; Co-founder of 没SENSE; Member of the "HUO HUA" Chamber Ensemble',
          image: '/images/residency/artists/meisense/yiqiao-wang.png'
        },
        {
          name: '齐嘉妮',
          nameEn: 'Emily Qi',
          bio: 'Chinese-American young new media visual artist, curator, music producer, and theater producer; Founder of 没SENSE',
          image: '/images/residency/artists/meisense/emily-qi.png'
        }
      ]
    },
    {
      groupName: 'Lilan Yang',
      medium: 'Medium: 16mm Film, Moving Images, Installation',
      accentColor: '#5A8F7B',
      members: [
        {
          name: '杨莉澜',
          nameEn: 'Lilan Yang',
          bio: 'Lilan Yang (b. Chongqing, China) is an artist working with moving images across installation, film, photography, and performance. Rooted in the materiality of 16mm, their practice explores the flux of migration, the decay of memory, and the intricacies of perception. Yang has exhibited and screened work internationally and holds an MFA from Rhode Island School of Design.',
          image: '/images/residency/artists/lilan-yang/portrait.png'
        }
      ]
    },
    {
      groupName: 'Nick Vye',
      medium: 'Medium: Installation, Sculpture, Painting',
      accentColor: '#C49A6C',
      members: [
        {
          name: '',
          nameEn: 'Nick Vye',
          bio: 'His work examines humanity\'s relationship with entropy, understood as disorder and uncertainty within systems. In contrast to modernity\'s drive for classification and control, the work formally engages with instability. Sand and light function as the primary constants, both temporal and sensitive materials that render the work impermanent and site-specific. A pictorial dimension counters this ephemerality, with individual works assigned serial-numbered titles to emphasize the project\'s underlying structuralist framework.',
          image: '/images/residency/artists/nick-vye/portrait.png'
        }
      ]
    },
    {
      groupName: 'Duanmu Qiongfang',
      medium: 'Medium: Theatre, Text, Sound',
      accentColor: '#B8697A',
      members: [
        {
          name: '端木琼芳',
          nameEn: 'Duanmu Qiongfang',
          bio: 'Playwright, Director, Interdisciplinary Artist. With extensive experience in both the film & television industry and independent theatre & contemporary art, her work is consistently anchored in one core pursuit: using narrative to probe the boundaries of existence. She is consistently drawn to individuals navigating the cracks between rules, ethics, and time, as well as the in-between, unclassifiable depths of human nature.',
          image: '/images/residency/artists/duanmu-qiongfang/portrait.png'
        }
      ]
    },
    {
      groupName: 'Yuhe Yao',
      medium: 'Medium: Video, Installation, Craft',
      accentColor: '#7A8B6E',
      members: [
        {
          name: '姚雨何',
          nameEn: 'Yuhe Yao',
          bio: 'Her practice explores the cultural traces that remain after shifts in modes of production. Her works incorporate natural and discarded artificial materials to fictionalize or reconstruct history and memory. She often uses familiar objects to create unfamiliar atmospheres, allowing audiences to experience paradox and accident while reflecting on collective consciousness and identity. Her recent research focuses on traditional techniques in ethnic minority regions and their presence within everyday life in modernized societies.',
          image: '/images/residency/artists/yuhe-yao/portrait.png'
        }
      ]
    },
    {
      groupName: 'Xie Jin',
      medium: 'Medium: Woodcarving & Wood Engraving, Ceramics, Land Art, Earth Art',
      accentColor: '#8B6F4E',
      members: [
        {
          name: '谢晋',
          nameEn: 'Xie Jin',
          bio: 'His artistic practice centers on integration with the natural environment, working with raw materials such as wood, stone, and clay to construct sculptural forms and spatial compositions. His visual language draws from the wilderness of Yunnan, primordial nature, and ethnic minority mythologies. His works depict mysterious, primal images of birds, beasts, and plants, forming the mythic world of Mang Huang — a space that evokes the raw power of nature and the spiritual essence of ethnic culture, reconnecting tradition and the contemporary world.',
          image: '/images/residency/artists/xie-jin/portrait.png'
        }
      ]
    },
    {
      groupName: 'Li Yu',
      medium: 'Medium: Participatory Art, Workshop-based Practice, Contemporary Jewelry Art',
      accentColor: '#9B7BA0',
      members: [
        {
          name: '李羽',
          nameEn: 'Li Yu',
          bio: 'A contemporary jewelry designer, object-based art healing practitioner, and nature-based artist. Her practice focuses on integrating the languages of contemporary performance art and contemporary jewelry into objects and natural environments as a mode of research and creation, and applying these approaches within participatory art practices oriented toward healing including the Nice to Meet You Object Healing Workshop. Through constructing situational perception between human and object, her practice seeks to expand new possibilities for healing-oriented modes of thinking.',
          image: '/images/residency/artists/li-yu/portrait.png'
        }
      ]
    },
    {
      groupName: 'Cheang & Liu',
      medium: 'Medium: Film, Theatre',
      accentColor: '#6B7F8E',
      members: [
        {
          name: '郑明楷',
          nameEn: 'Meng Kai Cheang',
          bio: 'A director and cinematographer. His documentary short Popo was an Official Selection at NFFTY, won Best Cinematography at the Redstone Film Festival, and was nominated for Best Documentary Short at the Cannes World Film Festival. He worked as cinematographer on a CCTV-9 documentary production. His recent independent works are currently in international festival circulation.',
          image: '/images/residency/artists/cheang-liu/mengkai-cheang.png'
        },
        {
          name: '刘格豪',
          nameEn: 'Gehao (Denny) Liu',
          bio: 'A Yi ethnic director and underwater cinematographer based in Kunming, Yunnan. With a gentle and warm humanistic vision, his works focus on local culture and the issues of life.',
          image: '/images/residency/artists/cheang-liu/gehao-liu.png'
        }
      ]
    },
    {
      groupName: 'Boby Liu',
      medium: 'Medium: 2D Animation, Multimedia',
      accentColor: '#D4855E',
      members: [
        {
          name: '刘芝伶',
          nameEn: 'Boby Liu',
          bio: 'A multimedia artist and independent animator who graduated from NYU Abu Dhabi with a degree in Visual Arts. Born in Taiwan, their artistic practice revolves around storytelling, often drawing inspiration from Eastern folklore and fiction. Boby practices a variety of art forms, including 2D animation, printmaking, digital illustration, and tattoo. Each medium provides a unique lens through which they explore different facets of storytelling and creativity.',
          image: '/images/residency/artists/boby-liu/portrait.png'
        }
      ]
    },
    {
      groupName: 'Yuanhao Li',
      medium: 'Medium: Photography',
      accentColor: '#7E8B6A',
      members: [
        {
          name: '李远浩',
          nameEn: 'Yuanhao Li',
          bio: 'Born in Xi\'an, China. He photographs everyday life in its natural state, documenting light, objects, portraits and surroundings to save specific moments.',
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
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(36px, 4.5vw, 72px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  fontStyle: 'italic'
                }}
              >
                Resident Artists
              </h2>
              <p
                className="text-[#392C20]/60 mt-2"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(16px, 1.8vw, 28px)',
                  fontWeight: 200
                }}
              >
                2026 Cohort
              </p>
            </div>
          </div>
        </div>

        {/* Introductory text */}
        <div className="mb-20 lg:mb-28">
          <p
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(15px, 1.4vw, 20px)',
              lineHeight: 1.9,
              fontWeight: 300,
              color: '#555',
              maxWidth: '720px'
            }}
          >
            Following an open call and review process, the following artists and collectives have been selected for the "Embers of Qiong" International Artist Residency. They will travel to Qionglai, Sichuan in spring 2026 for weeks of site-specific creation.
          </p>
        </div>

        {/* Artist Groups */}
        {artistGroups.map((group, i) => (
          <ArtistGroupCard
            key={group.groupName}
            {...group}
          />
        ))}

        {/* ═══ Flying Artists Section ═══ */}
        <div className="mt-16 lg:mt-28 mb-12 lg:mb-16">
          {/* Category divider line */}
          <div className="flex items-center gap-6 mb-12 lg:mb-16">
            <div className="h-px flex-grow" style={{ background: 'linear-gradient(to right, transparent, #7E79D640, transparent)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#7E79D640' }} />
            <div className="h-px flex-grow" style={{ background: 'linear-gradient(to left, transparent, #7E79D640, transparent)' }} />
          </div>

          {/* Flying Artists Header */}
          <div className="mb-12 lg:mb-16">
            <h2
              className="text-[#392C20]"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(32px, 4vw, 60px)',
                fontWeight: 400,
                lineHeight: 1.15,
                fontStyle: 'italic'
              }}
            >
              Flying Artists
            </h2>
            <p
              className="text-[#7E79D6]/70 mt-2"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(16px, 1.8vw, 28px)',
                fontWeight: 200
              }}
            >
              2026 Cohort
            </p>
          </div>

          {/* Flying Artists Manifesto */}
          <div className="mb-14 lg:mb-20">
            <p
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(15px, 1.4vw, 20px)',
                lineHeight: 1.9,
                fontWeight: 300,
                color: '#555',
                maxWidth: '720px'
              }}
            >
              From geographical space to artistic territory, from the annual rings of ancient trees to human civilization — through cross-media experimental creation, each work becomes a bridge connecting nature and humanity.
            </p>
          </div>

          {/* Flying Artist Cards */}
          {[
            {
              groupName: 'Cevian Chen',
              medium: 'Medium: Cross-media Experimental Art',
              accentColor: '#7E79D6',
              members: [
                {
                  name: '陈晓云',
                  nameEn: 'Cevian Chen',
                  bio: 'MFA candidate at the Central Academy of Fine Arts, certified forest therapy guide, founder of Qi Yue Sen Studio, and interdisciplinary art practitioner and researcher. Combining an undergraduate background in geographical sciences with CAFA\'s research on art materialization, her practice focuses on material processes. Using GIS, feng shui, and topology, she activates "zombie media" to construct new paradigms of Earth cognition. Over the past five years, she has devoted herself to the study of China\'s millennium-old trees, employing problem-oriented ecological intervention through immersive installations that reveal the symbiosis of ecological wisdom and cultural memory.',
                  image: '/images/residency/artists/cevian-chen/portrait.png'
                }
              ]
            },
            {
              groupName: 'Luca He',
              medium: 'Medium: Easel Painting',
              accentColor: '#6B8EC2',
              members: [
                {
                  name: '何昌照',
                  nameEn: 'Luca He',
                  bio: 'Born in Tieling, Liaoning. With a lifelong passion for painting and a deep interest in classical oil painting since his early art studies, he moved to Italy in 2012 to study at the Accademia di Belle Arti di Carrara, earning his MFA in Oil Painting in 2019 before returning to China. Now based in Chengdu, he dedicates himself to artistic creation. In 2020, during the pandemic, he began exploring gouache painting to expand his artistic language. His solo exhibitions include "Boundary" (2022, Black Sheep Wall Art Space, Chengdu) and "Memory Ark" (2024, Xiangzili Café, Guiyang), consistently responding through creation to the connection between self and world.',
                  image: '/images/residency/artists/luca-he/portrait.png'
                }
              ]
            }
          ].map((group) => (
            <ArtistGroupCard
              key={group.groupName}
              {...group}
            />
          ))}
        </div>

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
