import { Heart, BookOpen, Church, Cross, Users, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const coreBeliefs = [
    {
      icon: Cross,
      title: "Jesus Christ is the center of our lives",
      gradient: "linear-gradient(to bottom right, #4F46E5, #312E81)",
      description: "He is our Lord, Savior, and the foundation of all we do."
    },
    {
      icon: Heart,
      title: "The Holy Spirit empowers us to live in freedom and truth",
      gradient: "linear-gradient(to bottom right, #6D28D9, #F59E0B)",
      description: "Through the Spirit, we experience God's love and guidance daily."
    },
    {
      icon: BookOpen,
      title: "The Word of God is our guide and strength",
      gradient: "linear-gradient(to bottom right, #F59E0B, #D97706)",
      description: "Scripture illuminates our path and transforms our hearts."
    },
    {
      icon: Church,
      title: "The Church is our home and mission field",
      gradient: "linear-gradient(to bottom right, #7C3AED, #5B21B6)",
      description: "We serve and grow within the body of Christ."
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F4FF, #EEF2FF, #FAF5FF)' }}>
      {/* Spiritual divine rays */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-0.5 h-full" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.1), transparent)' }} />
        <div className="absolute top-0 left-1/2 w-1 h-full" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.25), rgba(245, 158, 11, 0.1), transparent)' }} />
        <div className="absolute top-0 right-1/4 w-0.5 h-full" style={{ background: 'linear-gradient(to bottom, rgba(124, 58, 237, 0.3), rgba(124, 58, 237, 0.1), transparent)' }} />
        <div className="absolute top-0 left-1/3 w-0.5 h-full transform rotate-3" style={{ background: 'linear-gradient(to bottom, rgba(79, 70, 229, 0.2), transparent)' }} />
        <div className="absolute top-0 right-1/3 w-0.5 h-full transform -rotate-3" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.15), transparent)' }} />
      </div>

      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 opacity-10">
        <span className="text-8xl">🕊️</span>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full blur-3xl opacity-30 animate-pulse" style={{ background: 'rgba(99, 102, 241, 0.25)', animationDuration: '4s' }} />
      <div className="absolute bottom-40 left-10 w-64 h-64 rounded-full blur-3xl opacity-25 animate-pulse" style={{ background: 'rgba(245, 158, 11, 0.25)', animationDuration: '5s', animationDelay: '1s' }} />

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(99, 102, 241, 0.5)' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(245, 158, 11, 0.5)', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(124, 58, 237, 0.5)', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Who We Are */}
        <div className="mb-20 sm:mb-24 md:mb-32">
          <ScrollReveal direction="down">
            <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center shadow-xl transform rotate-6" style={{ background: 'linear-gradient(to bottom right, #4F46E5, #F59E0B)' }}>
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white -rotate-6" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-lg animate-pulse" style={{ background: '#6366F1' }} />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse" style={{ background: '#F59E0B', animationDelay: '0.5s' }} />
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4 text-sm sm:text-base" style={{ background: 'rgba(99, 102, 241, 0.07)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#312E81' }}>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#6366F1' }} />
                    ✝ About Us
                  </span>
                </div>
                <h2 className="tracking-tight mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl text-gray-900">Who We Are</h2>
                <div className="h-1.5 w-20 sm:w-24 rounded-full mb-6 sm:mb-8" style={{ background: 'linear-gradient(to right, #4F46E5, #F59E0B, transparent)' }} />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <ScrollReveal delay={0.2} direction="left">
              <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="relative pl-4 sm:pl-6 border-l-4 py-3 rounded-r-lg" style={{ borderColor: '#6366F1', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), rgba(245, 158, 11, 0.03))' }}>
                  YU4C Goa is the youth ministry wing of the Catholic Charismatic Renewal in the Archdiocese of Goa and Daman. We are part of the National YU4C movement under the National Catholic Charismatic Renewal Services (NCCRS – India).
                </p>
                <p>
                  We exist to bring young people into a living, personal relationship with Jesus Christ and to empower them to serve the Church with passion and purpose.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.08), rgba(245, 158, 11, 0.08), transparent)' }} />
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-2" style={{ borderColor: '#6366F1' }}>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                    <span className="text-xl sm:text-2xl">🙏</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-3 sm:mb-4 text-sm sm:text-base">
                    "For where two or three gather in my name, there am I with them."
                  </p>
                  <p className="text-sm sm:text-base font-medium" style={{ color: '#4F46E5' }}>— Matthew 18:20</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Core Beliefs */}
        <div>
          <ScrollReveal direction="down">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm sm:text-base" style={{ background: 'rgba(99, 102, 241, 0.07)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#312E81' }}>
                <Sparkles className="w-4 h-4" style={{ color: '#6366F1' }} />
                <span>Our Foundation</span>
              </div>
              <h2 className="tracking-tight mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl text-gray-900">Our Core Beliefs</h2>
              <div className="h-1.5 w-20 sm:w-24 rounded-full mx-auto mb-6 sm:mb-8" style={{ background: 'linear-gradient(to right, #4F46E5, #F59E0B, transparent)' }} />
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                These fundamental truths guide our community and shape our mission
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {coreBeliefs.map((belief, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" style={{ background: belief.gradient }} />
                  <div className="relative h-full p-6 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 group-hover:-translate-y-2" style={{ borderColor: '#E5E7EB' }}>
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative" style={{ background: belief.gradient }}>
                        <belief.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-gray-900 text-lg sm:text-xl leading-snug">{belief.title}</h3>
                    <div className="w-12 h-1 rounded-full mb-4 group-hover:w-full transition-all duration-500" style={{ background: belief.gradient }} />
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{belief.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
