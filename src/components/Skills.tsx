import { Code, Layers, Database, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++', 'C', 'PHP'],
    },
    {
      icon: Layers,
      title: 'Frontend Technologies',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      icon: Layers,
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'Authentication', 'JWT'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
    },
    {
      icon: GitBranch,
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'NPM', 'Webpack'],
    },
    {
      icon: Code,
      title: 'Specializations',
      skills: ['MERN Stack', 'Full Stack Development', 'Responsive Design', 'Real-time Applications'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <Code className="text-amber-600" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900">Skills & Expertise</h2>
          </div>
          <p className="text-stone-600 text-lg">Comprehensive technical skill set across modern development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-amber-600 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="text-xl font-bold text-stone-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-100 text-amber-900 text-sm font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
