export default function Services() {
  return (
    <section className="w-full py-32 bg-[#1c1c1c] text-white" id="services">
      <div className="max-w-6xl mx-auto px-8">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-semibold mb-16">
          Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-[#2a2a2a] p-10 flex flex-col justify-between hover:bg-[#333] transition">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Project Strategy & Planning
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                End-to-end project planning, scope definition, and execution
                roadmaps designed to ensure clarity, control, and predictable outcomes.
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="text-xl font-bold">$300/month</span>
              <a
                href="/payment/project-strategy"
                className="text-sm uppercase tracking-wide text-gray-300 hover:text-white transition"
              >
                Pick Now →
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#2a2a2a] p-10 flex flex-col justify-between hover:bg-[#333] transition">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Program & Portfolio Management
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Strategic oversight of multiple projects and programs, aligning
                execution with business goals while optimizing resources.
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="text-xl font-bold">$500/month</span>
              <a
                href="/payment/program-management"
                className="text-sm uppercase tracking-wide text-gray-300 hover:text-white transition"
              >
                Pick Now →
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#2a2a2a] p-10 flex flex-col justify-between hover:bg-[#333] transition">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Executive Advisory & Risk Management
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                High-level advisory for complex or high-risk projects requiring
                senior leadership intervention and decisive governance.
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="text-xl font-bold">$800/month</span>
              <a
                href="/payment/executive-advisory"
                className="text-sm uppercase tracking-wide text-gray-300 hover:text-white transition"
              >
                Pick Now →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
