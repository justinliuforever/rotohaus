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

      {/* 首页 - Hero, Intro, Info */}
      <div id="hero">
        <HeroSection />
        <IntroSection />
        <InfoSection />
      </div>

      {/* 艺术家阵容 */}
      <div id="artists">
        <ArtistsPreview />
      </div>

      {/* 场域 - 三个驻地地点 */}
      <div id="venues">
        <JiaguanSection />
        <QiongyaoSection />
        <LandianfangSection />
      </div>

      {/* 流程 - 申请相关 */}
      <div id="process">
        <ScheduleSection />
        <div id="requirements">
          <ApplicationSection />
        </div>
        <SupportSection />
        <ApplySection />
      </div>

      {/* 问答 */}
      <div id="qa">
        <QASection />
      </div>

      {/* 团队 - 学术顾问与核心团队 */}
      <div id="team">
        <AdvisorsSection />
        <TeamSection />
      </div>

      {/* 关于 - Rotohaus 与致谢 */}
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
