import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [openEmail, setOpenEmail] = useState(false);

  return (
    <section className="w-full py-48 bg-[#1c1c1c] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-8">

        {/* TITLE */}
        <h2 className="text-6xl font-semibold mb-32">
          Contact
        </h2>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">

          {/* EMAIL */}
          <div className="flex justify-center">
            <button
              onClick={() => setOpenEmail(v => !v)}
              className="flex items-center gap-6 group"
            >
              <h3 className="text-5xl font-semibold">
                Email
              </h3>

              <ArrowDown
                size={56}
                strokeWidth={1}
                className={`text-gray-400 transition-all duration-300 group-hover:text-white ${
                  openEmail ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* DM */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/201006063157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <h3 className="text-5xl font-semibold">
                DM
              </h3>

              <ArrowUpRight
                size={48}
                strokeWidth={1.5}
                className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* UPWORK */}
          <div className="flex justify-center">
            <a
              href="https://www.upwork.com/freelancers/~01858379dae8b9d221"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <h3 className="text-5xl font-semibold">
                Upwork
              </h3>

              <ArrowUpRight
                size={48}
                strokeWidth={1.5}
                className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

        </div>

        {/* EMAIL FORM (UNCHANGED, WIDE) */}
        <div
          className={`transition-all duration-700 ease-out overflow-hidden ${
            openEmail ? "max-h-[900px] mt-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <form className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">

            <input
              placeholder="Your Name"
              className="bg-transparent border-b border-gray-600 py-4 text-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-b border-gray-600 py-4 text-lg outline-none"
            />

            <input
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-600 py-4 text-lg outline-none md:col-span-2"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="bg-transparent border-b border-gray-600 py-4 text-lg outline-none resize-none md:col-span-2"
            />

            <div className="md:col-span-2 mt-8">
              <button
                type="submit"
                className="text-lg underline hover:opacity-70 transition"
              >
                Send →
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
