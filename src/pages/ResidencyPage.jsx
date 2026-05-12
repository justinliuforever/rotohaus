import {
  HeroSection,
  IntroSection,
  InfoSection,
  ArtistsPreview,
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
} from '../components/residency';
import Footer from '../components/shared/Footer';
import SideNavigation from '../components/shared/SideNavigation';
import LanguageToggle from '../components/shared/LanguageToggle';

const ResidencyPage = () => {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <SideNavigation />

      <div id="hero">
        <HeroSection />
        <IntroSection />
        <InfoSection />
      </div>

      <div id="artists">
        <ArtistsPreview />
      </div>

      <div id="venues">
        <JiaguanSection />
        <QiongyaoSection />
        <LandianfangSection />
      </div>

      <div id="process">
        <ScheduleSection />
        <div id="requirements">
          <ApplicationSection />
        </div>
        <SupportSection />
        <ApplySection />
      </div>

      <div id="qa">
        <QASection />
      </div>

      <div id="team">
        <AdvisorsSection />
        <TeamSection />
      </div>

      <div id="about">
        <RotohausSection />
        <HistorySection />
        <ThanksSection />
      </div>

      <Footer />
    </div>
  );
};

export default ResidencyPage;
