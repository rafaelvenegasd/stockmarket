<template>
    <div id="details" class="d-flex" >
        <div v-for="item in items" :key="item.item_id">
            <span><b>{{ item.item_name }}</b></span>
            <figure>
                <img :src="item.item_logo" alt="" class="logo">
            </figure>
            <p>{{ item.item_description }}</p>
            <button class="btn-primary btn-sm" v-on:click="addFavorites(item.item_name)">Add to favorites ⭐</button>
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
            id: '',
            position: null,
        };
    },
    mounted() {
        EventBus.$on('searching', name =>{
            getDetails(name, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    this.items = data;
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
            EventBus.$emit('favorites', JSON.stringify(this.favorites));
        }
    }         
}
</script>