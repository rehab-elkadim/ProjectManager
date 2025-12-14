export default function Catalog() {
  const items = [
    {
      title: "Feasibility Study",
      desc: "Comprehensive financial, technical, and market feasibility analysis to validate project viability before investment.",
      img: "/feasibility.jpeg",
    },
    {
      title: "Loans & Personal Deposits Consultancy",
      desc: "Advisory on loan structuring, personal deposits, and financing options aligned with risk and cash flow capacity.",
      img: "/loans.png",
    },
    {
      title: "Risk Management Consultancy",
      desc: "Identification, assessment, and mitigation strategies to reduce financial, operational, and project risks.",
      img: "/risk.png",
    },
    {
      title: "Business Plan",
      desc: "Investor-ready business plans with clear financial models, assumptions, and growth projections.",
      img: "/plan.png",
    },
    {
      title: "Business Analysis",
      desc: "In-depth analysis of operations, performance gaps, and optimization opportunities for sustainable growth.",
      img: "/businessanalysis.png",
    },
    {
      title: "GTM Strategy",
      desc: "Go-to-market strategies defining positioning, pricing, channels, and execution roadmap.",
      img: "/gtm.png",
    },
  ];

  return (
    <section id="catalog" className="w-full py-20 sm:py-24 bg-[#1c1c1c] text-white">
      {/* OUTER CONTAINER */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-14 sm:mb-16">
          Catalog
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-9 md:gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#2a2a2a] hover:bg-[#333] transition flex flex-col"
            >
              {/* IMAGE */}
              <div className="w-full aspect-[16/11] md:aspect-[4/3] bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7 flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
