<template>
  <div class="item-list">
    <div v-for="product in shopList" :key="product.id">
      <Product :product="product" />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";

export default {
  name: "Shop",
  components: {
    Product
  },
  data() {
    return {
      shopList: null
    }
  },
  created() {
    this.shopList = this.$store.getters.getShopList
  }
}
</script>

<style scoped>
.item-list {
  display: flex;
  flex-direction: row;
}
</style>