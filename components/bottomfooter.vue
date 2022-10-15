<template>
	<footer>
		<p class="text-center text-lg">Copyright &copy; 2022 Flynn OConnell</p>
		<button id=scrollme type="button">To the top</button>
	</footer>
</template>

<script>
export default {
	name: "bottomfooter",
};
</script>

<style scoped>

footer {
	height: 5hv;
	padding: 20hv;
}

button {
	position: fixed;
	bottom: 3rem;
	right: 3rem;
	box-shadow: 0 0 14px -5px rgba(0, 0, 0,0.5);
	border-radius: 100%;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
  }

</style>
