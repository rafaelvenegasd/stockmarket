<template>
  <div>
    <Navbar></Navbar>
    <div class="d-flex">
      <Content></Content>
      <Aside></Aside>
    </div>
    <Details></Details>
    <Footer></Footer>
  </div>
  

</template>

<script>
import Navbar from '../components/navbar.vue'
import Details from '../components/details.vue'
import Aside from '../components/aside.vue'
import Content from '../components/content.vue'
import Footer from '../components/footer.vue'


export default {
  name: "App",
  components:{
    Navbar,
    Details,
    Aside,
    Content, 
    Footer
  }
}
</script>

<style>

</style>