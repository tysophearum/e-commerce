<template>
    <Header class=" sticky top-0"/>
    <div class="breadcrumb flex h-5 mx-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png" alt="">
        <span class=" mx-3"> > </span> <span>Nike</span> <span class=" mx-3"> > </span> <b> Nike flyease</b>
    </div>
    <div class="productInfo flex justify-between">
        <div class="bg-[#ffa405] rounded-xl m-4 h-[56vh] w-[48%] flex items-center justify-center shadow-2xl shadow-grey-900">
            <img src="../img/shoe3.png" alt="">
        </div>
        <div class="info w-[48%] p-4">
            <h1 class=" text-5xl font-bold">NIKE GO FLYEASE</h1>
            <h1 class=" text-5xl font-bold my-4">$200.00</h1>
            <div class="w-full h-1 bg-black"></div>
            <h1 class="text-xl font-bold my-1">Size</h1>
            <div class="flex justify-between ">
                <button @click="selectSize('men')" :class="{'bg-black text-white' : select === 'men'}" class=" w-[48%] h-10 rounded-lg text-xl font-bold border-[3px] border-black">MEN</button>
                <button @click="selectSize('women')" :class="{'bg-black text-white' : select === 'women'}" class=" w-[48%] h-10 rounded-lg text-xl font-bold border-[3px] border-black">WOMEN</button>
            </div>
            <select class="border-[3px] border-black rounded-lg w-full p-2 mt-2" name="size" id="">
                <option value="">CHOOSE SIZE</option>
                <option value="">35</option>
                <option value="">36</option>
                <option value="">37</option>
                <option value="">38</option>
                <option value="">39</option>
                <option value="">40</option>
                <option value="">41</option>
            </select>
            <div class="w-full h-1 bg-black my-2"></div>
            <h1 class="text-xl font-bold my-1">Quantity</h1>
            <div class="">
                <button @click="minus" class=" text-2xl">-</button>
                <span class="mx-10 text-xl">{{ quantity }}</span>
                <button @click="plus" class=" text-2xl">+</button>
            </div>
            <div class="w-full h-1 bg-black my-2"></div>
            <button class=" w-full bg-[#ffa405] text-xl font-bold p-2 rounded-lg shadow-2xl shadow-grey-900">Add to Cart</button>
        </div>
    </div>
    <div class=" flex">
        <div class="view w-[15vw] h-26 mx-4 border-4 rounded-lg border-[#ffa405]">
            <img class=" overflow-hidden" src="../img/shoe3_2.png" alt="">
        </div>
        <div class="view w-[15vw] h-26 mx-4 border-4 rounded-lg border-[#ffa405]">
            <img class=" overflow-hidden" src="../img/shoe3_3.png" alt="">
        </div>
    </div>
    <div class=" p-4">
        <div class="w-full h-1 bg-black my-2"></div>
        <h1 class="text-xl font-bold my-1">Related products</h1>
        <div class="grid grid-cols-5 gap-6 p-4">
            <StoreItem name="Nike Impact 4" price="200" src="https://static.nike.com/a/images/t_default/f3b760d7-2c28-4801-bec6-12c32d7137b1/impact-4-basketball-shoes-bwLwnb.png" />
            <StoreItem name="Nike SA" price="200" src="https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw9a3fac75/nk/2ad/e/3/0/d/4/2ade30d4_d24d_4955_b49e_b5d37b49e03d.png?sw=520&sh=520&sm=fit" />
            <StoreItem name="Nike Air Zoom Flight 95" price="200" src="https://static.nike.com/a/images/t_default/850885fb-624d-42e8-b403-a72f282400ff/air-zoom-flight-95-shoes-058DbL.png" />
            <StoreItem name="Nike Elevate 3" price="200" src="https://static.nike.com/a/images/t_default/6a773a8c-1dcb-4559-9e65-40d2b9917c2b/elevate-3-basketball-shoes-QT43Gj.png" />
            <StoreItem name="Giannis Immortality" price="200" src="https://static.nike.com/a/images/t_default/58fa611a-337e-4716-9106-144ebc168cc5/giannis-immortality-basketball-shoes-p9QlJF.png" />
        </div>
    </div>
    <Footer />
</template>
<script>
import Header from '../components/header.vue'
import StoreItem from '../components/StoreItem.vue'
import Footer from '../components/footer.vue'
export default {
    name: "SelectProduct",
    data() {
        return {
            select: 'men',
            quantity: 1
        };
    },
    methods: {
        selectSize(gender) {
            this.select = gender
        },
        plus () {
            this.quantity++
        },
        minus() {
            if(this.quantity > 0) {
                this.quantity--
            }
        }
    },
    components: {
        Header,
        StoreItem,
        Footer
    }
}
</script>