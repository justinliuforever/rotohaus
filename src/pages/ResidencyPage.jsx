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
  ApplySection
} from '../components/residency';
import Footer from '../components/shared/Footer';

const ResidencyPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <InfoSection />
      <JiaguanSection />
      <QiongyaoSection />
      <LandianfangSection />
      <ScheduleSection />
      <ApplicationSection />
      <SupportSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default ResidencyPage;
