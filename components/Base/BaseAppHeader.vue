<script>
export default {
	name: "BaseAppHeader",
};
</script>

<template>
		<header id="header" class="transition header-fixed">
			<div class="header-limiter">
				<a href="#" class="site-logo" aria-label="homepage">
					<div class="image-container transition flex justify-center">
						<embed
							class="dynamic-image white transition"
							src="public/images/signature_black.svg"
						/>
					</div>
				</a>

				<nav class="main-nav justify-center pt-3">
					<ul id="dynamic-node" class="nav__list">
						<li class="nav__list-item">
							<a href="#" class="nav__link">Home</a>
						</li>
						<li class="nav__list-item">
							<a href="#projectslink" class="nav__link"> Projects </a>
						</li>
						<li class="nav__list-item">
							<a href="#resumelink" class="nav__link"> Resume </a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
</template>


<style scoped>
.white {
	filter: brightness(0) invert(1);
}

.main-nav {
	display: flex;
	align-items: center;
}

.dynamic-image {
	flex: 1;
	height: auto;
	width: auto;
}

.header-limiter {
	padding-top: 5vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

header {
	--text: #f4f4f4;
	--text-inverse: #333;
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	height: 20vh;
	padding: 2em 3em;
	transition: background 250ms ease-in;
	background: transparent;
	color: var(--text);
}

.nav__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
}

.nav__link {
	--spacing: 1em;
	text-decoration: none;
	color: inherit;
	display: inline-block;
	padding: calc(var(--spacing) / 2) var(--spacing);
	position: relative;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 1.5vh;
}

.nav__link:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: var(--spacing);
	right: var(--spacing);
	height: 2px;
	background: currentColor;
	-webkit-transform: scaleX(0);
	transform: scaleX(0);
	transition: -webkit-transform 150ms ease-in-out;
	transition: transform 150ms ease-in-out;
	transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;
}

.nav__link:hover::after {
	-webkit-transform: scaleX(1);
	transform: scaleX(1);
}

.nav__link--btn {
	border: 1.5px solid currentColor;
	border-radius: 2em;
	margin-left: 1em;
	transition: background 250ms ease-in-out;
	letter-spacing: 1px;
	padding: 0.75em 1.5em;
}

.nav__link--btn:hover {
	background: var(--text);
	color: var(--text-inverse);
	border-color: var(--text);
}

.nav__link--btn::after {
	display: none;
}

.nav__link--btn--highlight {
	background: limegreen;
	border-color: limegreen;
	color: #333;
}

.nav__link--btn--highlight:hover {
	background: var(--text);
	border-color: var(--text);
}

.background-show {
	transition: background 1000ms ease-in;
	background-color: rgb(255, 255, 255);
}

.nav-scrolled {
	--text: rgb(0, 0, 0);
	--text-inverse: #f4f4f4;
	--background: transparent;
}

.transition {
	-webkit-transition: all 1s ease-in-out;
	-moz-transition: all 1s ease-in-out;
	-o-transition: all 1s ease-in-out;
	transition: all 1s ease-in-out;
}

.tilecontainer.toggled {
	animation: none;
}

.tilecontainer.toggled > #title {
	opacity: 0;
}

.tilecontainer.toggled > #icon {
	opacity: 1;
}

.tilecontainer.toggled > #tiles > .tile:hover {
	opacity: 0.1 !important;
}

.centered {
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
}

#tiles {
	height: calc(100vh - 1px);
	width: calc(100vw - 1px);
	position: relative;
	z-index: 2;

	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	grid-template-rows: repeat(var(--rows), 1fr);
}
</style>
