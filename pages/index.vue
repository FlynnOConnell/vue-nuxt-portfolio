<script>
import CppIcon from "../components/svgicons/CppIcon.vue";
import CIcon from "../components/svgicons/CIcon.vue";

export default {
	layout: "layout_main",
	components: {
		CppIcon,
		CIcon,
	},
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
					src: "./js/observer.js",
					body: true,
				},
				{
					src: "./js/responsive.js",
					body: true,
				},
			],
			css: [
				{
					src: "~/assets/css/colors.css",
				},
				{
					src: "~/assets/css/styles.css",
				}
			],
		};
	},
};
</script>

<template>
	<div class="m-8 flex flex-col items-center justify-center">
		<NowSpotify />
		<div class="delta white">
		Hi! I'm Flynn, a software developer and scientist living in New York. I'm currently working on a few projects, including a data analysis pipeline, a few machine learning algorithms and a video game plugin. 
		<div class="flex flex-row justify-center">
			<p> My baby gurls: </p>
			<CppIcon />
			<CIcon />
		</div>
	</div>
	</div>
</template>

<style scoped>

</style>
