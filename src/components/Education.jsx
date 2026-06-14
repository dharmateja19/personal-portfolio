// import { GraduationCap, Award, BookOpen } from "lucide-react";

// export default function Education() {
// 	return (
// 		<section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
// 			<div className="max-w-5xl mx-auto">
// 				<div className="space-y-4 mb-16">
// 					<div className="flex items-center gap-3">
// 						<GraduationCap className="text-amber-600" size={32} />
// 						<h2 className="text-4xl sm:text-5xl font-bold text-stone-900">
// 							Education & Certifications
// 						</h2>
// 					</div>
// 					<p className="text-stone-600 text-lg">
// 						Formal education and professional credentials
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// 					{/* Education */}
// 					<div className="space-y-6">
// 						<h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
// 							<BookOpen className="text-amber-600" size={28} />
// 							Education
// 						</h3>

// 						<div className="bg-white p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-all duration-300">
// 							<div className="flex justify-between items-start mb-4">
// 								<div>
// 									<h4 className="text-xl font-bold text-stone-900">
// 										B.Tech in Computer Science and Engineering
// 									</h4>
// 									<p className="text-amber-600 font-semibold">
// 										SRM University-AP
// 									</p>
// 								</div>
// 								<span className="px-3 py-1 bg-stone-200 text-stone-900 text-sm font-semibold rounded-full">
// 									Aug 2023 – May 2027
// 								</span>
// 							</div>

// 							<div className="space-y-3 mb-6">
// 								<div>
// 									<p className="text-stone-600 font-semibold">
// 										Specialization: Artificial Intelligence & Machine Learning
// 									</p>
// 									<p className="text-lg text-amber-600 font-bold">
// 										CGPA: 9.48/10
// 									</p>
// 								</div>
// 							</div>

// 							<div className="space-y-2">
// 								<p className="font-semibold text-stone-900">
// 									Relevant Coursework:
// 								</p>
// 								<div className="flex flex-wrap gap-2">
// 									{[
// 										"Data Structures",
// 										"Algorithms",
// 										"OOP",
// 										"DBMS",
// 										"Computer Networks",
// 										"OS",
// 										"Machine Learning",
// 										"Software Engineering",
// 									].map((course, idx) => (
// 										<span
// 											key={idx}
// 											className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-full border border-stone-200"
// 										>
// 											{course}
// 										</span>
// 									))}
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Certifications */}
// 					<div className="space-y-6">
// 						<h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
// 							<Award className="text-amber-600" size={28} />
// 							Certifications
// 						</h3>

// 						{/* Oracle Certification */}
// 						<div className="bg-white p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-all duration-300">
// 							<div className="flex justify-between items-start mb-4">
// 								<div>
// 									<h4 className="text-xl font-bold text-stone-900">
// 										Oracle Certified Professional
// 									</h4>
// 									<p className="text-amber-600 font-semibold">
// 										Java SE 17 Developer (OCP 17)
// 									</p>
// 								</div>
// 								<span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
// 									Verified
// 								</span>
// 							</div>

// 							<p className="text-stone-600 mb-4">
// 								Validates expertise in Java 17 language features,
// 								object-oriented programming, exception handling, collections,
// 								streams, concurrency, and application development.
// 							</p>

// 							<a
// 								href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=2F03D617AB2495B08D1C6A33943B14CE05E96E6CC353DA81D1D97B80564402FF"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
// 							>
// 								View Credential →
// 							</a>
// 						</div>

// 						{/* MongoDB Certification */}
// 						<div className="bg-white p-8 rounded-lg border border-stone-200 hover:shadow-lg transition-all duration-300">
// 							<div className="flex justify-between items-start mb-4">
// 								<div>
// 									<h4 className="text-xl font-bold text-stone-900">
// 										MongoDB Certified Associate Developer
// 									</h4>
// 									<p className="text-amber-600 font-semibold">
// 										Node.js Developer
// 									</p>
// 								</div>
// 								<span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
// 									Verified
// 								</span>
// 							</div>

