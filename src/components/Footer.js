const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-in">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div className="text-lg font-semibold">
                <span className="gradient-text">Obodo</span>
                <span className="text-gray-300">Bright</span>
              </div>
            </div>
            <p className="text-gray-400">Web Developer</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/obodobright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/obodo-bright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@obodobright0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            >
              Medium
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Obodo Bright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
