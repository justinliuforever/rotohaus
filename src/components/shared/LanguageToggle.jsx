import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 shadow-lg"
      style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === 'zh' ? 'EN' : '中文'}
    </motion.button>
  );
};

export default LanguageToggle;
