<template>
    <div class=" p-4">
        <div class="item rounded-xl flex justify-between w-full h-80 px-24">
            <div class=" flex flex-col items-center justify-center w-[30%]">
                <h1 class="text-3xl font-bold mb-2 flex items-center">{{ name }}</h1>
                <p class="mt-2 text-3xl flex items-center">${{ price }}</p>
            </div>
            <div class=" flex items-center w-[30%]">
                <img v-bind:src="src" class="drop-shadow-lg" alt="shoe2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PromotionItem",
    props: ['name', 'price', 'src'],
}
</script>

<style scoped>
.item{
    background-color: #FFA405;
opacity: 0.8;
background-image: radial-gradient(circle at center center, #ffffff, #FFA405), repeating-radial-gradient(circle at center center, #ffffff, #ffffff, 4px, transparent 8px, transparent 4px);
background-blend-mode: multiply;
}
</style>