<template>
    <div class="h-20 bg-[#ffa405] rounded-2xl  px-4 py-3 flex justify-between m-4">
        <div class="flex">
            <div class="mr-4">
                <h2><span class="font-bold">PHEARUM</span> <span>COLLECTION</span></h2>
                <div class="h-1/2 flex mt-1">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/39/39196.png" alt="">
                    <img class="h-full mx-3" src="https://cdn-icons-png.flaticon.com/512/4043/4043916.png" alt="">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/39/39223.png" alt="">
                </div>
            </div>
            <div class="flex justify-between">
                <button class="hover:bg-black hover:text-white hover:duration-300 w-24 mx-1 h-10 bg-white rounded-2xl text-sm shadow-lg flex justify-center items-center font-bold">Category 1</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-24 mx-1 h-10 bg-white rounded-2xl text-sm shadow-lg flex justify-center items-center font-bold">Category 2</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-24 mx-1 h-10 bg-white rounded-2xl text-sm shadow-lg flex justify-center items-center font-bold">Category 3</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-24 mx-1 h-10 bg-white rounded-2xl text-sm shadow-lg flex justify-center items-center font-bold">Category 4</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-24 mx-1 h-10 bg-white rounded-2xl text-sm shadow-lg flex justify-center items-center font-bold">Category 5</button>
            </div>
        </div>
        <div class="w-fit">
            <h1 class="text-xl font-light">Stay in Touch! Join our Newsletter</h1>
            <div>
                <input type="text" placeholder="Enter email"  class="w-[72%] rounded-xl shadow-lg p-1">
                <button class="font-bold ml-2">Subsribe</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>