<template>
  <div>
    <Navbar></Navbar>
    <div class="d-flex mt-2 mb-2">
      <div class="mr-4 mt-4 container">
        <Content></Content>
        <div class="d-flex mt-4 content-box">
          <Chart class="chart"></Chart>
          <Details class="details"></Details>
        </div>
      </div>
      <Aside></Aside>
    </div>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Details from '../components/details.vue'
import Aside from '../components/aside.vue'
import Content from '../components/content.vue'
import Chart from '../components/chartjs.vue'
import Footer from '../components/footer.vue'

export default {
  name: "App",
  components:{
    Navbar,
    Details,
    Aside,
    Content, 
    Chart,
    Footer
  }
}
</script>