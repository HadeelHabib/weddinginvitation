"use client";

import { useState, useEffect } from "react";
import HeroSlider from "@/components/HeroSlider";
import BlessingSection from "@/components/BlessingSection";
import InvitationCard from "@/components/InvitationCard";
import CountdownTimer from "@/components/CountdownTimer";
import Timeline from "@/components/Timeline";
import VenueSection from "@/components/VenueSection";
import SaveTheDate from "@/components/SaveTheDate";
import RSVPForm from "@/components/RSVPForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import PetalOverlay from "@/components/PetalOverlay";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0" style={{ background: "#fdfaf0" }} />;
  }

  return (
    <main className="relative">
      <PetalOverlay />
      <FloatingNav />
      <HeroSlider />
      <BlessingSection />
      <InvitationCard />
      <div id="countdown">
        <CountdownTimer />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="venue">
        <VenueSection />
      </div>
      <SaveTheDate />
      <div id="rsvp">
        <RSVPForm />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
