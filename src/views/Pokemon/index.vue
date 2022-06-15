<template>
    <div>
        <div>
            {{pokemon.name }} {{pokemon.height}} {{pokemon.stats[0].base_stat}}  {{pokemon.stats[1].base_stat}}
            {{pokemon.stats[2].base_stat}} {{pokemon.stats[3].base_stat}} {{pokemon.stats[4].base_stat}} {{pokemon.stats[5].base_stat}}



            <hr>

            <ul>
                <li  v-for="(ele, index) in pokemon.types">
                    {{ele.type.name}}
                </li>
            </ul>

            <ul>
                <li  v-for="(ele, index) in pokemon.stats">
                    {{ele.base_stat}}
                </li>
            </ul>

            <div class="ability"
                 v-for="(value, index) in pokemon.abilities"
                 :key="'value'+index">
                {{ value.ability.name }}
            </div>
        </div>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <img :src="pokemon.sprites.front_shiny" :alt="pokemon.name">


    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "index",

    data() {
        return {
            pokemon: {
                name: "",
                id: 0,
                height: 0,
                sprites: {
                    front_default: "",
                    front_shiny: "",
                },
                stats: [
                    {
                        base_stat: 0,
                        stat: {
                            name: ""
                        }
                    },
                    {
                        base_stat: 0,
                        stat: {
                            name: ""
                        }
                    },
                    {
                        base_stat: 0,
                        stat: {
                            name: ""
                        }
                    },
                    {
                        base_stat: 0,
                        stat: {
                            name: ""
                        }
                    },
                    {
                        base_stat: 0,
                        stat: {
                            name: ""
                        }
                    },
                    {
                        base_stat: 0,
                        stat: {
                            name: ""
                        }
                    },

                ],
                types: [
                    {
                        type: {
                            name: ""
                        },
                    },
                    {
                        type: {
                            name: ""
                        },
                    }
                ]
            },
            pokemon_id: null,
        }
    },

    methods: {
        getPokemon(id) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(response => {
                    this.pokemon = response.data;
                    console.log(this.pokemon);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        changeSprite() {

        }
    },

    mounted() {
        this.pokemon_id = this.$route.params.id;
        this.getPokemon(this.pokemon_id);
    }

}
</script>

<style scoped>

</style>
