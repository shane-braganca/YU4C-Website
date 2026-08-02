import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { Calendar, User, ArrowLeft } from "lucide-react";

import { ScrollReveal } from "../components/ScrollReveal";
import { getArticleBySlug } from "../../utils/article";

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

export function ArticleDetailsPage() {
  const { slug } = useParams();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArticle = async () => {
      try {
        if (!slug) {
          setError("Article not found.");
          return;
        }

        const data = await getArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load this article.");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500">Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Article Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          {error || "This article doesn't exist."}
        </p>

        <Link
          to="/article"
          className="flex items-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Cover Image */}
      <section className="relative">
        {article.cover_image ? (
          <img
            src={article.cover_image}
            alt={article.title}
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        ) : (
          <div className="w-full h-[400px] sm:h-[500px] bg-blue-950 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">YU4C Goa</span>
          </div>
        )}

        <div className="absolute inset-0 bg-blue-950/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
              {article.category}
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-5 text-blue-100 text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>

              {article.published_at && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.published_at).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 sm:py-20">
        <ScrollReveal>
          <article className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              to="/article"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>

            {article.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                {article.excerpt}
              </p>
            )}

            <div className="text-gray-700 text-lg leading-8 whitespace-pre-line">
              {article.content}
            </div>
          </article>
        </ScrollReveal>
      </section>
    </>
  );
}
