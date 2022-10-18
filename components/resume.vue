<template>
	<section class="m-8 flex items-center justify-center">
		<a href="#resumelink"></a>
		<div
			class="wrapper flex flex-col justify-center items-center bg-1 border"
		>
			<h2 class="flex justify-center center cursive text-white">
				My Resume
				<hr />
			</h2>
			<div
				class="flex btn-group btn-group-toggle btn-sm btn-dark justify-center gap-4 pt-6"
			>
				<span id="dev_span" class="text-white">
					 Developer
					 </span>
				<label class="switch">
					<input
						id="resume-checkbox"
						type="checkbox"
						onchange="checkAddress(this)"
					/>
					<span class="slider"></span>
				</label>
				<span id="ds_span" class="text-white"> Data Scientist </span>
			</div>
			<div class="downloader">
				<a href="#" class="buttonDownload">Download</a>
			</div>
			<div id="myresume" class="" style="padding: 0rem 1rem 1rem 1rem">
				<img
					class="resumeclass resumeshadow"
					id="resume"
					src="../static/images/Resume_dev.png"
					alt="Resume-Software"
				/>
				<img
					id="resume2"
					class="resumeclass resumeshadow hidden"
					src="../static/images/Resume_data.png"
					alt="Resume-Data"
				/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "resume",

	methods: {
		downloadMe() {
			const link = document.createElement("a");
			link.href = "/images/resume_dev.png";
			link.download = "resume_dev.png";
			link.target = "_blank";
			link.click();
		},
	},
	mounted: function () {
		this.$nextTick(function () {
			console.log("header export mount test!!! tick tick tick!! ${this}");
		});
	},
};
</script>

<style scoped>

.downloader {
	display: flex;
	width: 100%;
	height: auto;

	padding-top: 2rem;
	align-items: right;
	padding-left: 1rem;
}

.buttonDownload {
	display: inline-block;
	position: relative;
	padding: 10px 25px;
  
	background-color: #bec8c8;
	color: white;
	border-radius: 25px;
	font-family: sans-serif;
	text-decoration: none;
	font-size: 0.9em;
	text-align: center;
	text-indent: 15px;
}

.buttonDownload:hover {
	background-color: #333;
	color: white;
}

.buttonDownload:before, .buttonDownload:after {
	content: ' ';
	display: block;
	position: absolute;
	left: 15px;
	top: 52%;
}

/* Download box shape  */
.buttonDownload:before {
	width: 10px;
	height: 2px;
	border-style: solid;
	border-width: 0 2px 2px;
}

/* Download arrow shape */
.buttonDownload:after {
	width: 0;
	height: 0;
	margin-left: 1px;
	margin-top: -7px;
  
	border-style: solid;
	border-width: 4px 4px 0 4px;
	border-color: transparent;
	border-top-color: inherit;
	
	animation: downloadArrow 2s linear infinite;
	animation-play-state: paused;
}

.buttonDownload:hover:before {
	border-color: #4CC713;
}

.buttonDownload:hover:after {
	border-top-color: #4CC713;
	animation-play-state: running;
}

/* keyframes for the download icon anim */
@keyframes downloadArrow {
	/* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */
	0% {
		margin-top: -7px;
		opacity: 1;
	}
	
	0.001% {
		margin-top: -15px;
		opacity: 0;
	}
	
	50% {
		opacity: 1;
	}
	
	100% {
		margin-top: 0;
		opacity: 0;
	}
}

div#resume {
	width: calc(100vh - 40px);
	min-height: 40px;
	margin-left: 20px;
	margin-right: 20px;
}

.wrapper {
	width: calc(100% - 5px);
	height: auto;
}

/* The switch - the box around the slider */
.switch {
	/* Variables */
	--switch_width: 2em;
	--switch_height: 1em;
	--thumb_color: #e8e8e8;
	--track_color: #e8e8e8;
	--track_active_color: #888;
	--outline_color: #000;
	font-size: 17px;
	position: relative;
	display: inline-block;
	width: var(--switch_width);
	height: var(--switch_height);
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	box-sizing: border-box;
	border: 2px solid var(--outline_color);
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--track_color);
	transition: 0.15s;
	border-radius: var(--switch_height);
}

.slider:before {
	box-sizing: border-box;
	position: absolute;
	content: "";
	height: var(--switch_height);
	width: var(--switch_height);
	border: 2px solid var(--outline_color);
	border-radius: 100%;
	left: -2px;
	bottom: -2px;
	background-color: var(--thumb_color);
	transform: translateY(-0.2em);
	box-shadow: 0 0.2em 0 var(--outline_color);
	transition: 0.15s;
}

input:checked + .slider {
	background-color: var(--track_active_color);
}

input:focus-visible + .slider {
	box-shadow: 0 0 0 2px var(--track_active_color);
}

/* Raise thumb when hovered */
input:hover + .slider:before {
	transform: translateY(-0.3em);
	box-shadow: 0 0.3em 0 var(--outline_color);
}

input:checked + .slider:before {
	transform: translateX(calc(var(--switch_width) - var(--switch_height)))
		translateY(-0.2em);
}

/* Raise thumb when hovered & checked */
input:hover:checked + .slider:before {
	transform: translateX(calc(var(--switch_width) - var(--switch_height)))
		translateY(-0.3em);
	box-shadow: 0 0.3em 0 var(--outline_color);
}

[id^="resume"],
[id^="resume2"] {
	position: relative;
	top: 10px;
	height: auto;
	width: auto;
}

[id^="resume"]:before,
[id^="resume"]:after,
[id^="resume2"]:before,
[id^="resume2"]:after {
	content: "";
	position: absolute;
	z-index: -1;
	top: 10px;
	bottom: 10px;
	left: 0;
	right: 0;
	-moz-border-radius: 100px / 10px;
	border-radius: 100px / 10px;
}

[id^="resume"]:after,
[id^="resume2"]:after {
	right: auto;
	left: auto;
	-webkit-transform: skew(8deg) rotate(3deg);
	-moz-transform: skew(8deg) rotate(3deg);
	-ms-transform: skew(8deg) rotate(3deg);
	-o-transform: skew(8deg) rotate(3deg);
	transform: skew(8deg) rotate(3deg);
}

.resumeshadow {
	position: relative;
	-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.491),
		0 0 40px rgba(0, 0, 0, 0.491);
	-moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.491),
		0 0 40px rgba(0, 0, 0, 0.491);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.491), 0 0 40px rgba(0, 0, 0, 0.491);
}
.resumeshadow:before,
.resumeshadow:after {
	content: "";
	position: absolute;
	z-index: -1;
	-webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
	-moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
	top: 10px;
	bottom: 10px;
	left: 0;
	right: 0;
	-moz-border-radius: 100px / 10px;
	border-radius: 100px / 10px;
}
.resumeshadow:after {
	right: 10px;
	left: auto;
	-webkit-transform: skew(8deg) rotate(3deg);
	-moz-transform: skew(8deg) rotate(3deg);
	-ms-transform: skew(8deg) rotate(3deg);
	-o-transform: skew(8deg) rotate(3deg);
	transform: skew(8deg) rotate(3deg);
}

.cursive {
	font-family: "Monotype Corsiva", "Apple Chancery", "ITC Zapf Chancery",
		"URW Chancery L", cursive;
}

/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
}

/* Portrait */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
}

/* Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
}

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
}

/* Portrait */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
}

/* Landscape */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
}
</style>
