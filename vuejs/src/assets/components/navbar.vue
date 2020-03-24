<template>
  <nav class="navbar bg-light">
      <a class="navbar-brand">StockMarket</a>
      <div>
        <input v-model="message" type="text" name="search" id="search" placeholder="Item">
        <input v-model="id" type="text" name="search_id" value="5" >
        <button class="btn btn-primary" v-on:click="search()">Search</button> 
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
        search(id){
          EventBus.$emit('searching', this.id);
        }
    }
}
</script>

