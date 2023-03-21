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
        <span class="mx-10"> Limited offer. 30% off on all products availeble in our store!!! </span><button class="mx-10 bg-white px-6 py-2 shadow-xl text-black font-bold rounded-2xl hover:bg-gray-200 hover:duration-300">START SHOPPING</button>
    </div>
    <div class="grid grid-cols-5 gap-6 p-4">
        <StoreItem name="Kyrie Fly" price="200.00" image="./icons/logo.png" src="/src/img/shoe2.png"></StoreItem>
        <StoreItem name="Nike Flyease go" price="150.00" image="./icons/logo.png" src="/src/img/shoe3.png"></StoreItem>
        <StoreItem name="Nike Air Max" price="219.99" image="./icons/logo.png" src="/src/img/shoe4.png"></StoreItem>
        <StoreItem name="Nike Dunk" price="150.00" image="./icons/logo.png" src="/src/img/shoe5.png"></StoreItem>
        <StoreItem name="Nike Air VaporMax" price="210.00" image="./icons/logo.png" src="/src/img/shoe6.png"></StoreItem>
        <StoreItem name="Kyrie Force 1" price="320.00" image="./icons/logo.png" src="/src/img/shoe7.png"></StoreItem>
        <StoreItem name="Nike Air Huarache" price="270.00" image="./icons/logo.png" src="/src/img/shoe8.png"></StoreItem>
        <StoreItem name="Nike Zoom Fly 6" price="245.00" image="./icons/logo.png" src="/src/img/shoe9.png"></StoreItem>
        <StoreItem name="Nike SuperRep" price="240.00" image="./icons/logo.png" src="/src/img/shoe10.png"></StoreItem>
        <StoreItem name="Nike Adapt" price="130.00" image="./icons/logo.png" src="/src/img/shoe11.png"></StoreItem>
        
    </div>
</template>

<script>

import StoreItem from '../components/StoreItem.vue'

export default {
  name: "App",
  components: {
    StoreItem
  },
}
</script>
