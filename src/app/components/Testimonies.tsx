import { Quote, Heart, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonies() {
  const testimonies = [
    {
      text: "Before joining YU4C, I felt lost and alone. Through prayer and fellowship, I experienced Jesus' love for the first time.",
      name: "Alisha",
      location: "Panjim",
      avatar: "A",
      gradient: "linear-gradient(135deg, #4F46E5 0%, #312E81 100%)",
      rating: 5
    },
    {
      text: "YU4C taught me that faith isn't boring — it's alive, joyful, and real.",
      name: "Rohan",
      location: "Margao",
      avatar: "R",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      rating: 5
    },
    {
      text: "The Life in the Spirit Seminar completely changed my outlook on life. I discovered my purpose and peace in Christ.",
      name: "Melanie",
      location: "Vasco",
      avatar: "M",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
      rating: 5
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F4FF, #EEF2FF, #FAF5FF)' }}>
      {/* Divine light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-indigo-300 via-indigo-200/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-300 via-amber-200/30 to-transparent" />
      </div>

      <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse" style={{ background: 'rgba(196, 181, 253, 0.4)', animationDuration: '5s' }} />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-25 animate-pulse" style={{ background: 'rgba(253, 230, 138, 0.4)', animationDuration: '6s', animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="down">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 border rounded-full mb-6 text-sm sm:text-base" style={{ background: 'rgba(99, 102, 241, 0.06)', borderColor: 'rgba(99, 102, 241, 0.25)' }}>
              <Heart className="w-4 h-4" style={{ color: '#6366F1' }} />
              <span style={{ color: '#312E81' }}>Testimonies</span>
            </div>
            <h2 className="tracking-tight mb-4 text-2xl sm:text-3xl md:text-4xl text-gray-900">Lives Transformed by Christ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Hear from young people whose lives have been touched by God's grace through our community
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonies Grid */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonies.map((testimony, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.15}
                direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
              >
                <div className="group relative h-full">
                  <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" style={{ background: testimony.gradient }} />
                  <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 group-hover:-translate-y-2" style={{ borderColor: '#E5E7EB' }}>
                    <div className="absolute top-6 right-6 opacity-5">
                      <Quote className="w-24 h-24" style={{ color: '#6366F1' }} />
                    </div>
                    <div className="relative p-6 sm:p-8 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimony.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} />
                        ))}
                      </div>
                      <div className="flex-1 mb-6">
                        <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                          "{testimony.text}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(99, 102, 241, 0.1)' }}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform" style={{ background: testimony.gradient }}>
                          <span className="text-lg sm:text-xl font-bold">{testimony.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm sm:text-base">— {testimony.name}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{testimony.location}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                          <Heart className="w-4 h-4" style={{ color: '#6366F1' }} />
                        </div>
                      </div>
                    </div>
                    <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: testimony.gradient }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="text-center">
            <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl border-2 shadow-xl" style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(245, 158, 11, 0.04))',
              borderColor: 'rgba(99, 102, 241, 0.2)'
            }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4F46E5, #F59E0B)' }}>
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-gray-900 text-xl sm:text-2xl">Your Story Matters</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Have you experienced God's transforming love through YU4C? We'd love to hear your testimony and share how Christ is working in your life.
              </p>
              <button className="px-8 py-3 text-white rounded-full hover:shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)' }}>
                Share Your Story
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
