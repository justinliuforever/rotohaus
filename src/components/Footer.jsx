import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#1a1a1a] text-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute top-20 right-10 w-32 h-32 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

          <FadeIn className="lg:col-span-1">
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/intro/logo.png"
              alt="Rotohaus"
              className="w-16 h-16 mb-6 brightness-0 invert opacity-80"
            />
            <p
              className="text-white/60 max-w-sm"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: '14px',
                lineHeight: 1.7
              }}
            >
              野所 ROTOHAUS 致力于通过艺术驻地、工作坊与跨文化对话，连接传统工艺与当代创作。
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h4
              className="text-white/40 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <motion.a
                  href="mailto:residency@rotohaus.com"
                  className="inline-block hover:text-[#E2D19E] transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  residency@rotohaus.com
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://instagram.com/rotohaus.nyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-[#E2D19E] transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  @rotohaus.nyc
                </motion.a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4
              className="text-white/40 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Partners
            </h4>
            <ul
              className="space-y-2 text-white/50 text-sm"
              style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
            >
              <li>邛崃市文化体育和旅游局</li>
              <li>邛崃市夹关镇人民政府</li>
              <li>邛崃市临济镇人民政府</li>
              <li>邛窑国家考古遗址公园</li>
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              © 2026 ROTOHAUS. All rights reserved.
            </p>
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "'Huiwen-Fangsong', serif", letterSpacing: '0.1em' }}
            >
              烟火邛州 · 国际非遗艺术驻地
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
