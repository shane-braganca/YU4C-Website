import { Link } from "react-router";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80";
const PRAYER_IMG = "https://images.unsplash.com/photo-1526746323784-6bc814d79273?auto=format&fit=crop&w=800&q=80";

const groups = [
  { area: "Panaji", parishes: ["Immaculate Conception Church (Basement Hall)"], day: "Sundays", time: "11:00 AM", contact: "Contact parish office", color: "bg-blue-700" },
  { area: "Margao", parishes: ["Our Lady of Grace"], day: "Sundays", time: "11:00 AM", contact: "Contact parish office", color: "bg-blue-800" },
  { area: "Mapusa", parishes: ["Our Lady of Miracles", "St. Britto Parish", "Chapel of St. Francis"], day: "Saturdays", time: "4:30 PM", contact: "Contact parish office", color: "bg-amber-500" },
 ];

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function PrayerGroupsPage() {
  return (
    <div>
      <ParallaxHero src={HERO_IMG} alt="Prayer Groups" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Parish Groups</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Prayer Groups Across Goa</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-blue-200 text-lg max-w-xl">Find a YU4C prayer group meeting near your parish</motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Find Your Group</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Active Prayer Groups</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">We have Spirit-filled youth prayer groups active across six key areas of Goa</p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {groups.map((group) => (
              <motion.div
                key={group.area}
                variants={staggerItem}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(29,78,216,0.18)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
              >
                <div className={`${group.color} px-6 py-5`}>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-white/80" />
                    <h3 className="text-white font-bold text-xl">{group.area}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{group.day} · {group.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-5">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>{group.parishes.length} active parish groups</span>
                  </div>
                  <div className="space-y-1.5 mb-6 flex-1">
                    {group.parishes.map((parish) => (
                      <div key={parish} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {parish}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="w-full py-3 border-2 border-blue-200 hover:border-blue-700 hover:bg-blue-50 text-blue-700 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all">
                    Get Contact Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-2xl shadow-lg h-72 sm:h-80">
                <img src={PRAYER_IMG} alt="Prayer" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Not Sure Where to Start?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">We'll Find One for You</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">Don't see your parish listed? Get in touch — our coordination team will connect you with the nearest YU4C group, or help you start one at your own parish.</p>
              <blockquote className="border-l-4 border-amber-400 pl-5 mb-8">
                <p className="text-gray-700 italic leading-relaxed">"And let us consider how to stir up one another to love and good works, not neglecting to meet together."</p>
                <cite className="text-blue-700 text-sm font-medium mt-1 block not-italic">— Hebrews 10:24–25</cite>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/join" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-blue-200 text-blue-700 hover:border-blue-700 rounded-full font-semibold transition-all">
                  Join YU4C
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
