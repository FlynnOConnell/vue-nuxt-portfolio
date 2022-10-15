<template>
	<section id="resume-section" class="m-8 border-2">
		<div class="wrapper flex flex-col ">

				<h2 class="center" style="text-align: center">
					My Resume
					<hr />
				</h2>
				<div
					class="flex btn-group btn-group-toggle btn-sm btn-dark justify-center gap-4 pt-6"
				>
					<span id="dev_span"> Developer </span>
					<label class="switch">
						<input id="resume-checkbox" type="checkbox" checked/>
						<span class="slider"></span>
					</label>
					<span id="ds_span"> Data Scientist </span>
				</div>
				<div id="myresume" style="padding: 20px">
					<img
						id="resume"
						src="../static/images/Resume_dev.png"
						alt="Resume-Software"/>
					<img
						id="resume2"
						class="hide-this"
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
	mounted: function () {
		this.$nextTick(function () {
			// console.log("header export mount test!!! tick tick tick!! ${this}");
		});
	},
};


</script>

<style scoped>

.wrapper {
  
  width: auto;
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

[id^="resume"] {
	position: relative;
	-webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3),
		0 0 60px rgba(0, 0, 0, 0.1) inset;
	-moz-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3),
		0 0 60px rgba(0, 0, 0, 0.1) inset;
	box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
}

[id^="resume"] {
	position: relative;
	top: 10px;
	height: auto;
	width: auto;
	background: #fff;

}

[id^="resume"]:before,
[id^="resume"]:after {
	content: "";
	position: absolute;
	z-index: -1;
	-webkit-box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
	-moz-box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
	box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
	top: 10px;
	bottom: 10px;
	left: 0;
	right: 0;
	-moz-border-radius: 100px / 10px;
	border-radius: 100px / 10px;
}
[id^="resume"]:after {
	right: 10px;
	left: auto;
	-webkit-transform: skew(8deg) rotate(3deg);
	-moz-transform: skew(8deg) rotate(3deg);
	-ms-transform: skew(8deg) rotate(3deg);
	-o-transform: skew(8deg) rotate(3deg);
	transform: skew(8deg) rotate(3deg);
}

.hide-this {
	display: none !important;
}
</style>
