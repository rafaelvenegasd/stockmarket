<template>
    <div id="details" class="d-flex details" >
        <div v-for="item in items" :key="item.id">
            <span><b>{{ item.item_name }}</b></span>
            <figure>
                <img :src="item.url_logo" alt="" class="logo">
            </figure>
            <p>{{ item.item_description }}</p>
            <button class="btn btn-outline-light" v-on:click="addFavorites(item.item_name)">⭐</button>
        </div>
    </div>
</template>

<script>
import EventBus from '../js/event-bus'
import {getDetails} from '../js/axios-service'
export default {
    name: "Details", 
    data() {
        return {
            items: [], 
            favorites: [], 
            position: null, 
        };
    },
    mounted() {
        EventBus.$on('searching', id =>{
            getDetails(id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    this.items = [data];
                }
            })
        })
    }, 
    methods:{
        addFavorites(item){
            this.favorites = localStorage.getItem("favorites") || "[]";
            this.favorites = JSON.parse(this.favorites);
            this.position = this.favorites.findIndex(function(e) {
                return e == item; 
            });          
            if (this.position != -1) { this.favorites.splice(this.position, 1); // if the element exist, remove the element
            } else { this.favorites.push(item); } // else add to Favorites
            localStorage.setItem("favorites", JSON.stringify(this.favorites));
            this.favorites = localStorage.getItem("favorites")
            EventBus.$emit('favorites', this.favorites);
        }
    }         
}
</script>