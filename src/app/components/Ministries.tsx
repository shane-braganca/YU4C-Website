import { Flame, BookOpen, Mountain, GraduationCap, Heart } from "lucide-react";

export function Ministries() {
  const ministries = [
    {
      icon: Flame,
      number: "1️⃣",
      title: "Prayer Meetings",
      description: "Weekly youth gatherings filled with vibrant praise, worship, and sharing of the Word.",
      verse: "Sing to the Lord a new song; sing to the Lord, all the earth.",
      reference: "Psalm 96:1",
      gradient: "linear-gradient(to bottom right, #4F46E5, #312E81)",
    },
    {
      icon: BookOpen,
      number: "2️⃣",
      title: "Life in the Spirit Seminars (LSS)",
      description: "A seven-week journey that helps youth experience God's love, forgiveness, and the power of the Holy Spirit.",
      gradient: "linear-gradient(to bottom right, #7C3AED, #5B21B6)",
    },
    {
      icon: Mountain,
      number: "3️⃣",
      title: "Retreats & Youth Camps",
      description: "Encounters that renew hearts, strengthen faith, and build lasting friendships rooted in Christ.",
      verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28",
      gradient: "linear-gradient(to bottom right, #F59E0B, #D97706)",
    },
    {
      icon: GraduationCap,
      number: "4️⃣",
      title: "Formation & Leadership Programs",
      description: "Workshops on Christian living, relationships, discernment, and leadership in the Church.",
      gradient: "linear-gradient(to bottom right, #6366F1, #F59E0B)",
    },
    {
      icon: Heart,
      number: "5️⃣",
      title: "Outreach & Service",
      description: "Acts of love through visits to homes, service projects, and volunteering in parishes.",
      verse: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
      reference: "Matthew 25:40",
      gradient: "linear-gradient(to bottom right, #F59E0B, #4F46E5)",
    },
  ];

  return (
    <section id="ministries" className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #EEF2FF, #F0F4FF, #FAF5FF)' }}>
      {/* Divine light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/4 w-1 h-full" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.2), transparent)' }} />
        <div className="absolute top-0 left-1/2 w-1.5 h-full" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.35), rgba(245, 158, 11, 0.2), transparent)' }} />
        <div className="absolute top-0 right-1/4 w-1 h-full" style={{ background: 'linear-gradient(to bottom, rgba(124, 58, 237, 0.3), rgba(124, 58, 237, 0.2), transparent)' }} />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: '#EDE9FE' }} />
      <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: '#FEF3C7' }} />

      {/* Spiritual light particles */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-32 left-32 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(99, 102, 241, 0.6)' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(245, 158, 11, 0.6)', animationDelay: '0.7s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(124, 58, 237, 0.5)', animationDelay: '1.4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 rounded-full mb-4 sm:mb-6 shadow-lg text-sm sm:text-base" style={{ borderColor: '#6366F1', color: '#312E81' }}>
            <span className="text-2xl sm:text-3xl animate-pulse">🔥</span>
            <span>Our Ministries</span>
          </div>
          <h2 className="tracking-tight mb-4 sm:mb-6 text-gray-900 text-2xl sm:text-3xl md:text-4xl">Our Ministries & Activities</h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="h-1.5 w-12 sm:w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #4F46E5)' }} />
            <div className="h-1.5 w-16 sm:w-24 rounded-full" style={{ background: 'linear-gradient(to right, #4F46E5, #F59E0B)' }} />
            <div className="h-1.5 w-12 sm:w-16 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #F59E0B)' }} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {ministries.map((ministry, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 opacity-10 rounded-3xl transform group-hover:scale-105 transition-all duration-500 group-hover:opacity-20" style={{ background: ministry.gradient }} />
              <div className="relative space-y-4 sm:space-y-6 p-6 sm:p-8 md:p-10 bg-white rounded-3xl border-2 hover:shadow-2xl transition-all duration-500 h-full flex flex-col" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-center justify-between relative">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ background: ministry.gradient }}>
                      <ministry.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300">{ministry.number}</span>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="mb-3 sm:mb-4 leading-snug text-gray-900 text-lg sm:text-xl">{ministry.title}</h3>
                  <div className="w-16 sm:w-20 h-1.5 rounded-full mb-3 sm:mb-4 group-hover:w-24 sm:group-hover:w-32 transition-all duration-500" style={{ background: ministry.gradient }} />
                  <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{ministry.description}</p>

                  {ministry.verse && (
                    <div className="mt-auto pt-3 sm:pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
                      <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed">
                        "{ministry.verse}"
                      </p>
                      <p className="text-xs sm:text-sm mt-2" style={{ color: '#4F46E5' }}>— {ministry.reference}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
