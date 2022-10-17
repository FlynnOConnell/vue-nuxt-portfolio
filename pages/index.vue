<template>
	<div class="all"></div>
</template>

<script>
export default {
	layout: "layout_main",
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
					body: true
				},
				{
					src: "./js/responsive.js",
					body: true
				},
			],
			css: [{
				src: "~/assets/css/colors.css"
			}],
		};
	},
};
</script>

<style></style>
