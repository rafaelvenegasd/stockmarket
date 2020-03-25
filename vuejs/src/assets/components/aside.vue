<template>
  <div class="aside">
    <div class="list-group mb-4" id="list-tab" role="tablist">
      <li class="list-group-item active"><b>Top 5</b></li>
      <div  v-for="item in top5" :key="item.id">
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" :v-on:click="getDetails(1)" role="tab" aria-controls="profile">{{item.item_name}}</a>
      </div>
    </div>
    <ul class="container list-group">
        <li class="list-group-item active bg-blue"><b>Following</b></li>
        <div v-for="item in favoritesItems" :key="item.id">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {{ item }}
            <span class="badge badge-primary badge-pill">⭐</span> 
          </li>
        </div>
    </ul>
  </div>
</template>

<script>
import EventBus from '../js/event-bus'
import {getContentFromApi} from '../js/axios-service'
export default {
    name: "Aside",
    data() {
      return {
        favoritesItems: [], top5: []
      };
    },
    mounted() { 
      this.favoritesItems = localStorage.getItem("favorites");
      this.favoritesItems = JSON.parse(this.favoritesItems);
      EventBus.$on('favorites', data =>{
         this.favoritesItems = data
         this.favoritesItems = JSON.parse(this.favoritesItems);
      });
      getContentFromApi((err, data) =>{
        if(err){
          console.error(err)
        } 
        else{
          for (let i = 0; i < 5; i++) {
            const element = data[i];
            this.top5.push(element)
          }
        }
      });
    }, 
    methods:{
      getDetails(id)
      {
        EventBus.$emit('searching', id);
      }
    }
}
</script>