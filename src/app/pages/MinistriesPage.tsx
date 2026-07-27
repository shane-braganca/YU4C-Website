import { Link } from "react-router";
import { Flame, BookOpen, Mountain, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero, ParallaxImage } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?auto=format&fit=crop&w=1920&q=80";

const ministries = [
  { icon: Flame, title: "Prayer Meetings", description: "Weekly youth gatherings filled with vibrant praise, worship, and sharing of the Word. These meetings are the heartbeat of YU4C — a safe place to encounter God and grow in community.", verse: '"Sing to the Lord a new song; sing to the Lord, all the earth." — Psalm 96:1', img: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=800&q=80", color: "from-blue-700 to-blue-800", link: "/prayer-groups", linkLabel: "Find a Prayer Group" },
  { icon: BookOpen, title: "Life in the Spirit Seminars", description: "A seven-week journey that helps youth experience God's love, forgiveness, and the power of the Holy Spirit. Thousands of young Goans have been transformed through this program.", verse: '"You will receive power when the Holy Spirit comes on you." — Acts 1:8', img: "https://images.unsplash.com/photo-1554355792-f1e604a9c3d1?auto=format&fit=crop&w=800&q=80", color: "from-blue-800 to-blue-900", link: "/events", linkLabel: "See Upcoming LSS" },
  { icon: Mountain, title: "Retreats & Youth Camps", description: "Encounters that renew hearts, strengthen faith, and build lasting friendships rooted in Christ. Our retreats are held at beautiful locations across Goa and beyond.", verse: '"Come to me, all you who are weary, and I will give you rest." — Matthew 11:28', img: "https://images.unsplash.com/photo-1600602231465-89f83c332deb?auto=format&fit=crop&w=800&q=80", color: "from-emerald-600 to-emerald-800", link: "/retreats", linkLabel: "View Retreats" },
  { icon: GraduationCap, title: "Formation & Leadership", description: "Workshops on Christian living, relationships, discernment, and leadership in the Church. We invest in raising up the next generation of servant leaders for Goa.", verse: '"Train yourself to be godly." — 1 Timothy 4:7', img: "https://images.unsplash.com/photo-1663162550932-f67b561e656f?auto=format&fit=crop&w=800&q=80", color: "from-amber-500 to-amber-700", link: "/events", linkLabel: "View Formation Events" },
  { icon: Heart, title: "Outreach & Service", description: "Acts of love through visits to homes, service projects, and volunteering in parishes across Goa. We believe faith must be expressed through action and compassion.", verse: '"Whatever you did for the least of these, you did for me." — Matthew 25:40', img: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=800&q=80", color: "from-rose-600 to-rose-800", link: "/join", linkLabel: "Get Involved" },
];

const lifestyleItems = [
  { emoji: "🙏", label: "A heart of prayer", sub: "Daily communion with God" },
  { emoji: "🎵", label: "A spirit of worship", sub: "Praising Him in all things" },
  { emoji: "✨", label: "A life of purity", sub: "Living as His witnesses" },
  { emoji: "🤝", label: "Community commitment", sub: "Growing together in faith" },
];

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function MinistriesPage() {
  return (
    <div>
      <ParallaxHero src={HERO_IMG} alt="Ministries" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Ministries</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Our Ministries & Activities</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-blue-200 text-lg max-w-xl">Serving Christ through prayer, formation, retreats, and outreach</motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {ministries.map((m, i) => (
            <div key={m.title} className={`grid lg:grid-cols-2 gap-10 items-center`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                <ParallaxImage
                  src={m.img}
                  alt={m.title}
                  className={`rounded-2xl h-72 sm:h-80 shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}
                />
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <m.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{m.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5 text-lg">{m.description}</p>
                  <blockquote className="border-l-4 border-blue-400 pl-4 mb-6">
                    <p className="text-gray-600 italic text-sm leading-relaxed">{m.verse}</p>
                  </blockquote>
                  <Link to={m.link} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-sm">
                    {m.linkLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Spiritual Lifestyle */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Way of Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Spiritual Lifestyle</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">Being a YU4C member is about living a lifestyle of faith, rooted in Christ and empowered by the Holy Spirit.</p>
          </ScrollReveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {lifestyleItems.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center cursor-default"
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                <p className="text-blue-300 text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal>
            <blockquote className="max-w-2xl mx-auto bg-white/10 border border-amber-400/30 rounded-xl p-6">
              <p className="text-blue-100 italic text-lg leading-relaxed mb-2">"I have come that they may have life, and have it to the full."</p>
              <cite className="text-amber-400 text-sm not-italic font-semibold">— John 10:10</cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to get involved?</h2>
            <p className="text-gray-600 mb-8">Pick a ministry that calls to you and take your first step today.</p>
            <Link to="/join" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95">
              Join a Ministry <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
