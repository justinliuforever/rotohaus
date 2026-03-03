import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArtistsSection } from '../components/residency';
import Footer from '../components/shared/Footer';
import LanguageToggle from '../components/shared/LanguageToggle';

const ArtistsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <LanguageToggle />

      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-4 sm:left-6 lg:left-8 top-4 sm:top-6 lg:top-8 z-50"
      >
        <Link to="/residency">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg shadow-black/8 border border-[#392C20]/10 hover:border-[#476724]/30 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-[#392C20]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span
              className="text-[#392C20] text-sm font-medium"
              style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
            >
              返回驻地主页
            </span>
          </motion.div>
        </Link>
      </motion.div>

      <ArtistsSection />
      <Footer />
    </div>
  );
};

export default ArtistsPage;
