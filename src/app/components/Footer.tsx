import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t-4" style={{ borderColor: '#1d4ed8', background: 'linear-gradient(to bottom, #061233, #061233)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Contact Section */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="mb-8 sm:mb-10 text-center text-white text-2xl sm:text-3xl">Contact Us</h3>
            <div className="backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border" style={{ background: 'rgba(30, 27, 75, 0.6)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <p className="text-center text-sm sm:text-base">YU4C Goa Coordination Team</p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #F59E0B, #D97706)' }}>
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-center sm:text-left text-sm sm:text-base">Archdiocese of Goa and Daman</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #1d4ed8, #1a4ed8)' }}>
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <a href="mailto:yu4cgoa@gmail.com" className="transition-colors hover:text-indigo-300 text-sm sm:text-base" style={{ color: '#A5B4FC' }}>
                    yu4cgoa@gmail.com
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center pt-4 sm:pt-6">
                  <a href="#" className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base" style={{ background: 'linear-gradient(to bottom right, #7C3AED, #5B21B6)' }}>
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>@yu4cgoa</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base" style={{ background: 'linear-gradient(to bottom right, #1d4ed8, #1a4ed8)' }}>
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>@yu4cgoa</span>
                  </a>
                </div>
                <p className="text-gray-400 text-center text-xs sm:text-sm pt-3 sm:pt-4 px-2">
                  ⛪ Parish-level prayer groups active across Goa<br />
                  Get in touch to join the one near you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scripture */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border" style={{ background: 'rgba(245, 158, 11, 0.05)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
          <p className="text-gray-300 italic text-center leading-relaxed text-sm sm:text-base">
            "The grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all."
          </p>
          <p className="mt-2 text-center text-sm sm:text-base font-medium" style={{ color: '#FCD34D' }}>— 2 Corinthians 13:14</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t text-center text-gray-400 space-y-2 sm:space-y-3 text-xs sm:text-sm" style={{ borderColor: 'rgba(30, 27, 75, 0.7)' }}>
          <p>© 2025 Youth United for Christ – Goa. All rights reserved.</p>
          <p>Part of the National Catholic Charismatic Renewal Services (NCCRS–India)</p>
        </div>
      </div>
    </footer>
  );
}
