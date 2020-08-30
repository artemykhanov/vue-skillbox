<template>
  <ul class="catalog__list">
    <ProductItem :product="product" :key="index"
                 v-for="(product, index) in products"></ProductItem>
  </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: { ProductItem },
};
</script>
