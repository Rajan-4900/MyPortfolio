import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "Are you currently available for freelance work?",
    answer: "Yes, I am currently accepting freelance projects. I prefer long-term engagements but am open to short-term consulting depending on the project scope."
  },
  {
    question: "What is your typical response time?",
    answer: "I typically respond to all inquiries within 24-48 hours during regular business days (PST)."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. I have experience working asynchronously with teams across different time zones using tools like Slack, Jira, and GitHub."
  },
  {
    question: "What information do you need to start a project?",
    answer: "To provide an accurate estimate, I usually need a brief overview of the project goals, timeline, budget constraints, and any specific technical requirements or preferred tech stack."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative border-t border-white/5 bg-[#111827]/30">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-slate-400">Quick answers to common inquiries.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/5 overflow-hidden"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-500 ml-4 flex-shrink-0"
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
