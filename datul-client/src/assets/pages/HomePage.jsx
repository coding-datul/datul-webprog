import Button from '../components/Button';
import logo from '../logo.png';
import featureLogoOne from '../feature-logo-1.png';
import featureLogoTwo from '../feature-logo-2.png';
import featureLogoThree from '../feature-logo-3.png';

const services = [
  {
    title: 'Website Planning',
    text: 'Organized sections help visitors understand the purpose of the website quickly.',
    image: featureLogoOne,
    alt: 'DEVIUX logo concept with DX text',
  },
  {
    title: 'Component Design',
    text: 'Reusable buttons, cards, and layouts keep the project clean and consistent.',
    image: featureLogoTwo,
    alt: 'DEVIUX logo concept with shield icon',
  },
  {
    title: 'Visual Content',
    text: 'Images and writeups make each page feel more complete and easier to scan.',
    image: featureLogoThree,
    alt: 'DEVIUX logo concept with fluid web solutions text',
  },
];

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">
              Home
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl">
              John Herszel D. Datul
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">
              I built DEVIUX, a clean and fully responsive web app using React.js and Tailwind CSS. I used a mobile-first approach to make sure the layout looks great and works smoothly on everything from phones to desktops. By using React's component-based setup, I kept the code organized, reusable, and easy to update.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
              <Button to="/articles">Read Articles</Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
            <img src={logo} alt="DEVIUX homepage preview" className="h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-black">03</p>
            <p className="mt-1 text-sm font-semibold text-emerald-50">Learning pages</p>
          </div>
          <div>
            <p className="text-3xl font-black">05</p>
            <p className="mt-1 text-sm font-semibold text-emerald-50">Custom logo</p>
          </div>
          <div>
            <p className="text-3xl font-black">05</p>
            <p className="mt-1 text-sm font-semibold text-emerald-50">Limited Skills</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-950">The homepage includes</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <img src={service.image} alt={service.alt} className="h-40 w-full rounded-md object-cover" />
                <h3 className="mt-4 text-lg font-bold text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.text}</p>
                <Button className="mt-5" variant="primary">
                  View More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
