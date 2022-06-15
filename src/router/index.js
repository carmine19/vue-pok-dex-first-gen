import Vue from 'vue'

//Qui importo il componente che ho creato
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonView from '../views/Pokemon/index.vue'

Vue.use(VueRouter)


//qui definisco le rotte dei miei componenti
const routes = [
  { path: '/', name: 'home', component: HomeView},

  { path: '/pokemon/:id', component: PokemonView, name: 'pokemon-view' },
]


const router = new VueRouter({
  routes
})

export default router
