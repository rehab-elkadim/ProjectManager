import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [openEmail, setOpenEmail] = useState(false);

  return (
    <section className="w-full py-48 bg-[#1c1c1c] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-32">
          Contact
        </h2>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-16">
          <button
            onClick={() => setOpenEmail(v => !v)}
            className="flex items-center justify-center gap-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Email
            </h3>
            <ArrowDown
              size={32}
              className={`transition-transform ${openEmail ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              openEmail ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <EmailForm />
          </div>

          <ContactLink label="DM" href="https://wa.me/201006063157" />
          <ContactLink
            label="Upwork"
            href="https://www.upwork.com/freelancers/~01858379dae8b9d221"
          />
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-24 items-start">
          <button
            onClick={() => setOpenEmail(v => !v)}
            className="flex items-center justify-center gap-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Email
            </h3>
            <ArrowDown
              size={40}
              className={`transition-transform ${openEmail ? "rotate-180" : ""}`}
            />
          </button>

          <ContactLink label="DM" href="https://wa.me/201006063157" />
          <ContactLink
            label="Upwork"
            href="https://www.upwork.com/freelancers/~01858379dae8b9d221"
          />
        </div>

        <div
          className={`hidden md:block transition-all duration-700 ease-out overflow-hidden ${
            openEmail ? "max-h-[900px] mt-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <EmailForm />
        </div>

      </div>
    </section>
  );
}

/* ---------- INTERNAL COMPONENTS ---------- */

function ContactLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-center gap-6"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        {label}
      </h3>
      <ArrowUpRight size={32} strokeWidth={1.5} />
    </a>
  );
}

function EmailForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validators = {
    name: (v: string) =>
      !v.trim()
        ? "Name is required."
        : v.trim().length < 2
        ? "Name is too short."
        : "",

    email: (v: string) =>
      !v.trim()
        ? "Email is required."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? "Enter a valid email address."
        : "",

    phone: (v: string) => {
      if (!v.trim()) return "";
      const digits = v.replace(/\D/g, "");
      return digits.length < 7 || digits.length > 15
        ? "Enter a valid phone number."
        : "";
    },

    message: (v: string) =>
      !v.trim()
        ? "Message is required."
        : v.trim().length < 10
        ? "Message must be at least 10 characters."
        : "",
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    (Object.keys(values) as Array<keyof typeof values>).forEach(key => {
      const err = validators[key](values[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validators[name as keyof typeof validators](value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess("Message sent successfully.");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      {/* NAME */}
      <div>
        <input
          name="name"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input w-full"
        />
        {errors.name && <p className="text-sm text-red-400 mt-2">{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input w-full"
        />
        {errors.email && <p className="text-sm text-red-400 mt-2">{errors.email}</p>}
      </div>

      {/* PHONE */}
      <div className="md:col-span-2">
        <input
          name="phone"
          placeholder="Phone Number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input w-full"
        />
        {errors.phone && <p className="text-sm text-red-400 mt-2">{errors.phone}</p>}
      </div>

      {/* MESSAGE */}
      <div className="md:col-span-2">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input w-full resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-400 mt-2">{errors.message}</p>
        )}
      </div>

      {/* FEEDBACK */}
      {success && (
        <p className="md:col-span-2 text-sm text-green-400">{success}</p>
      )}
      {error && (
        <p className="md:col-span-2 text-sm text-red-400">{error}</p>
      )}

      {/* SUBMIT */}
      <div className="md:col-span-2 mt-8 flex justify-start">
        <button type="submit" className="underline" disabled={loading}>
          {loading ? "Sending..." : "Send →"}
        </button>
      </div>
    </form>
  );
}
