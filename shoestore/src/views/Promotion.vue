<template>
    <Header class=" sticky top-0 z-10"/>
    <div class=" bg-[url('../img/landing.webp')] bg-no-repeat bg-cover rounded-xl h-[50vh] mx-4 flex">
        <div class="w-1/2 h-full flex flex-col items-center justify-center">
            <h1 class=" text-5xl font-bold text-white my-9 bg-[#0000008b] p-3">NIKE AIR JORDEN</h1>
            <button class=" w-96 bg-[#ffa405] text-white text-xl font-bold p-2 rounded-lg shadow-2xl shadow-grey-900 my-9">Add to Cart</button>
        </div>
        <div class=" flex flex-col items-center justify-center">
            <h1 class=" text-3xl text-white bg-[#0000008b] p-3 my-9">Failure makes me work even harder.</h1>
            <h1 class=" text-3xl text-white font-bold bg-[#0000008b] p-3 my-9">$249.99</h1>
        </div>
    </div>
    <PromotionItem name="Air Jordan 1 Retro High" price="239" src="https://static.nike.com/a/images/t_default/a229b012-c62d-4f89-9ed2-3fca4bbe274a/air-jordan-1-retro-high-og-shoes-DRDX5L.png" />
    <PromotionItem name="Air Jordan 1 Low FlyEase" price="239" src="https://static.nike.com/a/images/t_default/9259e44d-8e6a-4253-aefa-7db9720ea2b4/air-jordan-1-low-flyease-mens-easy-on-off-shoes-D3wW7l.png" />
    <PromotionItem name="Air Jordan 1" price="239" src="https://static.nike.com/a/images/t_default/294f361b-f265-49c4-83fb-215f63acf90e/air-jordan-1-mid-shoes-86f1ZW.png" />
    <Footer />
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import PromotionItem from '../components/PromotionItem.vue';
export default {
    name: 'PromotionPage',
    components: {
        Header,
        Footer,
        PromotionItem
    }
}
</script>