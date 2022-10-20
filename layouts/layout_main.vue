<script>
import AppHeader from "~/components/AppHeader.vue";
import Resume from "../components/Resume.vue";
import AppFooter from "../components/AppFooter.vue";
import Links from "../components/Links.vue";

export default {
	components: {
		AppHeader,
		Links,
		Resume,
		AppFooter,
	},
};
</script>

<template>
	<div class="bg-2 flex flex-col justify-center items-center">
		<a href="#"></a>
		<AppHeader />

		<div class="container">
			<Links />
		</div>
		<hr class="style-two mb-10" />
		<a id="projectslink"></a>
		<div>
			<h1 class="mt-20 mb-20 gamma lato thin uppercase bold ls-xlarge">
				Projects
			</h1>
		</div>
		<div class="container">
			<Nuxt />
		</div>
		<div class="spacer"></div>
		<a id="resumelink"></a>
		<div class="container">
			<Resume />
		</div>

		<div class="spacer"></div>
		<div class="container">
			<AppFooter />
		</div>
	</div>
</template>

<style>
/* globals .all substitute for body! */
.all {
	margin: 0;
}

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
