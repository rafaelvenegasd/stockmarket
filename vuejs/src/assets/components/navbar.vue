<template>
  <nav class="navbar bg-light">
      <a class="navbar-brand">StockMarket</a>
      <div>
        <input v-model="message" type="text" name="search" id="search" placeholder="Item">
        <button class="btn btn-primary" v-on:click="search('2')" >Search</button> 
      </div>
  </nav>
</template>

<script>
import EventBus from '../js/event-bus'
import {getDetails} from '../js/axios-service'
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
          EventBus.$emit('searching', this.message, id);
          getDetails(id)
        }
    }
}
</script>

