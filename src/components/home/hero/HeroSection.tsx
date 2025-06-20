"use client";
import ScrollIndicator from "./ScrollIndicator";
import { Squares } from "@/components/ui/SquareBackground"

const INFO_BLOCKS = [
  {
    title: "BUILDING FOR WEB & MOBILE",
    subtitle: "WITH 5 YEARS' EXPERIENCE",
  },
  {
    title: "BASED IN",
    subtitle: "IRELAND",
  },
  {
    title: "OPEN TO",
    subtitle: "FULL-TIME OPPORTUNITIES",
  },
]

function InfoBlock({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-l border-text-dark pl-6 w-96">
      <p className="font-medium">{title}</p>
      <p className="font-extralight">{subtitle}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="h-screen w-screen bg-gradient-to-br from-black via-background-dark to-background-dark overflow-hidden" aria-label="Hero Section">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#3d3d3d"
          hoverFillColor="#222"
        />
      </div>
      {/* Content */}
      <div className="h-full w-4/5 mx-auto flex flex-col justify-center items-center z-50">
        {/* Header */}
        <div className="relative w-full h-3/4 flex flex-col items-start justify-center cursor-default translate-y-8">
          <p className="font-[fustat] text-6xl font-extralight leading-none text-text-dark">
            Hi, I'm Yuewei.
          </p>
          <p className="font-[fustat] text-6xl font-extralight leading-none text-text-dark">
            I am a
          </p>
          <p className="ml-32 font-[gloock] text-[12rem] leading-[1.2] font-medium bg-gradient-to-r from-accent via-secondary to-primary text-transparent bg-clip-text">
            Full-stack
          </p>
          <p className="ml-64 font-[gloock] text-[12rem] leading-[1.2] -translate-y-12 font-medium bg-gradient-to-r from-accent via-secondary to-primary text-transparent bg-clip-text">
            Developer
            <span className="text-text-dark hover:animate-pulse">.</span>
          </p>
          {/* Decoration */}
          <div className="absolute top-[-80px] right-[-100px] block lg:display-none">
            <div className="absolute right-[20px] top-[120px] pointer-events-none z-[-1] opacity-75 w-[75px] h-[575px] bg-gradient-to-b  from-text-dark via-accent to-transparent" />
            <div className="absolute right-[20px] top-[120px] pointer-events-none z-[-1] opacity-50 bg-primary rounded-full w-[375px] h-[375px] blur-3xl scale-x-150 scale-y-100 -rotate-24" />
            <div className="absolute right-0 top-[100px] pointer-events-none z-[-1] opacity-90 bg-gradient-to-b from-primary  via-primary to-transparent backdrop-blur-md rounded-full w-[375px] h-[375px]" />
            {/* <div className="absolute right-[200px] top-[375px] pointer-events-none z-[-1] opacity-75 h-0 w-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[140px] border-b-text-dark" /> */}
          </div>
        </div>
        {/* Footer */}
        <div className="relative w-full h-1/8 flex justify-between z-50 overflow-visible">
          <div className="grid gap-4 grid-cols-2 grid-rows-2 text-2xl font-[fustat] text-text-dark">
            {INFO_BLOCKS.map((item, idx) => (
              <InfoBlock key={idx} title={item.title} subtitle={item.subtitle} />
            ))}
            <div className="relative">
              <div className="text-3xl font-[gloock]">"Crafting code</div>
              <div className="text-3xl font-[gloock] ml-3"> with an artist's perspective."</div>
              {/* Decoration */}
              <div className="absolute left-0 top-0 w-[150%] h-full pointer-events-none z-[-1] opacity-50 bg-gradient-to-r from-transparent via-secondary to-primary" />
            </div>
          </div>
          {/* Decoration */}
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] bg-accent/50 rounded-full w-[150px] h-[150px]" />
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
