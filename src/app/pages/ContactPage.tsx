import { Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { motion } from "motion/react";
import { ParallaxHero } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";
import { ScrollReveal } from "../components/ScrollReveal";

const GOA_IMG = "https://images.unsplash.com/photo-1624365700883-cc574778eff5?auto=format&fit=crop&w=1920&q=80";

export function ContactPage() {
  return (
    <div>
      <ParallaxHero src={GOA_IMG} alt="Goa" overlay="bg-blue-950/80" className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24">
        <FloatingParticles color="bg-amber-400/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Contact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Get in Touch</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-blue-200 text-lg max-w-xl">We'd love to hear from you — reach out and connect with us</motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect With Us</h2>
              <div className="space-y-6 mb-10">
                <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600">Archdiocese of Goa and Daman</p>
                    <p className="text-gray-500 text-sm">Parish-level groups active across Goa</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:yu4cgoa@gmail.com" className="text-blue-700 hover:text-blue-800 transition-colors font-medium">yu4cgoa@gmail.com</a>
                  </div>
                </motion.div>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4 mb-10">
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="https://instagram.com/yu4cgoa" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-800 to-pink-600 text-white rounded-xl font-medium text-sm">
                  <Instagram className="w-5 h-5" /> @yu4cgoa
                </motion.a>
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="https://facebook.com/yu4cgoa" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-xl font-medium text-sm">
                  <Facebook className="w-5 h-5" /> @yu4cgoa
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
              >
                <p className="text-blue-800 font-semibold mb-2">⛪ Find a Prayer Group Near You</p>
                <p className="text-blue-700 text-sm leading-relaxed">We have parish-level prayer groups active across Goa. Get in touch and we'll connect you with the one nearest to you.</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We will get back to you soon. God bless you! 🙏");
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" required placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" required placeholder="Your surname" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parish / Area</label>
                  <input type="text" placeholder="Your parish or area in Goa" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>General Inquiry</option>
                    <option>Join a Prayer Group</option>
                    <option>Event Information</option>
                    <option>Retreat Registration</option>
                    <option>Life in the Spirit Seminar</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea required rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 12px 30px -8px rgba(29,78,216,0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-blue-700 hover:bg-blue-700 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-200"
                >
                  <Send className="w-5 h-5" /> Send Message
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-blue-100 italic text-xl leading-relaxed mb-3">"The grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all."</p>
            <p className="text-amber-400 font-semibold">— 2 Corinthians 13:14</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
