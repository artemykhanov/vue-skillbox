<template>
  <ul class="catalog__list">
    <ProductItem :product="product" :key="product.id"
                 v-for="product in products"></ProductItem>
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
