"use client";
import LandingContent from "@/app/components/landing-content/LandingContent";
import "./MainLandingModule.css";
import Inicio from "@/app/components/inicio/Inicio";

function MainLandingModule({ }) {

  return (
    <main>
      <LandingContent />
      <Inicio />
    </main>
  );
}

export default MainLandingModule;
