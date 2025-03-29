const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">Welcome</span> to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 animate-slide-in">
          I'm a passionate developer creating amazing web experiences
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-scale-in"
        >
          Get in Touch
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900"></div>
    </section>
  );
};

export default Hero;
