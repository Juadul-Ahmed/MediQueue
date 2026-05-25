import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/10 overflow-hidden">
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-2xl font-bold">
            Medi<span className="text-red-500">Queue</span>
          </h1>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            A smart tutor booking platform that connects students with verified
            educators in real time.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-red-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tutors" className="hover:text-red-400 transition">
                Tutors
              </Link>
            </li>
            <li>
              <Link href="/my-tutors" className="hover:text-red-400 transition">
                My Tutors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-4">
            Contact
          </h2>

          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2 hover:text-red-400 transition">
              <FaEnvelope className="text-red-500" />
              juadulahmed9@gmail.com
            </li>

            <li className="flex items-center gap-2 hover:text-red-400 transition">
              <FaPhone className="text-red-500" />
              +86 123 456 789
            </li>

            <li className="flex items-center gap-2 hover:text-red-400 transition">
              <FaMapMarkerAlt className="text-red-500" />
              Chengdu, China
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-4">
            Connect
          </h2>

          <div className="flex gap-4 text-xl text-slate-400">
            <a href="#" className="hover:text-red-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaEnvelope />
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-4">support@mediqueue.com</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} MediQueue. All rights reserved.
      </div>
    </footer>
  );
}
