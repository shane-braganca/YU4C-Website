import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, Target, Compass, Cross, Heart, BookOpen, Church, Flame, Users, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero, ParallaxImage } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1920&q=80";
const COMMUNITY_IMG = "https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?auto=format&fit=crop&w=900&q=80";
const PRAYER_IMG = "https://images.unsplash.com/photo-1526746323784-6bc814d79273?auto=format&fit=crop&w=900&q=80";

const beliefs = [
  { icon: Cross, title: "Jesus Christ is the center of our lives", description: "He is our Lord, Savior, and the foundation of all we do. Everything flows from a personal relationship with Him.", color: "bg-blue-700" },
  { icon: Heart, title: "The Holy Spirit empowers us", description: "Through the Spirit, we experience God's love, guidance, and the gifts that equip us to serve.", color: "bg-blue-800" },
  { icon: BookOpen, title: "The Word of God is our guide", description: "Scripture illuminates our path and transforms our hearts. We study it together and live it daily.", color: "bg-amber-500" },
  { icon: Church, title: "The Church is our home", description: "We serve and grow within the body of Christ, rooted in the Catholic tradition of the Charismatic Renewal.", color: "bg-blue-800" },
];

const missionPoints = [
  "To lead every young person into a personal encounter with Jesus Christ.",
  "To form youth in prayer, Scripture, and the gifts of the Holy Spirit.",
  "To inspire servant leadership rooted in love and humility.",
  "To build a community that witnesses to Christ in daily life.",
  "To unite youth across parishes under one vision for Goa.",
];

const purposes = [
  "Foster among youth a mature and continuous personal conversion to Jesus Christ and commitment to the Church.",
  "Bring youth to the experience of the Baptism in the Holy Spirit and renew their relationship with the Holy Spirit.",
  "Foster the reception and use of the spiritual gifts of the Holy Spirit as found in Holy Scripture.",
  "Foster an appreciation of personal and collective prayer, praise, intercession, and weekly prayer meetings.",
  "Raise up youth laborers for re-evangelization among Catholics and evangelization among non-Catholics.",
  "Raise up strong youth leadership that will carry on the work of spreading the Gospel.",
  "Foster ongoing growth in holiness through sacramental life, Catholic doctrine, and local church participation.",
  "Build up teens ministry under the name Teens United For Christ (TU4C).",
];

const pillars = [
  { icon: Flame, title: "Personal Prayer", description: "A daily quiet time experiencing the presence of the Lord, leading to loving friendship with Jesus and a joyful approach to daily life." },
  { icon: BookOpen, title: "Word of God", description: "A fixed time everyday for meditative Bible reading to shape one's life according to God's will and seek His guidance." },
  { icon: Church, title: "Sacramental Life", description: "Frequent participation in the Eucharist and at least monthly Reconciliation for growth in holiness and strength for mission." },
  { icon: Users, title: "Fellowship & Charisms", description: "Cell groups and prayer groups for mutual support, encouragement, gentle correction, and the exercise of spiritual gifts." },
  { icon: Heart, title: "Service", description: "Willingness to serve those in need — social outreach is a sure sign of a follower of Jesus." },
  { icon: Shield, title: "Commitment", description: "Sharing the person and message of Jesus with others is a fundamental responsibility of every YU4C member." },
  { icon: Cross, title: "Pastoring", description: "Being guided by an Elder or Spiritual Director in all matters of spiritual growth, recommended to be of the same gender." },
];

