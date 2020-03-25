<template>
  <div class="aside">
      <div class="container">
        <p><b>Top 5</b></p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
    </div>
    <div class="container">
        <p><b>Seguimiento</b></p>
        <div v-for="item in favoritesItems" :key="item.id">
          <ul>
            <li>{{ item }}</li>
          </ul>
          
        </div>
    </div>

  </div>
</template>

<script>
import EventBus from '../js/event-bus'
export default {
    name: "Aside",
    data() {
      return {
        favoritesItems: []
      };
    },
    mounted() { 
      EventBus.$on('favorites', data =>{
         this.favoritesItems = data
         this.favoritesItems = JSON.parse(this.favoritesItems);
      });
      // this.favoritesItems = localStorage.getItem("favorites");
      // this.favoritesItems = JSON.parse(this.favoritesItems);
    }
}
</script>

<style>

</style>