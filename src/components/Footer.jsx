import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DT</span>
              </div>
              <span className="font-bold text-lg text-stone-100">Dharmateja</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              A passionate full-stack developer building innovative web applications with modern technology and clean code practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-stone-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-stone-400 hover:text-amber-500 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-stone-100 mb-4">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/dharmateja19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 text-stone-100 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dharma-teja-pamarthi-834685286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 text-stone-100 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dharmatejapamarthi143@gmail.com"
                className="p-3 bg-stone-800 text-stone-100 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex justify-between items-center">
          <p className="text-stone-400 flex items-center gap-2">
            Made with <Heart size={16} className="text-amber-600" /> by Dharmateja
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-stone-800 text-stone-100 rounded-lg hover:bg-amber-600 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
