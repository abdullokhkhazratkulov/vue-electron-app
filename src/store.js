import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {

  },
  actions: {
    async deleteProduct(context, product) {
      console.log('store is being asked to delete '+ product.id);
      await idb.deleteProduct(product); 
    },
    async getProducts(context) {
      context.state.products = [];
      let products = await idb.getProducts();
      products.forEach(c => {
        context.state.products.push(c);
      });
    },
    async saveProduct(context, product) {
      await idb.saveProduct(product);
    }
  }
})
