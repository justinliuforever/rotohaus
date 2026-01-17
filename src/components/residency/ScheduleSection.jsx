import { motion } from 'framer-motion';
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
                  fontFamily: "'FZFengRuSong', serif",
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  fontWeight: 400,
                  lineHeight: 1.1
                }}
              >
                驻地流程
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
            Residency Flow & Creation Phase
          </p>
          <p
            className="text-[#6E6E6E] max-w-xl"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: 1.7
            }}
          >
            本次艺术驻地为期约<Highlight type="time">三至五周</Highlight>，整体流程分为三个阶段
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
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 500
                }}
              >
                开幕式 + 联合调研
              </h3>
            </div>
          </div>

          <div
            className="text-[#4A4A4A] max-w-3xl mb-10"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 2
            }}
          >
            <p className="mb-5">
              驻地首周，艺术家们将集中进行在地调研，进入<Highlight type="location">夹关古镇</Highlight>、<Highlight type="location">邛窑国家考古遗址公园</Highlight>、<Highlight type="location">临济蓝靛坊</Highlight>等核心创作场域，了解其历史背景、材料系统与创作条件。
            </p>
            <p>
              同期进行邛崃境内人文景观采风，并与本地非遗传承人深入对话——
            </p>
          </div>

          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible lg:gap-6">
            {[
              { src: '/images/residency/schedule/craft-bamboo.png', label: '瓷胎竹编' },
              { src: '/images/residency/schedule/craft-wine.png', label: '酿酒技艺' },
              { src: '/images/residency/schedule/craft-bamboo-song.png', label: '竹麻号子' },
              { src: '/images/residency/schedule/craft-qiang.png', label: '羌绣' }
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
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: '14px'
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
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 500
                }}
              >
                驻地创作
              </h3>
            </div>
          </div>

          <p
            className="text-[#4A4A4A] max-w-3xl mb-10"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 2
            }}
          >
            艺术家将根据自身创作媒介与研究方向，选择一处或多处场域深入创作。每位艺术家将获得<Highlight type="craft">专属工作空间</Highlight>、<Highlight type="craft">材料支持</Highlight>与<Highlight type="craft">在地协作资源</Highlight>。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              { src: '/images/residency/schedule/location-jiaguan.png', label: '夹关古镇', sub: '长期驻扎地 A' },
              { src: '/images/residency/schedule/location-qiongyao.png', label: '邛窑遗址公园', sub: '长期驻扎地 B' },
              { src: '/images/residency/schedule/accommodation.png', label: '住宿条件参考', sub: '' }
            ].map((loc, i) => (
              <motion.div key={i} whileHover={{ y: -4 }}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-2">
                  <img src={loc.src} alt={loc.label} className="w-full h-full object-cover" />
                </div>
                <p
                  className="text-[#808080]"
                  style={{
                    fontFamily: "'Huiwen-Fangsong', serif",
                    fontSize: 'clamp(12px, 1.2vw, 14px)'
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
                  fontFamily: "'Huiwen-Fangsong', serif",
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 500
                }}
              >
                夹关艺术节：整合与呈现
              </h3>
            </div>
          </div>

          <div
            className="max-w-3xl mb-10"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 2
            }}
          >
            <p className="text-[#4A4A4A] mb-4">
              艺术节以<Highlight type="location">夹关镇主舞台</Highlight>为核心，联动巷口广场、老桥河道、古道谷仓等空间，分布式呈现。
            </p>
            <p className="text-[#808080]">
              夜间包含光影互动与水幕音乐表演；部分老建筑转化为临时展陈空间，鼓励艺术家与居民、游客共同完成参与式作品。
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="/images/residency/schedule/iron-flower.png"
              alt="打铁花表演"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p
              className="absolute bottom-4 left-4 text-white/80"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(13px, 1.2vw, 16px)'
              }}
            >
              夹关古镇 · 五一打铁花表演
            </p>
          </motion.div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mt-16 lg:mt-24">
          <p
            className="text-[#BEBEBE] mb-8"
            style={{
              fontFamily: "'Huiwen-Fangsong', serif",
              fontSize: 'clamp(13px, 1.2vw, 16px)'
            }}
          >
            * 以上流程可根据艺术家创作需求灵活调整
          </p>
          <a
            href="#process"
            className="inline-flex items-center gap-2 text-[#476724] hover:text-[#476724]/80 transition-colors"
          >
            <span
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(14px, 1.4vw, 18px)'
              }}
            >
              查看申请详情
            </span>
            <span>→</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ScheduleSection;
