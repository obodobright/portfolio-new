import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] animate-fade-in">
              <Image
                src="/images/about.png"
                alt="About me illustration"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6 animate-slide-in">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I&apos;m a passionate Full Stack Developer with expertise in building modern web
              applications. My journey in web development started with a curiosity for creating
              interactive experiences on the internet, and that passion has grown into a
              professional pursuit of excellence.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I specialize in React and Next.js, creating responsive and performant applications
              that provide exceptional user experiences. My approach combines clean code practices
              with innovative solutions to solve complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                React
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
