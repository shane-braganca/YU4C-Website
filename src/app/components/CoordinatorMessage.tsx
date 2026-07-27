export function CoordinatorMessage() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #061233, #0C2461, #0C2461)' }}>
      {/* Divine light from heaven */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-white via-indigo-200/20 to-transparent" />
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-indigo-300 via-indigo-300/20 to-transparent transform rotate-12" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-300 via-amber-300/20 to-transparent transform -rotate-12" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(99, 102, 241, 0.15)' }} />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(245, 158, 11, 0.1)' }} />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-300 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-4 sm:px-6 py-2 backdrop-blur-sm border rounded-full mb-4 sm:mb-6 text-sm sm:text-base" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.35)', color: '#FCD34D' }}>
            <span className="flex items-center gap-2">
              <span>💬</span>
              From the Coordinator
            </span>
          </div>
          <h2 className="tracking-tight mb-4 text-white text-2xl sm:text-3xl md:text-4xl">Message from the Coordinator</h2>
        </div>

        <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border-2 shadow-xl" style={{ borderColor: 'rgba(165, 180, 252, 0.5)' }}>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
            "Dear Young People,"
          </p>
          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              The Church needs you. The world needs your light, your courage, and your faith. YU4C Goa is not just a ministry — it's a movement of young hearts burning for Jesus. Together, we dream of a generation that is unashamed of the Gospel and ready to serve in love.
            </p>
            <p>
              Remember, God doesn't call the qualified; He qualifies the called. Step out in faith and watch what He will do through you.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
            <p className="text-gray-900 text-sm sm:text-base">In Christ's love,</p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">[Coordinator's Name]</p>
            <p className="text-sm sm:text-base font-medium" style={{ color: '#1d4ed8' }}>YU4C Goa</p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 shadow-lg" style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}>
          <p className="text-gray-700 italic text-center leading-relaxed text-sm sm:text-base">
            "The harvest is plentiful, but the workers are few."
          </p>
          <p className="mt-2 text-center text-sm sm:text-base font-medium" style={{ color: '#D97706' }}>— Luke 10:2</p>
        </div>
      </div>
    </section>
  );
}