// 							<p className="text-stone-600 mb-4">
// 								Demonstrates proficiency in MongoDB data modeling, CRUD
// 								operations, aggregation pipelines, indexing, performance
// 								optimization, and integration with Node.js applications.
// 							</p>

// 							<a
// 								href="https://www.credly.com/go/eCOIMK7M"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
// 							>
// 								View Credential →
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }


import {
	GraduationCap,
	Award,
	BookOpen,
	ExternalLink,
} from "lucide-react";

export default function Education() {
	const coursework = [
		"Data Structures",
		"Algorithms",
		"OOP",
		"DBMS",
		"Computer Networks",
		"OS",
		"Machine Learning",
		"Software Engineering",
    "Artificial Intelligence"
	];

	return (
    
		<section
			id="education"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50"
		>
			<div className="max-w-6xl mx-auto">
				<div className="space-y-4 mb-16">
					<div className="flex items-center gap-3">
						<GraduationCap className="text-amber-600" size={32} />
						<h2 className="text-4xl sm:text-5xl font-bold text-stone-900">
							Education & Certifications
						</h2>
					</div>
					<p className="text-stone-600 text-lg">
						Formal education and professional credentials
					</p>
				</div>

				<div className="space-y-12">
					{/* Education */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
							<BookOpen className="text-amber-600" size={28} />
							Education
						</h3>

						<div className="bg-white p-8 rounded-xl border border-stone-200 hover:shadow-lg transition-all duration-300">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
								<div>
									<h4 className="text-xl font-bold text-stone-900">
										B.Tech in Computer Science & Engineering
									</h4>
									<p className="text-amber-600 font-semibold">
										SRM University-AP
									</p>
								</div>

								<div className="flex flex-col gap-2">
									<span className="px-3 py-1 bg-stone-200 text-stone-900 text-sm font-semibold rounded-full text-center">
										Aug 2023 – May 2027
									</span>

									<span className="px-3 py-1 bg-amber-100 text-amber-900 text-sm font-bold rounded-full text-center">
										CGPA 9.48
									</span>
								</div>
							</div>

							<div className="mb-6">
								<p className="text-stone-700 font-medium">
									Specialization: Artificial Intelligence & Machine Learning
								</p>
							</div>

							<div className="space-y-3">
								<p className="font-semibold text-stone-900">
									Relevant Coursework
								</p>

								<div className="flex flex-wrap gap-2">
									{coursework.map((course, idx) => (
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

						{/* Oracle */}
						<div className="bg-white p-8 rounded-xl border border-stone-200 min-h-[250px] hover:shadow-lg transition-all duration-300">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h4 className="text-xl font-bold text-stone-900">
										Oracle Certified Professional
									</h4>
									<p className="text-amber-600 font-semibold">
										Java SE 17 Developer (OCP 17)
									</p>
								</div>

								<span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
									Verified
								</span>
							</div>

							<p className="text-stone-600 mb-6">
								Validates expertise in Java 17 language features,
								object-oriented programming, collections, streams,
								concurrency, exception handling, and application
								development.
							</p>

							<a
								href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=2F03D617AB2495B08D1C6A33943B14CE05E96E6CC353DA81D1D97B80564402FF"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
							>
								View Credential
								<ExternalLink size={16} />
							</a>
						</div>

						{/* MongoDB */}
						<div className="bg-white p-8 rounded-xl border border-stone-200 min-h-[250px] hover:shadow-lg transition-all duration-300">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h4 className="text-xl font-bold text-stone-900">
										MongoDB Certified Associate Developer
									</h4>
									<p className="text-amber-600 font-semibold">
										Node.js Developer
									</p>
								</div>

								<span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
									Verified
								</span>
							</div>

							<p className="text-stone-600 mb-6">
								Demonstrates proficiency in MongoDB data modeling, CRUD
								operations, aggregation pipelines, indexing, performance
								optimization, and integration with Node.js applications.
							</p>

							<a
								href="https://www.credly.com/go/eCOIMK7M"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
							>
								View Credential
								<ExternalLink size={16} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}