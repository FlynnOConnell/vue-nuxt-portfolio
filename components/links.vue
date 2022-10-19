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
	},
};
</script>


<template>
	<div class="links flex justify-center pt-12 gap-12">
		<button @click="toGithub">
			<font-awesome-icon :icon="['fab', 'github']" inverse size="2x" />
		</button>
                <button @click="toTwitter">
			<font-awesome-icon :icon="['fab', 'twitter']" inverse size="2x" />
		</button>
		
	</div>
</template>


<style scoped>
</style>
