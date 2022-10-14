<template>
	<div>

    <topheader />
    <Nuxt />
    <resume />
		<bottomfooter />
	</div>
</template>

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


