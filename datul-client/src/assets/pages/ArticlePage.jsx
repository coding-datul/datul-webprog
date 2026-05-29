import Button from '../components/Button';
import logo from '../logo.png';

const articles = [
  {
    label: 'Article 01',
    title: 'Designing a better navbar',
    text: 'A navigation bar should have clear links, active page styling, and a visible logo.',
  },
  {
    label: 'Article 02',
    title: 'Using images in page sections',
    text: 'Images make the page more visual and help support the written content.',
  },
  {
    label: 'Article 03',
    title: 'Writing useful content',
    text: 'Short paragraphs explain the purpose of each page and make the website easier to understand.',
  },
  {
    label: 'Article 04',
    title: 'Keeping components reusable',
    text: 'Shared components reduce repeated code and make future updates faster.',
  },
];

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">
              Articles
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl">
              Helpful writeups about the website enhancement.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">
              This page expands the article content with image cards, titles, descriptions, and
              buttons. Each article explains one part of the improved project.
            </p>
            <div className="mt-7">
              <Button to="/" variant="primary">
                Back Home
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
            <img src={logo} alt="Article page preview" className="h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">
            Featured Articles
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-950">Article card grid</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {articles.map((article) => (
              <article key={article.label} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <img src={logo} alt={article.title} className="h-36 w-full rounded-md object-cover" />
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">
                  {article.label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-zinc-950">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{article.text}</p>
                <Button className="mt-5">Read More</Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
