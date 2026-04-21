import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AgriLink: Farmer-to-Buyer Marketplace',
      description: 'A web-based MERN platform connecting farmers directly with buyers to simplify crop sales and communication.',
      highlights: [
        'Farmer and buyer dashboards with crop management',
        'Order tracking and secure JWT-based authentication',
        'RESTful APIs with seamless frontend-backend integration',
        'Responsive UI built with Tailwind CSS',
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      codeLink: '#',
      liveLink: '#',
      featured: true,
    },
    {
      title: 'CodeCollab: Real-Time Collaborative Coding',
      description: 'A full-stack collaborative coding platform enabling multiple users to join secure rooms and edit code simultaneously.',
      highlights: [
        'Real-time code synchronization via Socket.IO',
        'JWT-secured REST APIs and WebSocket authentication',
        'Monaco Editor integration with live presence updates',
        'In-room chat and debounced auto-save to MongoDB',
      ],
      tech: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Monaco Editor'],
      codeLink: '#',
      liveLink: '#',
      featured: true,
    },
    {
      title: 'Subscription Tracker',
      description: 'A subscription management application with centralized dashboard and automated email reminders.',
      highlights: [
        'Full CRUD functionality with persistent storage',
        'Centralized subscription dashboard',
        'Automated email reminders',
        'MySQL database integration',
      ],
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      codeLink: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <Code2 className="text-amber-600" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900">Featured Projects</h2>
          </div>
          <p className="text-stone-600 text-lg">Showcase of my best work and technical achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-stone-300 mb-6 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2 mb-8">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-stone-300">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.codeLink}
                      className="flex items-center gap-2 px-4 py-2 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
