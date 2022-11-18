<script>
export default {
	name: "links",
	methods: {
		toGithub() {
			const link = document.createElement("a");
			link.href = "https://github.com/NeuroPyPy";
			link.target = "_blank";
			link.click();
		},
		toTwitter() {
			const link = document.createElement("a");
			link.href = "https://twitter.com/FlynnNeuro";
			link.target = "_blank";
			link.click();
		},
		toLinkedin() {
			const link = document.createElement("a");
			link.href = "https://www.linkedin.com/in/flynnoconnell/";
			link.target = "_blank";
			link.click();
		},
	},
};
</script>

<template>
	<div class="flex flex-row justify-around">
		<button @click="toGithub">
			<font-awesome-icon :icon="['fab', 'github']" inverse size="2x" />
		</button>
		<button @click="toTwitter">
			<font-awesome-icon :icon="['fab', 'twitter']" inverse size="2x" />
		</button>
		<button @click="toLinkedin">
			<font-awesome-icon :icon="['fab', 'linkedin']" inverse size="2x" />
		</button>
	</div>
</template>

<style scoped></style>
