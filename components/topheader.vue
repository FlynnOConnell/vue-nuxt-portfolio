<template>
	<header>
		<a href="#" class="site-logo text-bold" aria-label="homepage">
			<div class="image-container">
				<img class="dynamic-height" src="../static/logo2vector.svg" style="height: 3vh"/>
			</div>
		</a>
		
		<div class="site-logo mt-4 image-container">
			<img id="myImage" class="dynamic-height" src="../static/logo_white.png" style="height: 3vh"/>
		</div>
		

		<nav class="main-nav">
			<ul id="dynamic-node" class="nav__list">
				<li class="nav__list-item">
					<a href="#" class="nav__link">Home</a>
				</li>
				<li class="nav__list-item">
					<a href="#" class="nav__link">Projects</a>
				</li>
				<li class="nav__list-item">
					<a href="#" class="nav__link">Resume</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: "topheader",
};
</script>
