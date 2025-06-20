"use client";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="h-screen w-screen pl-48 pr-24 bg-background-dark" aria-label="Hero Section">
      {/* Main */}
      <div className="flex flex-col items-start justify-center h-4/5 cursor-default">
        <div className="translate-y-16">
          <p className="font-[fustat] text-7xl font-light leading-none text-text-dark">Hi, I am a</p>
          <p
            className="ml-32 font-[gloock] text-[12rem] leading-[1.2] font-medium bg-gradient-to-r from-accent via-secondary to-primary text-transparent bg-clip-text"
          >
            Full-stack
          </p>
            <p
            className="ml-64 font-[gloock] text-[12rem] leading-[1.2] -translate-y-12 font-medium bg-gradient-to-r from-accent via-secondary to-primary text-transparent bg-clip-text"
            >
            Developer.
            </p>
        </div>
      </div>
      {/* Footer */}
      <div className="h-1/8 flex justify-between">
        <div className="w-2xl grid grid-cols-2 grid-rows-2 text-2xl font-[fustat] text-text-dark">
          <div>
            <p className="font-bold">BASED IN</p>
            <p className="font-light">IRELAND</p>
          </div>
          <div>
            <p className="font-bold">OPEN TO</p>
            <p className="font-light">FULL-TIME OPPORTUNITIES</p>
          </div>
          <div className="col-span-2 self-end	 font-[gloock] shimmer">"Crafting code with an artist's perspective."</div>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
