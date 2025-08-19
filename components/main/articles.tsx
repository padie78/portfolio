import { ARTICLES } from "@/constants";
import { ArticleCard } from "../sub/article-card";

export const Articles = () => {
  return (
    <section
      id="articles"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold text-white">
        My Articles
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-10 py-10">
        {ARTICLES.map((article) => (

          <ArticleCard
            key={article.title}
            src={article.image}
            title={article.title}
            description={article.description}
            link={article.link}
            techIcons={[...article.techIcons]}
          />
        ))}
      </div>

    </section>
  );
};