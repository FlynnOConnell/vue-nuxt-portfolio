<script>
export default {
	name: "DownloadButton",
};
</script>

<template>
	<div class="container">
		<button name="favorite">
			<embed
				width="20px"
				height="10px"
				src="../static/images/download_icon.svg"
			>
		</button>
	</div>
</template>

<style scoped>
.container {
	position: relative;
	display: flex;
	justify-content: start;
}

img.filter-white {
	color: #ffff;
}
</style>
