<script setup>

</script>

<template>
  <Header></Header>
  <HomeContent></HomeContent>
  <Footer></Footer>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import HomeContent from './HomeContent.vue';

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    HomeContent
  }
}
</script>
