import { Link } from "react-router";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&w=1920&q=80";

const events = [
  { emoji: "🔥", title: "Spirit Fire 2025", category: "Retreat", description: "An immersive three-day youth retreat at Old Goa filled with powerful worship, healing prayer, and spiritual renewal.", date: "January 20–22, 2025", location: "Old Goa Retreat Center", img: "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?auto=format&fit=crop&w=800&q=80", badgeClass: "bg-blue-100 text-blue-700" },
  { emoji: "🎶", title: "Praise Night Goa", category: "Worship", description: "A monthly evening of vibrant worship, spontaneous prayer, and testimonies. Open to all youth, every First Friday.", date: "Every First Friday", location: "Various Parishes, Goa", img: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=800&q=80", badgeClass: "bg-amber-100 text-amber-700" },
  { emoji: "✝️", title: "Lenten Youth Recollection", category: "Recollection", description: "A guided day of prayer, reflection, and the Sacrament of Reconciliation. A powerful time to draw closer to God.", date: "March 15, 2025", location: "Cathedral of Se, Goa", img: "https://images.unsplash.com/photo-1712786915957-e17bb37425cb?auto=format&fit=crop&w=800&q=80", badgeClass: "bg-blue-100 text-blue-900" },
  { emoji: "💡", title: "Faith & Culture Workshop", category: "Formation", description: "Interactive workshops on living for Christ in today's world — navigating social media, relationships, and career.", date: "February 10, 2025", location: "Margao Parish Hall", img: "https://images.unsplash.com/photo-1663162550932-f67b561e656f?auto=format&fit=crop&w=800&q=80", badgeClass: "bg-blue-100 text-blue-700" },
  { emoji: "🌿", title: "Life in the Spirit Seminar", category: "Seminar", description: "A transformative seven-week journey helping youth experience God's love, forgiveness, and the power of the Holy Spirit.", date: "Starts April 5, 2025", location: "YU4C Formation Center, Panaji", img: "https://images.unsplash.com/photo-1526746323784-6bc814d79273?auto=format&fit=crop&w=800&q=80", badgeClass: "bg-emerald-100 text-emerald-700" },
  { emoji: "🤲", title: "Outreach Day – Serve Goa", category: "Outreach", description: "A community service day where youth come together to serve the poor and bring the love of Christ to those in need.", date: "April 27, 2025", location: "Multiple Locations, Goa", img: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=800&q=80", badgeClass: "bg-rose-100 text-rose-700" },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function EventsPage() {
  return (
    <div>
      <ParallaxHero src={HERO_IMG} alt="Events" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Events</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Upcoming Events</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-blue-200 text-lg max-w-xl">Join us for Spirit-filled gatherings, retreats, and encounters with Christ</motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {events.map((event) => (
              <motion.div
                key={event.title}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-blue-950/30 group-hover:bg-blue-950/10 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.badgeClass}`}>{event.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-3xl">{event.emoji}</div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4 text-blue-500" /><span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-blue-500" /><span>{event.location}</span>
                    </div>
                  </div>
                  <Link to="/join" className="w-full py-3 bg-blue-700 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors group/btn">
                    Register / Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-gray-700 italic text-xl leading-relaxed mb-3">
              "Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together."
            </p>
            <p className="text-blue-700 font-semibold">— Hebrews 10:24–25</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">Follow us on Instagram and Facebook for the latest event updates.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://instagram.com/yu4cgoa" target="_blank" rel="noreferrer" className="px-7 py-3 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">@yu4cgoa on Instagram</a>
              <Link to="/contact" className="px-7 py-3 border-2 border-blue-200 text-blue-700 hover:border-blue-700 rounded-full font-semibold transition-all">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
