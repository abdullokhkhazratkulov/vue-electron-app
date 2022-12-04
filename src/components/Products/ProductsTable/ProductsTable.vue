<template>
    <div>
      <Notification />
      <b-button @click="openManualAddItemModal">Add Product</b-button>
      <AddProducts ref="manualAddProduct"/>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Barcode</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <Product v-for="(product,idx) in products" :key="idx" :product="product" @delete="deleteProduct" @edit="editProduct" />
        </tbody>
      </table>
    </div>
  </template>
  
<script>
import Product from '@/components/Products/ProductsTable/Product.vue';
import AddProducts from '@/components/Products/AddProducts/AddProducts.vue';
import Notification from "@/components/Notification.vue";
export default {
  data(){
    return{
      modalshow: false
    }
  },
components: {
    Product,
    AddProducts,
    Notification
},
computed: {
    products() {
    return this.$store.state.products;
    }
},
created() {
    this.$store.dispatch('getProducts');
},
methods: {
    addProduct() {
    this.$router.push({ name: 'edit' });
    },
    openManualAddItemModal() {
      this.$root.$emit('bv::show::modal', 'manual-add-modal', '#btnShow')
      this.$refs.manualAddProduct.focus()
    },
    async deleteProduct(product) {
    console.log('delete', product.id);
    await this.$store.dispatch('deleteProduct', product);
    this.$store.dispatch('getProducts');
    },
    editProduct(product) {
    console.log('edit', product.id);
    this.$router.push({ name: 'edit', params: {product: product} });
    }
}
};
</script>