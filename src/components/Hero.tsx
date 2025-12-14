export default function Hero() {
  return (
    <section className="w-full min-h-[60vh] md:h-[70vh] flex flex-col md:flex-row relative overflow-hidden bg-black text-white" id="home">

      {/* IMAGE */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative clip-left">
        <img
          src="/yasser.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-16 py-10 md:py-0">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: `"Didot", "Garamond", serif` }}
        >
          IMAGINE +20 YEARS OF PROJECT MANAGEMENT EXPERIENCE
          <br className="hidden sm:block" />
          ONE <span className="underline text-red-500">CLICK</span> AWAY!
        </h1>

        <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-xl">
          Meet Eng. Yasser Maamoun, MBA — over 20 years of leadership in MSME
          project and business management.
        </p>
      </div>

    </section>
  );
}
