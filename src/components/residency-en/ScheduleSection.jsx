import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeInSection from '../shared/FadeInSection';

const Highlight = ({ children, type = 'location' }) => {
  const styles = {
    location: 'text-[#476724]',
    time: 'text-[#959726] font-medium',
    craft: 'text-[#392C20] font-medium'
  };
  return <span className={styles[type]}>{children}</span>;
};

const ScheduleSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-[#FAFAF8] overflow-hidden">
      <div className="paper-texture absolute inset-0" />

      <div className="absolute left-[5%] top-[15%] w-40 h-40 bg-[#959726]/10 rounded-full blur-[100px]" />
      <div className="absolute right-[10%] bottom-[20%] w-48 h-48 bg-[#959726]/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        <FadeInSection className="mb-20 lg:mb-28">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/images/residency/schedule/logo-alt.png"
              alt="Rotohaus"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80"
            />
            <div className="h-12 w-px bg-[#392C20]/15" />
            <div>
              <h2
                className="text-[#392C20]"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  fontWeight: 200,
                  lineHeight: 1.1
                }}
              >
                Residency Flow
              </h2>
            </div>
          </div>
          <p
            className="text-[#392C20]/40 mb-8"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(14px, 1.5vw, 22px)',
              fontWeight: 300,
              letterSpacing: '0.1em'
            }}
          >
            Creation Phase & Timeline
          </p>
          <p
            className="text-[#6E6E6E] max-w-xl"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: 1.7,
              fontWeight: 300
            }}
          >
            The residency spans approximately <Highlight type="time">three to five weeks</Highlight>, divided into three phases.
          </p>
        </FadeInSection>

        <FadeInSection className="mb-24 lg:mb-32">
          <div className="flex items-baseline gap-4 mb-6">
            <span
              className="text-[#959726]/30"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: 200,
                lineHeight: 1
              }}
            >
              01
            </span>
            <div>
              <span
                className="text-[#959726] uppercase tracking-widest"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(11px, 1vw, 14px)',
                  fontWeight: 500
                }}
              >
                Week 01
              </span>
              <h3
                className="text-[#392C20] mt-1"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 400
                }}
              >
                Opening + Joint Research
              </h3>
            </div>
          </div>

          <div
            className="text-[#4A4A4A] max-w-3xl mb-10"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 2,
              fontWeight: 300
            }}
          >
            <p className="mb-5">
              During the first week, artists will conduct on-site research, entering core creative spaces including <Highlight type="location">Jiaguan Ancient Town</Highlight>, <Highlight type="location">Qiong Kiln Archaeological Park</Highlight>, and <Highlight type="location">The Indigo Courtyard</Highlight> to understand their historical backgrounds, material systems, and creative conditions.
            </p>
            <p>
              Artists will also explore the cultural landscape of Qionglai and engage in in-depth dialogue with local intangible cultural heritage practitioners—
            </p>
          </div>

          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible lg:gap-6">
            {[
              { src: '/images/residency/schedule/craft-bamboo.png', label: 'Bamboo Weaving' },
              { src: '/images/residency/schedule/craft-wine.png', label: 'Wine Brewing' },
              { src: '/images/residency/schedule/craft-bamboo-song.png', label: 'Work Songs' },
              { src: '/images/residency/schedule/craft-qiang.png', label: 'Qiang Embroidery' }
            ].map((craft, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-36 sm:w-auto"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-2">
                  <img src={craft.src} alt={craft.label} className="w-full h-full object-cover" />
                </div>
                <p
                  className="text-[#808080] text-center"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: '14px',
                    fontWeight: 300
                  }}
                >
                  {craft.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="mb-24 lg:mb-32" delay={0.1}>
          <div className="flex items-baseline gap-4 mb-6">
            <span
              className="text-[#959726]/30"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: 200,
                lineHeight: 1
              }}
            >
              02
            </span>
            <div>
              <span
                className="text-[#959726] uppercase tracking-widest"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(11px, 1vw, 14px)',
                  fontWeight: 500
                }}
              >
                Week 02 — 04
              </span>
              <h3
                className="text-[#392C20] mt-1"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 400
                }}
              >
                Residency Creation
              </h3>
            </div>
          </div>

          <p
            className="text-[#4A4A4A] max-w-3xl mb-10"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 2,
              fontWeight: 300
            }}
          >
            Artists will select one or more sites for in-depth creation based on their medium and research direction. Each artist will receive <Highlight type="craft">dedicated workspace</Highlight>, <Highlight type="craft">material support</Highlight>, and <Highlight type="craft">local collaboration resources</Highlight>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              { src: '/images/residency/schedule/location-jiaguan.png', label: 'Jiaguan Ancient Town', sub: 'Primary Site A' },
              { src: '/images/residency/schedule/location-qiongyao.png', label: 'Qiong Kiln Park', sub: 'Primary Site B' },
              { src: '/images/residency/schedule/accommodation.png', label: 'Accommodation Reference', sub: '' }
            ].map((loc, i) => (
              <motion.div key={i} whileHover={{ y: -4 }}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-2">
                  <img src={loc.src} alt={loc.label} className="w-full h-full object-cover" />
                </div>
                <p
                  className="text-[#808080]"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: 'clamp(12px, 1.2vw, 14px)',
                    fontWeight: 300
                  }}
                >
                  {loc.sub && <span className="text-[#959726]">{loc.sub}</span>}
                  {loc.sub && ' · '}
                  {loc.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="flex items-baseline gap-4 mb-6">
            <span
              className="text-[#959726]/30"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: 200,
                lineHeight: 1
              }}
            >
              03
            </span>
            <div>
              <span
                className="text-[#959726] uppercase tracking-widest"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(11px, 1vw, 14px)',
                  fontWeight: 500
                }}
              >
                May 1st
              </span>
              <h3
                className="text-[#392C20] mt-1"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 400
                }}
              >
                Jiaguan Art Festival: Integration & Presentation
              </h3>
            </div>
          </div>

          <div
            className="max-w-3xl mb-10"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 2,
              fontWeight: 300
            }}
          >
            <p className="text-[#4A4A4A] mb-4">
              The festival centers on the <Highlight type="location">Jiaguan main stage</Highlight>, connecting alley squares, old bridge riversides, and ancient granaries in a distributed presentation.
            </p>
            <p className="text-[#808080]">
              Evening programs include interactive light installations and water screen music performances. Some historic buildings will be transformed into temporary exhibition spaces, encouraging artists to create participatory works together with residents and visitors.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="/images/residency/schedule/iron-flower.png"
              alt="Iron Flower Performance"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p
              className="absolute bottom-4 left-4 text-white/80"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(13px, 1.2vw, 16px)',
                fontWeight: 300
              }}
            >
              Jiaguan Ancient Town · May Day Iron Flower Performance
            </p>
          </motion.div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mt-16 lg:mt-24">
          <p
            className="text-[#BEBEBE] mb-8"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              fontWeight: 300
            }}
          >
            * The schedule above can be flexibly adjusted based on artists' creative needs.
          </p>
          <Link
            to="/residency/en/artists"
            className="inline-flex items-center gap-2 text-[#476724] hover:text-[#476724]/80 transition-colors"
          >
            <span
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 400
              }}
            >
              Meet the Artists
            </span>
            <span>→</span>
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ScheduleSection;
