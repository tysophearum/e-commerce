<script setup>

</script>

<template>
  <Header></Header>
  <div class=" flex justify-end px-4">
    <button class="p-2 rounded-md bg-blue-400 text-white font-bold">Add product</button>
  </div>
  <div class=" p-3">
    <StoreItemAdmin v-for="product in products" :name="product.name" :price="product.price" :src="product.imageLink"></StoreItemAdmin>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import StoreItemAdmin from '../components/StoreItemAdmin.vue';

import axios from 'axios';

export default {
  name: "Admin",
  components: {
    Header,
    Footer,
    StoreItemAdmin,
  },
  data() {
    return {
      products: undefined
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:3000/product/all')
        .then(response => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
