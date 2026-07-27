import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1740995384603-24b2ad0b6234?w=800&q=80",
      alt: "Youth worship moment",
    },
    {
      src: "https://images.unsplash.com/photo-1758610840977-8ee55513281c?w=800&q=80",
      alt: "Young people gathering",
    },
    {
      src: "https://images.unsplash.com/photo-1565813086292-604790c8a97b?w=800&q=80",
      alt: "Church community",
    },
    {
      src: "https://images.unsplash.com/photo-1580892621648-ceee4eacafe4?w=800&q=80",
      alt: "Hands praying together",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0C2461, #061233, #061233)' }}>
      {/* Divine light from above */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-full bg-gradient-to-b from-white via-indigo-200/10 to-transparent" />
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-indigo-300 via-indigo-300/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-300 via-amber-300/10 to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(99, 102, 241, 0.1)' }} />

      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-2 backdrop-blur-sm border rounded-full mb-4 sm:mb-6 text-sm sm:text-base" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.35)' }}>
            <span className="flex items-center gap-2" style={{ color: '#FCD34D' }}>
              <span>📷</span>
              Our Journey
            </span>
          </div>
          <h2 className="tracking-tight mb-3 sm:mb-4 text-white text-2xl sm:text-3xl md:text-4xl">Gallery</h2>
          <p className="text-indigo-200 text-base sm:text-lg">
            A showcase of our moments of worship, laughter, and mission.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300" style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
