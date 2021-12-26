import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SectionContact from "../components/SectionContact";
import SectionFooter from "../components/SectionFooter";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";

export default function Home() {
  return (
    <>
      <Hero/>
      <ProfileSection/>
      <SectionSkills/>
      <SectionProjects/>
      <SectionContact/>
      <SectionFooter />
    </>
  )
}
