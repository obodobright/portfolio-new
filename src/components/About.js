const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover-scale animate-scale-in">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate web developer with a strong foundation in modern web technologies.
              My journey in web development started with a curiosity for creating beautiful and
              functional websites.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I specialize in building responsive and user-friendly web applications using React,
              Next.js, and other modern web technologies. I&apos;m always eager to learn new
              technologies and improve my skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical blog posts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
