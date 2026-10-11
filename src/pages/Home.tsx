import { seo } from "../content";
import { useSeo } from "../components/useSeo";
import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Story from "../sections/Story";
import Proof from "../sections/Proof";
import Offers from "../sections/Offers";
import LeadMagnet from "../sections/LeadMagnet";
import Fit from "../sections/Fit";
import Community from "../sections/Community";
import Faq from "../sections/Faq";
import FinalCta from "../sections/FinalCta";

/** Section order lives here. Reorder or delete lines to change the home page. */
export default function Home() {
  useSeo(seo.home, "/");
  return (
    <>
      <Hero />
      <Problem />
      <Story />
      <Proof />
      <Offers />
      <LeadMagnet />
      <Fit />
      <Community />
      <Faq />
      <FinalCta />
    </>
  );
}
