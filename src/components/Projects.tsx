import { Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
	const projects = [
		{
			title: "AgriLink: Farmer-to-Buyer Marketplace Platform",
			description:
				"A full-stack MERN marketplace platform enabling farmers to connect directly with buyers for seamless crop sales, communication, and order handling.",
			highlights: [
				"Built farmer and buyer dashboards with crop listing, crop management, and order tracking",
				"Implemented secure JWT-based authentication and authorization",
				"Designed and integrated RESTful APIs using Node.js, Express.js, MongoDB, and React.js",
				"Created a responsive UI using Tailwind CSS for smooth frontend-backend communication",
			],
			tech: [
				"React.js",
				"Node.js",
				"Express.js",
				"MongoDB",
				"JWT",
				"Tailwind CSS",
			],
			codeLink: "https://github.com/dharmateja19/Agri-Link",
			liveLink: "https://agri-link-blond.vercel.app/",
			featured: true,
		},

		{
			title: "Community Problem Solver: Smart Civic Engagement Platform",
			description:
				"A full-stack civic engagement platform connecting citizens and local authorities for issue reporting, solution sharing, voting, and progress tracking.",
			highlights: [
				"Built RESTful APIs with JWT authentication, OTP verification, and role-based access control",
				"Developed modules for managing problems, solutions, discussions, and notifications",
				"Implemented threaded discussions and vote-based ranking system",
				"Created analytics dashboards and real-time notifications to improve community participation",
			],
			tech: [
				"React.js",
				"Node.js",
				"Express.js",
				"MongoDB",
				"JWT",
				"OTP Verification",
			],
			codeLink: "https://github.com/dharmateja19/Community_Problem_Solver", 
			liveLink: "https://community-problem-solver-puce.vercel.app/", 
			featured: true,
		},

		{
			title: "Deepfake Image Detection System",
			description:
				"A full-stack web application that classifies uploaded images as Real or Fake using CNN-based deep learning models with ensemble prediction logic.",
			highlights: [
				"Integrated EfficientNet and MobileNetV2 models using PyTorch",
				"Built RESTful APIs with Node.js, Express.js, MongoDB, and Cloudinary",
				"Developed drag-and-drop image upload functionality",
				"Implemented confidence score display and prediction history dashboard",
			],
			tech: [
				"Python",
				"PyTorch",
				"EfficientNet",
				"MobileNetV2",
				"React.js",
				"Node.js",
				"MongoDB",
				"Cloudinary",
			],
			codeLink: "https://github.com/dharmateja19/DeepFake_Image_Detection",
			featured: true,
		},
	];

	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
			<div className="max-w-6xl mx-auto">
				<div className="space-y-4 mb-16">
					<div className="flex items-center gap-3">
						<Code2 className="text-amber-600" size={32} />
						<h2 className="text-4xl sm:text-5xl font-bold text-stone-900">
							Featured Projects
						</h2>
					</div>
					<p className="text-stone-600 text-lg">
						Showcase of my best work and technical achievements
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
								project.featured ? "lg:col-span-1" : ""
							}`}
						>
							<div className="bg-gradient-to-br from-stone-900 to-stone-800 p-8 h-full flex flex-col justify-between">
								<div>
									<h3 className="text-2xl font-bold text-white mb-3">
										{project.title}
									</h3>
									<p className="text-stone-300 mb-6 leading-relaxed">
										{project.description}
									</p>

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
						href="https://github.com/dharmateja19?tab=repositories"
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
