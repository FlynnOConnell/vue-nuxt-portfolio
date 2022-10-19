<template>
	<div class="m-8 flex flex-col items-center justify-center">
		<div class="flex flex-col justify-center">
			<embed class="dynamic-image" src="../static/images/ps_stack.svg" />
			<img
				src="../static/images/PremierSuiteExampleGif.gif"
				type="image/gif"
			/>

			<div
				style="
					width: 100%;
					height: 0;
					padding-bottom: 56%;
					position: relative;
				"
			>
				<iframe
					src="../static/images/PremierSuiteExampleGif.gif"
					width="100%"
					height="100%"
					style="position: absolute"
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
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

<style>
.dynamic-image {
	height: 5rem;
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
