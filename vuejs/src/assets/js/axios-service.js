
const axios = require('axios');

let items = [];

export function getDetails(id){
    axios.get(`http://localhost:3000/items/` + id)
    .then(function (res) {
        var txt = new Text();
        txt.name = res.data.item_name;
        txt.price = res.data.price_current;
        items.push(txt.name, txt.price);

        document.getElementById('details').innerHTML = items;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

// export function getDetails(id){
//     console.log("Getting Content From API...");        
//     axios
//     .get(
//         `http://localhost:3000/items/` + id
//     )
//     .then(res => {
//         this.items = [...this.items, ...res.data];
//         res.data.forEach(item => {
//             var txt = new Text();
//             txt.name = item.item_name;
//             txt.price = item.price_current;
//             txt.onload = () => {
//             this.load.push(txt.name, txt.price);
//             };
//         });
//     })
//     .catch(err => console.log(err));
//     return items;
// }

export function getContentFromApi() {
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
      return items;
}

