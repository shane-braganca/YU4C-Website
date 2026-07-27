import { Link } from "react-router";
import { ArrowRight, Mountain, Calendar, MapPin, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero, ParallaxImage } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1600602231465-89f83c332deb?auto=format&fit=crop&w=1920&q=80";

const retreats = [
  {
    title: "Spirit Fire Youth Retreat",
    subtitle: "Ignite. Encounter. Transform.",
    description: "An immersive three-day residential retreat for youth aged 16–30. Expect powerful worship nights, healing prayer ministry, Spirit-filled talks, and small group encounters that change lives.",
    date: "January 20–22, 2025",
    location: "Old Goa Retreat Center, Old Goa",
    tags: ["Ages 16–30", "Residential", "3 Days"],
    img: "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?auto=format&fit=crop&w=900&q=80",
    icon: "🔥",
    highlight: "Annual flagship retreat",
    color: "from-blue-700 to-blue-800",
  },
  {
    title: "Encounter Weekend",
    subtitle: "A Weekend to Remember God's Love",
    description: "A two-day non-residential retreat focused on personal encounter with Jesus. Designed for youth who are new to the Charismatic Renewal or want to deepen their prayer life.",
    date: "March 8–9, 2025",
    location: "St. Joseph's Parish Hall, Margao",
    tags: ["Ages 14–28", "Non-residential", "2 Days"],
    img: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=900&q=80",
    icon: "✨",
    highlight: "Great for newcomers",
    color: "from-blue-800 to-blue-900",
  },
  {
    title: "Nature & Spirit Camp",
    subtitle: "Wilderness, Wonder, and Worship",
    description: "A unique outdoor camp combining prayer, Scripture reflection, and nature activities in the beautiful hills of Goa. Grow closer to God through creation and community.",
    date: "May 10–13, 2025",
    location: "Sahyadri Hills, Goa",
    tags: ["Ages 13–25", "Camp", "4 Days"],
    img: "https://images.unsplash.com/photo-1624365700883-cc574778eff5?auto=format&fit=crop&w=900&q=80",
    icon: "🌿",
    highlight: "Outdoor experience",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    title: "Lenten Recollection Day",
    subtitle: "A Day of Silence, Prayer & Renewal",
    description: "A guided day of deep prayer, Scripture meditation, and the Sacrament of Reconciliation during the Lenten season. Perfect for slowing down and returning to God's heart.",
    date: "March 15, 2025",
    location: "Cathedral of Sé, Old Goa",
    tags: ["All Ages", "Day Event", "1 Day"],
    img: "https://images.unsplash.com/photo-1712786915957-e17bb37425cb?auto=format&fit=crop&w=900&q=80",
    icon: "✝️",
    highlight: "Lenten special",
    color: "from-amber-500 to-amber-700",
  },
];

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function RetreatsPage() {
  return (
    <div>
      <ParallaxHero src={HERO_IMG} alt="Retreats" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Retreats</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Retreats & Youth Camps</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-blue-200 text-lg max-w-xl">Life-changing encounters with Christ — in prayer, community, and creation</motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {retreats.map((retreat, i) => (
            <div key={retreat.title} className="grid lg:grid-cols-2 gap-10 items-center">
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                <ParallaxImage
                  src={retreat.img}
                  alt={retreat.title}
                  className={`rounded-2xl h-72 sm:h-80 shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}
                />
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{retreat.icon}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${retreat.color}`}>{retreat.highlight}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{retreat.title}</h2>
                  <p className="text-blue-700 font-medium italic mb-4">{retreat.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-5 text-base">{retreat.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {retreat.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-7">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 text-blue-500" /> {retreat.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-blue-500" /> {retreat.location}
                    </div>
                  </div>

                  <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-sm">
                    Register for this Retreat <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.div className="text-5xl mb-6" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>🏔️</motion.div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Testimonies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Encounter Stories</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-12">Hundreds of young Goans have had life-changing encounters at our retreats</p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { quote: "Spirit Fire changed my life. I went home knowing God loves me and I have a purpose.", name: "Priya D., Panaji", retreat: "Spirit Fire 2024" },
              { quote: "The Encounter Weekend was exactly what I needed — quiet, powerful, and full of God's presence.", name: "Aaron F., Margao", retreat: "Encounter Weekend 2024" },
              { quote: "I had never experienced the Holy Spirit so powerfully. God met me in that place.", name: "Michelle C., Mapusa", retreat: "Spirit Fire 2023" },
            ].map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-left"
              >
                <Heart className="w-6 h-6 text-amber-400 mb-4" />
                <p className="text-blue-100 italic text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-blue-400 text-xs mt-1">{t.retreat}</p>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal>
            <Link to="/join" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-blue-950 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-lg">
              Register for a Retreat <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
