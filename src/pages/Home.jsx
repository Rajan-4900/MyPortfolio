import PageTransition from '../animations/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Creative <span className="text-gradient">Developer</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Building exceptional digital experiences with modern web technologies.
        </p>
      </div>
    </PageTransition>
  );
};

export default Home;
