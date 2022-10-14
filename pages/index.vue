<template>
	<section id="index">
		<div
			class="home-intro relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
		>
			<link
				href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
				rel="stylesheet"
			/>
			<div class="firstElObserver max-w-4xl mx-auto sm:px-6 lg:px-8">
				<div class="overflow-hidden shadow sm:rounded-lg p-6">
					<h2 class="text-2xl leading-7 font-bold">
						Welcome to my website!
					</h2>
					<p class="mt-3 text-black-600">
						I am a
						<a
							href="https://nuxtjs.org"
							target="_blank"
							class="button--doc text-violet-600 hover:underline"
							>scientist</a
						>,
						<a
							href="https://nuxtjs.org"
							target="_blank"
							class="button--doc text-orange-500 hover:underline"
						>
							data-analyst</a
						>,
						<a
							href="https://nuxtjs.org"
							target="_blank"
							class="button--doc text-red-800 hover:underline"
						>
							software developer!</a
						>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	layout: 'default',
	head() {
		return {
			title: "Flynns Website",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "My personal portfolio with some fun things I've done and will continue doing.",
				},
			],
			script: [
				{
					src: "observer.js",
					body: true,
				},
				{
					src: "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
				},
				
	
			],
		};
	},
};
</script>
