import PageTransition from '../animations/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
        <div className="glass-card rounded-2xl p-8">
          <p className="text-slate-400">Contact section content will go here.</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
