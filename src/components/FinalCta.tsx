export default function FinalCTA() {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="
          flex 
          flex-col 
          sm:flex-row 
          items-center 
          justify-center 
          gap-4 
          sm:gap-6 
          text-center 
          sm:text-left
        ">
          <p className="
            text-base 
            sm:text-lg 
            md:text-xl 
            font-semibold 
            leading-snug
          ">
            Ready to turn your idea into a profitable, low-risk project?
          </p>

          <a
            href="#contact"
            className="
              inline-flex 
              items-center 
              justify-center 
              px-6 
              py-3 
              text-sm 
              sm:text-base 
              font-semibold 
              text-white 
              bg-red-600 
              hover:bg-red-700 
              transition 
              whitespace-nowrap
            "
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
