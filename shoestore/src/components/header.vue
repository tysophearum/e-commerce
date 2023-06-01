<template>
    <div class="h-fit p-4">
        <div class="h-20 bg-[#ffa405] rounded-2xl flex items-center justify-between px-4">
            <img src="./icons/logo.png" alt="logo.png" class="h-16">
            <div class="flex w-1/2 justify-between">
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-12 bg-white rounded-2xl shadow-lg flex justify-center items-center font-bold">Category 1</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-12 bg-white rounded-2xl shadow-lg flex justify-center items-center font-bold">Category 2</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-12 bg-white rounded-2xl shadow-lg flex justify-center items-center font-bold">Category 3</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-12 bg-white rounded-2xl shadow-lg flex justify-center items-center font-bold">Category 4</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-12 bg-white rounded-2xl shadow-lg flex justify-center items-center font-bold">About Us</button>
            </div>
            <div class="flex h-full w-[12%] items-center justify-between">
                <img class="h-9" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="">
                <img class="h-9" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                <img class="h-9" src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Header"
    }
</script>