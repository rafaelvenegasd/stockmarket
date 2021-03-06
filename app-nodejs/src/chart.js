let myChart = document.getElementById('myChart').getContext('2d');
var content = document.getElementById('content');

// GET REQUEST
function getTodos() {
    axios
      .get("http://localhost:3000/companies")
      .then(res => res.data.forEach(function(todo,i){
            content.innerHTML += `<h1>${todo.name}</h1>` 
      }))
      .catch(err => console.error(err))      
};

getTodos();

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
            label:['Population'],
            data:[
                317594,
                181045,
                153060,
                206519,
                105162,
                95072
            ],
            //backgroundColor:'green',
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Largest Cities in Massachusetts',
            fontSize:22
        },
        legend:{
            display:true,
            position:'right',
            labels:{
                fontColor:'#000'
            }
        },
        layout:{
            padding:{
                top:0,
                right:0,
                bottom:0,
                left:50
            }
        },
        tooltips:{
            enabled:true
        }
    }
});
