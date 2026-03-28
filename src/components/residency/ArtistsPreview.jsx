import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeInSection from '../shared/FadeInSection';

const residentArtists = [
  { name: '没SENSE', image: '/images/residency/artists/meisense/yiqiao-wang.png', accentColor: '#7E79D6' },
  { name: '杨莉澜', image: '/images/residency/artists/lilan-yang/portrait.png', accentColor: '#5A8F7B' },
  { name: 'Nick Vye', image: '/images/residency/artists/nick-vye/portrait.png', accentColor: '#C49A6C' },
  { name: '端木琼芳', image: '/images/residency/artists/duanmu-qiongfang/portrait.png', accentColor: '#B8697A' },
  { name: '姚雨何', image: '/images/residency/artists/yuhe-yao/portrait.png', accentColor: '#7A8B6E' },
  { name: '谢晋', image: '/images/residency/artists/xie-jin/portrait.png', accentColor: '#8B6F4E' },
  { name: '李羽', image: '/images/residency/artists/li-yu/portrait.png', accentColor: '#9B7BA0' },
  { name: '郑明楷 & 刘格豪', image: '/images/residency/artists/cheang-liu/mengkai-cheang.png', accentColor: '#6B7F8E' },
  { name: '刘芝伶', image: '/images/residency/artists/boby-liu/portrait.png', accentColor: '#D4855E' },
  { name: '李远浩', image: '/images/residency/artists/yuanhao-li/portrait.png', accentColor: '#7E8B6A' },
];

const flyingArtists = [
  { name: '陈晓云', image: '/images/residency/artists/cevian-chen/portrait.png', accentColor: '#7E79D6' },
  { name: '何昌照', image: '/images/residency/artists/luca-he/portrait.png', accentColor: '#6B8EC2' },
];

const ArtistsPreview = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" style={{ background: '#FAFAF8' }}>
      <div className="paper-texture absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <FadeInSection className="text-center mb-12 lg:mb-16">
          <h2
            className="text-[#392C20]"
            style={{
              fontFamily: "'FZFengRuSong', serif",
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.15
            }}
          >
            驻留艺术家
          </h2>
          <p
            className="text-[#392C20]/50 mt-2"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 'clamp(16px, 2vw, 24px)',
              fontWeight: 200
            }}
          >
            2026 Resident Artists
          </p>
        </FadeInSection>

        {/* Resident artist portraits grid */}
        <FadeInSection delay={0.1} className="mb-10 lg:mb-12">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            {residentArtists.map((artist) => (
              <motion.div
                key={artist.name}
                className="flex flex-col items-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative mb-3">
                  <div
                    className="absolute -inset-1 rounded-full opacity-20 blur-lg"
                    style={{ background: artist.accentColor }}
                  />
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ boxShadow: `0 4px 16px ${artist.accentColor}20` }}
                  />
                </div>
                <span
                  className="text-xs sm:text-sm text-[#392C20]/70 text-center max-w-[80px] lg:max-w-[96px]"
                  style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
                >
                  {artist.name}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        {/* Flying artists divider + grid */}
        <FadeInSection delay={0.15} className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, #7E79D630)' }} />
            <span
              className="text-xs tracking-[0.15em]"
              style={{ fontFamily: "'FZFengRuSong', serif", color: '#7E79D6' }}
            >
              飞行艺术家
            </span>
            <div className="w-12 h-px" style={{ background: 'linear-gradient(to left, transparent, #7E79D630)' }} />
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            {flyingArtists.map((artist) => (
              <motion.div
                key={artist.name}
                className="flex flex-col items-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative mb-3">
                  <div
                    className="absolute -inset-1 rounded-full opacity-20 blur-lg"
                    style={{ background: artist.accentColor }}
                  />
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ boxShadow: `0 4px 16px ${artist.accentColor}20` }}
                  />
                </div>
                <span
                  className="text-xs sm:text-sm text-[#392C20]/70 text-center max-w-[80px] lg:max-w-[96px]"
                  style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
                >
                  {artist.name}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        {/* CTA button */}
        <FadeInSection delay={0.2} className="text-center">
          <Link to="/residency/artists" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#476724] text-white rounded-full shadow-lg shadow-[#476724]/20 hover:shadow-xl hover:shadow-[#476724]/30 transition-shadow duration-300"
              style={{
                fontFamily: "'Huiwen-Fangsong', serif",
                fontSize: 'clamp(15px, 1.5vw, 18px)'
              }}
            >
              <span>查看全部艺术家</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.div>
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ArtistsPreview;
