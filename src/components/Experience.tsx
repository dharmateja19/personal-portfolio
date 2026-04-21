import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Edunet Foundation',
      position: 'Full Stack Developer Intern',
      duration: 'Jun 2025 – Aug 2025',
      type: 'Virtual',
      highlights: [
        'Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
        'Designed and implemented RESTful APIs and integrated frontend with backend for seamless data flow',
        'Deployed applications to production environments and optimized performance for scalability',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <Briefcase className="text-amber-600" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900">Experience</h2>
          </div>
          <p className="text-stone-600 text-lg">Professional journey and internship experience</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative border-l-4 border-amber-600 pl-8 pb-8 hover:pl-10 transition-all duration-300"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-amber-600 rounded-full border-4 border-stone-50"></div>

              <div className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">{exp.position}</h3>
                    <p className="text-amber-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-lg text-sm font-semibold whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-stone-600 mb-6">
                  <Calendar size={18} />
                  <span>{exp.duration}</span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-stone-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="{https://drive.google.com/file/d/1uaExgDwm62iRPtE5pVhufbgZA8rKGKah/view?usp=sharing"
                  className="inline-block mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
