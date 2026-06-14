import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-[70vh] pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
		>
			{/* Decorative background elements */}
			<div className="absolute top-20 right-10 w-72 h-72 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
			<div className="absolute bottom-40 left-10 w-96 h-96 bg-orange-100 rounded-full opacity-15 blur-3xl"></div>

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						<div className="space-y-4">
							<div className="inline-block">
								<span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold">
									Full-Stack & AI/ML Enthusiast
								</span>
							</div>

							<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight">
								<span className="text-amber-600">Dharma Teja</span>
							</h1>

							<p className="text-xl sm:text-2xl text-stone-600 max-w-2xl leading-relaxed">
								Computer Science student interested in Full-Stack Development
								and AI/ML. Passionate about building scalable web applications
								using the MERN stack and exploring intelligent systems.
							</p>
						</div>

						<div className="pt-2">
							<a
								href="#projects"
								className="inline-block px-8 py-3 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition-colors"
							>
								View My Work
							</a>
						</div>

						<div className="flex gap-6 pt-2">
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

					{/* Right Image */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative">
							<div className="absolute inset-0 bg-amber-200 rounded-3xl blur-2xl opacity-30 scale-105"></div>

							<img
								src="/about_me.png"
								alt="Terminal Profile"
								className="relative w-full max-w-[550px] h-auto rounded-3xl shadow-2xl"
							/>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="flex justify-center mt-12 animate-bounce">
					<ChevronDown className="text-amber-600" size={24} />
				</div>
			</div>
		</section>
	);
}
