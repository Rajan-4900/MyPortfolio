import PageTransition from '../animations/PageTransition';
import SEOProvider from '../components/seo/SEOProvider';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import FAQSection from '../components/contact/FAQSection';
import CollaborationCTA from '../components/contact/CollaborationCTA';

const Contact = () => {
  return (
    <PageTransition>
      <SEOProvider 
        title="Contact Me" 
        description="Get in touch for freelance work, job opportunities, or to discuss your next big project."
      />
      <div className="flex flex-col min-h-screen">
        <ContactHero />
        
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
              {/* Contact Info (Left Sidebar on Desktop) */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
              
              {/* Contact Form (Main Content area) */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <SocialLinks />
        <FAQSection />
        <CollaborationCTA />
      </div>
    </PageTransition>
  );
};

export default Contact;
