const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm font-light">
            built by chaitanya, powered by mass amounts of caffeine ☕
          </p>
          <p className="font-handwritten text-white/15 text-lg" style={{ transform: 'rotate(1deg)' }}>
            you've scrolled this far? respect. 🫡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
