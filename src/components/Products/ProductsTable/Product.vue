<template>
  <!-- <v-card>
    <v-card-title>
      {{ product.name }}
    </v-card-title>
    <v-card-title>
      {{ product.client }}
    </v-card-title>
    <v-card-text>
      It is price {{ product.price }}
    </v-card-text>
    <v-card-text>
      It is quantity {{ product.quantity }}
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="$emit('delete',product)">Delete</v-btn>
      <v-btn @click="$emit('edit',product)">Edit</v-btn>
    </v-card-actions>
  </v-card> -->
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.productName }}</td>
    <td>{{ product.category }}</td>
    <td>{{ product.price }}</td>
    <td>{{product.barcode}}</td>
    <td>{{ product.quantity }}</td>
    <td>
      <v-btn color="red" @click="$emit('delete',product)">Delete</v-btn>
    </td>
    <td><v-btn color="yellow" @click="$emit('edit', product)">Edit</v-btn> </td>
  </tr>
</template>

<script>
export default {
  props: ['product'], 
  data: () => ({

  }),
  created() {
    console.log('product created');
  },
  methods: {
  }
};
</script>
