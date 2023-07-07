<template>
    <Header />
    <div class="breadcrumb flex h-5 mx-4">
        <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="">
        <span class=" mx-3"> > </span> <b>Customer Information</b>
    </div>
    <div class=" w-[100vw] m-4">
        <div class=" w-[55%]">
            <div class="w-full h-1 bg-black"></div>
            <h1 class=" font-bold text-xl my-2">Customer Information</h1>
            <input class=" w-full" type="text" name="" id="">
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue'
export default {
    name: "CustomerInformation",
    components: {
        Header,
        Footer
    }
}
</script>