export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center bg-transparent">
      <div className="w-full max-w-7xl px-3 sm:px-6 lg:px-10 py-4">
        <ul
          className="
            flex justify-center items-center
            gap-5 sm:gap-8 md:gap-10 lg:gap-12
            text-[11px] [@media(max-width:350px)]:text-[10px]
            sm:text-base md:text-lg
            font-semibold tracking-wide whitespace-nowrap text-white
          "
        >
          <li>
            <a href="#experience" className="hover:text-red-400 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-red-400 transition">
              Services
            </a>
          </li>
        
          <li>
            <a href="#catalog" className="hover:text-red-400 transition">
              Catalog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
