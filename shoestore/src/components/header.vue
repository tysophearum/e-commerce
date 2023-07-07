<template>
    <div class="h-fit p-2 bg-white">
        <div class="h-12 bg-[#ffa405] rounded-lg flex items-center justify-between px-4 header">
            <RouterLink class="h-full flex items-center justify-center" to="/">
                <img src="./icons/logo.png" alt="logo.png" class="h-[80%]">
            </RouterLink>
            <div class="flex w-1/2 h-full items-center justify-between">
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Nike</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Adidas</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Puma</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">Converse</button>
                <button class="hover:bg-black hover:text-white hover:duration-300 w-28 h-[75%] bg-white rounded-xl shadow-lg flex justify-center items-center text-sm font-bold">About Us</button>
            </div>
            <div v-if="cart" class=" fixed top-12 flex justify-end w-full pr-[10%]">
                <div class=" flex flex-col items-end">
                    <div class=" mr-10 shadow-xl" style="border-color: transparent transparent rgb(243 244 246 / var(--tw-bg-opacity)) transparent; border-style: solid; border-width: 0px 15px 15px 15px; width: 0px;"></div>
                    <div class=" h-fit shadow-xl w-96 bg-gray-100 rounded-xl p-2">
                        <h1 class=" text-lg font-bold">Item Added to Cart</h1>
                        <div class="w-full h-[3px] bg-black"></div>
                        <p class=" text-lg">Nike Flyease Go</p>
                        <p class=" text-lg">Qty: 1 | $200</p>
                        <div class=" flex justify-between">
                            <button class=" w-[46%] py-1 rounded-lg border-4 border-[#ffa405] font-bold">View Cart</button>
                            <RouterLink to="/cart" class="w-[46%]">
                                <button class=" w-full py-1 rounded-lg border-4 border-[#ffa405] bg-[#ffa405] font-bold">Checkout</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-full w-[12%] items-center justify-between">
                <button @click="showCart()" class="h-[57%]">
                    <img class="h-full" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="">
                </button>
                <img class="h-[57%]" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="">
                <img class="h-[57%]" src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import CartPopup from './CartPopup.vue';
    export default {
        data(){
            return {
                cart: false,
            }
        },
        name: "Header",
        methods: {
            showCart() {
                this.cart = !this.cart
                console.log(this.cart);
            }
        },
        components: {
            CartPopup
        }
    }
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>