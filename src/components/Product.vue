<template>
  <div class="item">
    <router-link :to="/shop/ + product.id">{{ product.title }}</router-link>
    <p>{{ product.description }}</p>
    <img :src="product.img" :alt="product.title">
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>