<template>

</template>

<script>
import EventBus from '../js/event-bus'

export default {
    name: "details",
    // Here i should received
    mounted () {
        EventBus.$on('searching', (message) =>{
            console.log(message); //Este message tien info?
        });
    }
}
</script>

<style>

</style>