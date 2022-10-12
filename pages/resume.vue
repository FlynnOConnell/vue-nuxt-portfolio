<template>
	<div class="flex justify-center ">
		<h2 class="center">
			My Resume
			<hr />
		</h2>
		<div
			class="flex btn-group btn-group-toggle btn-sm btn-dark"
		>
			<label class="btn btn-secondary active btn-sm">
				<input
					type="radio"
					name="resume-button-name"
					id="button-dev"
					checked
				/>
				Software Dev
			</label>
			<label class="btn btn-secondary active btn-sm">
				<input
					type="radio"
					name="resume-button-name"
					id="button-data"
				/>
				Data Science
			</label>
		</div>
		<div id="myresume">
			<img
				id="resume"
				src="src\static\images\Resume_Software.png"
				alt="Resume-Software"
			/>
			<img
				id="resume2"
				class="hide-this"
				src="src\static\images\Resume_Data.png"
				alt="Resume-Data"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "resume",
};
</script>

<style lang="scss"></style>
