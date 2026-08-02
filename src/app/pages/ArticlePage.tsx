import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";

import { ScrollReveal } from "../components/ScrollReveal";
import { ParallaxHero } from "../components/ParallaxHero";
import { FloatingParticles } from "../components/FloatingParticles";

import { getPublishedArticles } from "../../utils/article";

const HERO_IMG =
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1920&q=80";

type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  published: boolean;
  published_at: string | null;
};

export function ArticlePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await getPublishedArticles();
        setArticles(data || []);
      } catch (error) {
        console.error(error);
        setError("Unable to load articles right now.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <>
      <ParallaxHero
        src={HERO_IMG}
        alt="Bible and faith"
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
            Article & Articles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-3"
          >
            Stories, Reflection & Faith
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-blue-200 text-lg max-w-xl"
          >
            Explore reflections, stories and articles from our youth community.
          </motion.p>
        </div>
      </ParallaxHero>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <p className="text-center text-gray-500">Loading articles...</p>
          )}

          {error && <p className="text-center text-red-600">{error}</p>}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                No articles yet
              </h2>

              <p className="text-gray-500">
                Check back soon for more stories and reflections from our
                community.
              </p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <>
              {/* Featured Article */}
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
                  <div className="overflow-hidden rounded-2xl">
                    {articles[0].cover_image ? (
                      <img
                        src={articles[0].cover_image}
                        alt={articles[0].title}
                        className="w-full h-[350px] object-cover"
                      />
                    ) : (
                      <div className="w-full h-[350px] bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-800 font-semibold">
                          YU4C Goa
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                      Featured
                    </span>

                    <p className="text-blue-700 font-semibold text-sm mb-3">
                      {articles[0].category}
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {articles[0].title}
                    </h2>

                    <p className="text-gray-600 text-lg mb-5">
                      {articles[0].excerpt}
                    </p>

                    <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {articles[0].author}
                      </span>

                      {articles[0].published_at && (
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(
                            articles[0].published_at,
                          ).toLocaleDateString()}
                        </span>
                      )}
                    </div>

                    <a
                      href={`/article/${articles[0].slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Other Articles */}
              {articles.length > 1 && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Latest Articles
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(1).map((article) => (
                      <ScrollReveal key={article.id}>
                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition h-full">
                          {article.cover_image ? (
                            <img
                              src={article.cover_image}
                              alt={article.title}
                              className="w-full h-52 object-cover"
                            />
                          ) : (
                            <div className="w-full h-52 bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-800 font-semibold">
                                YU4C Goa
                              </span>
                            </div>
                          )}

                          <div className="p-6">
                            <p className="text-blue-700 text-sm font-semibold mb-2">
                              {article.category}
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {article.title}
                            </h3>

                            <p className="text-gray-600 mb-5 line-clamp-3">
                              {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                {article.author}
                              </span>

                              <a
                                href={`/article/${article.slug}`}
                                className="text-blue-700 font-semibold flex items-center gap-1"
                              >
                                Read
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </article>
                      </ScrollReveal>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
