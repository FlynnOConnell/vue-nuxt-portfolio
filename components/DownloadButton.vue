<script>
export default {
	name: "DownloadButton"
};
</script>

<template>
	<div class="container">
		<button name="favorite">
			<img width="20px" height="10px" src="../static/images/download_icon.svg"> 
		  </button>
	</div>
</template>

<style>

.container {
    position: relative;
    display: flex;
    justify-content: start;
}

svg {
	background-color: rgb(255, 255, 255);
	-webkit-mask: url(../static/images/download_icon.svg) no-repeat center;
	mask: url(../static/images/download_icon.svg) no-repeat center;
  }

