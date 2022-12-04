<template>
  <b-modal id="manual-add-modal">
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="product.productName" label="Product" required min="0" max="30" />
          </v-col>
          <v-col>
            <v-text-field v-model="product.category" label="Category" required />
          </v-col>
          <v-col>
            <v-text-field v-model="product.price" label="Price" required type="numeric" min="0" max="30" />
          </v-col>
          <v-col>
            <v-text-field v-model="product.barcode" label="Barcode" required type="numeric" min="0" max="30" />
          </v-col>
          <v-col>
            <v-text-field v-model="product.quantity" label="Quantity" required type="numeric" min="0" max="30" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="green" b-button @click="save">Save Product</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </b-modal>
</template>

<script>

export default {
  data() {
    return {
      product:null
    }
  },
  created() {
    if(this.$route.params.product) {
      this.product = this.$route.params.product;
    } else {
      this.product = { productName:'', category: '', price: null, barcode: null, quantity: null };
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('saveProduct', this.product);
      console.log('back');
      this.$router.push('/');
    }
  }
};
</script>