<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.description }}</p>
    <carousel
        :per-page="1"
        :pagination-enabled="true"
        pagination-color="#b3b3b3"
        pagination-active-color="#494ce8"
    >
      <slide v-for="(slide, index) in product.gallery" :key="index">
        <img :src="slide" alt="">
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      product: null
    }
  },
  created() {
    this.product = this.$store.getters.getProduct(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>