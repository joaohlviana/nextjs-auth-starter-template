import { currentUser } from "@clerk/nextjs/server";
import { LandingHero } from "./_template/components/landing-hero";
import { LearnMore } from "./_template/components/learn-more";
import { Footer } from "./_template/components/footer";
import { CARDS } from "./_template/content/cards";

export default async function Home() {
  const user = await currentUser();
  
  return (
    <>
      <LandingHero isSignedIn={!!user} />
      <LearnMore cards={CARDS} />
      <Footer />
    </>
  );
}