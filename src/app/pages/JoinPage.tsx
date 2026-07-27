import { Link } from "react-router";
import { ArrowRight, Users, Heart, Flame, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80";

const steps = [
  { number: "01", title: "Attend a Prayer Meeting", desc: "Come along to your local YU4C prayer group meeting. No commitment required — just show up and experience community.", icon: "🙏" },
  { number: "02", title: "Take the Life in the Spirit Seminar", desc: "A 7-week foundational journey to encounter God's love and the gifts of the Holy Spirit.", icon: "✨" },
  { number: "03", title: "Choose Your Ministry", desc: "Find where your gifts fit — worship, outreach, formation, or prayer leadership.", icon: "🎯" },
  { number: "04", title: "Get Commissioned", desc: "Be formally welcomed and commissioned as a YU4C member within your parish community.", icon: "🕊️" },
];

const perks = [
  { icon: Flame, text: "Access to Spirit-filled prayer meetings every week" },
  { icon: BookOpen, text: "Formation programs: Life in the Spirit Seminars" },
  { icon: Heart, text: "Retreats, camps, and life-changing encounters" },
  { icon: Users, text: "A community of faith-filled young people across Goa" },
];

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function JoinPage() {
  return (
    <div>
      <ParallaxHero src={HERO_IMG} alt="Join YU4C" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles color="bg-amber-400/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Join Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Become Part of YU4C Goa</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-blue-200 text-lg max-w-xl">Young Hearts. Bold Faith. United for Christ. Your journey begins here.</motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Your Journey</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How to Join YU4C</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Four simple steps to become an active part of our community</p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(29,78,216,0.18)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm relative overflow-hidden cursor-default"
              >
                <div className="absolute top-4 right-4 text-gray-100 font-black text-5xl leading-none select-none">{step.number}</div>
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: parseInt(step.number) * 0.3 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Why Join</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What You'll Experience</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">As a YU4C member, you gain access to a vibrant community, Spirit-filled programs, and a life transformed by God's love.</p>
              <div className="space-y-4">
                {perks.map((perk, i) => (
                  <motion.div
                    key={perk.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <perk.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <p className="text-gray-700 pt-2 leading-relaxed">{perk.text}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
                <p className="text-blue-800 font-semibold text-xl mb-6">Quick Registration Interest Form</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We'll be in touch soon. God bless! 🙏");
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" required placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age Group</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>13–17 years</option>
                      <option>18–24 years</option>
                      <option>25–30 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Parish / Area</label>
                    <input type="text" required placeholder="Your parish or area" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone / Email</label>
                    <input type="text" required placeholder="How can we reach you?" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">I'm interested in…</label>
                    <div className="space-y-2 text-sm text-gray-700">
                      {["Prayer Meetings", "Retreats", "Life in the Spirit Seminar", "Outreach", "Worship Team"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition-colors">
                          <input type="checkbox" className="rounded accent-blue-700 w-4 h-4" /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-blue-700 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-200"
                  >
                    Submit Interest <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <motion.div className="text-5xl mb-6" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>🔥</motion.div>
            <p className="text-blue-100 italic text-xl leading-relaxed mb-4">"You are the light of the world. A town built on a hill cannot be hidden."</p>
            <p className="text-amber-400 font-semibold mb-8">— Matthew 5:14</p>
            <Link to="/prayer-groups" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-blue-950 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-lg">
              Find a Prayer Group Near You <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
