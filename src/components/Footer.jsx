export default function Footer() {
	return (
		<footer className="bg-stone-900 text-stone-100">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<p className="text-center text-stone-500 text-sm">
					© {new Date().getFullYear()} Dharma Teja. All rights reserved.
				</p>
			</div>
		</footer>
	);
}