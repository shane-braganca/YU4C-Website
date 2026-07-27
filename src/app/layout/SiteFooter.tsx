import { Mail, MapPin, Instagram, Facebook, Flame } from "lucide-react";
import { Link } from "react-router";
import logoImage from "figma:asset/dd195dc39807305896ae5ceac3096e4eaf3a3438.png";

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1628] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoImage} alt="YU4C Goa" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-bold text-xl text-white">YU4C Goa</p>
                <p className="text-blue-300 text-sm">Youth United for Christ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The youth ministry wing of the Catholic Charismatic Renewal in the Archdiocese of Goa and Daman. Young Hearts. Bold Faith. United for Christ.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/yu4cgoa" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/yu4cgoa" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { to: "/about", label: "About Us" },
                { to: "/events", label: "Events" },
                { to: "/ministries", label: "Ministries" },
                { to: "/prayer-groups", label: "Prayer Groups" },
                { to: "/retreats", label: "Retreats" },
                { to: "/join", label: "Join Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-blue-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Archdiocese of Goa and Daman, Goa, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:yu4cgoa@gmail.com" className="hover:text-blue-300 transition-colors">
                  yu4cgoa@gmail.com
                </a>
              </li>
            </ul>
            <Link
              to="/join"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white rounded-full text-sm font-semibold transition-all"
            >
              <Flame className="w-4 h-4" />
              Get Involved
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Youth United for Christ – Goa. All rights reserved.</p>
          <p>Part of NCCRS – India</p>
        </div>
      </div>
    </footer>
  );
}
