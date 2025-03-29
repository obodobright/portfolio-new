import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in">
              Hi, I&apos;m Obodo Bright
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-in">
              A passionate Full Stack Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-scale-in">
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
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] animate-fade-in">
              <Image
                src="/images/hero.png"
                alt="Hero illustration"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
