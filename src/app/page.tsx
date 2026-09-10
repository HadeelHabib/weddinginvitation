"use client";

import { useState, useEffect } from "react";
import HeroSlider from "@/components/HeroSlider";
import BlessingSection from "@/components/BlessingSection";
import InvitationCard from "@/components/InvitationCard";
import CountdownTimer from "@/components/CountdownTimer";
import VenueSection from "@/components/VenueSection";
import SaveTheDate from "@/components/SaveTheDate";
import RSVPForm from "@/components/RSVPForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import PetalOverlay from "@/components/PetalOverlay";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState(false);

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
      {opened && <FloatingNav />}
      <HeroSlider onOpen={() => setOpened(true)} />
      <div
        style={{
          opacity: opened ? 1 : 0,
          transform: opened ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.08s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.08s",
          pointerEvents: opened ? "auto" : "none",
          overflow: opened ? "visible" : "hidden",
        }}
        aria-hidden={!opened}
      >
        <BlessingSection />
        <InvitationCard />
        <div id="countdown">
          <CountdownTimer />
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
      </div>
    </main>
  );
}
