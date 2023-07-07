<template>
    <Header />
    <div class=" p-4">
        <div class="bg-gray-200 rounded-xl p-4 w-full flex">
            <div class="w-2/3 pr-4">
                <h1 class=" text-5xl font-bold">Your Cart</h1>
                <div class=" grid grid-cols-4 text-lg font-bold mt-12">
                    <h1 class=" text-center">Image</h1>
                    <h1 class=" text-center">Item</h1>
                    <h1 class=" text-center">Price</h1>
                    <h1 class=" text-center">Quantity</h1>
                </div>
                <div class="w-full h-1 bg-black"></div>
                <div class=" grid grid-cols-4 text-lg my-2">
                    <img class=" rounded-xl h-28 w-full object-cover" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1200x857.jpg" alt="">
                    <h1 class=" flex items-center justify-center">Nike Adapt BB</h1>
                    <h1 class=" flex items-center justify-center">$230.00</h1>
                    <h1 class=" flex items-center justify-center">2</h1>
                </div>
                <div class=" grid grid-cols-4 text-lg my-2">
                    <img class=" rounded-xl h-28 w-full object-cover" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1200x857.jpg" alt="">
                    <h1 class=" flex items-center justify-center">Nike Adapt BB</h1>
                    <h1 class=" flex items-center justify-center">$230.00</h1>
                    <h1 class=" flex items-center justify-center">2</h1>
                </div>
                <div class=" grid grid-cols-4 text-lg my-2">
                    <img class=" rounded-xl h-28 w-full object-cover" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1200x857.jpg" alt="">
                    <h1 class=" flex items-center justify-center">Nike Adapt BB</h1>
                    <h1 class=" flex items-center justify-center">$230.00</h1>
                    <h1 class=" flex items-center justify-center">2</h1>
                </div>
            </div>
            <div class=" bg-white w-1/3 rounded-2xl p-3 h-fit mt-24">
                <h1 class=" text-3xl font-bold text-center mb-9">Summary (1 item)</h1>
                <div class=" flex justify-between my-4 pl-5 text-2xl">
                    <span class=" w-1/3">Subtotal:</span>
                    <span class=" w-1/3 text-center">$200.00</span>
                </div>
                <div class=" flex justify-between my-4 pl-5 text-2xl">
                    <span class=" w-1/3">Shopping:</span>
                    <span class=" w-1/3 text-center">-</span>
                </div>
                <div class=" flex justify-between my-4 pl-5 text-2xl">
                    <span class=" w-1/3">Est. Taxes:</span>
                    <span class=" w-1/3 text-center">-</span>
                </div>
                <div class="w-full h-1 bg-black"></div>
                <div class=" flex justify-between my-4 pl-5 text-2xl font-bold">
                    <span class=" w-1/3">Total:</span>
                    <span class=" w-1/3 text-center">$200.00</span>
                </div>
                <button class=" w-full py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] text-2xl font-bold">Checkout</button>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue'
export default {
    name: "Cart",
    components: {
        Header,
        Footer
    }
}
</script>