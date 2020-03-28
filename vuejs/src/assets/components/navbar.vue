<template>
  <nav class=" navbar navbar-dark bg-blue">
      <a class="navbar-brand" href="/">StockMarket</a>
      <div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" v-model="message" name="search" id="search" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="search()">Go</button> 
        </form>
      </div>
  </nav>
</template>

<script>
import EventBus from '../js/event-bus'
export default {
    name: "Navbar",
    data() {
      return {
          message: '', 
          id: ''
      }
    },
    methods:{
        search(){
          EventBus.$emit('searching', this.message);
        }
    }
}
</script>

