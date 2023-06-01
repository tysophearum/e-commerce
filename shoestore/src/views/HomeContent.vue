<template>
    <div class="h-96 rounded-2xl bg-[#ffa405] m-4 flex items-center justify-center">
        <div class="w-1/3 mx-10">
            <h1 class="text-7xl text-white font-bold drop-shadow-xl">NIKE AIR</h1>
            <p class="text-xl text-white my-6">
                Nike Air technology consists of pressurized air inside a tough yet flexible bag and provides more flexibility and spring without compromising structure. The Air Sole units maintain their given form with elasticity, lower impact and keep the shoe snug and lightweight.
            </p>
            <button class="bg-black p-4 shadow-xl text-white font-bold rounded-2xl hover:bg-white hover:text-black hover:duration-300">VIEW COLLECTION</button>
        </div>
        <img class="drop-shadow-lg mx-10" src="../img/shoe1.png" alt="shoe1.png">
    </div>
    <div class="bg-black mx-4 p-4 shadow-xl text-white font-bold rounded-2xl flex justify-center items-center">
        <span class="mx-10"> Limited offer. 30% off on all products availeble in our store!!! </span><button class="mx-10 bg-white px-6 py-2 shadow-xl text-black font-bold rounded-2xl border-white border-2 hover:bg-black hover:text-white hover:border-white hover:duration-300">START SHOPPING</button>
    </div>
    <div class="grid grid-cols-5 gap-6 p-4">
      <StoreItem v-for="product in products" :name="product.name" :price="product.price" :src="product.imageLink"></StoreItem>
    </div>
</template>

<script>

import StoreItem from '../components/StoreItem.vue'
import { createApp } from 'vue';
let Vue = createApp({})

import axios from 'axios';

export default {
  data() {
    return {
      products: undefined
    };
  },
  name: "App",
  components: {
    StoreItem
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
