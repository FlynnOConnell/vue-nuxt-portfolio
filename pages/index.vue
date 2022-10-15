<template>
	<section id="index">
		<div
			class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
		>
			<!-- <link
				href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
				rel="stylesheet"
			/> -->
			<!-- <div class="firstElObserver">
				<div class="shadow sm:rounded-lg p-6">
					<h2 class="text-2xl leading-7 font-bold">
						<hr />
					</h2>
				</div>
			</div> -->
		</div>
	</section>
</template>

<script>
export default {
	layout: "default",
	head() {
		return {
			title: "Flynns Website",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"My personal portfolio with some fun things I've done and will continue doing.",
				},
			],
			script: [
				{
					src: "/js/observer.js",
					body: true,
				},
			],
		};
	},
};
</script>
