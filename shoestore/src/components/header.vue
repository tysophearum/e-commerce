<template>
    <div class="h-fit p-2">
        <div class="h-12 bg-[#ffa405] rounded-lg flex items-center justify-between px-4">
            <img src="./icons/logo.png" alt="logo.png" class="h-[80%]">
            <div class="flex w-1/2 h-full items-center justify-between">
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Category 1</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Category 2</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Category 3</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Category 4</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">About Us</button>
            </div>
            <div class="flex h-full w-[12%] items-center justify-between">
                <img class="h-[57%]" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="">
                <img class="h-[57%]" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                <img class="h-[57%]" src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Header"
    }
</script>