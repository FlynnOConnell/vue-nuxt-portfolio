<script>
import appheader from "../components/appheader.vue";
import appfooter from "../components/appfooter.vue";
import links from "../components/links.vue";

export default {
	name: "App",
	components: {
		appheader,
		appfooter,
		links,
	},
};
</script>

<template>
	<div class="min-h-[200px]">
		<v-app
			id="main"
			:style="{
				background: '#001f3f',
			}"
		>
			<div class="flex flex-col justify-center items-center">
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
			<div>
				<v-card
					class="overflow-hidden mx-auto relative"
					height="56"
					max-width="500"
					color="dark"
					target="hide-on-scroll"
				>
					<v-bottom-navigation absolute hide-on-scroll horizontal>
						<v-btn color="deep-purple accent-4" text>
							<span>Recents</span>

							<v-icon>mdi-history</v-icon>
						</v-btn>

						<v-btn color="deep-purple accent-4" text>
							<span>Favorites</span>

							<v-icon>mdi-heart</v-icon>
						</v-btn>

						<v-btn color="deep-purple accent-4" text>
							<span>Nearby</span>

							<v-icon>mdi-map-marker</v-icon>
						</v-btn>
					</v-bottom-navigation>
				</v-card>
			</div>
		</v-app>
	</div>
</template>

<style scoped>

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
	min-height: 40vh;
}

hr.style-two {
	border: 0;
	height: 1px;
	width: 85vh;
	border-bottom: 1px solid rgba(247, 247, 247, 0.3);
	overflow: none;
}
</style>
