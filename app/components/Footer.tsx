import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Remote <span className="text-blue-400">Talent Co.</span>
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              We help businesses hire world-class remote professionals,
              including Appointment Setters, Customer Support Representatives,
              and Virtual Assistants.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:scale-110 hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:scale-110 hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:scale-110 hover:bg-blue-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>

            <ul className="mt-6 space-y-4">
              <li><a href="#solutions" className="hover:text-white">Appointment Setters</a></li>
              <li><a href="#solutions" className="hover:text-white">Customer Support</a></li>
              <li><a href="#solutions" className="hover:text-white">Virtual Assistants</a></li>
              <li><a href="#solutions" className="hover:text-white">Custom Recruitment</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigation</h3>

            <ul className="mt-6 space-y-4">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={18} />
                <span>Johannesburg, South Africa</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={18} />
                <span>+27 75 250 5561</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} />
                <span>info@remotetalentco.co.za</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Remote Talent Co. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Connecting businesses with exceptional remote talent.
          </p>
        </div>
      </div>
    </footer>
  );
}