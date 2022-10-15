<template>
	<div class="outer-container">
		<topheader />
		<div class="cutoff"></div>
		<Nuxt />
		<resume />
		<bottomfooter />
	</div>
</template>

<style>
.outer-container {
	margin: 2vh;
	box-shadow: 0px 0px 80px 54px #545454;
}

.cutoff {
	position: absolute;
	top: 25vh;
	height: 1px;
	display: hidden;
}
</style>

<script>
import topheader from "../components/topheader.vue";
import resume from "../components/resume.vue";
import bottomfooter from "../components/bottomfooter.vue";

export default {
	components: {
		topheader,
		resume,
		bottomfooter,
	},
};
</script>
