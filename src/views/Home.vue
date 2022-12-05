<template>
  <div>
    <ProductsTable />
    <Notification />
  </div>
</template>

<script>

import ProductsTable from '@/components/Products/ProductsTable/ProductsTable.vue';
import Notification from '../components/Notification.vue';

export default {
  components: {
    ProductsTable,
    Notification
},
  computed: {
  },
  created() {
  },
  methods: {
  }
};
</script>
