<script>
import appheader from "../components/appheader.vue";
import appfooter from "../components/appfooter.vue";
import links from "../components/links.vue";

export default {
	components: {
		appheader,
		links,
		appfooter,
	},
};
</script>

<template>
	<div class="bg-2 flex flex-col justify-center items-center">
		<a href="#"></a>
		<appheader />
		<div class="container">
			<links />
		</div>
		<hr class="style-two mb-10" />
		<div class="container">
			<Nuxt />
		</div>
	</div>
</template>

<style>

h1 {
	color: #ffffff;
	font-family: Georgia, arial, serif;
	font-size: 2.5rem;
	font-weight: 300;
	line-height: 58px;
	margin: 0 0 58px;
}

.container {
	padding: 0 1em;
	max-width: 60rem;
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
