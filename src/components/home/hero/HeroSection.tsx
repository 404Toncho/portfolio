import ScrollIndicator from "./ScrollIndicator";

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
    <div className="border-l border-text-dark pl-4 md:pl-6 w-96">
      <p className="font-medium">{title}</p>
      <p className="font-light">{subtitle}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="h-screen w-screen" aria-label="Hero Section">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-between md:justify-center items-center scale-90 2xl:scale-100">
        {/* Header */}
        <div className="relative w-full grow md:grow-0 md:h-3/4 flex flex-col items-start justify-center cursor-default translate-y-8">
          <div className="h-full xl:h-fit flex flex-col justify-items-start md:justify-end md:flex-1 md:-translate-y-12 xl:justify-normal xl:flex-initial xl:translate-y-0">
            {["Hi, I'm Yuewei.", "I am a"].map((text, idx) => (
              <p
                key={idx}
                className="font-[fustat] text-4xl 2xl:text-6xl font-extralight leading-none text-text-dark"
              >
                {text}
              </p>
            ))}
            <p className="ml-0 4xl:ml-32 font-[gloock] text-6xl md:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[1.2] font-medium bg-gradient-to-r from-accent via-secondary to-primary text-transparent bg-clip-text">
              Full-stack
            </p>
            <p className="ml-0 md:ml-16 4xl:ml-64  font-[gloock] text-6xl md:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[1.2] -translate-y-4 md:-translate-y-12 font-medium bg-gradient-to-r from-accent via-secondary to-primary text-transparent bg-clip-text">
              Developer
              <span className="text-text-dark animate-pulse">.</span>
            </p>
          </div>
          {/* Decoration */}
          <div className="hidden md:block absolute top-[-80px] right-[-4rem] xl:right-[-100px] 3xl:right-[-38px] scale-75 2xl:scale-100 3xl:scale-150">
            <div className="absolute right-[20px] top-[120px] pointer-events-none z-[-1] opacity-75 w-[75px] h-[575px] bg-gradient-to-b from-accent via-accent to-transparent" />
            <div className="absolute right-[20px] top-[120px] pointer-events-none z-[-1] opacity-50 bg-primary rounded-full w-[375px] h-[375px] blur-3xl scale-x-150 scale-y-100 -rotate-24" />
            <div className="absolute right-0 top-[100px] pointer-events-none z-[-1] bg-gradient-to-b from-primary  via-primary to-transparent backdrop-blur-md rounded-full w-[375px] h-[375px]" />
            <div className="absolute right-[200px] top-[350px] pointer-events-none z-[-1] opacity-75 h-0 w-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[175px] border-b-text-dark" />
          </div>
        </div>
        {/* Footer */}
        <div className="relative w-full h-fit md:h-1/8 mb-16 md:mb-0 flex justify-between">
          {/* Decoration */}
          <div className="z-0 absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-gradient-to-br from-accent/75 to-accent/25 rounded-full w-[120px] h-[120px] 2xl:w-[150px] 2xl:h-[150px] scale-150 md:scale-100" />
          <ScrollIndicator className="z-1 absolute -right-4 md:-right-12 xl:-right-20 2xl:-right-4 -bottom-18 xl:-bottom-12 2xl:-bottom-4 h-fit scale-75 xl:scale-100 2xl:scale-125" />
          {/* Text */}
          <div className="relative grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 text-lg md:text-xl 2xl:text-2xl font-[fustat] text-text-dark">
            {INFO_BLOCKS.map((item, idx) => (
              <InfoBlock key={idx} title={item.title} subtitle={item.subtitle} />
            ))}
            <div className="relative h-fit text-xl md:text-2xl 2xl:text-3xl">
              {/* Decoration */}
              <div className="absolute left-0 top-0 w-[120%] 2xl:w-[150%] h-full pointer-events-none opacity-50 bg-gradient-to-r from-transparent via-secondary to-primary" />
              {/* Text */}
              <p className="relative font-[gloock]">&quot;Crafting code</p>
              <p className="relative font-[gloock] ml-3 whitespace-nowrap">with an artist&apos;s perspective.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
