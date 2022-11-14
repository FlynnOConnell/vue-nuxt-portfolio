<template>
	<section class="flexed-line justify-center mt-5">
		<!-- Spotify Icon Component here -->
		<img
			class="spotify-icon"
			src="../static/icons/spotify.png"
			alt="Spotify Logo"
		/>
		<div class="flex items-center text-yellow-600 text-xs ml-2">
			<span>{{ topTracks }}</span>
		</div>
	</section>
</template>

<script>
import { getTopTracks } from "../plugins/spotify";
export default {
	name: "TopTracks",
	data() {
		return {
			topTracks: "Top tracks can't be loaded.",
		};
	},
	watch: {
		"$route.path"() {
			this.currentTrack();
		},
	},
	beforeMount() {
		this.currentTrack();
	},
	methods: {
		async currentTrack() {
			try {
				const response = await getTopTracks();
				if (response.status === 200) {
					const { item, is_playing: np } = await response.json();
					this.currentTrackStr = `${
						np ? "Now playing:" : "Last played:"
					} ${item.name}
                                    by ${item.artists
										.map((artist) => artist.name)
										.join(", ")}.`;
				}
			} catch (e) {
				this.currentTrackStr = "Couldn't fetch data :(";
			}
		},
	},
};
</script>

<style scoped>
.spotify-icon {
  width: 20px;
  height: 20px;
  max-width: 100%;
	max-height: 100%;
}
</style>
