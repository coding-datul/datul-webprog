import Button from '../components/Button';
import logo from '../logo.png';

const focusAreas = [
  'React components',
  'Page routing',
  'Tailwind styling',
  'Responsive design',
];

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
            <img src={logo} alt="About DEVIUX workspace" className="h-80 w-full object-cover" />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">
              About DEVIUX
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl">
              A simple web project made to practice clean frontend development.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">
              DEVIUX is a student website concept focused on building reusable React components,
              organized pages, and a consistent visual design. The site uses a shared layout,
              navigation links, page sections, images, and written content.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">View Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">
            Project Focus
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-950">What the project improves</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => (
              <div key={item} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-lg font-bold text-zinc-950">{item}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  This area helps make the website easier to read, update, and present.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300">
            Goal
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black">
            Make every page look complete while keeping the code reusable.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300">
            The design uses the same navbar, button style, image treatment, and spacing system
            across the Home, About, and Articles pages.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
