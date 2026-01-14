const ResidencyCover = () => {
  // 基准尺寸: 792 x 1224
  // 所有位置转换为百分比以实现响应式
  const BASE_W = 792;
  const BASE_H = 1224;

  const px = (val) => `${(val / BASE_W) * 100}%`;
  const py = (val) => `${(val / BASE_H) * 100}%`;

  return (
    <div
      className="relative w-full max-w-[792px] mx-auto overflow-hidden"
      style={{
        aspectRatio: '792 / 1224',
        backgroundColor: '#476724'
      }}
    >
      {/* Background Texture - covers entire section */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/backgrounds/cover-bg.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'plus-darker',
          opacity: 0.6
        }}
      />

      {/* 右上角标题组 */}
      {/* 丙午年·春 */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(576),
          top: py(60),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(16px, 4.8vw, 38px)',
          fontWeight: 400,
          letterSpacing: '0.05em',
          lineHeight: 1.16
        }}
      >
        丙午年·春
      </span>

      {/* "烟火邛州" */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(576),
          top: py(116),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(16px, 4.8vw, 38px)',
          fontWeight: 400,
          lineHeight: 1.16
        }}
      >
        "烟火邛州"
      </span>

      {/* 国际非遗艺术驻地 */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(469),
          top: py(172),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(16px, 4.8vw, 38px)',
          fontWeight: 400,
          lineHeight: 1.16
        }}
      >
        国际非遗艺术驻地
      </span>

      {/* 信息栏 - 中国·邛崃 | 驻地时间 | 招募截止 */}
      {/* 中国·邛崃 */}
      <span
        className="absolute text-white"
        style={{
          left: px(31),
          top: py(277),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(10px, 3vw, 24px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        中国·邛崃
      </span>

      {/* 驻地时间: */}
      <span
        className="absolute text-white/80"
        style={{
          left: px(242),
          top: py(276),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(10px, 3vw, 24px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        驻地时间:
      </span>

      {/* 2026/03/13 - 04/15 */}
      <span
        className="absolute text-white/80"
        style={{
          left: px(339),
          top: py(274),
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(10px, 3vw, 24px)',
          fontWeight: 400,
          letterSpacing: '0.05em',
          lineHeight: 1.29
        }}
      >
        2026/03/13 - 04/15
      </span>

      {/* 招募截止： */}
      <span
        className="absolute text-white/80"
        style={{
          left: px(566),
          top: py(277),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(10px, 3vw, 24px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        招募截止：
      </span>

      {/* 2026/02/14 */}
      <span
        className="absolute text-white/80"
        style={{
          left: px(666),
          top: py(274),
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(10px, 3vw, 24px)',
          fontWeight: 400,
          letterSpacing: '0.05em',
          lineHeight: 1.29
        }}
      >
        2026/02/14
      </span>

      {/* 主视觉图片 */}
      <div
        className="absolute"
        style={{
          width: px(756),
          height: py(566),
          left: '50%',
          top: `calc(50% - ${py(566 / 2 + 16)})`,
          transform: 'translateX(-50%)'
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(96, 62, 0, 0.2), rgba(96, 62, 0, 0.2)), url('/images/cover-main.png')`,
            transform: 'rotate(180deg)'
          }}
        />
      </div>

      {/* 四角大字 - 烟火邛州 */}
      {/* 烟 */}
      <span
        className="absolute text-[rgba(255,244,212,0.64)]"
        style={{
          left: px(18),
          top: py(313),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(50px, 18.9vw, 150px)',
          fontWeight: 700,
          lineHeight: 1.15,
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        烟
      </span>

      {/* 火 */}
      <span
        className="absolute text-[rgba(255,244,212,0.64)]"
        style={{
          left: px(623),
          top: py(314),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(50px, 18.9vw, 150px)',
          fontWeight: 700,
          lineHeight: 1.15,
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        火
      </span>

      {/* 邛 */}
      <span
        className="absolute text-[rgba(255,244,212,0.64)]"
        style={{
          left: px(18),
          top: py(722),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(50px, 18.9vw, 150px)',
          fontWeight: 700,
          lineHeight: 1.15,
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        邛
      </span>

      {/* 州 */}
      <span
        className="absolute text-[rgba(255,244,212,0.64)]"
        style={{
          left: px(624),
          top: py(722),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(50px, 18.9vw, 150px)',
          fontWeight: 700,
          lineHeight: 1.15,
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        州
      </span>

      {/* 左下英文 */}
      {/* Spring 2026 */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(18),
          top: py(932),
          fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 'clamp(18px, 5.6vw, 44px)',
          fontWeight: 200,
          lineHeight: 1.2
        }}
      >
        Spring 2026
      </span>

      {/* Embers OF QIONG - OF 用小字体 */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(18),
          top: py(990),
          fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          fontWeight: 200,
          lineHeight: 1.2
        }}
      >
        <span style={{ fontSize: 'clamp(18px, 5.6vw, 44px)' }}>Embers </span>
        <span style={{ fontSize: 'clamp(10px, 3vw, 24px)' }}>OF </span>
        <span style={{ fontSize: 'clamp(18px, 5.6vw, 44px)' }}>QIONG</span>
      </span>

      {/* Open Call */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(18),
          top: py(1043),
          fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 'clamp(18px, 5.6vw, 44px)',
          fontWeight: 200,
          lineHeight: 1.2
        }}
      >
        Open Call
      </span>

      {/* Art Residency - 右移避免与 QIONG 重叠 */}
      <span
        className="absolute text-[#E2D19E]"
        style={{
          left: px(360),
          top: py(1009),
          fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 'clamp(10px, 3vw, 24px)',
          fontWeight: 200,
          lineHeight: 1.2
        }}
      >
        Art Residency
      </span>

      {/* 底部主办信息 */}
      {/* 主办_野所 ROTOHAUS */}
      <span
        className="absolute text-white"
        style={{
          left: px(21),
          top: py(1138),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(6px, 1.5vw, 12px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        主办_野所 ROTOHAUS
      </span>

      {/* 支持_邛崃市文化体育和旅游局 */}
      <span
        className="absolute text-white"
        style={{
          left: px(22),
          top: py(1160),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(6px, 1.5vw, 12px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        支持_邛崃市文化体育和旅游局
      </span>

      {/* 邛崃市夹关镇人民政府；邛崃市临济镇人民政府 */}
      <span
        className="absolute text-white"
        style={{
          left: px(75),
          top: py(1177),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(6px, 1.5vw, 12px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        邛崃市夹关镇人民政府；邛崃市临济镇人民政府
      </span>

      {/* 邛窑国家考古遗址公园 */}
      <span
        className="absolute text-white"
        style={{
          left: px(75),
          top: py(1194),
          fontFamily: "'FZFengRuSong', 'Noto Serif SC', serif",
          fontSize: 'clamp(6px, 1.5vw, 12px)',
          fontWeight: 400,
          lineHeight: 1.17
        }}
      >
        邛窑国家考古遗址公园
      </span>
    </div>
  );
};

export default ResidencyCover;
