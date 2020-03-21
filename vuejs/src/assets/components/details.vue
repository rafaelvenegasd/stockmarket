<template>

</template>

<script>
import EventBus from '../js/event-bus'

export default {
    name: "Details",
    mounted () {
        EventBus.$on('searching', (message) =>{
            console.log(message); 
        });
    }
}
</script>

<style>

</style>