import { ArrowRight } from "lucide-react";

export function JoinUs() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #312E81, #4C1D95, #5B21B6)' }}>
      {/* Divine heavenly light */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-white via-white/10 to-transparent" />
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-indigo-200 via-indigo-200/10 to-transparent transform rotate-15" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-200 via-amber-200/10 to-transparent transform -rotate-15" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(99, 102, 241, 0.2)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(245, 158, 11, 0.15)' }} />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-indigo-300 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-amber-300 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="inline-block px-4 sm:px-6 py-2 backdrop-blur-sm border rounded-full mb-4 sm:mb-6 text-sm sm:text-base" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
            <span style={{ color: '#FCD34D' }}>Join the Movement</span>
          </div>
          <h2 className="text-white mb-4 sm:mb-6 tracking-tight text-2xl sm:text-3xl md:text-4xl">Ready to Begin?</h2>
          <p className="text-indigo-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Whether you're new to faith or ready to go deeper, there's a place for you at YU4C Goa.
          </p>
        </div>

        <button className="px-8 sm:px-10 py-3 sm:py-4 text-white hover:shadow-2xl hover:scale-105 transition-all duration-200 rounded-full inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg shadow-xl" style={{ background: 'linear-gradient(to right, #F59E0B, #D97706)' }}>
          Get Involved Today
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
