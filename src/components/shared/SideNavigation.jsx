import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: '首页', labelEn: 'Home' },
  { id: 'venues', label: '场域', labelEn: 'Venues' },
  { id: 'process', label: '流程', labelEn: 'Process' },
  { id: 'requirements', label: '申请要求', labelEn: 'Requirements' },
  { id: 'qa', label: '问答', labelEn: 'Q&A' },
  { id: 'team', label: '团队', labelEn: 'Team' },
  { id: 'about', label: '关于', labelEn: 'About' }
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible(scrollY > windowHeight * 0.5);

      // Determine active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      })).filter(s => s.element);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.4) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'hero' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsExpanded(false);
  };

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-4 sm:left-6 lg:left-8 top-4 sm:top-6 lg:top-8 z-50"
        >
          <motion.div
            className="relative"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {/* Main pill button showing current section */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg shadow-black/8 border border-[#392C20]/10 hover:border-[#476724]/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Progress indicator */}
              <div className="flex items-center gap-1">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.id}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      section.id === activeSection
                        ? 'w-4 bg-[#476724]'
                        : sections.indexOf(sections.find(s => s.id === activeSection)) > i
                          ? 'w-1.5 bg-[#476724]/40'
                          : 'w-1.5 bg-[#392C20]/15'
                    }`}
                  />
                ))}
              </div>

              {/* Current section label */}
              <span
                className="text-[#392C20] text-sm font-medium ml-1"
                style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
              >
                {currentSection?.label}
              </span>

              {/* Expand icon */}
              <motion.svg
                className="w-3.5 h-3.5 text-[#392C20]/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>

            {/* Expanded dropdown menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-2 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/10 border border-[#392C20]/10 min-w-[160px] overflow-hidden"
                >
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-[#476724]/8'
                          : 'hover:bg-[#392C20]/5'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      {/* Active indicator */}
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        activeSection === section.id ? 'bg-[#476724]' : 'bg-[#392C20]/20'
                      }`} />

                      {/* Labels */}
                      <div className="flex-1">
                        <span
                          className={`block text-sm transition-colors ${
                            activeSection === section.id ? 'text-[#476724] font-medium' : 'text-[#392C20]'
                          }`}
                          style={{ fontFamily: "'Huiwen-Fangsong', serif" }}
                        >
                          {section.label}
                        </span>
                        <span className="block text-[10px] text-[#392C20]/40 tracking-wider uppercase">
                          {section.labelEn}
                        </span>
                      </div>

                      {/* Current indicator */}
                      {activeSection === section.id && (
                        <motion.div
                          layoutId="currentIndicator"
                          className="w-1 h-4 bg-[#476724] rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}

                  {/* Back to top */}
                  <div className="border-t border-[#392C20]/8 mt-2 pt-2 px-4">
                    <button
                      onClick={() => scrollToSection('hero')}
                      className="flex items-center gap-2 text-[#392C20]/50 hover:text-[#476724] transition-colors text-xs py-1.5"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      <span>返回顶部</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNavigation;
