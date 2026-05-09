import PageTransition from '../animations/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="glass-card rounded-2xl p-8">
          <p className="text-slate-400">About section content will go here.</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
