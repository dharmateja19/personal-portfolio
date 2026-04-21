import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/RESUME-DHARMATEJA.pdf';
    link.download = 'Dharmateja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-orange-100 rounded-full opacity-15 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight">
              <span className="text-amber-600">Dharma Teja</span>
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 max-w-2xl leading-relaxed">
              Building scalable web applications with modern tech stack. MERN specialist with a passion for clean code and innovative solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleResumeDownload}
              className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
            </button>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/dharmateja19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-stone-200 text-stone-900 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dharma-teja-pamarthi-834685286/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-stone-200 text-stone-900 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dharmatejapamarthi143@gmail.com"
              className="p-3 bg-stone-200 text-stone-900 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-600" size={24} />
        </div>
      </div>
    </section>
  );
}
