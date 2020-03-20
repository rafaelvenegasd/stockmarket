<template>
  <nav class="navbar bg-light">
      <a class="navbar-brand">StockMarket</a>
      <div>
        <input v-model="message" type="text" name="search" id="search" placeholder="Item">
        <button class="btn btn-primary" type="button" v-on:click="search()">Search</button> 
      </div>
  </nav>
</template>

<script>
import EventBus from '../js/event-bus'
export default {
    name: "navbar",
    data() {
      return {
          message: ''
      }
    },
    // here i am sending the data
    methods:{
        search(){
          EventBus.$emit('searching', this.message);
        }
    }
}
</script>

