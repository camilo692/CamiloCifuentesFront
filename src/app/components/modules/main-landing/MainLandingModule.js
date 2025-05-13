"use client";
import LandingContent from "@/app/components/landing-content/LandingContent";
import "./MainLandingModule.css";
import { useTheme } from "@/app/providers/ThemeContext";

function MainLandingModule({ }) {

  return (
    <main>
      <LandingContent />
    </main>
  );
}

export default MainLandingModule;
