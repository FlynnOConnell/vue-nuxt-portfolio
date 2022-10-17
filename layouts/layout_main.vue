<template>
	<div class="all bg-2 flex flex-col items-center justify-center shrink-1">
		<a href="#"></a>
		<appheader />
		<hr class="style-two" />
		<links />
		<div class="spacer"></div>
		<resume />
		<Nuxt />
		<div class="spacer"></div>
		<bottomfooter />
	</div>
</template>

<style>

.all {
	overflow: none;
}

hr.style-two {
	border: 0;
	height: 1px;
	width: 85vh;
	border-bottom: 1px solid rgba(247, 247, 247, 0.3);
	overflow: none;
}

.spacer {
	height: 10vh;
}

</style>


<script>
import appheader from "~/components/appheader.vue";
import resume from "../components/resume.vue";
import bottomfooter from "../components/bottomfooter.vue";
import links from "../components/links.vue";

export default {
	components: {
		appheader,
		links,
		resume,
		bottomfooter,
	},
	watch: {
		$route() {
			console.log("route changed", this.$route);
		},
	},
};
</script>
