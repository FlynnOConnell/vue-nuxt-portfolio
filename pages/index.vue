<template>
	<div class="m-8 flex flex-col items-center justify-center">
		<div class="flex flex-col flex-wrap justify-center">
			<div class="flex flex-wrap items-end justify-center">
				<h1 class="gamma lato ls-small">Premier Suite GUI</h1>
				<div class="flex justify-between mx-2 mb-2">
					<embed class="h-12 mx-3" src="../static/icons/cpp.svg" />
					<embed class="h-12 mx-3" src="../static/icons/c.svg" />
					<embed class="h-12 mx-3" src="../static/icons/JSON.svg" />
				</div>
			</div>
			<video controls muted autoplay="true">
				<source
					src="../static/movies/PremierSuiteExample.mp4"
					type="video/mp4"
				/>
				<source
					src="../static/movies/PremierSuiteExample_h264_youtube720.mp4"
					type="video/mp4"
				/>
				<source
					src="../static/movies/PremierSuiteExample_h264_aac.mp4"
					type="video/mp4"
				/>
				<source
					src="../static/movies/PremierSuiteExample_h264_mobile720.mp4"
					type="video/mp4"
				/>
				Video format not supported by your browser.
			</video>
		</div>
	</div>
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
			],
		};
	},
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1;
	margin-top: 0;
	color: #fff;
	display: inline-block;
	position: relative;
}

p {
	color: #adb7bd;
	font-family: "Lucida Sans", Arial, sans-serif;
	font-size: 16px;
	line-height: 26px;
	text-indent: 30px;
	margin: 0;
}
</style>
