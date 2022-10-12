<template>
	<header class="flex justify-between nav-scrolled">
		<div class="container md:container md:mx-auto" aria-label="homepage">
			<!-- Full width container until md breakpoint -->
			<div class="flex justify-between">
				<div class="image-container">
					<img class="logo" src="../static/logo2vector.svg" />
				</div>
				<!-- <button class="flex justify-between" aria-label="">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</button> -->
				<div class="flex-grow">
					<div class="flex justify-around">
						<a class="text-lg font-semibold" href="#"> HOME </a>
						<a class="text-lg font-semibold" href="#"> PROJECTS </a>
						<a class="text-lg font-semibold" href="#resumelink"> RESUME </a>
					</div>
				</div>
				
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "topheader",
};
</script>

<style lang="scss">

.site-logo {
	font-weight: 900;
	font-size: 0.8rem;
	color: var(--text);
	text-decoration: none;
}

.header {
	--text: #f4f4f4
	--text-inverse: #333
	--background: transparent

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2em 3em;
	transition: background 250ms ease-in;
	background: var(--background);
	color: var(--text)
}

.image-container {
	width: 40px;
	height: 40px;
}

.image-container img {
	height: 100%;
}

.header ul {
	display: flex;
}
</style>