const historyEvents = [
  { year: "1980s", label: "NYPT Era", description: "The National Youth Pastoral Team focused on faith formation, leadership training, prayer life, and the Word of God." },
  { year: "1996", label: "NCCYC Founded", description: "A National Youth Consultation in Cochin formed the National Catholic Charismatic Youth Council for wider participation." },
  { year: "2002–2008", label: "Three Conventions", description: "National Youth Conventions held in Bangalore (2002), Chennai (2005), and Mumbai (2008)." },
  { year: "Dec 2008", label: "YU4C Launched", description: "Youth United For Christ officially launched at KAIROS 2008 in Mumbai — the National Youth Convention." },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className={`text-blue-700 transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
export function AboutPage() {
  return (
    <div>
      <ParallaxHero src={HERO_IMG} alt="About YU4C" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            Who We Are
          </motion.h1>
        </div>
      </ParallaxHero>

      {/* Our Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                YU4C Goa is the youth ministry wing of the Catholic Charismatic Renewal in the Archdiocese of Goa and Daman. We are part of the National YU4C movement under NCCRS – India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We exist to bring young people into a living, personal relationship with Jesus Christ and to empower them to serve the Church with passion and purpose.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-5 my-6">
                <p className="text-gray-700 italic leading-relaxed">"For where two or three gather in my name, there am I with them."</p>
                <cite className="text-blue-700 text-sm font-medium mt-1 block not-italic">— Matthew 18:20</cite>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <ParallaxImage src={COMMUNITY_IMG} alt="Community" className="rounded-2xl h-64 shadow-lg" />
                <ParallaxImage src={PRAYER_IMG} alt="Prayer" className="rounded-2xl h-64 shadow-lg mt-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

        {/* History Timeline */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">A Brief History</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100" />
            <motion.div className="space-y-8" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {historyEvents.map((e) => (
                <motion.div key={e.year} variants={item} className="flex gap-6 pl-4">
                  <div className="relative flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center z-10 mt-1">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{e.year}</span>
                      <span className="font-semibold text-gray-900 text-sm">{e.label}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{e.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Vision & Mission */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-3">Our Direction</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Vision & Mission</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg italic leading-relaxed">"Christ-centered youth transforming the Church and society."</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Compass className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

            {/* Purposes from Guidelines */}
      <section className="py-20 sm:py-28 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3">From Our Guidelines</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Purpose of YU4C</h2>
            <p className="text-blue-300 mt-3 max-w-xl mx-auto text-sm">As defined by the National Catholic Charismatic Renewal Services (NCCRS), the purpose of Youth United For Christ:</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {purposes.map((p, i) => (
              <motion.div key={i} variants={item} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <span className="text-amber-400 font-bold text-2xl block mb-3">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-blue-100 text-sm leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* Seven Pillars */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-3">Christian Discipleship</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Seven Pillars of Spirituality</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">YU4C members seek to grow as faithful disciples of Christ through these seven pillars.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {pillars.map((p) => (
              <motion.div key={p.title} variants={item}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
            {/* 7th card spans to fill */}
          </motion.div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-3">Our Foundation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Beliefs</h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {beliefs.map((b) => (
              <motion.div key={b.title} variants={item}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                <div className={`w-12 h-12 ${b.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* Structure FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-3">How We're Organised</p>
            <h2 className="text-3xl font-bold text-gray-900">Working Structure</h2>
          </motion.div>
          <div className="space-y-3">
            <AccordionItem title="Parish Prayer Groups">
              YU4C Prayer Groups are the basic units for fellowship and growth. They meet weekly for praise and worship, listening to the Lord, exercising gifts, sharing the Word, and intercession. Smaller cell groups of 3–7 members of the same sex meet more frequently for intimate sharing.
            </AccordionItem>
            <AccordionItem title="Core Group Leadership">
              Each group has a Coordinator, an Assistant Coordinator (who oversees TU4C), a Secretary, and a Treasurer. The core group of 3–7 members is chosen for a three-year term and may not serve consecutively for more than two terms.
            </AccordionItem>
            <AccordionItem title="Diocesan / Zonal Service of Communion">
              The diocesan team coordinates parish YU4C groups, ensures healthy growth, and plans formation programs. It meets monthly and is elected every three years. A Priest and Religious Sister serve as regular members appointed by the Diocesan Service of Communion.
            </AccordionItem>
            <AccordionItem title="National Service of Communion">
              The National team is chosen from Diocesan coordinators for 2–3 years. It organizes national training programs, conventions, and networking events. The YU4C National Coordinator is an ex-officio member of the National Service of Communion and is appointed by the NSC.
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Coordinator Message */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">From Our Leader</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Message from the Coordinator</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 text-left mb-6">
              <p className="text-blue-100 italic text-lg mb-5">"Dear Young People,"</p>
              <p className="text-blue-100 leading-relaxed mb-5">The Church needs you. The world needs your light, your courage, and your faith. YU4C Goa is not just a ministry — it's a movement of young hearts burning for Jesus.</p>
              <p className="text-blue-100 leading-relaxed mb-6">Remember, God doesn't call the qualified; He qualifies the called. Step out in faith and watch what He will do through you.</p>
              <div className="border-t border-white/20 pt-5">
                <p className="text-white font-semibold">In Christ's love,</p>
                <p className="text-blue-300 mt-1">[Coordinator's Name]</p>
                <p className="text-amber-400 text-sm">YU4C Goa</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to be part of the story?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Join our community and discover your place in Christ's mission for Goa.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
                Join Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-blue-200 text-blue-700 hover:border-blue-700 rounded-full font-semibold transition-all">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
