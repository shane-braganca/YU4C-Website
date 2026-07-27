import { Flame, MessageCircle, Mountain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="relative h-[500px] sm:h-[600px] md:h-[700px]">
        {/* Divine light rays background - Youth Indigo theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
            <div className="absolute top-0 left-1/2 w-1 h-full transform -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.4), transparent)' }} />
            <div className="absolute top-0 left-1/2 w-1 h-full transform -translate-x-1/2 rotate-12" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.3), transparent)' }} />
            <div className="absolute top-0 left-1/2 w-1 h-full transform -translate-x-1/2 -rotate-12" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), transparent)' }} />
            <div className="absolute top-0 left-1/2 w-1 h-full transform -translate-x-1/2 rotate-24" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.2), transparent)' }} />
            <div className="absolute top-0 left-1/2 w-1 h-full transform -translate-x-1/2 -rotate-24" style={{ background: 'linear-gradient(to bottom, rgba(79, 70, 229, 0.2), transparent)' }} />
          </div>
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(99, 102, 241, 0.25)', animationDuration: '4s' }} />
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(245, 158, 11, 0.2)', animationDelay: '1s', animationDuration: '5s' }} />
          <div className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(139, 92, 246, 0.15)', animationDelay: '2s', animationDuration: '6s' }} />
        </div>

        {/* Light gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #EEF2FF 50%, #FAF5FF 100%)' }} />

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1628972936429-5bd585af7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZXN1cyUyMENocmlzdCUyMGxpZ2h0JTIwcmF5c3xlbnwxfHx8fDE3NjI4NDU2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Jesus Christ with divine light"
          className="w-full h-full object-cover opacity-15 mix-blend-multiply"
        />

        {/* Divine light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <ScrollReveal direction="zoom">
              <div className="max-w-5xl space-y-6 sm:space-y-8 relative pt-8 sm:pt-0">
                <div className="hidden md:block absolute -top-20 -left-20 w-24 h-24 opacity-20">
                  <div className="text-6xl">🕊️</div>
                </div>

                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 backdrop-blur-sm border-2 rounded-full shadow-lg text-sm sm:text-base" style={{ background: 'linear-gradient(to right, rgba(99, 102, 241, 0.15), rgba(245, 158, 11, 0.15))', borderColor: 'rgba(99, 102, 241, 0.4)' }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #4F46E5, #F59E0B)' }} />
                  <span className="font-medium" style={{ color: '#312E81' }}>🔥 Spirit-Filled Community</span>
                </div>

                <div className="relative">
                  <h1 className="tracking-tight leading-tight mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                    Young Hearts. Bold Faith.<br />
                    <span style={{
                      background: 'linear-gradient(to right, #4F46E5, #7C3AED, #F59E0B)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      United for Christ.
                    </span>
                  </h1>
                  <div className="mt-4 sm:mt-6 max-w-3xl">
                    <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed border-l-4 pl-4 sm:pl-6 py-2 sm:py-3 rounded-r-lg" style={{ borderColor: '#6366F1', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.06), rgba(245, 158, 11, 0.04))' }}>
                      "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."
                    </p>
                    <p className="mt-2 pl-4 sm:pl-6 text-sm sm:text-base font-medium" style={{ color: '#4F46E5' }}>— 1 Timothy 4:12</p>
                  </div>
                  <div className="mt-6 sm:mt-8 h-1 w-24 sm:w-32 rounded-full shadow-lg" style={{ background: 'linear-gradient(to right, #4F46E5, #F59E0B)', boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #F0F4FF, #EEF2FF, #FAF5FF)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal delay={0.2} direction="up">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border-2 shadow-2xl" style={{ borderColor: '#6366F1', boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.2)' }}>
                <h2 className="text-gray-900 text-xl sm:text-2xl">Welcome to Youth United for Christ – Goa</h2>
                <p className="text-gray-700 max-w-3xl text-base sm:text-lg leading-relaxed">
                  Where <span className="font-semibold" style={{
                    background: 'linear-gradient(to right, #4F46E5, #F59E0B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>faith meets fire!</span> We are a dynamic community of young people encountering Jesus, growing together in His Word, and living out our calling as witnesses of His love.
                </p>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Through prayer, fellowship, and mission, we seek to make Christ known and loved in every corner of Goa. Whether you're exploring faith, searching for purpose, or already walking with Jesus — this is your space to belong.
                </p>
                <div className="pt-4 border-t" style={{ borderColor: '#E0E0E0' }}>
                  <p className="text-gray-700 italic text-sm sm:text-base">
                    "Arise, shine, for your light has come, and the glory of the Lord rises upon you."
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-medium" style={{ color: '#4F46E5' }}>— Isaiah 60:1</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1} direction="left">
              <a
                href="#prayer-groups"
                className="relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col gap-4 sm:gap-6 group hover:-translate-y-3 border-2 overflow-hidden" style={{ borderColor: '#6366F1' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), transparent)' }} />
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 rounded-2xl shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4F46E5, #312E81)' }}>
                    <Flame className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ background: '#6366F1' }} />
                </div>
                <div className="relative">
                  <h3 className="mb-2 text-gray-900 text-lg sm:text-xl">Join a Prayer Group</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Experience vibrant worship and fellowship</p>
                  <div className="mt-4 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, #4F46E5, transparent)' }} />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <a
                href="#events"
                className="relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col gap-4 sm:gap-6 group hover:-translate-y-3 border-2 overflow-hidden" style={{ borderColor: '#F59E0B' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(245, 158, 11, 0.12), transparent)' }} />
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 rounded-2xl shadow-lg" style={{ background: 'linear-gradient(to bottom right, #F59E0B, #D97706)' }}>
                    <Mountain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="mb-2 text-gray-900 text-lg sm:text-xl">Attend a Retreat</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Renew your heart and strengthen your faith</p>
                  <div className="mt-4 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, #F59E0B, transparent)' }} />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="right">
              <a
                href="#contact"
                className="relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col gap-4 sm:gap-6 group hover:-translate-y-3 border-2 overflow-hidden sm:col-span-2 lg:col-span-1" style={{ borderColor: '#7C3AED' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.1), transparent)' }} />
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 rounded-2xl shadow-lg" style={{ background: 'linear-gradient(to bottom right, #7C3AED, #5B21B6)' }}>
                    <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="mb-2 text-gray-900 text-lg sm:text-xl">Contact Us</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Connect with our community today</p>
                  <div className="mt-4 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, #7C3AED, transparent)' }} />
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
