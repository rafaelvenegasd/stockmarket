<template>
  <div>
    <paginate ref="paginator" name = "items" :list = "items" :per = "5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Current Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginated('items')" :key="item.id">
            <td>{{item.item_name}}</td>
            <td>{{item.price_current}}</td>
            <td><button :id=item.id class="btn btn-success btn-sm" v-on:click="getDetails(item.id)" >Detail</button></td>
          </tr>
        </tbody>
      </table>
      </paginate>
      <paginate-links for="items" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
      </paginate-links>
    
  </div>
</template>

<script>
import axios from 'axios'
import EventBus from '../js/event-bus'
import {getContentFromApi} from '../js/axios-service'
export default {
  name: "Content",
  data() {
    return {
      paginate:['items'],
      items: [], id: ''
    };
  },
  mounted() {
    getContentFromApi((err, data) =>{
      if(err){
        console.error(err)
      } 
      else{
        this.items = data;
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

