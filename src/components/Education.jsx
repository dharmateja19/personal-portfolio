import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-amber-600" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900">Education & Certifications</h2>
          </div>
          <p className="text-stone-600 text-lg">Formal education and professional credentials</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="text-amber-600" size={28} />
              Degree
            </h3>

            <div className="bg-white p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-stone-900">B.Tech in Computer Science</h4>
                  <p className="text-amber-600 font-semibold">SRM University-AP</p>
                </div>
                <span className="px-3 py-1 bg-stone-200 text-stone-900 text-sm font-semibold rounded-full">
                  Aug 2023 – May 2027
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-stone-600 font-semibold">Specialization: AI & Machine Learning</p>
                  <p className="text-lg text-amber-600 font-bold">CGPA: 9.42/10</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-stone-900">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures',
                    'Algorithms',
                    'OOP',
                    'DBMS',
                    'Computer Networks',
                    'OS',
                    'Machine Learning',
                    'Software Engineering',
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-full border border-stone-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Award className="text-amber-600" size={28} />
              Certifications
            </h3>

            <div className="bg-white p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-stone-900">Oracle Certified Professional</h4>
                  <p className="text-amber-600 font-semibold">Java SE 17 Developer (OCP 17)</p>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-stone-600 mb-4">
                Advanced certification validating expertise in Java 17 language features, OOP principles, and enterprise application development.
              </p>
              <a
                href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=2F03D617AB2495B08D1C6A33943B14CE05E96E6CC353DA81D1D97B80564402FF"
                className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                View Credential →
              </a>
            </div>

            {/* Additional Badge */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg border border-stone-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-amber-600 mb-2">9.42</div>
                <p className="text-sm text-stone-600">Current CGPA</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-stone-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
                <p className="text-sm text-stone-600">Live Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
