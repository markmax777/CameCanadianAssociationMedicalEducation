import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MissionVision } from "./pages/about/MissionVision";
import { Leadership } from "./pages/about/Leadership";
import { BoardDirectors } from "./pages/about/leadership/BoardDirectors";
import { Committees } from "./pages/about/leadership/Committees";
import { Representatives } from "./pages/about/leadership/Representatives";
import { HistoryImpact } from "./pages/about/HistoryImpact";
import { Membership } from "./pages/Membership";
import { BecomeMember } from "./pages/membership/BecomeMember";
import { Benefits } from "./pages/membership/Benefits";
import { Plans } from "./pages/membership/Plans";
import { Directory } from "./pages/membership/Directory";
import { MemberLogin } from "./pages/MemberLogin";
import { MembershipSignup } from "./pages/membership/MembershipSignup";
import { ProfessionalDevelopment } from "./pages/ProfessionalDevelopment";
import { LeadershipPrograms } from "./pages/professional-development/LeadershipPrograms";
import { Clime1 } from "./pages/professional-development/Clime1";
import { Clime2 } from "./pages/professional-development/Clime2";
import { Iclem1 } from "./pages/professional-development/Iclem1";
import { Webinars } from "./pages/professional-development/Webinars";
import { Podcasts } from "./pages/professional-development/Podcasts";
import { LearningResources } from "./pages/professional-development/LearningResources";
import { Clime20 } from "./pages/programs/Clime20";
import { Clime2027 } from "./pages/programs/Clime2027";
import { Iclem102027 } from "./pages/programs/Iclem102027";
import { CamePaccc } from "./pages/programs/CamePaccc";
import { AwardsGrants } from "./pages/AwardsGrants";
import { AwardsNominations } from "./pages/awards-grants/AwardsNominations";
import { PastWinners } from "./pages/awards-grants/PastWinners";
import { EducationGrants } from "./pages/awards-grants/EducationGrants";
import { Community } from "./pages/Community";
import { SpecialInterestGroups } from "./pages/community/SpecialInterestGroups";
import { Newsletter } from "./pages/community/Newsletter";
import { Foundation } from "./pages/Foundation";
import { AboutFoundation } from "./pages/foundation/AboutFoundation";
import { FoundationGrants } from "./pages/foundation/FoundationGrants";
import { Donate } from "./pages/Donate";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      
      // About routes
      { path: "about", Component: About },
      { path: "about/mission-vision", Component: MissionVision },
      { path: "about/leadership", Component: Leadership },
      { path: "about/leadership/board", Component: BoardDirectors },
      { path: "about/leadership/committees", Component: Committees },
      { path: "about/leadership/representatives", Component: Representatives },
      { path: "about/history", Component: HistoryImpact },
      
      // Membership routes
      { path: "membership", Component: Membership },
      { path: "membership/become-member", Component: BecomeMember },
      { path: "membership/benefits", Component: Benefits },
      { path: "membership/plans", Component: Plans },
      { path: "membership/directory", Component: Directory },
      { path: "membership/login", Component: MemberLogin },
      { path: "membership/signup", Component: MembershipSignup },
      
      // Professional Development routes
      { path: "professional-development", Component: ProfessionalDevelopment },
      { path: "professional-development/leadership", Component: LeadershipPrograms },
      { path: "professional-development/leadership/clime-1", Component: Clime1 },
      { path: "professional-development/leadership/clime-2", Component: Clime2 },
      { path: "professional-development/leadership/iclem-1", Component: Iclem1 },
      { path: "professional-development/webinars", Component: Webinars },
      { path: "professional-development/podcasts", Component: Podcasts },
      { path: "professional-development/resources", Component: LearningResources },
      
      // Program routes
      { path: "programs/clime-2-0", Component: Clime20 },
      { path: "programs/clime-2027", Component: Clime2027 },
      { path: "programs/iclem-1-0-2027", Component: Iclem102027 },
      { path: "programs/came-paccc", Component: CamePaccc },
      
      // Awards & Grants routes
      { path: "awards-grants", Component: AwardsGrants },
      { path: "awards-grants/awards", Component: AwardsNominations },
      { path: "awards-grants/winners", Component: PastWinners },
      { path: "awards-grants/grants", Component: EducationGrants },
      
      // Community routes
      { path: "community", Component: Community },
      { path: "community/groups", Component: SpecialInterestGroups },
      { path: "community/newsletter", Component: Newsletter },
      
      // Foundation routes
      { path: "foundation", Component: Foundation },
      { path: "foundation/about", Component: AboutFoundation },
      { path: "foundation/grants", Component: FoundationGrants },
      { path: "foundation/donate", Component: Donate },
      
      // Other routes
      { path: "store", Component: Store },
      { path: "contact", Component: Contact },
      
      // 404
      { path: "*", Component: NotFound },
    ],
  },
]);