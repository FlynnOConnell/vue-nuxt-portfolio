<template>
  <div>
    <topheader />
    <primary />
    <Nuxt />
  </div>
</template>

<script>
import  topheader from '../components/topheader.vue'
import  primary from '../components/primary.vue'


export default {
  components: {
    topheader,
    primary,
  }
};
</script>


<style lang="scss">

</style>