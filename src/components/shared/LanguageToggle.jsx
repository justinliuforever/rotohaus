import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isEnglish = location.pathname.includes('/en');

  const toggleLanguage = () => {
    if (isEnglish) {
      navigate('/residency');
    } else {
      navigate('/residency/en');
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={toggleLanguage}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50 flex items-center gap-1 px-3 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg shadow-black/8 border border-[#392C20]/10 hover:border-[#476724]/30 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Chinese option */}
      <span
        className={`text-sm transition-colors ${
          !isEnglish
            ? 'text-[#476724] font-medium'
            : 'text-[#392C20]/50 hover:text-[#392C20]/70'
        }`}
        style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
      >
        中文
      </span>

      <span className="text-[#392C20]/30 mx-0.5">/</span>

      {/* English option */}
      <span
        className={`text-sm transition-colors ${
          isEnglish
            ? 'text-[#476724] font-medium'
            : 'text-[#392C20]/50 hover:text-[#392C20]/70'
        }`}
        style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
      >
        EN
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
