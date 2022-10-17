<template>
	<div class="all bg-2 flex flex-col items-center justify-center">
		<a href="#"></a>
		<appheader />
		<div class="spacer"></div>
		<resume />
		<Nuxt />
		<div class="spacer"></div>
		<bottomfooter />
	</div>
</template>

<style>

.all {
	max-width: 1400px;
}

.spacer {
	height: 10vh;
}

</style>


<script>
import appheader from "~/components/appheader.vue";
import resume from "../components/resume.vue";
import bottomfooter from "../components/bottomfooter.vue";

export default {
	components: {
		appheader,
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
