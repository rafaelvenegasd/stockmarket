<template>
  <div class="row no-gutters d-flex justify-content-center container content">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Current Price</th>
        </tr>
      </thead>
      <tbody v-for="(item,i) of items" :key="i">
        <tr>
          <td>{{item.item_name}}</td>
          <td>{{item.price_current}}</td>
          <td><button class="btn btn-success">Detail</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "Content",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.getContentFromApi();
  },
  methods: {
    getContentFromApi() {
      console.log("Getting Content From API...");
      axios
        .get(
          `http://localhost:3000/items`
        )
        .then(res => {
          this.items = [...this.items, ...res.data];
          res.data.forEach(item => {
            var txt = new Text();
            txt.name = item.item_name;
            txt.price = item.price_current;
            txt.onload = () => {
              this.load.push(txt.name, txt.price);
            };
          });
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

