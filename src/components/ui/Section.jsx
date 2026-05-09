const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
