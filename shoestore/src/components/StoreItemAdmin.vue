<template>
    <div class="w-full bg-slate-200 rounded grid grid-cols-3 justify-between h-20 my-1">
        <div class=" flex items-center">
            <img v-bind:src="src" class="drop-shadow-lg mb-4 w-32" alt="shoe2">
        </div>
        <h1 class="text-lg font-bold mb-2 flex items-center">{{ name }}</h1>
        <p class="mt-2 text-lg flex items-center">${{ price }}</p>
    </div>
</template>

<script>
    export default {
        name: "StoreItemAdmin",
        props: ['name', 'price', 'src'],
    }
    
</script>