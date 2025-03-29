const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="text-center px-4 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in">
          Hi, I&apos;m Obodo Bright
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 animate-slide-in">
          I&apos;m a passionate developer creating amazing web experiences
        </p>
        <div className="flex flex-wrap gap-4 justify-center  animate-scale-in">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900"></div>
    </section>
  );
};

export default Hero;
