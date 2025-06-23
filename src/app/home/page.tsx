"use client";
import { Squares } from "@/components/ui/SquareBackground"
import HeroSection from "@/components/home/hero/HeroSection";
// import AboutSection from "@/components/home/about/AboutSection";

export default function HomePage() {
    return (
        <main className="bg-gradient-to-br from-black via-background-dark to-background-dark">
            {/* Background */}
            <Squares
                direction="diagonal"
                speed={0.3}
                squareSize={40}
                borderColor="#3d3d3d"
                hoverFillColor="#222"
                className="fixed top-0 left-0 z-0 pointer-events-none"
            />
            <div className="relative overflow-x-hidden">
                <HeroSection />
                {/* <AboutSection /> */}
                {/* TODO:  TechStackSection */}
                {/* TODO:  ExperienceSection */}
                {/* TODO:  ProjectsSection */}
                {/* TODO:  ContactSection */}
            </div>

        </main>
    );
}