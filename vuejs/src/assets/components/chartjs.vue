<template>
  <div id="app">
        <div id="content">
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';
import EventBus from '../js/event-bus'
import {getValues} from '../js/axios-service'

export default {
    name: "Chart", 
    data() {
        return {
            values: [], 
            labels: [], 
            label: ''
        };
    },
    mounted() {
        EventBus.$on('chart', id =>{
            getValues(id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    this.values = [];
                    this.labels = [];
                    this.label = data[0].date.year;
                    for (let i = 0; i < data.length; i++) {
                        this.values.push(data[i].price_quantity);
                        this.labels.push(data[i].date.hour)
                    }
                }
                const chart = this.$refs.chart;
                const ctx = chart.getContext("2d");
                if (myChart) {
	                myChart.clear();
                    myChart.destroy();
                }
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: this.labels,
                        datasets: [{
                            label: this.label,
                            data: this.values,
                            backgroundColor: [
                                '#B8A33D'
                            ],
                            borderColor: [
                                '#A89738'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            })
        })
    }
}
</script>
