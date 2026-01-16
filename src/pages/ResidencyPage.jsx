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
      <QASection />
      <RotohausSection />
      <HistorySection />
      <TeamSection />
      <AdvisorsSection />
      <ThanksSection />
      <Footer />
    </div>
  );
};

export default ResidencyPage;
