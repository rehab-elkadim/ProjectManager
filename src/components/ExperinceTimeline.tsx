import { useEffect, useRef, useState } from "react";

export default function ExperienceTimeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = activeIndex;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      year: "2024 – Present",
      title: "Director of Environmental & Specialized Projects",
      desc: (
        <>
          Leading high-impact, donor-funded programs exceeding{" "}
          <span className="text-white font-medium">EGP 150M</span>, translating
          complex funding frameworks into executable, value-driven projects.
          Aligning{" "}
          <span className="text-white/90 font-medium">donor requirements</span>,{" "}
          <span className="text-white/90 font-medium">government regulations</span>, and{" "}
          <span className="text-white/90 font-medium">delivery teams</span> into
          one clear execution roadmap that protects capital and accelerates
          outcomes.
        </>
      ),
      video: "/diagram.webm",
    },
    {
      year: "2018 – Present",
      title: "Senior Project Management & Planning Engineer",
      desc: (
        <>
          Delivered large-scale renewable energy initiatives, including a{" "}
          <span className="text-white font-medium">50MW solar power plant</span>{" "}
          completed ahead of schedule. Strong control over{" "}
          <span className="text-white/90 font-medium">project planning</span>,{" "}
          <span className="text-white/90 font-medium">cost baselines</span>, and{" "}
          <span className="text-white/90 font-medium">risk forecasting</span>{" "}
          ensured faster delivery without compromising quality or returns.
        </>
      ),
      video: "/supervision.mov",
    },
    {
      year: "2012 – 2024",
      title: "Credit Risk Senior Manager",
      desc: (
        <>
          Protected and scaled financial portfolios by reducing{" "}
          <span className="text-white/90 font-medium">delinquency rates</span> by
          over <span className="text-white font-medium">30%</span> through
          advanced{" "}
          <span className="text-white/90 font-medium">credit risk frameworks</span>{" "}
          and{" "}
          <span className="text-white/90 font-medium">
            portfolio management strategies
          </span>
          . Growth was driven with discipline, balancing expansion with
          controlled exposure.
        </>
      ),
      video: "/risk.webm",
    },
    {
      year: "2005 – 2011",
      title: "Coordination & Follow-Up Senior Officer",
      desc: (
        <>
          Ensured strategic initiatives moved from planning to execution through
          strict{" "}
          <span className="text-white/90 font-medium">performance tracking</span>{" "}
          and{" "}
          <span className="text-white/90 font-medium">
            multi-stakeholder coordination
          </span>
          . Fragmented efforts were transformed into synchronized, on-time
          delivery.
        </>
      ),
      video: "/ppl.mov",
    },
    {
      year: "1999 – 2003",
      title: "Material Engineer & Project Expeditor",
      desc: (
        <>
          Supported large infrastructure projects by controlling{" "}
          <span className="text-white/90 font-medium">material flow</span>,{" "}
          <span className="text-white/90 font-medium">
            technical specifications
          </span>
          , and{" "}
          <span className="text-white/90 font-medium">schedule risks</span>. This
          early execution exposure shaped a grounded, risk-aware approach to
          strategic decision-making.
        </>
      ),
      video: "/engineer.webm",
    },
  ];

  return (
    <section className="w-full flex justify-center py-24 bg-[#1c1c1c] text-white" id="experience">
      <div className="relative w-full max-w-5xl px-6 max-[700px]:px-8 md:px-8">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 md:mb-20">
          Professional Experience
        </h2>

        {/* TIMELINE LINE */}
        <div className="absolute left-4 max-[700px]:left-3 md:left-1/4 top-24 bottom-0 w-px bg-white/40" />

        {experiences.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
  itemRefs.current[i] = el;
}}

            className="relative flex flex-col md:flex-row gap-6 md:gap-0 mb-24 md:mb-32"
          >
            {/* DOT */}
            <div className="absolute left-4 max-[700px]:left-3 md:left-1/4 top-2 -translate-x-1/2">
              <span
                className={`w-3 h-3 rounded-full block transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-white scale-125"
                    : "bg-gray-400"
                }`}
              />
            </div>

            {/* YEAR */}
            <div className="ml-12 max-[700px]:ml-14 md:ml-0 md:w-1/4 md:text-right md:pr-10 text-gray-400 text-sm md:text-base">
              {item.year}
            </div>

            {/* CONTENT */}
            <div className="ml-12 max-[700px]:ml-14 md:ml-0 md:pl-10 pr-8 max-[700px]:pr-10 md:pr-0 w-full max-w-xl">
              <h3 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* VIDEO */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  activeIndex === i
                    ? "max-h-[400px] opacity-100 mt-6"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <video
                  src={item.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full rounded-lg border border-white/10"
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
