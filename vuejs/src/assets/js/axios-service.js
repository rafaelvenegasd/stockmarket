
const axios = require('axios');

export const items = [];

export function getDetails(id){
    axios.get(`http://localhost:3000/items/` + id)
    .then(function (res) {
        var txt = new Text();
        txt.name = res.data.item_name;
        txt.price = res.data.price_current;
        items.push(txt.name, txt.price);
        document.getElementById('details').innerHTML += `<li>` + items + `</li>` ;
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

export function getContentFromApi(cb){
  console.log("Getting Content From API...");
  axios.get(`http://localhost:3000/items/`)
  .then(function (res) {
      // var txt = new Text();
      // txt.name = res.data.item_name;
      // txt.price = res.data.price_current;
      // items.push(txt.name, txt.price);
      cb(null, res.data);
  })
  .catch(function (error) {
      // handle error
      console.log(error);
      cb(error, null);
  })
}

