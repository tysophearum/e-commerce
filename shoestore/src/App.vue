<script setup>

</script>

<template>
  <Header></Header>
  <HomeContent></HomeContent>
  <Footer></Footer>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import HomeContent from './views/HomeContent.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    HomeContent
  }
}
</script>
