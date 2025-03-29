import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "GroCred",
      description:
        "Grocred is a fintech company that makes it easy for newcomers to the UK to build a good credit score while shopping for groceries and essentials",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/image/grocred1.png",
    },
    {
      title: "Titranstech",
      description:
        "We provide expert consultancy services to help businesses harness the power of technology, streamline operations, and drive digital transformation.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "/image/titrans.png",
    },
    {
      title: "Afrione",
      description: "Afrione is a social media dashboard with analytics",
      technologies: ["React", "D3.js", "Nextjs"],
      image: "/image/afrione.png",
    },
    // {
    //   title: "Bellmari",
    //   description: "Bellmari is a platform where you can find best oil suppplies in bulk quantity",
    //   technologies: ["React", "D3.js", "Nextjs"],
    //   image: "/image/bellmari.png",
    // },
    {
      title: "Knight Ventures",
      description:
        "Knight Ventures is a platform that helps you find the best venture capital firms",
      technologies: ["React", "Nodejs", "Express", "Nextjs"],
      image: "/image/kv.png",
    },
    {
      title: "Sportix",
      description: "Sportix is a platform that helps you find the best sports events",
      technologies: ["React", "Nodejs", "Express", "Nextjs"],
      image: "/image/sportix.png",
    },
    {
      title: "Keta",
      description: "Keta is an event planner platform",
      technologies: ["React", "Nodejs", "Express", "Nextjs"],
      image: "/image/keta.png",
    },
  ];
  // https://bellmari-2rbl.vercel.app/
  // https://www.titranstech.co.uk/
  // https://www.grocred.com/
  //sportix-iota.vercel.app/player/home
  // https://knight.ventures/

  // https://keta-nu.vercel.app/

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700  rounded-2xl shadow-xl overflow-hidden hover-scale animate-scale-in"
            >
              <div className="h-48 bg-gradient-to-br overflow-hidden flex items-center justify-center from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                {/* Add actual project images here */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  className="object-cover"
                  height={800}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
