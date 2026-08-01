import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { sendEmails, saveContactMessage } from "../../utils/email";
import { useState } from "react";
import { ParallaxHero } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";

const GOA_IMG =
  "https://images.unsplash.com/photo-1624365700883-cc574778eff5?auto=format&fit=crop&w=1920&q=80";
const HERO_IMG =
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80";

export function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    parish: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {

  //     await sendEmails(formData);

  //     alert("Thank you! We will get back to you soon. God bless you! 🙏");

  //     setFormData({
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       parish: "",
  //       subject: "General Inquiry",
  //       message: ""
  //     });

  //   } catch(error) {

  //     console.error(error);
  //     alert("Something went wrong. Please try again.");

  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Save to Supabase
      await saveContactMessage(formData);

      // 2. Google Sheet + email functionality
      await sendEmails(formData);

      setModal({
        show: true,
        type: "success",
        title: "Message Sent Successfully 🙏",
        message:
          "Thank you for reaching out to YU4C Goa. Our team will get back to you soon. God bless you!",
      });

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        parish: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setModal({
        show: true,
        type: "error",
        title: "Something Went Wrong",
        message: "We couldn't send your message. Please try again later.",
      });
    }
  };

  const [modal, setModal] = useState<{
    show: boolean;
    type: string;
    title: string;
    message: string;
  }>({
    show: false,
    type: "",
    title: "",
    message: "",
  });

  return (
    <>
      <div>
        <ParallaxHero
          src={HERO_IMG}
          alt="Prayer Groups"
          overlay="bg-blue-950/80"
          className="h-[55vh] sm:h-[65vh] min-h-[400px] flex items-end pb-16 sm:pb-24"
        >
          <FloatingParticles />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Contact Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-3"
            >
              Let us know how we can help
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-blue-200 text-lg max-w-xl"
            >
              We'd love to hear from you! Reach out with any questions or
              feedback.
            </motion.p>
          </div>
        </ParallaxHero>
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14">
              <ScrollReveal direction="left">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Connect With Us
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-700" />
                    </div>

                    <div>
                      <p className="font-semibold">Location</p>

                      <p className="text-gray-600">
                        Archdiocese of Goa and Daman
                      </p>

                      <p className="text-gray-500 text-sm">
                        Parish-level groups active across Goa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-700" />
                    </div>

                    <div>
                      <p className="font-semibold">Email</p>

                      <a
                        href="mailto:yu4cgoa@gmail.com"
                        className="text-blue-700"
                      >
                        yu4cgoa@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-4">Follow Us</h3>

                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/yu4cgoa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-800 to-pink-600 text-white rounded-xl"
                  >
                    <Instagram className="w-5 h-5" />
                    @yu4cgoa
                  </a>

                  <a
                    href="https://facebook.com/yu4cgoa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-xl"
                  >
                    <Facebook className="w-5 h-5" />
                    @yu4cgoa
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="border rounded-xl p-3"
                    />

                    <input
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="border rounded-xl p-3"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  />

                  <input
                    name="parish"
                    placeholder="Parish / Area"
                    value={formData.parish}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  />

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  >
                    <option>General Inquiry</option>
                    <option>Join a Prayer Group</option>
                    <option>Event Information</option>
                    <option>Retreat Registration</option>
                    <option>Life in the Spirit Seminar</option>
                    <option>Other</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-blue-700 text-white rounded-xl font-semibold"
                  >
                    Send Message
                  </motion.button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-14 bg-gradient-to-br from-blue-900 to-blue-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-blue-100 italic text-xl">
              "The grace of the Lord Jesus Christ, and the love of God, and the
              fellowship of the Holy Spirit be with you all."
            </p>

            <p className="text-amber-400 font-semibold mt-3">
              — 2 Corinthians 13:14
            </p>
          </div>
        </section>
      </div>
      {modal.show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              animation: "fadeIn .3s ease",
            }}
          >
            <div
              style={{
                fontSize: "55px",
                marginBottom: "15px",
              }}
            >
              {modal.type === "success" ? "🎉" : "⚠️"}
            </div>

            <h2
              style={{
                color: modal.type === "success" ? "#1e3a8a" : "#dc2626",
                marginBottom: "15px",
              }}
            >
              {modal.title}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "25px",
              }}
            >
              {modal.message}
            </p>

            <button
              onClick={() =>
                setModal({
                  show: false,
                  type: "",
                  title: "",
                  message: "",
                })
              }
              style={{
                background: "#1e3a8a",
                color: "#fff",
                border: "none",
                padding: "12px 30px",
                borderRadius: "30px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
}
