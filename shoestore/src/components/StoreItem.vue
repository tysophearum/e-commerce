<template>
    <div class="h-96 rounded-2xl bg-[#ffa405] flex flex-col justify-center items-center p-3">
        <img v-bind:src="src" class="drop-shadow-lg w-full h-56 mb-4 object-contain" alt="shoe2">
        <button class="w-full h-fit bg-white p-4 rounded-2xl shadow-lg flex flex-col justify-center items-center mt-4 hover:bg-black hover:text-white hover:duration-300">
            <h1 class="text-lg font-bold mb-2">{{ name }}</h1>
            <p class="mt-2 text-lg">${{ price }}</p>
        </button>
    </div>
</template>

<script>
    export default {
        name: "StoreItem",
        props: ['name', 'price', 'src'],
    }
    
</script>