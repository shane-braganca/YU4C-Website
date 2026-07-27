import { Link } from "react-router";
import { ArrowRight, Flame, Users, Calendar, Heart, Star, ChevronRight, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ParallaxHero, ParallaxImage } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=1920&q=80";
const COMMUNITY_IMG = "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=900&q=80";
const PRAYER_IMG = "https://images.unsplash.com/photo-1526746323784-6bc814d79273?auto=format&fit=crop&w=900&q=80";
const STUDY_IMG = "https://images.unsplash.com/photo-1663162550932-f67b561e656f?auto=format&fit=crop&w=900&q=80";
const WORSHIP_IMG = "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?auto=format&fit=crop&w=900&q=80";
const RETREAT_IMG = "https://images.unsplash.com/photo-1600602231465-89f83c332deb?auto=format&fit=crop&w=900&q=80";

const stats = [
  { value: "100+", label: "Active Members" },
  { value: "20+", label: "Prayer Groups" },
  { value: "50+", label: "Events Annually" },
  { value: "1000+", label: "Lives Touched" },
];

const testimonies = [
  {
    text: "Before joining YU4C, I felt lost and alone. Through prayer and fellowship, I experienced Jesus' love for the first time.",
    name: "Alisha", location: "Panjim", initial: "A",
  },
  {
    text: "YU4C taught me that faith isn't boring — it's alive, joyful, and real. These people became my family.",
    name: "Rohan", location: "Margao", initial: "R",
  },
  {
    text: "The Life in the Spirit Seminar completely changed my outlook on life. I discovered my purpose and peace in Christ.",
    name: "Melanie", location: "Vasco", initial: "M",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const VIDEO_THUMB = "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=1400&q=80";
const CONCERT_IMG = "https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&w=1400&q=80";

// Highlight clips (using public YouTube embeds as fallback demo)
const videoHighlights = [
  { id: "v1", thumb: "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?auto=format&fit=crop&w=600&q=80", label: "Spirit Fire Retreat 2024", duration: "3:42" },
  { id: "v2", thumb: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=600&q=80", label: "Praise Night Highlights", duration: "2:15" },
  { id: "v3", thumb: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80", label: "YU4C Community Story", duration: "4:58" },
];

function VideoModal({ onClose }: { onClose: () => void }) {
  // Close on Escape
  if (typeof window !== "undefined") {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler, { once: true });
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 32 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Replace src with actual YouTube embed or video URL */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="YU4C Goa"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div>
      {/* ── HERO ── */}
      <ParallaxHero
        src={HERO_IMG}
        alt="Youth worship"
        overlay="bg-gradient-to-br from-blue-950/90 via-blue-900/75 to-blue-950/70"
        className="min-h-screen flex items-center"
      >
        <FloatingParticles color="bg-white/15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Flame className="w-4 h-4" />
              Spirit-Filled Community · Goa
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              Young Hearts.<br />
              Bold Faith.<br />
              <span className="text-amber-400">United for Christ.</span>
            </motion.h1>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-amber-400 pl-5 mb-10"
            >
              <p className="text-blue-200 italic text-base sm:text-lg">
                "Don't let anyone look down on you because you are young, but set an example for the believers."
              </p>
              <cite className="text-amber-400 text-sm mt-1 block not-italic">— 1 Timothy 4:12</cite>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-white rounded-full font-semibold text-base transition-all hover:scale-105 shadow-xl shadow-amber-500/30 active:scale-95"
              >
                <Flame className="w-5 h-5" /> Join Us
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full font-semibold text-base transition-all backdrop-blur-sm active:scale-95"
              >
                Upcoming Events <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </motion.div>
      </ParallaxHero>

      {/* ── STATS BAND ── */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={staggerItem} className="text-white">
                <p className="text-4xl sm:text-5xl font-extrabold text-amber-400">
                  <AnimatedNumber value={s.value} />
                </p>
                <p className="text-blue-200 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">Who We Are</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  YU4C Goa is the youth ministry wing of the Catholic Charismatic Renewal in the Archdiocese of Goa and Daman — part of the National YU4C movement under NCCRS India.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We exist to bring young people into a living, personal relationship with Jesus Christ and empower them to serve the Church with passion and purpose.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group"
                >
                  Learn more about us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <ParallaxImage
                  src={COMMUNITY_IMG}
                  alt="Youth community"
                  className="rounded-2xl h-56 sm:h-64 shadow-lg"
                />
                <ParallaxImage
                  src={PRAYER_IMG}
                  alt="Youth in prayer"
                  className="rounded-2xl h-56 sm:h-64 shadow-lg mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MINISTRIES PREVIEW ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Ministries</h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { img: WORSHIP_IMG, title: "Prayer Meetings", desc: "Weekly gatherings filled with vibrant praise, worship, and the Word.", to: "/ministries" },
              { img: STUDY_IMG, title: "Bible Study", desc: "Small groups diving deep into Scripture together every week.", to: "/ministries" },
              { img: COMMUNITY_IMG, title: "Community Outreach", desc: "Serving Goa through acts of love, visits, and parish volunteering.", to: "/ministries" },
            ].map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <Link to={card.to} className="group block bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                  <div className="relative h-48 overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/10 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.desc}</p>
                    <span className="text-blue-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                to="/ministries"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
              >
                View All Ministries <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA IMAGE CARDS ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { to: "/prayer-groups", img: PRAYER_IMG, overlay: "from-blue-950/90 via-blue-900/50", icon: Users, iconBg: "bg-blue-500/80", title: "Join a Prayer Group", sub: "Find your parish group", subColor: "text-blue-200" },
              { to: "/events", img: WORSHIP_IMG, overlay: "from-amber-950/90 via-amber-900/50", icon: Calendar, iconBg: "bg-amber-500/80", title: "Upcoming Events", sub: "See what's happening", subColor: "text-amber-200" },
              { to: "/retreats", img: RETREAT_IMG, overlay: "from-blue-950/90 via-blue-900/50", icon: Heart, iconBg: "bg-blue-700/80", title: "Attend a Retreat", sub: "Renew your faith", subColor: "text-blue-200" },
            ].map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <Link to={card.to} className="group relative rounded-3xl overflow-hidden h-72 flex items-end p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1.5 block">
                  <div className="absolute inset-0 overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.overlay} to-transparent`} />
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center mb-3`}>
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{card.title}</h3>
                    <p className={`${card.subColor} text-sm`}>{card.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIES ── */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Testimonies</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Lives Transformed by Christ</h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {testimonies.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 cursor-default"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-blue-100 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">{t.initial}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-blue-300 text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="py-20 sm:py-28 bg-[#061233] overflow-hidden relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(29,78,216,0.35) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,64,175,0.25) 0%, transparent 50%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">See It Live</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience the Movement</h2>
              <p className="text-blue-300 text-lg max-w-2xl mx-auto">Watch what happens when young hearts are set on fire for Christ</p>
            </div>
          </ScrollReveal>

          {/* Main video feature */}
          <ScrollReveal direction="up">
            <div className="relative rounded-3xl overflow-hidden mb-6 group cursor-pointer" onClick={() => setVideoOpen(true)}>
              <div className="aspect-video sm:aspect-[21/9]">
                <img src={CONCERT_IMG} alt="YU4C Worship Night" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent" />
              <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/10 transition-colors" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Pulse rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-amber-400/30"
                    animate={{ scale: [1, 1.8, 1.8], opacity: [0.8, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-amber-400/20"
                    animate={{ scale: [1, 2.4, 2.4], opacity: [0.6, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                  />
                  <div className="relative w-20 h-20 bg-amber-500 hover:bg-amber-400 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-1">Featured</p>
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">Spirit Fire Retreat 2024 — Full Highlight Reel</h3>
                <p className="text-blue-300 text-sm">200+ youth · Old Goa Retreat Center · 3 Days of Encounter</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Thumbnail strip */}
          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {videoHighlights.map((v) => (
              <motion.div
                key={v.id}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setVideoOpen(true)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer aspect-video"
              >
                <img src={v.thumb} alt={v.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-950/50 group-hover:bg-blue-950/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-colors">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-xs leading-tight line-clamp-2">{v.label}</p>
                  <p className="text-blue-300 text-xs mt-0.5">{v.duration}</p>
                </div>
                <div className="absolute top-2.5 right-2.5 bg-black/60 text-white text-[10px] font-medium px-1.5 py-0.5 rounded backdrop-blur-sm">{v.duration}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
      </AnimatePresence>

      {/* ── FINAL CTA ── */}
      <ParallaxHero
        src={WORSHIP_IMG}
        alt="Join us"
        overlay="bg-blue-950/85"
        className="py-28"
        speed={0.25}
      >
        <FloatingParticles color="bg-amber-400/15" />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
              Ready to Begin?
            </h2>
            <p className="text-blue-200 text-lg mb-10 leading-relaxed">
              Whether you're new to faith or ready to go deeper, there's a place for you at YU4C Goa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl">
                <Flame className="w-5 h-5" /> Get Involved Today
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxHero>
    </div>
  );
}
