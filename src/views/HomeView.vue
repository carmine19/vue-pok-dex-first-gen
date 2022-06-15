<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="home">
                    <div class="main-box">
                        <div class="search">
                            <input v-model.trim="search" placeholder="Search..." type="search">
                        </div>
                        <div class="pokemon-list scrollbar-hidden" v-if="this.loader">
                            <ul>
                                <li v-for="(ele, index) in filteredPokemon" :key="index">
                                    <router-link :to="{ name: 'pokemon-view', params: { id: ele.url.split('/')[6] }}">
                                        <div class="pokemon">
                                            {{ capitalizeFirstLetter(ele.name) }} <img :alt="ele.name"
                                                                :src=" imageUrl + ele.url.split(/[\W]+/)[6] + '.png'"
                                                                height="96" width="96">
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import axios from "axios";

export default {
    name: 'HomeView',

    data() {
        return {
            imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
            search: '',
            filteredPokemons: [],
            loader: false,
            pokemon: [
                {
                    name: '',
                    url: ''
                }
            ],


        }
    },

    methods: {
        getAllPokemon() {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(response => {
                    this.pokemon = response.data.results;
                    console.log(this.pokemon);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        //capitalize only the first letter of the string.
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

    },

    created() {

    },

    computed: {
        filteredPokemon() {
            return this.pokemon.filter((pokemon) => {
                return pokemon.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
            })
        }
    },

    mounted() {
        this.getAllPokemon();
        this.loader = true;
    }


}
</script>

<style lang="scss" scoped>

.home {

    .main-box {
        background-image: url("../../src/assets/pk.jpeg");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 700px;

        .pokemon-list {
            overflow: scroll;
            height: 300px;
            margin-top: 125px;
            z-index: -1;
        }
    }
}



/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 200px) and (max-width: 767px) {

  .home {

    .main-box {

        .pokemon-list {
            height: 268px;
            margin-top: 155px !important;
        }
    }
}

}

</style>
