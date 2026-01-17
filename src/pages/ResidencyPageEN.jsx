import {
  HeroSection,
  IntroSection,
  InfoSection,
  JiaguanSection,
  QiongyaoSection,
  LandianfangSection,
  ScheduleSection,
  ApplicationSection,
  SupportSection,
  ApplySection,
  QASection,
  RotohausSection,
  HistorySection,
  AdvisorsSection,
  TeamSection,
  ThanksSection
} from '../components/residency-en';
import Footer from '../components/shared/Footer';
import SideNavigation from '../components/residency-en/SideNavigation';
import LanguageToggle from '../components/shared/LanguageToggle';

const ResidencyPageEN = () => {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <SideNavigation />

      {/* Home - Hero, Intro, Info */}
      <div id="hero">
        <HeroSection />
        <IntroSection />
        <InfoSection />
      </div>

      {/* Venues - Three residency locations */}
      <div id="venues">
        <JiaguanSection />
        <QiongyaoSection />
        <LandianfangSection />
      </div>

      {/* Process - Application related */}
      <div id="process">
        <ScheduleSection />
        <ApplicationSection />
        <SupportSection />
        <ApplySection />
      </div>

      {/* Q&A */}
      <div id="qa">
        <QASection />
      </div>

      {/* Team - Advisors and Core Team */}
      <div id="team">
        <AdvisorsSection />
        <TeamSection />
      </div>

      {/* About - Rotohaus and Thanks */}
      <div id="about">
        <RotohausSection />
        <HistorySection />
        <ThanksSection />
      </div>

      <Footer />
    </div>
  );
};

export default ResidencyPageEN;
