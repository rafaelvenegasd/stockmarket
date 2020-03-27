<template>
  <div id="app">
        <div id="content">
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: "Chart", 
    data() {
        return {
            values: [1, 20, 5, 10, 15, 3], 
            label: 'Item'
        };
    },
    mounted() {
        const chart = this.$refs.chart;
        const ctx = chart.getContext("2d");
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.values,
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
    }
}
</script>
